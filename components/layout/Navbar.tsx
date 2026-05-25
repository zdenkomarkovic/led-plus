"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";

const navLinks = [
  { href: "#pocetna", label: "Početna" },
  { href: "#pakovanja", label: "Pakovanja" },
  { href: "#dostava", label: "Dostava" },
  { href: "#o-nama", label: "O Nama" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-navy-deep shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="#pocetna" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="LED Plus logo"
            width={48}
            height={48}
            className="h-8 md:h-11 w-auto"
          />
          <div className="leading-tight">
            <div
              className={`font-heading text-base md:text-xl font-bold tracking-wide ${scrolled || menuOpen ? "text-white" : "text-navy"}`}
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              LED PLUS
            </div>
            <div className={`text-[10px] md:text-xs tracking-widest hidden sm:block ${scrolled || menuOpen ? "text-accent" : "text-primary"}`}>
              LED ZA PONETI
            </div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors tracking-wide ${scrolled || menuOpen ? "text-white/75 hover:text-white" : "text-navy/70 hover:text-navy"}`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Desktop phone */}
        <a
          href={`tel:${PHONE}`}
          className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded text-sm font-bold transition-colors shrink-0"
        >
          <PhoneIcon />
          {PHONE_DISPLAY}
        </a>

        {/* Mobile: telefon centriran apsolutno + hamburger desno */}
        <a
          href={`tel:${PHONE}`}
          className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white pl-2.5 pr-3 py-1.5 rounded text-[11px] font-bold transition-colors"
        >
          <PhoneIcon size={13} />
          {PHONE_DISPLAY}
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-1.5 ${scrolled || menuOpen ? "text-white" : "text-navy"}`}
          aria-label="Otvori meni"
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-navy-deep border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-white/80 hover:text-white font-semibold border-b border-white/10 last:border-0 tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="mt-4 flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded font-bold"
          >
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
