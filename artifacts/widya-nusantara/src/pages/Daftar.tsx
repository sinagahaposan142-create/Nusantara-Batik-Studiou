import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Upload, CreditCard, Copy, AlertCircle, Phone, Mail } from "lucide-react";
import { BatikDivider, BatikCornerDecor, BatikFlower } from "../components/BatikOrnament";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  namaLengkap: z.string().min(2, "Nama lengkap minimal 2 karakter"),
  asalSekolah: z.string().min(3, "Asal sekolah harus diisi"),
  tanggalLahir: z.string().min(1, "Tanggal lahir harus diisi"),
  statusPendidikan: z.string().min(1, "Status pendidikan harus dipilih"),
  nomorWhatsApp: z.string().min(10, "Nomor WhatsApp tidak valid").max(15, "Nomor WhatsApp tidak valid"),
  usernameInstagram: z.string().min(1, "Username Instagram harus diisi"),
  gmail: z.string().email("Format email tidak valid"),
});

type FormValues = z.infer<typeof formSchema>;

const statusOptions = [
  { value: "kelas12", label: "SMA/sederajat Kelas 12" },
  { value: "gapyear", label: "Gap Year 2025-2026" },
  { value: "semigapyear", label: "Semi Gap Year 2025-2026" },
];

const benefits = [
  "Kelas Intensif setiap hari selama 5 bulan",
  "Konsultasi PTN & soal-soal UTBK",
  "Kelas tambahan untuk PK dan PM",
  "Kelas tambahan untuk LBE dan LBI",
  "Simulasi Try Out sebanyak 6x",
];

