import { Link } from "wouter";
import {
  CheckCircle,
  Clock,
  Users,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  Star,
  ChevronRight,
  Phone,
  Calendar,
  Zap,
} from "lucide-react";
import {
  BatikDivider,
  BatikCornerDecor,
  BatikFlower,
} from "../components/BatikOrnament";

const keunggulan = [
  {
    icon: <Award className="w-7 h-7 text-[#b8860b]" />,
    title: "Pengalaman & Reputasi",
    desc: "Didukung oleh Rubela Indonesia yang sudah sangat memahami psikologi dan kebutuhan akademik siswa kelas 12 di Indonesia.",
  },
  {
    icon: <Target className="w-7 h-7 text-[#b8860b]" />,
    title: "Sistem Belajar Adaptif",
    desc: "Menggunakan pendekatan personalisasi kelemahan siswa dilihat sejak awal dan diberikan porsi latihan khusus.",
  },
  {
    icon: <Star className="w-7 h-7 text-[#b8860b]" />,
    title: "Tutor Inspiratif",
    desc: "Pengajar merupakan praktisi pendidikan dan mahasiswa/alumni PTN Top di Indonesia yang telah menaklukkan ketatnya seleksi masuk kampus.",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-[#b8860b]" />,
    title: "Bimbel Berjiwa Sosial",
    desc: "Setiap siswa berbayar otomatis berkontribusi pada program pendidikan Organisasi Rubela Indonesia untuk pelajar di Indonesia.",
  },
];

const programList = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Intensive UTBK Mastery",
    desc: "Kelas reguler dan privat yang membedah tuntas materi TPS, Literasi Bahasa (Indonesia & Inggris), dan Penalaran Matematika.",
    color: "from-[#0f172a] to-[#1e3a5f]",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rubela Tryout System (RTS)",
    desc: "Simulasi UTBK berkala menggunakan sistem CBT yang didesain semirip mungkin dengan format asli, dilengkapi Item Response Theory (IRT).",
    color: "from-[#7c2d12] to-[#b8860b]",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Campus Mentoring & Strategy",
    desc: "Sesi konsultasi 1-on-1 bersama mentor alumni PTN ternama untuk analisis rasio keketatan jurusan dan strategi lolos SNBT.",
    color: "from-[#064e3b] to-[#065f46]",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Bootcamp Karantina",
    desc: "Program belajar intensif menjelang hari-H ujian dengan pendampingan 24 jam, fasilitas penginapan, asupan gizi yang terjaga.",
    color: "from-[#4c1d95] to-[#5b21b6]",
  },
];

const fasilitas = [
  "Kelas Intensif setiap hari selama 5 bulan",
  "Konsultasi PTN & soal-soal UTBK",
  "Kelas tambahan untuk PK dan PM",
  "Kelas tambahan untuk LBE dan LBI",
  "Simulasi Try Out sebanyak 6x",
];

