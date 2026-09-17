"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ChevronDown, ChevronUp, ArrowLeft, Zap, ShieldAlert, BarChart, HardHat, Layers, Activity, Wrench, CheckCircle2, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { catalogoCategorias } from "@/data/catalogo";
import { catalogoCategoriasEn } from "@/data/catalogo_en";
import { catalogoCategoriasCa } from "@/data/catalogo_ca";
import { catalogoCategoriasDe } from "@/data/catalogo_de";
import { AREA_THEMES } from "@/data/areaColors";
import { AreaId } from "@/data/types";

export default function Catalogo() {
  const t = useTranslations("catalogo");
  const locale = useLocale();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Nivel 1 - Estructura
  const [areaFilter, setAreaFilter] = useState<string | null>(null);
  const [categoriaFilter, setCategoriaFilter] = useState<string | null>(null);
  
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const localizedCatalogoAreas = useMemo(() => {
    if (locale === 'en') return catalogoCategoriasEn;
    if (locale === 'ca') return catalogoCategoriasCa;
    if (locale === 'de') return catalogoCategoriasDe;
    return catalogoCategorias;
  }, [locale]);

  const allPropuestas = useMemo(() => {
    const list: any[] = [];
    localizedCatalogoAreas.forEach(area => {
      area.propuestas.forEach(prop => {
        list.push({
          ...prop,
          categoriaTitulo: area.titulo,
          area: area.area // Fixing this property mapping
        });
      });
    });
    return list;
  }, [localizedCatalogoAreas]);

  const customAreaLabels: Record<string, string> = {
    global: t("grupo"), 
    administracion: t("nucleo"), 
    clientes: t("clientes"), 
    operativa: t("operativa"),
  };

  const areaDotClasses: Record<string, string> = {
    global: AREA_THEMES.global.dot,
    administracion: AREA_THEMES.administracion.dot,
    clientes: AREA_THEMES.clientes.dot,
    operativa: AREA_THEMES.operativa.dot,
  };

  const areaBadgeClasses: Record<string, string> = {
    global: AREA_THEMES.global.dark.badge,
    administracion: AREA_THEMES.administracion.dark.badge,
    clientes: AREA_THEMES.clientes.dark.badge,
    operativa: AREA_THEMES.operativa.dark.badge,
  };

  const filtered = useMemo(() => {
    return allPropuestas.filter((idea) => {
      const matchBloque = !areaFilter || idea.area === areaFilter;
      const matchArea = !categoriaFilter || idea.categoriaTitulo === categoriaFilter;
      
      return matchBloque && matchArea;
    });
  }, [areaFilter, categoriaFilter, allPropuestas]);

  const getRiesgoTextColor = (val: string) => {
    const v = val?.toLowerCase();
    if (v === "bajo") return "text-emerald-400";
    if (v === "medio") return "text-amber-400";
    return "text-red-400"; // Alto riesgo = Rojo
  };

  const getBeneficioTextColor = (val: string) => {
    const v = val?.toLowerCase();
    if (v === "alto") return "text-emerald-400";
    if (v === "medio") return "text-amber-400";
    return "text-red-400";
  };
  
  const getDificultadTextColor = (val?: string) => {
    const v = val?.toLowerCase();
    if (v === "alta" || v === "alto") return "text-red-400"; // Alta dificultad = Rojo
    if (v === "media" || v === "medio") return "text-amber-400";
    return "text-emerald-400"; // Baja dificultad = Verde
  };

  const getRiesgoColor = getRiesgoTextColor;
  const getBeneficioColor = getBeneficioTextColor;

  const handleBloqueClick = (key: string) => {
    if (areaFilter === key) {
      setAreaFilter(null);
      setCategoriaFilter(null);
    } else {
      setAreaFilter(key);
      setCategoriaFilter(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/#areas" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> {t("volver")}
            </Link>
            <span className="text-sm text-slate-500">
              {t("mostrando")} <strong className="text-white">{filtered.length}</strong> de {allPropuestas.length} ideas
            </span>
          </div>

          {/* 1. Macro-Áreas (Toggles) */}
          <div className="flex flex-wrap gap-3 items-center mb-5 mt-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mr-2 hidden sm:block">Áreas:</span>
            {Object.entries(customAreaLabels).map(([key, label]) => {
              const isActive = areaFilter === key;
              return (
                <button
                  key={key}
                  onClick={() => handleBloqueClick(key)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? AREA_THEMES[key as AreaId].dark.pillActive
                    : "bg-slate-900/50 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-300"
                }`}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${areaDotClasses[key]}`} />
                {label}
              </button>
            )
          })}
          
          {(areaFilter || categoriaFilter) && (
            <button
              onClick={() => { setAreaFilter(null); setCategoriaFilter(null); }}
              className="ml-auto px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900/50 hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <X className="w-4 h-4 text-red-500" />
              <span className="hidden sm:inline">Restablecer</span>
            </button>
          )}
        </div>

        {/* 2. Categorías (Nube fluida) */}
        <div className="flex flex-wrap gap-2.5 items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mr-2 hidden sm:block">Categorías:</span>
          {localizedCatalogoAreas.map(cat => {
            const isActiveArea = areaFilter === cat.area;
            const isFaded = areaFilter && !isActiveArea;
            const isSelectedCat = categoriaFilter === cat.titulo;
            const theme = AREA_THEMES[cat.area as AreaId]?.dark;

            return (
              <button
                key={cat.id}
                onClick={() => setCategoriaFilter(isSelectedCat ? null : cat.titulo)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
                  isSelectedCat
                    ? `shadow-md ${theme?.badge}` 
                    : isFaded
                      ? 'bg-slate-900/20 text-slate-600 border-slate-800/50 opacity-40 grayscale hover:opacity-70'
                      : isActiveArea
                        ? `bg-slate-900/50 ${theme?.border} ${theme?.bgHover} ${theme?.baseText}`
                        : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-300'
                }`}
              >
                {cat.titulo}
              </button>
            )
          })}
          </div>

          {/* 3. Leyenda de Métricas (Iconos) */}
          <div className="mt-5 pt-5 border-t border-slate-800/50 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Leyenda:</span>
            
            <div className="flex items-center gap-2 bg-slate-900/60 px-2.5 py-1.5 rounded-xl border border-slate-800">
              <div className="w-5 h-5 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                <BarChart className="w-3 h-3" />
              </div>
              <span className="text-xs font-semibold text-slate-300">{t("beneficio")}</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-900/60 px-2.5 py-1.5 rounded-xl border border-slate-800">
              <div className="w-5 h-5 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                <ShieldAlert className="w-3 h-3" />
              </div>
              <span className="text-xs font-semibold text-slate-300">{t("riesgo")}</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-900/60 px-2.5 py-1.5 rounded-xl border border-slate-800">
              <div className="w-5 h-5 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                <Wrench className="w-3 h-3" />
              </div>
              <span className="text-xs font-semibold text-slate-300">{t("dificultad")}</span>
            </div>
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
                  className="w-full px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[10px] font-bold uppercase tracking-wider flex-shrink-0">
                      {customAreaLabels[idea.area] || idea.area}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-800/50 text-slate-400 rounded text-[10px] font-bold uppercase tracking-wider flex-shrink-0 border border-slate-700/50">
                      {idea.categoriaTitulo}
                    </span>
                    {idea.acceso && (
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex-shrink-0 border ${
                        idea.acceso === 'escritura'
                          ? 'bg-amber-950/40 text-amber-400 border-amber-800/50'
                          : 'bg-cyan-950/40 text-cyan-400 border-cyan-800/50'
                      }`}>
                        {idea.acceso === 'escritura' ? 'Escritura' : 'Lectura'}
                      </span>
                    )}
                  </div>
                  
                  <span className="font-semibold text-sm text-white flex-1">{idea.titulo}</span>
                  
                  <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                    {/* Mini Dashboard de Métricas */}
                    <div className="flex items-center gap-2 sm:gap-3 mr-0 sm:mr-2 bg-slate-950/50 px-3 py-1.5 rounded-lg border border-slate-800/50 flex-1 sm:flex-initial justify-between sm:justify-start">
                      <div title={`Beneficio: ${idea.beneficio}`} className={`flex items-center gap-1.5 ${getBeneficioTextColor(idea.beneficio)}`}>
                        <BarChart className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">{idea.beneficio}</span>
                      </div>
                      <span className="w-px h-3 bg-slate-700/50"></span>
                      <div title={`Riesgo: ${idea.riesgo}`} className={`flex items-center gap-1.5 ${getRiesgoTextColor(idea.riesgo)}`}>
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">{idea.riesgo}</span>
                      </div>
                      <span className="w-px h-3 bg-slate-700/50"></span>
                      <div title={`Dificultad: ${idea.dificultad || idea.facilidad}`} className={`flex items-center gap-1.5 ${getDificultadTextColor(idea.dificultad || idea.facilidad)}`}>
                        <Wrench className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">{idea.dificultad || idea.facilidad}</span>
                      </div>
                    </div>

                    {expandedId === idea.id ? (
                      <ChevronUp className="w-4 h-4 text-slate-500 flex-shrink-0 hidden sm:block" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0 hidden sm:block" />
                    )}
                  </div>
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
                      <div className="px-6 pb-6 pt-2 border-t border-slate-800 grid md:grid-cols-3 gap-8">
                        
                        <div className="md:col-span-2 space-y-5">
                          <div>
                            <h4 className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                              <Zap className="w-4 h-4 text-amber-400" /> Resumen Ejecutivo
                            </h4>
                            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{idea.descripcionLarga || idea.descripcion}</p>
                          </div>

                          {idea.ejemplo && (
                            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 shadow-inner">
                              <h4 className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2 flex items-center gap-2 text-cyan-400">
                                <Activity className="w-4 h-4" /> Caso de uso
                              </h4>
                              <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{idea.ejemplo}</p>
                            </div>
                          )}
                          
                          {idea.pasos && idea.pasos.length > 0 && (
                            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 shadow-inner">
                              <h4 className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3 flex items-center gap-2 text-emerald-400">
                                <CheckCircle2 className="w-4 h-4" /> Guía de Implementación
                              </h4>
                              <ol className="space-y-2.5">
                                {idea.pasos.map((paso: string, idx: number) => (
                                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px] flex items-center justify-center mt-0.5 border border-emerald-500/30">
                                      {idx + 1}
                                    </span>
                                    <span>{paso}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          )}

                          {(idea.viabilidad || idea.veredicto) && (
                            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 shadow-inner">
                              <h4 className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2 flex items-center gap-2 text-amber-400">
                                <HardHat className="w-4 h-4" /> Viabilidad técnica & operativa
                              </h4>
                              <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{idea.viabilidad || idea.veredicto}</p>
                            </div>
                          )}
                        </div>

                        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 h-fit space-y-4 shadow-inner">
                          {idea.acceso && (
                            <div>
                              <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Permiso de Acceso</h4>
                              <p className={`text-sm font-bold flex items-center gap-1.5 ${idea.acceso === 'escritura' ? 'text-amber-400' : 'text-cyan-400'}`}>
                                {idea.acceso === 'escritura' ? 'Escritura en sistemas (sensible)' : 'Solo lectura'}
                              </p>
                            </div>
                          )}
                          <div>
                            <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Impacto / Beneficio</h4>
                            <p className={`text-sm font-bold flex items-center gap-2 ${getBeneficioColor(idea.beneficio)}`}>
                              <BarChart className="w-4 h-4" /> {idea.beneficio}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Riesgo / Fricción</h4>
                            <p className={`text-sm font-bold flex items-center gap-2 ${getRiesgoColor(idea.riesgo)}`}>
                              <ShieldAlert className="w-4 h-4" /> {idea.riesgo}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Dificultad Técnica</h4>
                            <p className={`text-sm font-bold flex items-center gap-2 ${getDificultadTextColor(idea.dificultad || idea.facilidad)}`}>
                              <Wrench className="w-4 h-4" /> {idea.dificultad || idea.facilidad}
                            </p>
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