export default function Daftar() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      namaLengkap: "",
      asalSekolah: "",
      tanggalLahir: "",
      statusPendidikan: "",
      nomorWhatsApp: "",
      usernameInstagram: "",
      gmail: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    const waMessage = encodeURIComponent(
      `Halo Tim Widya Nusantara Academy!\n\nSaya ingin mendaftar dengan data berikut:\n\nNama Lengkap: ${data.namaLengkap}\nAsal Sekolah: ${data.asalSekolah}\nTanggal Lahir: ${data.tanggalLahir}\nStatus: ${statusOptions.find(o => o.value === data.statusPendidikan)?.label}\nNo. WA: ${data.nomorWhatsApp}\nInstagram: @${data.usernameInstagram}\nEmail: ${data.gmail}\n\nSaya telah melakukan pembayaran dan akan segera mengirimkan buktinya. Terima kasih!`
    );
    window.open(`https://wa.me/6289536039675?text=${waMessage}`, "_blank");
    setSubmitted(true);
  };

  const copyRekening = () => {
    navigator.clipboard.writeText("5859459250325727");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen" data-testid="page-daftar">

      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ background: "linear-gradient(135deg, #065f46 0%, #064e3b 40%, #065f46 100%)" }}>
        <div className="absolute inset-0 batik-kawung-bg opacity-20 pointer-events-none" />
        <BatikCornerDecor className="absolute top-4 left-4 opacity-30" />
        <div className="absolute top-4 right-4 opacity-30 rotate-90">
          <BatikCornerDecor />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-green-300 font-semibold text-sm uppercase tracking-widest mb-3">Bergabung Sekarang</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Halaman Pendaftaran</h1>
          <BatikDivider color="#b8860b" />
          <p className="text-green-200 text-lg mt-4 leading-relaxed">
            Isi formulir pendaftaran di bawah ini dan segera amankan kursimu di Widya Nusantara Academy!
          </p>
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-full">
            <AlertCircle className="w-4 h-4 text-red-300" />
            <span className="text-red-200 text-sm">Kuota Terbatas — Hanya 100 Murid!</span>
          </div>
        </div>

        <div className="text-white mt-8">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 20 C360 40 720 0 1080 20 C1260 30 1350 10 1440 20 L1440 40 L0 40 Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-16 bg-white" data-testid="section-form">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: Info sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Price card */}
              <div className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] rounded-2xl p-6 text-white relative overflow-hidden" data-testid="price-info-card">
                <div className="absolute inset-0 batik-kawung-bg opacity-15 pointer-events-none" />
                <BatikCornerDecor className="absolute top-3 right-3 opacity-20" />
                <div className="relative">
                  <BatikFlower size={32} color="#b8860b" className="mb-3" />
                  <p className="text-[#94a3b8] text-sm mb-1">Biaya Program</p>
                  <div className="font-serif font-bold text-4xl text-[#ffd700] mb-1">Rp160.000</div>
                  <p className="text-[#b8860b] text-sm">untuk 5 Bulan Penuh</p>
                  <div className="border-t border-white/10 mt-4 pt-4 space-y-2">
                    {benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                        <CheckCircle className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rekening info */}
              <div className="bg-[#f5f7fa] rounded-2xl p-6 border border-[#b8860b]/15" data-testid="payment-info-card">
                <h4 className="font-serif font-bold text-[#0f172a] text-lg mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#b8860b]" />
                  Info Pembayaran
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Bank</p>
                    <p className="font-semibold text-[#0f172a]">Bank Neo / Neo Bank</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Nomor Rekening</p>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-[#0f172a] text-base tracking-wider">5859 4592 5032 5727</p>
                      <button
                        onClick={copyRekening}
                        className="p-1.5 bg-[#b8860b]/10 rounded-lg hover:bg-[#b8860b]/20 transition-colors"
                        data-testid="button-copy-rekening"
                      >
                        <Copy className="w-4 h-4 text-[#b8860b]" />
                      </button>
                    </div>
                    {copied && <p className="text-green-600 text-xs mt-1">Tersalin!</p>}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Atas Nama</p>
                    <p className="font-semibold text-[#0f172a]">Haposan Sinaga</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                    <p className="text-yellow-800 font-semibold text-xs mb-1">Kode Unik Wajib!</p>
                    <p className="text-yellow-700 text-xs leading-relaxed">
                      Tambahkan kode unik <strong>550</strong> di akhir nominal pembayaran:
                    </p>
                    <p className="text-yellow-800 font-bold text-sm mt-1">Contoh: Rp 160<strong>.550</strong></p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h4 className="font-serif font-bold text-[#0f172a] text-base mb-3">Butuh Bantuan?</h4>
                <div className="space-y-3">
                  <a href="https://wa.me/6289536039675" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#b8860b] transition-colors" data-testid="form-contact-wa">
                    <Phone className="w-4 h-4 text-[#b8860b]" />
                    0895360396759
                  </a>
                  <a href="mailto:widyaakademi@gmail.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#b8860b] transition-colors" data-testid="form-contact-email">
                    <Mail className="w-4 h-4 text-[#b8860b]" />
                    widyaakademi@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center" data-testid="success-message">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-green-800 mb-3">Terima Kasih!</h2>
                  <p className="text-green-700 text-base leading-relaxed mb-6">
                    Data kamu sudah kami kirimkan via WhatsApp. Tim Rubela UTBK Indonesia akan segera menindaklanjuti pendaftaranmu. Jangan lupa kirimkan bukti pembayaran!
                  </p>
                  <p className="text-green-600 text-sm">
                    Periksa WhatsApp kamu untuk konfirmasi lebih lanjut dari tim kami.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 border border-green-400 text-green-700 rounded-xl hover:bg-green-100 transition-colors text-sm font-medium"
                    data-testid="button-daftar-lagi"
                  >
                    Daftar Peserta Lain
                  </button>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm" data-testid="registration-form">
                  <h2 className="font-serif text-2xl font-bold text-[#0f172a] mb-2">Formulir Pendaftaran</h2>
                  <p className="text-gray-500 text-sm mb-6">Isi semua data dengan lengkap dan benar. Data yang tidak lengkap tidak dapat diproses.</p>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                      <FormField
                        control={form.control}
                        name="namaLengkap"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#0f172a] font-semibold">Nama Lengkap <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Masukkan nama lengkap kamu" {...field} className="h-11 border-gray-200 focus:border-[#b8860b] focus:ring-[#b8860b]" data-testid="input-nama" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="asalSekolah"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#0f172a] font-semibold">Asal Sekolah <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Contoh: SMA Negeri 1 Jakarta" {...field} className="h-11 border-gray-200 focus:border-[#b8860b]" data-testid="input-sekolah" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="tanggalLahir"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#0f172a] font-semibold">Tanggal Lahir <span className="text-red-500">*</span></FormLabel>
                              <FormControl>
                                <Input type="date" {...field} className="h-11 border-gray-200 focus:border-[#b8860b]" data-testid="input-tanggal-lahir" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="statusPendidikan"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#0f172a] font-semibold">Status Pendidikan <span className="text-red-500">*</span></FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-11 border-gray-200 focus:border-[#b8860b]" data-testid="select-status">
                                    <SelectValue placeholder="Pilih status..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {statusOptions.map((opt) => (
                                    <SelectItem key={opt.value} value={opt.value} data-testid={`option-status-${opt.value}`}>
                                      {opt.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="nomorWhatsApp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#0f172a] font-semibold">Nomor WhatsApp Aktif <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Contoh: 08123456789" {...field} className="h-11 border-gray-200 focus:border-[#b8860b]" data-testid="input-whatsapp" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="usernameInstagram"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#0f172a] font-semibold">Username Instagram <span className="text-red-500">*</span></FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">@</span>
                                  <Input placeholder="usernamekamu" {...field} className="h-11 pl-7 border-gray-200 focus:border-[#b8860b]" data-testid="input-instagram" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="gmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#0f172a] font-semibold">Gmail Aktif <span className="text-red-500">*</span></FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="kamu@gmail.com" {...field} className="h-11 border-gray-200 focus:border-[#b8860b]" data-testid="input-gmail" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Bukti Pembayaran info */}
                      <div className="bg-[#f5f7fa] rounded-xl p-4 border border-[#b8860b]/15">
                        <div className="flex items-center gap-2 mb-2">
                          <Upload className="w-4 h-4 text-[#b8860b]" />
                          <p className="font-semibold text-[#0f172a] text-sm">Upload Bukti Pembayaran</p>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">
                          Setelah mengisi formulir, kamu akan diarahkan ke WhatsApp untuk melengkapi pendaftaran dan mengirimkan bukti pembayaran dalam format JPG/PNG ke tim kami.
                        </p>
                      </div>

                      {/* Terms note */}
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <p className="text-blue-700 text-xs leading-relaxed">
                          Dengan mendaftar, kamu menyetujui syarat dan ketentuan Widya Nusantara Academy. Data kamu akan digunakan untuk keperluan administrasi pendaftaran saja.
                        </p>
                      </div>

                      <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="w-full h-12 bg-[#b8860b] hover:bg-[#8b6508] text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                        data-testid="button-submit-form"
                      >
                        {form.formState.isSubmitting ? "Memproses..." : "Kirim Pendaftaran via WhatsApp"}
                      </Button>

                      <p className="text-center text-gray-400 text-xs">
                        Kamu akan diarahkan ke WhatsApp untuk melengkapi proses pendaftaran
                      </p>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── THANK YOU NOTE ─── */}
      <section className="py-12 bg-[#f5f7fa] text-center" data-testid="section-thankyou">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <p className="text-gray-500 text-sm leading-relaxed">
            Terima kasih, data kamu akan segera ditindaklanjuti oleh <strong className="text-[#0f172a]">Tim Rubela UTBK Indonesia</strong>. Jangan lupa kunjungi website kami di{" "}
            <a href="https://www.widyautbk.site" target="_blank" rel="noopener noreferrer" className="text-[#b8860b] font-semibold hover:underline">
              www.widyautbk.site
            </a>{" "}
            untuk informasi lebih lanjut.
          </p>
        </div>
      </section>

    </div>
  );
}
