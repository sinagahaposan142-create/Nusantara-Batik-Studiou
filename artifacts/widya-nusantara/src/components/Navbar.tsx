import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/program", label: "Program" },
  { href: "/ajak-teman", label: "Ajak Teman" },
  { href: "/daftar", label: "Daftar Sekarang" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#0f172a] text-[#f5deb3] py-1.5 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span className="font-medium tracking-wide">Widya Nusantara Academy — Bimbel UTBK Terpercaya</span>
          <div className="flex items-center gap-6">
            <a href="https://wa.me/6289536039675" className="flex items-center gap-1.5 hover:text-[#ffd700] transition-colors" target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp-top">
              <Phone className="w-3 h-3" />
              <span>0895360396759</span>
            </a>
            <a href="mailto:widyaakademi@gmail.com" className="flex items-center gap-1.5 hover:text-[#ffd700] transition-colors" data-testid="link-email-top">
              <Mail className="w-3 h-3" />
              <span>widyaakademi@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[#b8860b]/20"
            : "bg-white border-b border-[#b8860b]/10"
        }`}
        data-testid="navbar"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" data-testid="link-logo">
              <div className="flex items-center gap-2 cursor-pointer group">
                <img
                  src="/logo.png"
                  alt="Widya Nusantara Academy"
                  className="h-12 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
                <div>
                  <div className="font-serif font-bold text-[#0f172a] text-sm md:text-base leading-tight tracking-wide">
                    Widya Nusantara
                  </div>
                  <div className="text-[#b8860b] text-[10px] md:text-xs font-medium tracking-widest uppercase">
                    Academy
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.slice(0, -1).map((link) => (
                <Link key={link.href} href={link.href} data-testid={`nav-link-${link.href.replace("/", "") || "home"}`}>
                  <span
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                      location === link.href
                        ? "text-[#b8860b] bg-[#b8860b]/10"
                        : "text-[#0f172a] hover:text-[#b8860b] hover:bg-[#b8860b]/5"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/daftar" data-testid="nav-link-daftar">
                <span className="ml-2 px-5 py-2.5 bg-[#b8860b] hover:bg-[#8b6508] text-white text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
                  Daftar Sekarang
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-[#0f172a] hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-[#b8860b]/10 bg-white" data-testid="mobile-menu">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} data-testid={`mobile-nav-${link.href.replace("/", "") || "home"}`}>
                  <span
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      location === link.href
                        ? "text-[#b8860b] bg-[#b8860b]/10"
                        : "text-[#0f172a] hover:text-[#b8860b] hover:bg-gray-50"
                    } ${link.href === "/daftar" ? "!bg-[#b8860b] !text-white hover:!bg-[#8b6508] text-center mt-2 font-semibold" : ""}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <a href="https://wa.me/6289536039675" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600" target="_blank" rel="noopener noreferrer" data-testid="mobile-link-whatsapp">
                  <Phone className="w-4 h-4 text-[#b8860b]" /> 0895360396759
                </a>
                <a href="mailto:widyaakademi@gmail.com" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600" data-testid="mobile-link-email">
                  <Mail className="w-4 h-4 text-[#b8860b]" /> widyaakademi@gmail.com
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
