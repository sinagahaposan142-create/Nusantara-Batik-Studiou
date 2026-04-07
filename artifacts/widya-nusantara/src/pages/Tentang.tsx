import { Link } from "wouter";
import {
  ChevronRight,
  CheckCircle,
  Globe,
  Heart,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import {
  BatikDivider,
  BatikCornerDecor,
  BatikFlower,
} from "../components/BatikOrnament";

const misi = [
  {
    num: "01",
    icon: <BookOpen className="w-6 h-6" />,
    title: "Pendidikan Berkualitas",
    desc: "Menyediakan kurikulum persiapan UTBK yang mutakhir, adaptif terhadap perubahan sistem seleksi, dan disampaikan oleh tenaga pengajar terbaik.",
  },
  {
    num: "02",
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Pendampingan Strategis",
    desc: "Memberikan layanan konsultasi jurusan, pemetaan bakat, dan strategi pemilihan PTN berbasis probabilitas dan data yang akurat.",
  },
  {
    num: "03",
    icon: <Globe className="w-6 h-6" />,
    title: "Ekosistem Berkelanjutan",
    desc: "Menjalankan model bisnis sosial (sociopreneurship) yang menopang inisiatif Rubela Indonesia dalam mewujudkan SDGs, khususnya SDGs 1, 3, 4, dan 10.",
  },
];

const coreValues = [
  {
    icon: "🏆",
    title: "Keunggulan Akademik",
    subtitle: "Excellence",
    desc: "Standar pengajaran tinggi dengan materi yang tajam dan relevan. Setiap sesi belajar dirancang untuk memaksimalkan pemahaman dan kecepatan siswa dalam menjawab soal UTBK.",
    color: "border-[#b8860b]",
    iconBg: "bg-[#b8860b]/10",
  },
  {
    icon: "🤝",
    title: "Integritas",
    subtitle: "Integrity",
    desc: "Mengedepankan proses belajar yang jujur, disiplin, dan bertanggung jawab. Kami percaya bahwa hasil terbaik hanya bisa dicapai dengan kerja keras yang konsisten.",
    color: "border-[#1e3a5f]",
    iconBg: "bg-[#1e3a5f]/10",
  },
  {
    icon: "🌱",
    title: "Dampak Sosial",
    subtitle: "Impact",
    desc: "Siswa yang bergabung di kelas berbayar secara otomatis menjadi bagian dari gerakan memajukan akses pendidikan bagi pelajar lain di pelosok melalui program Yayasan Rubela.",
    color: "border-green-600",
    iconBg: "bg-green-50",
  },
];

const sdgs = [
  {
    num: "1",
    label: "Tanpa Kemiskinan",
    desc: "Program beasiswa Rubela untuk pelajar kurang mampu",
  },
  {
    num: "3",
    label: "Kesehatan Mental",
    desc: "Pendampingan psikologi dan wellness bagi pelajar",
  },
  {
    num: "4",
    label: "Pendidikan Inklusif",
    desc: "Akses pendidikan berkualitas tanpa diskriminasi",
  },
  {
    num: "10",
    label: "Mengurangi Ketimpangan",
    desc: "Pemerataan kesempatan menuju PTN terbaik",
  },
];

export default function Tentang() {
  return (
    <div className="min-h-screen" data-testid="page-tentang">
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
            Profil Kami
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Tentang Widya Nusantara Academy
          </h1>
          <BatikDivider color="#b8860b" />
          <p className="text-[#94a3b8] text-lg mt-4 leading-relaxed">
            Mengenal lebih dekat bimbel Widya yang mengkombinasikan keunggulan
            akademik, strategi cerdas, dan nilai kebangsaan.
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

      {/* ─── TENTANG KAMI ─── */}
      <section className="py-20 bg-white" data-testid="section-about">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-2">
                Siapa Kami
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
                Bimbingan Belajar Eksklusif Berjiwa Nusantara
              </h2>
              <BatikDivider color="#b8860b" />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  <strong className="text-[#0f172a]">
                    Widya Nusantara Academy
                  </strong>{" "}
                  adalah bimbingan belajar Premium dan terpadu yang berfokus
                  pada persiapan Ujian Tertulis Berbasis Komputer (UTBK)-Seleksi
                  Nasional Berdasarkan Tes (SNBT).
                </p>
                <p>
                  Berada di bawah naungan{" "}
                  <strong className="text-[#0f172a]">Rubela Indonesia</strong>,
                  Widya Nusantara Academy hadir sebagai layanan berbayar yang
                  dirancang untuk memberikan pendampingan akademik terbaik bagi
                  siswa-siswi kelas 12 dan gap year & semi.
                </p>
                <p>
                  Tercipat langsung dari Rubela Indonesi yang memiliki rekam
                  jejak panjang dan dedikasi kuat dalam mendampingi pelajar
                  menembus PTN impian, Widya Nusantara Academy mengkombinasikan{" "}
                  <strong className="text-[#0f172a]">
                    metodologi pengajaran modern
                  </strong>
                  , tutor ahli yang berpengalaman, serta analisis data
                  pembelajaran yang presisi.
                </p>
                <p>
                  Kami tidak hanya sekadar bimbingan belajar, melainkan{" "}
                  <strong className="text-[#0f172a]">
                    ekosistem pendukung
                  </strong>{" "}
                  yang mempersiapkan mental, strategi, dan akademik siswa secara
                  holistik.
                </p>
              </div>
            </div>

            {/* Right: Visual card */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#b8860b]/5 rounded-3xl" />
              <div className="relative bg-gradient-to-br from-[#0f172a] to-[#1a2a5e] rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 batik-kawung-bg opacity-20 pointer-events-none" />
                <BatikCornerDecor className="absolute top-3 right-3 opacity-25" />

                <div className="relative text-white">
                  <BatikFlower size={48} color="#b8860b" className="mb-5" />
                  <blockquote className="font-serif text-xl md:text-2xl font-bold leading-tight mb-5">
                    "Membuka Jalan Menuju Kampus Impian, Membangun Generasi
                    Nusantara."
                  </blockquote>
                  <div className="border-t border-[#b8860b]/30 pt-5 mt-5">
                    <p className="text-[#94a3b8] text-sm mb-4 leading-relaxed">
                      Di bawah naungan{" "}
                      <span className="text-[#ffd700]">Rubela Indonesia</span> —
                      memiliki rekam jejak panjang dan dedikasi kuat dalam
                      mendampingi pelajar Indonesia meraih impian.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["UTBK", "SNBT", "PTN", "Gap Year", "Kelas 12"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#b8860b]/20 border border-[#b8860b]/30 rounded-full text-[#ffd700] text-xs"
                          >
                            {tag}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISI & MISI ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #f5f7fa 0%, #eef0f5 100%)",
        }}
        data-testid="section-visi-misi"
      >
        <div className="absolute inset-0 batik-parang-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-2">
              Visi & Misi
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
              Landasan Gerak Kami
            </h2>
            <BatikDivider />
          </div>

          {/* Visi */}
          <div
            className="bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden"
            data-testid="visi-card"
          >
            <div className="absolute inset-0 batik-kawung-bg opacity-15 pointer-events-none" />
            <BatikCornerDecor className="absolute top-4 right-4 opacity-20" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#b8860b] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#ffd700]">
                  Visi
                </h3>
              </div>
              <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                Menjadi pusat bimbingan belajar persiapan UTBK terdepan di
                Indonesia yang mencetak generasi unggul, berdaya saing tinggi di
                tingkat universitas, serta berwawasan kebangsaan, sekaligus
                menjadi motor penggerak pendidikan yang berdampak nyata bagi
                masyarakat.
              </p>
            </div>
          </div>

          {/* Misi */}
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-10 h-10 bg-[#b8860b] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
                Misi
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {misi.map((m, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-[#b8860b]/10 hover:shadow-md transition-shadow batik-card"
                  data-testid={`misi-card-${i}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 bg-[#b8860b] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {m.num}
                      </div>
                      <div className="w-0.5 h-8 bg-[#b8860b]/20" />
                      <div className="w-8 h-8 bg-[#b8860b]/10 rounded-full flex items-center justify-center text-[#b8860b] flex-shrink-0">
                        {m.icon}
                      </div>
                    </div>
                    <div className="pt-1">
                      <h4 className="font-serif font-bold text-[#0f172a] text-lg mb-2">
                        {m.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section
        className="py-20 bg-white relative"
        data-testid="section-core-values"
      >
        <div className="absolute inset-0 batik-pattern-bg opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8860b] font-semibold text-sm uppercase tracking-widest mb-2">
              Core Values
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">
              Nilai-Nilai Utama Kami
            </h2>
            <BatikDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-7 border-2 ${v.color} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                data-testid={`core-value-card-${i}`}
              >
                <div
                  className={`w-14 h-14 ${v.iconBg} rounded-xl flex items-center justify-center text-3xl mb-4`}
                >
                  {v.icon}
                </div>
                <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-gray-500 text-xs font-medium mb-3">
                  {v.subtitle}
                </div>
                <h3 className="font-serif font-bold text-[#0f172a] text-xl mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SDGs SECTION ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #064e3b 0%, #065f46 60%, #064e3b 100%)",
        }}
        data-testid="section-sdgs"
      >
        <div className="absolute inset-0 batik-kawung-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <Globe className="w-4 h-4 text-green-300" />
            <span className="text-green-200 text-sm font-medium">
              Sustainable Development Goals (SDGs)
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Kontribusi Nyata pada SDGs
          </h2>
          <p className="text-green-200 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Melalui model bisnis sosial (sociopreneurship), Widya Nusantara
            Academy bersama Rubela Indonesia berkontribusi langsung pada empat
            tujuan pembangunan berkelanjutan PBB.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sdgs.map((s, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors"
                data-testid={`sdg-card-${i}`}
              >
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-white text-xl">{s.num}</span>
                </div>
                <h4 className="font-serif font-bold text-white text-sm mb-2">
                  {s.label}
                </h4>
                <p className="text-green-200 text-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-8">
            <Heart className="w-4 h-4 text-red-400 mr-2" />
            <p className="text-green-200 text-sm">
              Bersama, kita membangun masa depan pendidikan Indonesia yang lebih
              merata dan berkeadilan.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-16 bg-white text-center"
        data-testid="section-tentang-cta"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a] mb-4">
            Bergabunglah dengan Keluarga Widya Nusantara
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Jadilah bagian dari generasi pejuang PTN yang tidak hanya sukses
            secara akademik, tetapi juga berdampak bagi masyarakat sekitar.
          </p>
          <Link href="/daftar" data-testid="tentang-cta-button">
            <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#b8860b] hover:bg-[#8b6508] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              Daftar Sekarang <ChevronRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
