"use client";
import { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#application", label: "Application" },
  { href: "#media", label: "Média" },
  { href: "#prix", label: "Prix" },
  { href: "#faq", label: "FAQ" },
  { href: "#partenariats", label: "Partenariats" },
  { href: "#contact", label: "Contact" }
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-bleuNuit/70 backdrop-blur border-b border-white/10">
      <div className="container-12 flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <Logo />
          <span className="sr-only">Accueil To Be Father</span>
        </a>
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm hover:text-white/90">{l.label}</a>
          ))}
          <a href="#waitlist" className="btn btn-primary ml-4">Liste d’attente</a>
        </nav>
        <button
          aria-label="Ouvrir le menu"
          className="md:hidden p-2 rounded-xl border border-white/10"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 bg-navy/80 backdrop-blur-sm md:hidden" role="dialog" aria-modal="true">
          <div className="container-12 pt-6">
            <div className="flex justify-between items-center">
              <Logo />
              <button aria-label="Fermer" className="p-2 rounded-xl border border-white/10" onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-4 text-lg">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 border-b border-white/10">{l.label}</a>
              ))}
              <a href="#waitlist" onClick={() => setOpen(false)} className="btn btn-primary mt-4">Liste d’attente</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