const stats = [
  { num: "100", label: "Kuota Murid", suffix: "" },
  { num: "5", label: "Bulan Program", suffix: " Bulan" },
  { num: "6", label: "Simulasi Try Out", suffix: "x" },
  { num: "Rp160K", label: "Untuk 5 Bulan", suffix: "" },
];

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="page-home">
      {/* ─── HERO SECTION ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #0f2548 70%, #0f172a 100%)",
        }}
      >
        {/* Batik background pattern */}
        <div className="absolute inset-0 batik-kawung-bg opacity-25 pointer-events-none" />
        <div className="absolute inset-0 batik-mega-mendung-bg opacity-30 pointer-events-none" />

        {/* Gold ornament corners */}
        <BatikCornerDecor className="absolute top-4 left-4 w-20 h-20 opacity-40" />
        <div className="absolute top-4 right-4 transform rotate-90 w-20 h-20 opacity-40">
          <BatikCornerDecor />
        </div>
        <div className="absolute bottom-4 left-4 transform -rotate-90 w-20 h-20 opacity-40">
          <BatikCornerDecor />
        </div>
        <div className="absolute bottom-4 right-4 transform rotate-180 w-20 h-20 opacity-40">
          <BatikCornerDecor />
        </div>

        {/* Floating batik flowers */}
        <div className="absolute top-20 right-20 opacity-15 hidden lg:block">
          <BatikFlower size={120} color="#ffd700" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-15 hidden lg:block">
          <BatikFlower size={90} color="#ffd700" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b8860b]/20 border border-[#b8860b]/40 rounded-full mb-6 animate-float-up">
            <span className="w-2 h-2 bg-[#ffd700] rounded-full pulse-gold"></span>
            <span className="text-[#ffd700] text-sm font-medium">
              Bimbel UTBK Eksklusif di bawah Rubela Indonesia
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 animate-float-up-delay-1">
            Membuka Jalan Menuju
            <span
              className="block"
              style={{
                background:
                  "linear-gradient(135deg, #b8860b, #ffd700, #b8860b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kampus Impian
            </span>
          </h1>

          <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto mb-3 leading-relaxed animate-float-up-delay-2">
            Membangun Generasi Nusantara yang Unggul dan Berdaya Saing Tinggi
          </p>

          <BatikDivider color="#b8860b" />

          {/* Price highlight */}
          <div className="inline-block mt-4 mb-8 animate-float-up-delay-2">
            <div className="bg-[#b8860b]/15 border border-[#b8860b]/30 rounded-2xl px-6 py-4 backdrop-blur-sm">
              <p className="text-[#94a3b8] text-sm mb-1">Biaya Bimbel Hanya</p>
              <p className="text-[#ffd700] text-4xl md:text-5xl font-bold font-serif">
                Rp160.000
              </p>
              <p className="text-[#b8860b] text-base font-medium">
                untuk 5 Bulan Penuh
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-white/70 text-sm">Kuota</span>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  TERBATAS
                </span>
                <span className="text-white/70 text-sm">100 Murid</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-float-up-delay-3">
            <Link href="/daftar" data-testid="hero-cta-daftar">
              <span className="flex items-center gap-2 px-8 py-4 bg-[#b8860b] hover:bg-[#8b6508] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                Daftar Sekarang
                <ChevronRight className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/program" data-testid="hero-cta-program">
              <span className="flex items-center gap-2 px-8 py-4 border-2 border-[#b8860b]/50 text-[#ffd700] font-semibold text-lg rounded-xl hover:bg-[#b8860b]/10 transition-all duration-300 cursor-pointer">
                Lihat Program
              </span>
            </Link>
          </div>

          {/* Pendaftaran info */}
          <div className="flex items-center justify-center gap-2 mt-8 text-[#94a3b8] text-sm">
            <Calendar className="w-4 h-4 text-[#b8860b]" />
            <span>
              Masa Pendaftaran:{" "}
              <strong className="text-[#ffd700]">
                6 April – 27 September 2026
              </strong>
            </span>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="text-[#f5f7fa]">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 30 C360 60 720 0 1080 30 C1260 45 1350 15 1440 30 L1440 60 L0 60 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="bg-[#f5f7fa] py-12" data-testid="section-stats">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-[#b8860b]/10 batik-card hover:shadow-md transition-shadow"
                data-testid={`stat-card-${i}`}
              >
                <div className="font-serif font-bold text-3xl text-[#0f172a]">
                  {s.num}
                  <span className="text-[#b8860b]">{s.suffix}</span>
                </div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MENGAPA WIDYA NUSANTARA ─── */}
      <section
        className="py-20 bg-white relative overflow-hidden"
        data-testid="section-keunggulan"
      >
        <div className="absolute inset-0 batik-pattern-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-2">
              Keunggulan Kami
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
              Mengapa Memilih Widya Nusantara Academy?
            </h2>
            <BatikDivider />
            <p className="text-gray-600 max-w-2xl mx-auto text-base mt-4 leading-relaxed">
              Kami bukan sekadar bimbingan belajar biasa. Kami wadah pendukung
              yang mempersiapkan mental, strategi, dan akademik siswa secara
              holistik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keunggulan.map((item, i) => (
              <div
                key={i}
                className="group bg-white border border-[#b8860b]/15 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 batik-card"
                data-testid={`keunggulan-card-${i}`}
              >
                <div className="w-14 h-14 rounded-xl bg-[#b8860b]/10 flex items-center justify-center mb-4 group-hover:bg-[#b8860b]/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-[#0f172a] text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAM UNGGULAN ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #f5f7fa 0%, #eef0f5 100%)",
        }}
        data-testid="section-program-preview"
      >
        <div className="absolute inset-0 batik-parang-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-2">
              Program Kami
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
              Program Unggulan
            </h2>
            <BatikDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programList.map((p, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1 flex"
                data-testid={`program-card-${i}`}
              >
                <div
                  className={`w-2 flex-shrink-0 bg-gradient-to-b ${p.color}`}
                />
                <div className="p-6 flex gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white flex-shrink-0`}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#0f172a] text-lg mb-2">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/program" data-testid="home-link-program-detail">
              <span className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#b8860b] text-[#b8860b] font-semibold rounded-xl hover:bg-[#b8860b] hover:text-white transition-all duration-300 cursor-pointer">
                Lihat Detail Program <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FASILITAS / APA YANG KAMU DAPAT ─── */}
      <section className="py-20 bg-white" data-testid="section-fasilitas">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-2">
                Yang Kamu Dapatkan
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] mb-2">
                Keuntungan Bergabung
              </h2>
              <BatikDivider color="#b8860b" />
              <p className="text-gray-600 text-base leading-relaxed mt-4 mb-6">
                Dengan biaya yang sangat terjangkau, kamu mendapatkan akses ke
                ekosistem belajar yang komprehensif dan mendalam.
              </p>
              <ul className="space-y-3">
                {fasilitas.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    data-testid={`fasilitas-item-${i}`}
                  >
                    <CheckCircle className="w-5 h-5 text-[#b8860b] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Price card */}
            <div className="relative">
              {/* Background decorative element */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-[#b8860b]/5 rounded-3xl border border-[#b8860b]/10" />
              <div className="relative bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] rounded-3xl p-8 text-white overflow-hidden batik-card">
                <div className="absolute inset-0 batik-kawung-bg opacity-20 pointer-events-none" />
                <BatikCornerDecor className="absolute top-3 right-3 opacity-30" />

                <div className="relative">
                  <p className="text-[#94a3b8] text-sm mb-3">Biaya Bimbel</p>
                  <div className="text-[#ffd700] font-serif font-bold text-5xl md:text-6xl mb-1">
                    Rp160.000
                  </div>
                  <p className="text-[#b8860b] text-lg font-medium mb-6">
                    untuk 5 Bulan Program
                  </p>

                  <div className="space-y-2 mb-6">
                    {fasilitas.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-[#94a3b8]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-3 mb-5 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-red-300 text-sm">
                      Kuota Terbatas — Hanya 100 Murid!
                    </span>
                  </div>

                  <Link href="/daftar" data-testid="price-card-cta">
                    <span className="block w-full text-center py-3.5 bg-[#b8860b] hover:bg-[#8b6508] text-white font-bold rounded-xl transition-colors cursor-pointer text-base">
                      Amankan Kursimu Sekarang
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NILAI UTAMA ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1a2a5e 100%)",
        }}
        data-testid="section-nilai"
      >
        <div className="absolute inset-0 batik-mega-mendung-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-2">
            Core Values
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
            Nilai Utama Kami
          </h2>
          <BatikDivider color="#b8860b" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Keunggulan Akademik",
                icon: "🏆",
                desc: "Standar pengajaran tinggi dengan materi yang tajam dan relevan sesuai perkembangan sistem seleksi terbaru.",
                tag: "Excellence",
              },
              {
                title: "Integritas",
                icon: "🤝",
                desc: "Mengedepankan proses belajar yang jujur, disiplin, dan bertanggung jawab demi hasil yang nyata dan terukur.",
                tag: "Integrity",
              },
              {
                title: "Dampak Sosial",
                icon: "🌱",
                desc: "Setiap siswa yang mendaftar turut berkontribusi pada program sosial pendidikan Rubela Indonesia untuk pelajar kurang mampu.",
                tag: "Impact",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 text-left hover:bg-white/10 transition-colors"
                data-testid={`nilai-card-${i}`}
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <div className="inline-block px-3 py-1 bg-[#b8860b]/20 border border-[#b8860b]/30 rounded-full text-[#ffd700] text-xs font-medium mb-3">
                  {v.tag}
                </div>
                <h3 className="font-serif font-bold text-white text-xl mb-2">
                  {v.title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-20 bg-white relative" data-testid="section-cta">
        <div className="absolute inset-0 batik-pattern-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <BatikFlower size={48} color="#b8860b" className="mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Siap Meraih PTN Impianmu?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Jangan tunda lagi! Bergabunglah dengan ratusan siswa yang sudah
            mempersiapkan diri bersama Widya Nusantara Academy. Kuota hanya 100
            murid — segera amankan tempatmu!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/daftar" data-testid="cta-daftar">
              <span className="flex items-center gap-2 px-8 py-4 bg-[#b8860b] hover:bg-[#8b6508] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                Daftar Sekarang — Rp160.000
                <ChevronRight className="w-5 h-5" />
              </span>
            </Link>
            <a
              href="https://wa.me/6289536039675"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border-2 border-[#b8860b] text-[#b8860b] font-semibold text-lg rounded-xl hover:bg-[#b8860b]/10 transition-all duration-300"
              data-testid="cta-whatsapp"
            >
              <Phone className="w-5 h-5" /> Tanya via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
