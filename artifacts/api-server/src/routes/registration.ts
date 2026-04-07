import { Router, type IRouter } from "express";
import multer from "multer";
import { z } from "zod";
import {
  appendRegistration,
  uploadFileToDrive,
} from "../lib/googleSheets";
import { sendRegistrationEmail } from "../lib/gmail";
import { logger } from "../lib/logger";

const router: IRouter = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Hanya file gambar yang diperbolehkan (JPG, PNG, dll)"));
    }
  },
});

const registrationSchema = z.object({
  namaLengkap: z.string().min(2),
  asalSekolah: z.string().min(3),
  tanggalLahir: z.string().min(1),
  statusPendidikan: z.string().min(1),
  nomorWhatsApp: z.string().min(10).max(15),
  usernameInstagram: z.string().min(1),
  gmail: z.string().email(),
});

const statusLabels: Record<string, string> = {
  kelas12: "SMA/sederajat Kelas 12",
  gapyear: "Gap Year 2025-2026",
  semigapyear: "Semi Gap Year 2025-2026",
};

router.post("/registration", upload.single("buktiPembayaran"), async (req, res) => {
  try {
    const parsed = registrationSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        success: false,
        message: "Data pendaftaran tidak valid",
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const data = parsed.data;
    const statusLabel =
      statusLabels[data.statusPendidikan] || data.statusPendidikan;

    let buktiUrl = "";
    if (req.file) {
      try {
        buktiUrl = await uploadFileToDrive(
          req.file.buffer,
          `bukti_${data.namaLengkap.replace(/\s+/g, "_")}_${Date.now()}.${req.file.originalname.split(".").pop()}`,
          req.file.mimetype,
        );
      } catch (uploadErr) {
        logger.error({ err: uploadErr }, "Failed to upload bukti pembayaran to Drive");
        buktiUrl = "Gagal upload - hubungi admin";
      }
    }

    await appendRegistration({
      namaLengkap: data.namaLengkap,
      asalSekolah: data.asalSekolah,
      tanggalLahir: data.tanggalLahir,
      statusPendidikan: statusLabel,
      nomorWhatsApp: data.nomorWhatsApp,
      usernameInstagram: data.usernameInstagram,
      gmail: data.gmail,
      buktiPembayaranUrl: buktiUrl,
    });

    const registrationDate = new Date().toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Jakarta",
    });

    try {
      await sendRegistrationEmail({
        toEmail: data.gmail,
        namaLengkap: data.namaLengkap,
        asalSekolah: data.asalSekolah,
        tanggalLahir: data.tanggalLahir,
        statusPendidikan: statusLabel,
        nomorWhatsApp: data.nomorWhatsApp,
        registrationDate,
      });
    } catch (emailErr) {
      logger.error({ err: emailErr }, "Failed to send confirmation email");
    }

    res.json({
      success: true,
      message: "Pendaftaran berhasil! Email konfirmasi telah dikirim.",
    });
  } catch (err) {
    logger.error({ err }, "Registration failed");
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat memproses pendaftaran. Silakan coba lagi.",
    });
  }
});

export default router;
