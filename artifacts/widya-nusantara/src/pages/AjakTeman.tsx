import { Link } from "wouter";
import { ChevronRight, Gift, Users, DollarSign, AlertCircle, Share2, UserPlus, CreditCard, Banknote, Phone } from "lucide-react";
import { BatikDivider, BatikCornerDecor, BatikFlower } from "../components/BatikOrnament";

const steps = [
  {
    step: "01",
    icon: <Share2 className="w-6 h-6" />,
    title: "Bagikan Informasi",
    desc: "Sebarkan info Widya Nusantara Academy kepada teman-temanmu yang masih kelas 12 atau gap year melalui WhatsApp, Instagram, atau media sosial lainnya.",
    color: "bg-[#1e3a5f]",
  },
  {
    step: "02",
    icon: <UserPlus className="w-6 h-6" />,
    title: "Ajak Teman Mendaftar",
    desc: "Pastikan temanmu mendaftar di Widya Nusantara Academy. Mereka bisa mendaftar melalui website www.widyautbk.site atau menghubungi kami langsung.",
    color: "bg-[#b8860b]",
  },
  {
    step: "03",
    icon: <CreditCard className="w-6 h-6" />,
    title: "Teman Lakukan Pembayaran",
    desc: "Temanmu melakukan pembayaran sebesar Rp160.550 (Rp160.000 + kode unik 550) ke rekening yang tertera. Pembayaran harus sudah terkonfirmasi.",
    color: "bg-[#065f46]",
  },
  {
    step: "04",
    icon: <Banknote className="w-6 h-6" />,
    title: "Dapatkan Hadiahmu!",
    desc: "Setelah pembayaran temanmu terkonfirmasi, kamu langsung mendapatkan hadiah Rp10.000 tunai yang akan segera dikirimkan kepada kamu!",
    color: "bg-[#5b21b6]",
  },
];

const syarat = [
  "Hadiah akan diberikan jika kamu berhasil mengajak 1 orang mendaftar di Bimbel Widya Nusantara.",
  "Tanpa batasan jumlah! Makin banyak teman yang kamu ajak, makin banyak hadiah yang kamu dapatkan!",
  "Pastikan bahwa calon murid sudah melakukan pembayaran penuh.",
  "Segala pelanggaran yang terjadi akan ditindaklanjuti oleh pihak berwajib.",
];

const faqs = [
  {
    q: "Berapa hadiah yang saya dapatkan per referral?",
    a: "Kamu mendapatkan Rp10.000 tunai untuk setiap satu teman yang berhasil mendaftar dan melakukan pembayaran di Widya Nusantara Academy.",
  },
  {
    q: "Apakah ada batas maksimum referral?",
    a: "Tidak ada! Semakin banyak teman yang kamu ajak mendaftar, semakin banyak hadiah yang kamu dapatkan. Ingat kuota total hanya 100 murid.",
  },
  {
    q: "Kapan hadiah akan dikirimkan?",
    a: "Hadiah akan langsung dikirimkan setelah pembayaran temanmu terkonfirmasi oleh tim Widya Nusantara Academy.",
  },
  {
    q: "Bagaimana cara kerja konfirmasi pembayaran teman?",
    a: "Temanmu perlu mengirimkan bukti pembayaran dan menyebutkan nama kamu sebagai referral saat mendaftar. Tim kami akan memverifikasi dan mengirimkan hadiahmu.",
  },
  {
    q: "Apa yang terjadi jika teman saya membatalkan pendaftaran?",
    a: "Hadiah hanya diberikan jika pembayaran sudah terkonfirmasi dan temanmu resmi menjadi murid aktif Widya Nusantara Academy.",
  },
];

