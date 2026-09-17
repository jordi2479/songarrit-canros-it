"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const locales = [
  { code: "es", label: "Español", short: "ES" },
  { code: "ca", label: "Català", short: "CA" },
  { code: "en", label: "English", short: "EN" },
  { code: "de", label: "Deutsch", short: "DE" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Restaurar la posición de scroll exacta al cambiar de idioma (especialmente crítico en móvil)
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const saved = typeof window !== "undefined" ? sessionStorage.getItem("saved_scroll_pos") : null;
    if (saved) {
      const y = parseInt(saved, 10);
      sessionStorage.removeItem("saved_scroll_pos");
      
      const restore = () => {
        window.scrollTo({ top: y, behavior: "instant" });
      };
      
      restore();
      requestAnimationFrame(restore);
      const t1 = setTimeout(restore, 50);
      const t2 = setTimeout(restore, 150);
      const t3 = setTimeout(restore, 300);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [locale]);

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }
    const currentScrollY = typeof window !== "undefined" ? (window.scrollY || document.documentElement.scrollTop || 0) : 0;
    if (typeof window !== "undefined") {
      sessionStorage.setItem("saved_scroll_pos", currentScrollY.toString());
    }
    
    router.replace(pathname, { locale: newLocale, scroll: false });
    setIsOpen(false);
  };

  const current = locales.find((l) => l.code === locale) || locales[0];

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-emerald-500/50 hover:bg-slate-800 transition-all shadow-sm cursor-pointer"
        aria-label="Cambiar idioma"
      >
        <Globe className="w-3.5 h-3.5 text-emerald-400" />
        <span className="uppercase tracking-wider font-bold">{current.short}</span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                locale === l.code
                  ? "bg-emerald-500/20 text-emerald-300 font-bold"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span>{l.label}</span>
              <span className="text-[10px] uppercase text-slate-500 font-mono">{l.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
