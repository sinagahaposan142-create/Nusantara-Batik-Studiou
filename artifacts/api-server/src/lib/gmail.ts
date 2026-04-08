import { google } from "googleapis";

let mailConnectionSettings: any;

async function getMailAccessToken() {
  if (
    mailConnectionSettings &&
    mailConnectionSettings.settings.expires_at &&
    new Date(mailConnectionSettings.settings.expires_at).getTime() > Date.now()
  ) {
    return mailConnectionSettings.settings.access_token;
  }

  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? "repl " + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
      ? "depl " + process.env.WEB_REPL_RENEWAL
      : null;

  if (!xReplitToken) {
    throw new Error("X-Replit-Token not found for repl/depl");
  }

  mailConnectionSettings = await fetch(
    "https://" +
      hostname +
      "/api/v2/connection?include_secrets=true&connector_names=google-mail",
    {
      headers: {
        Accept: "application/json",
        "X-Replit-Token": xReplitToken,
      },
    },
  )
    .then((res) => res.json())
    .then((data) => data.items?.[0]);

  const accessToken =
    mailConnectionSettings?.settings?.access_token ||
    mailConnectionSettings.settings?.oauth?.credentials?.access_token;

  if (!mailConnectionSettings || !accessToken) {
    throw new Error("Gmail not connected");
  }
  return accessToken;
}

export async function getUncachableGmailClient() {
  const accessToken = await getMailAccessToken();
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  return google.gmail({ version: "v1", auth: oauth2Client });
}

