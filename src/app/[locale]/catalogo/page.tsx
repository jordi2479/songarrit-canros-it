"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import data from "@/data/ideas.json";

export default function Catalogo() {
  const t = useTranslations("catalogo");
  const [search, setSearch] = useState("");
  const [bloqueFilter, setBloqueFilter] = useState<string | null>(null);
  const [dificultadFilter, setDificultadFilter] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const bloqueLabels: Record<string, string> = {
    B1: t("grupo"), B2: t("nucleo"), B3: t("clientes"), B4: t("operativa"),
  };

  const dificultadLabels: Record<string, { label: string; dot: string }> = {
    verde: { label: t("facil"), dot: "bg-emerald-500" },
    amarillo: { label: t("especialista"), dot: "bg-amber-500" },
    rojo: { label: t("complejo"), dot: "bg-red-500" },
  };

  const filtered = useMemo(() => {
    return data.filter((idea) => {
      const matchSearch = search === "" ||
        idea.titulo.toLowerCase().includes(search.toLowerCase()) ||
        idea.descripcion.toLowerCase().includes(search.toLowerCase()) ||
        idea.area.toLowerCase().includes(search.toLowerCase());
      const matchBloque = !bloqueFilter || idea.bloque === bloqueFilter;
      const matchDificultad = !dificultadFilter || idea.dificultad === dificultadFilter;
      return matchSearch && matchBloque && matchDificultad;
    });
  }, [search, bloqueFilter, dificultadFilter]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> {t("volver")}
            </Link>
            <span className="text-sm text-slate-500">
              {t("mostrando")} <strong className="text-white">{filtered.length}</strong> {t("de")} {data.length} {t("ideas")}
            </span>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder={t("buscar")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            {/* Bloque chips */}
            {Object.entries(bloqueLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setBloqueFilter(bloqueFilter === key ? null : key)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  bloqueFilter === key
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700"
                }`}
              >
                {key} {label}
              </button>
            ))}
            <span className="w-px h-5 bg-slate-700 mx-1"></span>
            {/* Dificultad chips */}
            {Object.entries(dificultadLabels).map(([key, { label, dot }]) => (
              <button
                key={key}
                onClick={() => setDificultadFilter(dificultadFilter === key ? null : key)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  dificultadFilter === key
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${dot}`}></span>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((idea) => (
              <motion.div
                key={idea.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-colors"
              >
                <button
                  onClick={() => setExpandedId(expandedId === idea.id ? null : idea.id)}
                  className="w-full px-6 py-4 flex items-center gap-4 text-left cursor-pointer"
                >
                  <span className={`flex-shrink-0 w-2.5 h-2.5 rounded-full ${
                    idea.dificultad === "verde" ? "bg-emerald-500" : idea.dificultad === "amarillo" ? "bg-amber-500" : "bg-red-500"
                  }`}></span>
                  <span className="font-mono text-xs text-slate-500 w-10 flex-shrink-0">{idea.id}</span>
                  <span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[10px] font-bold uppercase tracking-wider flex-shrink-0">
                    {idea.bloque}
                  </span>
                  <span className="font-semibold text-sm text-white flex-1">{idea.titulo}</span>
                  <span className="text-xs text-slate-500 hidden md:inline">{idea.area}</span>
                  {expandedId === idea.id ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedId === idea.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 border-t border-slate-800 grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                          <h4 className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">{t("descripcion")}</h4>
                          <p className="text-sm text-slate-300 leading-relaxed">{idea.descripcion}</p>
                        </div>
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                          <h4 className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">{t("limites")}</h4>
                          <p className="text-sm text-slate-400 leading-relaxed">{idea.riesgos}</p>
                          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${
                              idea.dificultad === "verde" ? "bg-emerald-500" : idea.dificultad === "amarillo" ? "bg-amber-500" : "bg-red-500"
                            }`}></span>
                            <span className="text-xs text-slate-500">
                              {idea.requiere_especialista ? t("reqEspecialista") : t("implementable")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <Search className="w-8 h-8 mx-auto mb-3 opacity-50" />
              <p className="font-medium">{t("sinResultados")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
