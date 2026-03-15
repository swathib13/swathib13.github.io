"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#impact", label: "Impact" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-ink/90 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 py-5 flex items-center justify-between">
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-white flex items-center gap-2"
        >
          <span className="text-gradient font-serif text-lg">SB</span>
          <span className="text-white-muted text-sm hidden sm:inline">
            Swathi Bandari
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[13px] text-white-dim hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:swathibandari1323@gmail.com"
            className="ml-4 px-5 py-2 text-[13px] text-ink bg-copper hover:bg-copper-bright transition-colors duration-200 rounded-full font-medium"
          >
            Contact{" "}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-white-dim hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-ink/95 backdrop-blur-xl border-b border-line">
          <div className="px-8 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="px-4 py-3 text-sm text-white-dim hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:swathibandari1323@gmail.com"
              className="mt-3 px-5 py-3 text-sm text-ink bg-copper hover:bg-copper-bright transition-colors rounded-full font-medium text-center"
            >
              Contact{" "}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