export async function sendRegistrationEmail(data: {
  toEmail: string;
  namaLengkap: string;
  asalSekolah: string;
  tanggalLahir: string;
  statusPendidikan: string;
  nomorWhatsApp: string;
  registrationDate: string;
}) {
  const gmail = await getUncachableGmailClient();

  const senderEmail = "widyaakademi@gmail.com";

  const invoiceNumber = `WNA-${Date.now().toString(36).toUpperCase()}`;

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;">

    <div style="background:linear-gradient(135deg,#065f46 0%,#064e3b 40%,#065f46 100%);padding:30px 40px;text-align:center;">
      <img src="https://widyautbk.site/logo.png" alt="Widya Nusantara Academy" style="width:80px;height:80px;border-radius:50%;margin-bottom:12px;border:3px solid #b8860b;" />
      <h1 style="color:#ffffff;font-size:22px;margin:0 0 4px 0;">Widya Nusantara Academy</h1>
      <p style="color:#86efac;font-size:13px;margin:0;letter-spacing:1px;">KONFIRMASI PENDAFTARAN</p>
    </div>

    <div style="padding:30px 40px;">
      <p style="color:#1e293b;font-size:15px;line-height:1.6;">
        Assalamu'alaikum <strong>${data.namaLengkap}</strong>,
      </p>
      <p style="color:#475569;font-size:14px;line-height:1.6;">
        Terima kasih telah mendaftar di <strong>Widya Nusantara Academy</strong>! Pendaftaran kamu telah <strong style="color:#065f46;">berhasil diterima</strong>.
        Tim kami akan segera memproses data kamu.
      </p>

      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:20px;margin:20px 0;">
        <p style="color:#065f46;font-weight:bold;font-size:14px;margin:0 0 8px 0;">✅ Status: Pendaftaran Berhasil</p>
        <p style="color:#047857;font-size:13px;margin:0;">
          Tim Widya Nusantara akan memproses data kamu dan menghubungi via WhatsApp dalam 1-2 hari kerja.
        </p>
      </div>

      <div style="border:2px solid #b8860b;border-radius:12px;overflow:hidden;margin:24px 0;">
        <div style="background:#fefce8;padding:16px 20px;border-bottom:2px solid #b8860b;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <p style="margin:0;font-size:11px;color:#92400e;text-transform:uppercase;letter-spacing:1px;">Invoice Pembayaran</p>
                <p style="margin:4px 0 0 0;font-weight:bold;color:#78350f;font-size:15px;">${invoiceNumber}</p>
              </td>
              <td align="right">
                <p style="margin:0;font-size:11px;color:#92400e;">Tanggal</p>
                <p style="margin:4px 0 0 0;font-weight:bold;color:#78350f;font-size:13px;">${data.registrationDate}</p>
              </td>
            </tr>
          </table>
        </div>

        <div style="padding:20px;">
          <table width="100%" cellpadding="6" cellspacing="0" style="font-size:13px;color:#334155;">
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="color:#64748b;padding:8px 0;">Nama Lengkap</td>
              <td style="font-weight:600;text-align:right;padding:8px 0;">${data.namaLengkap}</td>
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="color:#64748b;padding:8px 0;">Asal Sekolah</td>
              <td style="font-weight:600;text-align:right;padding:8px 0;">${data.asalSekolah}</td>
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="color:#64748b;padding:8px 0;">Tanggal Lahir</td>
              <td style="font-weight:600;text-align:right;padding:8px 0;">${data.tanggalLahir}</td>
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="color:#64748b;padding:8px 0;">Status</td>
              <td style="font-weight:600;text-align:right;padding:8px 0;">${data.statusPendidikan}</td>
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="color:#64748b;padding:8px 0;">No. WhatsApp</td>
              <td style="font-weight:600;text-align:right;padding:8px 0;">${data.nomorWhatsApp}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding:16px 0 8px 0;border-top:2px solid #e2e8f0;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-weight:bold;color:#1e293b;font-size:14px;">Program UTBK 5 Bulan</td>
                    <td align="right" style="font-weight:bold;color:#b8860b;font-size:16px;">Rp 160.000</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:16px 20px;margin:20px 0;">
        <p style="color:#1e40af;font-weight:bold;font-size:13px;margin:0 0 6px 0;">ℹ️ Info Pembayaran</p>
        <p style="color:#1e3a5f;font-size:12px;margin:0;line-height:1.6;">
          Bank: <strong>Neo Bank</strong><br>
          No. Rekening: <strong>5859 4592 5032 5727</strong><br>
          Atas Nama: <strong>Haposan Sinaga</strong><br>
          Tambahkan kode unik <strong>550</strong> → Total: <strong>Rp 160.550</strong>
        </p>
      </div>

      <p style="color:#475569;font-size:13px;line-height:1.6;margin-top:24px;">
        Jika ada pertanyaan, silakan hubungi kami melalui:
      </p>
      <ul style="color:#475569;font-size:13px;line-height:1.8;padding-left:20px;">
        <li>WhatsApp: <a href="https://wa.me/6289536039675" style="color:#b8860b;">0895360396759</a></li>
        <li>Email: <a href="mailto:widyaakademi@gmail.com" style="color:#b8860b;">widyaakademi@gmail.com</a></li>
        <li>Instagram: <a href="https://instagram.com/widyanusantara.academy" style="color:#b8860b;">@widyanusantara.academy</a></li>
      </ul>
    </div>

    <div style="background:#0f172a;padding:20px 40px;text-align:center;">
      <p style="color:#94a3b8;font-size:11px;margin:0 0 4px 0;">© ${new Date().getFullYear()} Widya Nusantara Academy</p>
      <p style="color:#64748b;font-size:10px;margin:0;">Email ini dikirim secara otomatis. Harap tidak membalas email ini.</p>
    </div>

  </div>
</body>
</html>`;

  const subject = `✅ Konfirmasi Pendaftaran - Widya Nusantara Academy (${invoiceNumber})`;

  const rawMessage = [
    `From: Widya Nusantara Academy <${senderEmail}>`,
    `To: ${data.toEmail}`,
    `Subject: =?UTF-8?B?${Buffer.from(subject).toString("base64")}?=`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    `Content-Transfer-Encoding: base64`,
    ``,
    Buffer.from(htmlBody).toString("base64"),
  ].join("\r\n");

  const encodedMessage = Buffer.from(rawMessage)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: encodedMessage,
    },
  });
}
