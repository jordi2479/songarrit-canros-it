"use client";

import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { href: "#hero", label: t("inicio") },
    { href: "#problema", label: t("problema") },
    { href: "#solucion", label: t("solucion") },
    { href: "#perfil", label: t("perfil") },
    { href: "#bloques", label: t("bloques") },
    { href: "#areas", label: t("areas") },
    { href: "#prototipos", label: t("prototipos") },
    { href: "#implantacion", label: t("implantacion") },
    { href: "#viabilidad", label: t("viabilidad") },
  ];

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
  }, [navItems]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold text-sm tracking-tight hidden sm:inline">
            {t("brand")}
          </span>
        </Link>

        {/* Center section links (visible on wide screens) */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeSection === item.href.replace("#", "")
                  ? "bg-emerald-500/20 text-emerald-300"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right actions (ALWAYS visible on all screens) */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
