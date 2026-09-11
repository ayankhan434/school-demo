"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why us", href: "#why-us" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
     
      <div className="overflow-hidden bg-gold text-navy">
        <div className="ticker flex whitespace-nowrap py-1.5 text-xs font-semibold">
          <span className="mx-8">
            📢 Admissions open for 2026–27 — limited seats! Enquire now 📞 +91 98XXX XXXXX
          </span>
          <span className="mx-8">
            🏆 98% board results — 25+ years of academic excellence in [City]
          </span>
          <span className="mx-8">
            📢 Admissions open for 2026–27 — limited seats! Enquire now 📞 +91 98XXX XXXXX
          </span>
          <span className="mx-8">
            🏆 98% board results — 25+ years of academic excellence in [City]
          </span>
        </div>
      </div>

      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy">
              S
            </span>
            <div className="leading-tight">
              <p className="text-base font-semibold tracking-wide">
                Sunrise Public School
              </p>
              <p className="text-[11px] text-white/60">Play Group – Class 10 · [City]</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/85 transition hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#admissions"
              className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition hover:bg-gold-dark"
            >
              Apply now
            </a>
          </nav>

        
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

  
        {open && (
          <nav className="border-t border-white/10 px-4 py-3 lg:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-white/85 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#admissions"
              className="mt-2 block rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-navy"
            >
              Apply now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
