import { Link } from "wouter";
import {
  ChevronRight,
  BookOpen,
  Monitor,
  Users,
  Tent,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";
import {
  BatikDivider,
  BatikCornerDecor,
  BatikFlower,
} from "../components/BatikOrnament";

const programs = [
  {
    id: 1,
    icon: <BookOpen className="w-8 h-8" />,
    title: "Intensive UTBK Mastery",
    subtitle: "Program Kelas Reguler & Privat",
    tagline: "Bedah tuntas seluruh materi UTBK",
    color: "from-[#0f172a] to-[#1e3a5f]",
    borderColor: "border-[#1e3a5f]",
    badge: "TERPOPULER",
    badgeColor: "bg-[#b8860b] text-white",
    desc: "Program kelas ONLINE yang membedah tuntas materi Tes Potensi Skolastik (TPS), Literasi Bahasa (Indonesia & Inggris), dan Penalaran Matematika. Dirancang agar siswa tidak hanya memahami konsep, tetapi juga mahir dalam strategi menjawab soal dengan cepat dan akurat.",
    details: [
      "Kelas Intensif (Online) setiap hari selama 5 bulan",
      "Materi Tes Potensi Skolastik (TPS) lengkap",
      "Literasi Bahasa Indonesia & Inggris mendalam",
      "Penalaran Matematika (PM) terstruktur",
      "Pendekatan konsep + strategi cepat",
      "Rekap dan review berkala setiap minggu",
    ],
  },
  {
    id: 2,
    icon: <Monitor className="w-8 h-8" />,
    title: "Rubela Tryout System (RTS)",
    subtitle: "Simulasi UTBK Berbasis Komputer",
    tagline: "Rasakan sensasi UTBK yang sesungguhnya",
    color: "from-[#7c2d12] to-[#b8860b]",
    borderColor: "border-[#b8860b]",
    badge: "6x SIMULASI",
    badgeColor: "bg-orange-500 text-white",
    desc: "Simulasi UTBK berkala menggunakan sistem CBT (Computer Based Test) yang didesain semirip mungkin dengan format asli dari panitia seleksi. Dilengkapi dengan Item Response Theory (IRT) untuk penilaian yang akurat dan analisis mendalam terhadap kemampuan setiap siswa.",
    details: [
      "Simulasi Try Out sebanyak 6x dalam 5 bulan",
      "Format CBT yang identik dengan UTBK asli",
      "Penilaian menggunakan Item Response Theory (IRT)",
      "Analisis kelemahan dan kekuatan per bidang studi",
      "Ranking nasional peserta RTS",
      "Pembahasan soal oleh tutor berpengalaman",
    ],
  },
  {
    id: 3,
    icon: <Users className="w-8 h-8" />,
    title: "Campus Mentoring & Strategy",
    subtitle: "Konsultasi 1-on-1 dengan Alumni PTN",
    tagline: "Strategi tepat untuk kampus impianmu",
    color: "from-[#064e3b] to-[#065f46]",
    borderColor: "border-green-600",
    badge: "EKSKLUSIF",
    badgeColor: "bg-green-600 text-white",
    desc: "Sesi konsultasi 1-on-1 bersama mentor (alumni PTN ternama) untuk menganalisis rasio keketatan jurusan, minat dan bakat siswa, serta pengaturan strategi lolos SNBT yang terukur.",
    details: [
      "Sesi konsultasi 1-on-1 dengan mentor alumni PTN",
      "Analisis rasio keketatan jurusan pilihan",
      "Pemetaan minat, bakat, dan potensi siswa",
      "Strategi pemilihan PTN berbasis data dan probabilitas",
      "Simulasi pengisian formulir SNBT",
      "Pendampingan hingga pengumuman hasil",
    ],
  },
  {
    id: 4,
    icon: <Tent className="w-8 h-8" />,
    title: "Asinkronus LMS",
    subtitle: "Program E-Learning Menggunakan LMS",
    tagline: "Full fokus persiapan detik-detik UTBK",
    color: "from-[#4c1d95] to-[#5b21b6]",
    borderColor: "border-purple-600",
    badge: "INTENSIF",
    badgeColor: "bg-purple-600 text-white",
    desc: "Program latihan soal intensif menggunakan LMS untuk meningkatkan kecepatan dan ketepatan dalam mengerjakan soal UTBK. Terkhusus ketika di bulan Ramadhan/Puasa",
    details: [
      "Diengkapi dengan Bank soal",
      "Tersedia Latihan Soal mingguan",
      "Terdapat Challenge 60 Day Menuju UTBK",
      "Tersedia Video & Catatan Pembahasan cepat",
      "Simulasi kondisi ujian yang sesungguhnya",
      "Target skor yang akan dipenuhi",
    ],
  },
];

const subjectCoverage = [
  {
    category: "Tes Potensi Skolastik (TPS)",
    icon: "🧠",
    subjects: [
      "Kemampuan Penalaran Umum",
      "Kemampuan Kuantitatif",
      "Pengetahuan dan Pemahaman Umum",
      "Kemampuan Memahami Bacaan dan Menulis",
    ],
    color: "border-[#1e3a5f] bg-[#1e3a5f]/5",
  },
  {
    category: "Literasi Bahasa Indonesia",
    icon: "📖",
    subjects: [
      "Pemahaman Wacana",
      "Tata Bahasa & EBI",
      "Menulis Efektif",
      "Analisis Teks",
    ],
    color: "border-[#b8860b] bg-[#b8860b]/5",
  },
  {
    category: "Literasi Bahasa Inggris (LBI)",
    icon: "🌍",
    subjects: [
      "Reading Comprehension",
      "Grammar & Vocabulary",
      "Listening Skills",
      "Writing Techniques",
    ],
    color: "border-green-600 bg-green-50",
  },
  {
    category: "Penalaran Matematika (PM)",
    icon: "📐",
    subjects: [
      "Aljabar & Aritmetika",
      "Geometri & Pengukuran",
      "Statistika & Peluang",
      "Pemecahan Masalah",
    ],
    color: "border-purple-600 bg-purple-50",
  },
];

export default function Program() {
  return (
    <div className="min-h-screen" data-testid="page-program">
      {/* ─── PAGE HEADER ─── */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%)",
        }}
      >
        <div className="absolute inset-0 batik-kawung-bg opacity-20 pointer-events-none" />
        <BatikCornerDecor className="absolute top-4 left-4 opacity-30" />
        <div className="absolute top-4 right-4 opacity-30 rotate-90">
          <BatikCornerDecor />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-3">
            Program Kami
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Program Unggulan
          </h1>
          <BatikDivider color="#b8860b" />
          <p className="text-[#94a3b8] text-lg mt-4 leading-relaxed">
            Empat program terpadu untuk mempersiapkan kamu secara menyeluruh
            dalam menghadapi UTBK-SNBT.
          </p>
        </div>

        <div className="text-white mt-8">
          <svg
            viewBox="0 0 1440 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 20 C360 40 720 0 1080 20 C1260 30 1350 10 1440 20 L1440 40 L0 40 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* ─── PROGRAM CARDS ─── */}
      <section className="py-20 bg-white" data-testid="section-programs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-10">
            {programs.map((p, i) => (
              <div
                key={p.id}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-md border ${p.borderColor} hover:shadow-xl transition-shadow`}
                data-testid={`program-detail-${i}`}
              >
                {/* Left: Colored header */}
                <div
                  className={`lg:col-span-2 bg-gradient-to-br ${p.color} p-8 text-white relative overflow-hidden flex flex-col justify-between`}
                >
                  <div className="absolute inset-0 batik-kawung-bg opacity-15 pointer-events-none" />
                  <BatikCornerDecor className="absolute top-3 right-3 opacity-20" />
                  <div className="relative">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white/90 text-xs font-semibold mb-4">
                      Program {String(p.id).padStart(2, "0")}
                    </div>
                    <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-4">
                      {p.icon}
                    </div>
                    <h2 className="font-serif text-2xl font-bold mb-2">
                      {p.title}
                    </h2>
                    <p className="text-white/80 text-sm mb-3">{p.subtitle}</p>
                    <p className="text-white/60 text-xs italic">{p.tagline}</p>
                  </div>
                  <div className="relative mt-6">
                    <span
                      className={`inline-block px-3 py-1.5 ${p.badgeColor} text-xs font-bold rounded-full`}
                    >
                      {p.badge}
                    </span>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-3 bg-white p-8">
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {p.desc}
                  </p>
                  <h4 className="font-serif font-bold text-[#0f172a] text-lg mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#b8860b]" />
                    Yang Kamu Dapatkan:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {p.details.map((d, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-2.5"
                        data-testid={`program-${i}-detail-${j}`}
                      >
                        <CheckCircle className="w-4 h-4 text-[#b8860b] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MATERI COVERAGE ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #f5f7fa 0%, #eef0f5 100%)",
        }}
        data-testid="section-materi"
      >
        <div className="absolute inset-0 batik-parang-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-2">
              Cakupan Materi
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
              Semua Bidang UTBK Tercakup
            </h2>
            <BatikDivider />
            <p className="text-gray-500 max-w-xl mx-auto text-base mt-4">
              Program kami mencakup seluruh bidang tes yang diujikan dalam
              UTBK-SNBT tanpa terkecuali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjectCoverage.map((subject, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 border-2 ${subject.color} shadow-sm hover:shadow-md transition-shadow`}
                data-testid={`subject-card-${i}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{subject.icon}</span>
                  <h3 className="font-serif font-bold text-[#0f172a] text-lg">
                    {subject.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {subject.subjects.map((s, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 bg-[#b8860b] rounded-full flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JADWAL & BIAYA ─── */}
      <section className="py-20 bg-white" data-testid="section-jadwal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-2">
              Info Penting
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
              Jadwal & Biaya Program
            </h2>
            <BatikDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Jadwal */}
            <div
              className="bg-gradient-to-br from-[#f5f7fa] to-[#eef0f5] rounded-2xl p-7 border border-gray-200"
              data-testid="jadwal-card"
            >
              <h3 className="font-serif font-bold text-[#0f172a] text-xl mb-5 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#b8860b]" /> Jadwal Penting
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#b8860b]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#b8860b] font-bold text-xs">01</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a] text-sm">
                      Masa Pendaftaran
                    </p>
                    <p className="text-gray-500 text-sm">
                      6 April — 27 September 2026
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#b8860b]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#b8860b] font-bold text-xs">02</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a] text-sm">
                      Durasi Program
                    </p>
                    <p className="text-gray-500 text-sm">
                      5 bulan penuh (kelas intensif setiap hari)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-xs">!</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a] text-sm">
                      Kuota Murid
                    </p>
                    <p className="text-red-600 text-sm font-medium">
                      Hanya 100 murid — sangat terbatas!
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a] text-sm">
                      Target Peserta
                    </p>
                    <p className="text-gray-500 text-sm">
                      Kelas 12, Gap Year, Semi Gap Year 2025-2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Biaya */}
            <div
              className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] rounded-2xl p-7 relative overflow-hidden"
              data-testid="biaya-card"
            >
              <div className="absolute inset-0 batik-kawung-bg opacity-15 pointer-events-none" />
              <BatikCornerDecor className="absolute top-3 right-3 opacity-20" />
              <div className="relative">
                <h3 className="font-serif font-bold text-[#ffd700] text-xl mb-5">
                  Biaya Program
                </h3>
                <div className="text-center mb-6">
                  <p className="text-[#94a3b8] text-sm mb-1">Total Biaya</p>
                  <div className="font-serif font-bold text-5xl text-[#ffd700]">
                    Rp160.000
                  </div>
                  <p className="text-[#b8860b] text-sm mt-1">
                    untuk 5 Bulan Program Penuh
                  </p>
                </div>
                <div className="space-y-2 mb-6">
                  {[
                    "Semua kelas intensif harian",
                    "6x Simulasi Try Out RTS",
                    "Campus Mentoring & Strategy",
                    "Akses materi digital",
                    "Konsultasi PTN unlimited",
                  ].map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-sm text-[#94a3b8]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#b8860b] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="bg-[#b8860b]/10 border border-[#b8860b]/30 rounded-xl p-3 mb-4 text-center">
                  <p className="text-[#ffd700] text-sm font-medium">
                    Kode Unik Pembayaran
                  </p>
                  <p className="text-white text-xs mt-1">
                    Tambahkan <strong>550</strong> di akhir nominal
                  </p>
                  <p className="text-[#b8860b] text-sm font-bold mt-1">
                    Contoh: Rp 160.550
                  </p>
                </div>
                <Link href="/daftar" data-testid="program-cta-daftar">
                  <span className="block text-center w-full py-3.5 bg-[#b8860b] hover:bg-[#8b6508] text-white font-bold rounded-xl transition-colors cursor-pointer">
                    Daftar & Bayar Sekarang
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-16 bg-[#f5f7fa] text-center"
        data-testid="section-program-cta"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <BatikFlower size={40} color="#b8860b" className="mx-auto mb-5" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a] mb-4">
            Mulai Perjalanan Menuju PTN Impianmu!
          </h2>
          <p className="text-gray-500 mb-8">
            Daftarkan dirimu sekarang sebelum kuota penuh. Investasi terbaik
            untuk masa depan akademikmu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/daftar" data-testid="program-bottom-cta">
              <span className="flex items-center gap-2 px-8 py-4 bg-[#b8860b] hover:bg-[#8b6508] text-white font-bold text-lg rounded-xl shadow-lg cursor-pointer transition-all">
                Daftar Sekarang <ChevronRight className="w-5 h-5" />
              </span>
            </Link>
            <a
              href="https://wa.me/62895360396759"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border-2 border-[#b8860b] text-[#b8860b] font-semibold text-lg rounded-xl hover:bg-[#b8860b]/10 cursor-pointer transition-all"
              data-testid="program-wa-cta"
            >
              Tanya via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
