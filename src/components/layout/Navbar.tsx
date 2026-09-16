"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Zap } from "lucide-react";

const navItems = [
  { href: "#hero", label: "Inicio" },
  { href: "#problema", label: "Problema" },
  { href: "#solucion", label: "Solución" },
  { href: "#perfil", label: "Perfil" },
  { href: "#bloques", label: "Bloques" },
  { href: "#areas", label: "Áreas" },
  { href: "#prototipos", label: "Prototipos" },
  { href: "#viabilidad", label: "Viabilidad" },
  { href: "#cierre", label: "Cierre" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold text-sm tracking-tight hidden sm:inline">
            Son Garrit + Ca'n Ros
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeSection === item.href.replace("#", "")
                  ? "bg-emerald-500/20 text-emerald-300"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/catalogo"
            className="ml-3 px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
          >
            150 Ideas →
          </Link>
        </div>
      </div>
    </nav>
  );
}