export default function AjakTeman() {
  return (
    <div className="min-h-screen" data-testid="page-ajak-teman">

      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ background: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 40%, #7c3aed 70%, #5b21b6 100%)" }}>
        <div className="absolute inset-0 batik-kawung-bg opacity-20 pointer-events-none" />
        <BatikCornerDecor className="absolute top-4 left-4 opacity-30" />
        <div className="absolute top-4 right-4 opacity-30 rotate-90">
          <BatikCornerDecor />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <Gift className="w-4 h-4 text-yellow-300" />
            <span className="text-yellow-200 text-sm font-medium">Program Referral Eksklusif</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Ajak Teman, Dapat Cuan!
          </h1>
          <BatikDivider color="#ffd700" />
          <p className="text-purple-200 text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Yuk ikuti program spesial dari kami! Kamu berkesempatan untuk mendapatkan hadiah eksklusif Rp10.000 tunai yang akan langsung dikirimkan kepadamu untuk setiap teman yang berhasil mendaftar.
          </p>
        </div>

        <div className="text-white mt-8">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 20 C360 40 720 0 1080 20 C1260 30 1350 10 1440 20 L1440 40 L0 40 Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* ─── REWARD HIGHLIGHT ─── */}
      <section className="py-16 bg-white" data-testid="section-reward">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-[#f5f7fa] rounded-2xl border border-gray-100" data-testid="reward-stat-1">
              <div className="w-14 h-14 bg-[#b8860b]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-7 h-7 text-[#b8860b]" />
              </div>
              <div className="font-serif font-bold text-3xl text-[#0f172a]">Rp10.000</div>
              <p className="text-gray-500 text-sm mt-1">Per 1 Referral Berhasil</p>
            </div>
            <div className="p-6 bg-[#f5f7fa] rounded-2xl border border-gray-100" data-testid="reward-stat-2">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7 text-purple-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-[#0f172a]">Tanpa Batas</div>
              <p className="text-gray-500 text-sm mt-1">Jumlah Referral yang Bisa Diajukan</p>
            </div>
            <div className="p-6 bg-[#f5f7fa] rounded-2xl border border-gray-100" data-testid="reward-stat-3">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Banknote className="w-7 h-7 text-green-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-[#0f172a]">Tunai</div>
              <p className="text-gray-500 text-sm mt-1">Langsung Dikirimkan ke Kamu</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f5f7fa 0%, #eef0f5 100%)" }} data-testid="section-cara-kerja">
        <div className="absolute inset-0 batik-parang-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-2">Cara Kerja</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">Bagaimana Caranya?</h2>
            <BatikDivider />
            <p className="text-gray-500 max-w-xl mx-auto text-base mt-4">
              Super mudah! Ikuti 4 langkah sederhana ini dan mulai dapatkan penghasilan tambahan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex gap-5" data-testid={`step-card-${i}`}>
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center text-white`}>
                    {s.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#b8860b] font-bold text-xs">LANGKAH {s.step}</span>
                  </div>
                  <h3 className="font-serif font-bold text-[#0f172a] text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SYARAT & KETENTUAN ─── */}
      <section className="py-20 bg-white" data-testid="section-syarat">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-2">Aturan Program</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">Syarat dan Ketentuan</h2>
            <BatikDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {syarat.map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-[#f5f7fa] rounded-xl border border-[#b8860b]/10" data-testid={`syarat-item-${i}`}>
                <div className="w-8 h-8 bg-[#b8860b] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{s}</p>
              </div>
            ))}
          </div>

          {/* Warning */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-red-700 mb-1">Perhatian Penting</h4>
              <p className="text-red-600 text-sm leading-relaxed">
                Segala bentuk pelanggaran terhadap ketentuan program ini, termasuk pemalsuan data referral atau penipuan, akan ditindaklanjuti secara serius oleh pihak berwajib. Pastikan semua referral yang diajukan adalah nyata dan sah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f5f7fa 0%, #eef0f5 100%)" }} data-testid="section-faq">
        <div className="absolute inset-0 batik-pattern-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-2">Pertanyaan Umum</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">FAQ</h2>
            <BatikDivider />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100" data-testid={`faq-item-${i}`}>
                <h4 className="font-serif font-bold text-[#0f172a] mb-3 flex items-start gap-2">
                  <span className="text-[#b8860b] font-bold text-sm mt-0.5 flex-shrink-0">Q:</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed ml-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%)" }} data-testid="section-ajak-cta">
        <div className="absolute inset-0 batik-kawung-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <BatikFlower size={48} color="#ffd700" className="mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Tunggu Apa Lagi?
          </h2>
          <p className="text-purple-200 text-lg mb-8 leading-relaxed">
            Kapan lagi bisa belajar bareng sahabat di Widya Nusantara Academy sekaligus dapat uang tunai! Yuk, sebarkan info ini dan mulai ajak teman-temanmu sekarang juga!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/6289536039675?text=Halo%2C%20saya%20ingin%20bergabung%20dengan%20program%20Ajak%20Teman%20di%20Widya%20Nusantara%20Academy!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-[#ffd700] hover:bg-[#b8860b] text-[#0f172a] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              data-testid="ajak-wa-cta"
            >
              <Phone className="w-5 h-5" />
              Mulai via WhatsApp
            </a>
            <Link href="/daftar" data-testid="ajak-daftar-cta">
              <span className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                Daftar Dulu <ChevronRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
