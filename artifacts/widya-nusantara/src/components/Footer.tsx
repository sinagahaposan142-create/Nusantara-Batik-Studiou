import { Link } from "wouter";
import { Phone, Mail, Globe, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      {/* Batik background pattern */}
      <div className="absolute inset-0 batik-kawung-bg opacity-20 pointer-events-none" />

      {/* Top wave */}
      <div className="relative text-[#0f172a]">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 25 C360 50 720 0 1080 25 C1260 37 1350 12 1440 25 L1440 0 L0 0 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Widya Nusantara Academy"
                className="h-20 w-auto object-contain"
                style={{ filter: "drop-shadow(0 0 8px rgba(184,134,11,0.4))" }}
              />
              <div>
                <div className="text-[#b8860b] text-xs font-medium tracking-widest uppercase">Under Rubela Indonesia</div>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              Bimbingan belajar eksklusif dan terpadu yang berfokus pada persiapan UTBK-SNBT serta seleksi mandiri PTN. Membuka jalan menuju kampus impian, membangun generasi Nusantara.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://wa.me/6289536039675"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#25d366] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                data-testid="footer-link-whatsapp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#833ab4] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                data-testid="footer-link-instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.widyautbk.site"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1e3a5f] border border-[#b8860b]/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                data-testid="footer-link-website"
              >
                <Globe className="w-5 h-5 text-[#b8860b]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-[#b8860b] mb-4 text-base">Navigasi</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Beranda" },
                { href: "/tentang", label: "Tentang Kami" },
                { href: "/program", label: "Program Unggulan" },
                { href: "/ajak-teman", label: "Program Ajak Teman" },
                { href: "/daftar", label: "Pendaftaran" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} data-testid={`footer-nav-${link.href.replace("/", "") || "home"}`}>
                    <span className="text-[#94a3b8] text-sm hover:text-[#b8860b] transition-colors cursor-pointer flex items-center gap-2">
                      <span className="text-[#b8860b] opacity-60">›</span>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-[#b8860b] mb-4 text-base">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6289536039675"
                  className="flex items-start gap-3 text-[#94a3b8] text-sm hover:text-[#b8860b] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-contact-whatsapp"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-[#b8860b] flex-shrink-0" />
                  <span>0895360396759 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:widyaakademi@gmail.com"
                  className="flex items-start gap-3 text-[#94a3b8] text-sm hover:text-[#b8860b] transition-colors"
                  data-testid="footer-contact-email"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-[#b8860b] flex-shrink-0" />
                  <span>widyaakademi@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.widyautbk.site"
                  className="flex items-start gap-3 text-[#94a3b8] text-sm hover:text-[#b8860b] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-contact-website"
                >
                  <Globe className="w-4 h-4 mt-0.5 text-[#b8860b] flex-shrink-0" />
                  <span>www.widyautbk.site</span>
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 bg-[#b8860b]/10 border border-[#b8860b]/20 rounded-lg">
              <p className="text-[#b8860b] text-xs font-semibold uppercase tracking-wide mb-1">Masa Pendaftaran</p>
              <p className="text-white text-sm font-medium">6 April – 27 September 2026</p>
              <p className="text-[#94a3b8] text-xs mt-1">Kuota hanya 100 murid!</p>
            </div>
          </div>
        </div>

        {/* Divider with batik ornament */}
        <div className="mt-10 pt-6 border-t border-[#1e3a5f] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-xs text-center sm:text-left">
            &copy; 2026 Widya Nusantara Academy. Bagian dari ekosistem Rubela Indonesia.
          </p>
          <p className="text-[#475569] text-xs text-center">
            Ikut berkontribusi pada SDGs — Pendidikan Berkualitas untuk semua.
          </p>
        </div>
      </div>
    </footer>
  );
}
