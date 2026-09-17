"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Zap, ShieldAlert, BarChart, HardHat, Layers, Activity, Wrench, Sparkles, X, SlidersHorizontal, ArrowUpDown, Maximize2, CheckCircle2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import { catalogoCategorias } from "@/data/catalogo";
import { catalogoCategoriasEn } from "@/data/catalogo_en";
import { catalogoCategoriasCa } from "@/data/catalogo_ca";
import { catalogoCategoriasDe } from "@/data/catalogo_de";
import { AREA_THEMES } from "@/data/areaColors";
import { AreaId } from "@/data/types";

export function BuscadorSoluciones() {
  const t = useTranslations("catalogo");
  const locale = useLocale();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Filtros
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
          area: area.area
        });
      });
    });
    return list;
  }, [localizedCatalogoAreas]);

  const activeIdea = useMemo(() => {
    if (!expandedId) return null;
    return allPropuestas.find(p => p.id === expandedId) || null;
  }, [expandedId, allPropuestas]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedId(null);
    };
    if (expandedId) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [expandedId]);

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
    global: AREA_THEMES.global.light.badge,
    administracion: AREA_THEMES.administracion.light.badge,
    clientes: AREA_THEMES.clientes.light.badge,
    operativa: AREA_THEMES.operativa.light.badge,
  };

  const areaBorderHover: Record<string, string> = {
    global: AREA_THEMES.global.light.borderHover,
    administracion: AREA_THEMES.administracion.light.borderHover,
    clientes: AREA_THEMES.clientes.light.borderHover,
    operativa: AREA_THEMES.operativa.light.borderHover,
  };

  // Semántica de métricas: Verde (Favorable), Amarillo (Neutro), Rojo (Desafiante)
  const getBeneficioBadge = (val: string) => {
    const v = val?.toLowerCase();
    if (v === "alto") return "text-emerald-700 bg-emerald-50 border-emerald-200/80";
    if (v === "medio") return "text-amber-700 bg-amber-50 border-amber-200/80";
    return "text-red-700 bg-red-50 border-red-200/80";
  };

  const getRiesgoBadge = (val: string) => {
    const v = val?.toLowerCase();
    if (v === "bajo") return "text-emerald-700 bg-emerald-50 border-emerald-200/80";
    if (v === "medio") return "text-amber-700 bg-amber-50 border-amber-200/80";
    return "text-red-700 bg-red-50 border-red-200/80"; // Riesgo Alto = Rojo
  };
  
  const getDificultadBadge = (val?: string) => {
    const v = val?.toLowerCase();
    // Dificultad Alta = Rojo (Difícil), Dificultad Baja = Verde (Fácil)
    if (v === "alta" || v === "alto") return "text-red-700 bg-red-50 border-red-200/80";
    if (v === "media" || v === "medio") return "text-amber-700 bg-amber-50 border-amber-200/80";
    return "text-emerald-700 bg-emerald-50 border-emerald-200/80";
  };

  const filtered = useMemo(() => {
    return allPropuestas.filter((idea) => {
      const matchBloque = !areaFilter || idea.area === areaFilter;
      const matchArea = !categoriaFilter || idea.categoriaTitulo === categoriaFilter;
      return matchBloque && matchArea;
    });
  }, [areaFilter, categoriaFilter, allPropuestas]);

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
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      
      {/* BLOQUE 1: NAVEGACIÓN Y FILTROS VISUALES */}
      <div className="w-full flex flex-col gap-6 bg-white border border-slate-200/90 rounded-3xl shadow-lg shadow-slate-200/50 p-6 md:p-8">
        
        {/* Cabecera del Panel */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-lg leading-tight">
                Mapa de Iniciativas
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Explora las soluciones por área y categoría</p>
            </div>
          </div>
          
          {(areaFilter || categoriaFilter) && (
            <button
              onClick={() => { setAreaFilter(null); setCategoriaFilter(null); }}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors flex items-center gap-2 cursor-pointer shadow-sm self-start md:self-auto"
            >
              <X className="w-4 h-4 text-red-500" />
              <span>Restablecer vista</span>
            </button>
          )}
        </div>

        <div className="w-full h-px bg-slate-100"></div>

        {/* 1. Macro-Áreas (Toggles) */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mr-2 hidden sm:block">Áreas:</span>
          {Object.entries(customAreaLabels).map(([key, label]) => {
            const isActive = areaFilter === key;
            return (
              <button
                key={key}
                onClick={() => handleBloqueClick(key)}
                className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? AREA_THEMES[key as AreaId].light.pillActive
                    : "bg-white text-slate-600 hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${areaDotClasses[key]}`} />
                {label}
              </button>
            )
          })}
        </div>

        {/* 2. Categorías (Nube fluida) */}
        <div className="flex flex-wrap gap-2.5 items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mr-2 hidden sm:block">Categorías:</span>
          {localizedCatalogoAreas.map(cat => {
            const isActiveArea = areaFilter === cat.area;
            const isFaded = areaFilter && !isActiveArea;
            const isSelectedCat = categoriaFilter === cat.titulo;
            const theme = AREA_THEMES[cat.area as AreaId]?.light;

            return (
              <button
                key={cat.id}
                onClick={() => setCategoriaFilter(isSelectedCat ? null : cat.titulo)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
                  isSelectedCat
                    ? `shadow-md ${theme?.badge}` 
                    : isFaded
                      ? 'bg-slate-50 text-slate-400 border-slate-100 opacity-40 grayscale hover:opacity-70'
                      : isActiveArea
                        ? `bg-white shadow-xs ${theme?.baseText} border-slate-300 hover:${theme?.baseBorder}`
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                {cat.titulo}
              </button>
            )
          })}
        </div>

        {/* 3. Leyenda de Métricas (Iconos) */}
        <div className="mt-2 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Leyenda:</span>
          
          <div className="flex items-center gap-2 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-200/70">
            <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-2xs">
              <BarChart className="w-3 h-3" />
            </div>
            <span className="text-xs font-bold text-slate-700">{t("beneficio")}</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-200/70">
            <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-2xs">
              <ShieldAlert className="w-3 h-3" />
            </div>
            <span className="text-xs font-bold text-slate-700">{t("riesgo")}</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-200/70">
            <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-2xs">
              <Wrench className="w-3 h-3" />
            </div>
            <span className="text-xs font-bold text-slate-700">{t("dificultad")}</span>
          </div>
        </div>

      </div>

      {/* BLOQUE 2: MURAL DE INICIATIVAS */}
      <div className="w-full flex flex-col gap-4">
        
        {/* Barra de Estado de Resultados */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
              Iniciativas Encontradas
            </span>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            {filtered.length} {filtered.length === 1 ? 'iniciativa' : 'iniciativas'}
          </span>
        </div>

        {/* Rejilla de Tarjetas 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          <AnimatePresence mode="popLayout">
            {filtered.map((idea) => {
              return (
                <motion.div
                  key={idea.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setExpandedId(idea.id)}
                  className={`bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all rounded-2xl overflow-hidden flex flex-col justify-between p-4 md:p-5 cursor-pointer group select-none shadow-xs ${
                    areaBorderHover[idea.area] || ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                          areaBadgeClasses[idea.area] || 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}>
                          {customAreaLabels[idea.area] || idea.area}
                        </span>
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-medium tracking-wide border border-slate-200/80">
                          {idea.categoriaTitulo}
                        </span>
                        {idea.acceso && (
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                            idea.acceso === 'escritura'
                              ? 'bg-amber-50 text-amber-800 border-amber-200'
                              : 'bg-sky-50 text-sky-700 border-sky-200'
                          }`}>
                            {idea.acceso === 'escritura' ? 'Escritura' : 'Lectura'}
                          </span>
                        )}
                      </div>
                      
                      <div className="text-slate-400 group-hover:text-slate-700 transition-colors p-1 flex-shrink-0">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h4 className="font-bold text-sm md:text-base text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2">
                      {idea.titulo}
                    </h4>
                    
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {idea.descripcion}
                    </p>
                  </div>

                  {/* Métricas Inferiores */}
                  <div className="flex items-center gap-1.5 pt-3 mt-4 border-t border-slate-100 flex-wrap">
                    <div className={`px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1 ${getBeneficioBadge(idea.beneficio)}`}>
                      <BarChart className="w-3 h-3" />
                      <span>{idea.beneficio}</span>
                    </div>
                    <div className={`px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1 ${getRiesgoBadge(idea.riesgo)}`}>
                      <ShieldAlert className="w-3 h-3" />
                      <span>{idea.riesgo}</span>
                    </div>
                    <div title={`Dificultad: ${idea.dificultad || idea.facilidad}`} className={`px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1 ${getDificultadBadge(idea.dificultad || idea.facilidad)}`}>
                      <Wrench className="w-3 h-3" />
                      <span>{idea.dificultad || idea.facilidad}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Modal Flotante Expandido */}
        <AnimatePresence>
          {activeIdea && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Fondo desenfocado */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpandedId(null)}
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
              />

              {/* Caja Modal Flotante */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 16 }}
                transition={{ type: "spring", duration: 0.32, bounce: 0.1 }}
                className="relative w-full max-w-3xl max-h-[88vh] bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-slate-950/30 overflow-hidden flex flex-col z-10"
              >
                {/* Header modal */}
                <div className="p-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-4 bg-white">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider border ${
                        areaBadgeClasses[activeIdea.area] || 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {customAreaLabels[activeIdea.area] || activeIdea.area}
                      </span>
                      <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md text-[11px] font-medium tracking-wide border border-slate-200">
                        {activeIdea.categoriaTitulo}
                      </span>
                      {activeIdea.acceso && (
                        <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider border ${
                          activeIdea.acceso === 'escritura'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : 'bg-sky-50 text-sky-700 border-sky-200'
                        }`}>
                          {activeIdea.acceso === 'escritura' ? 'Escritura en sistemas' : 'Solo lectura'}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                      {activeIdea.titulo}
                    </h3>
                  </div>
                  <button
                    onClick={() => setExpandedId(null)}
                    className="p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer flex-shrink-0"
                    title="Cerrar (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Dashboard de Métricas en el Modal */}
                <div className="px-6 py-3 bg-slate-50/80 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Beneficio:</span>
                      <span className={`font-bold flex items-center gap-1 ${getBeneficioBadge(activeIdea.beneficio)} px-2 py-0.5 rounded-md border text-[11px]`}>
                        <BarChart className="w-3 h-3" /> {activeIdea.beneficio}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Riesgo:</span>
                      <span className={`font-bold flex items-center gap-1 ${getRiesgoBadge(activeIdea.riesgo)} px-2 py-0.5 rounded-md border text-[11px]`}>
                        <ShieldAlert className="w-3 h-3" /> {activeIdea.riesgo}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Dificultad:</span>
                      <span className={`font-bold flex items-center gap-1 ${getDificultadBadge(activeIdea.dificultad || activeIdea.facilidad)} px-2 py-0.5 rounded-md border text-[11px]`}>
                        <Wrench className="w-3 h-3" /> {activeIdea.dificultad || activeIdea.facilidad}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-slate-400">{activeIdea.id}</span>
                </div>

                {/* Contenido scrolleable */}
                <div className="p-6 overflow-y-auto space-y-5 bg-white">
                  <div>
                    <h5 className="text-xs text-emerald-700 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-600" /> Resumen Ejecutivo
                    </h5>
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed whitespace-pre-wrap font-normal">
                      {activeIdea.descripcionLarga || activeIdea.descripcion}
                    </p>
                  </div>

                  {activeIdea.ejemplo && (
                    <div className="bg-sky-50/50 p-5 rounded-2xl border border-sky-100">
                      <h5 className="text-xs text-sky-800 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-sky-600" /> Caso de uso
                      </h5>
                      <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-normal">
                        {activeIdea.ejemplo}
                      </p>
                    </div>
                  )}

                  {activeIdea.pasos && activeIdea.pasos.length > 0 && (
                    <div className="bg-slate-50/90 p-5 rounded-2xl border border-slate-200">
                      <h5 className="text-xs text-slate-800 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Guía de Implementación (Paso a Paso)
                      </h5>
                      <ol className="space-y-2.5">
                        {activeIdea.pasos.map((paso: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-700 leading-relaxed">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px] flex items-center justify-center mt-0.5 border border-emerald-300">
                              {idx + 1}
                            </span>
                            <span className="font-normal">{paso}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {(activeIdea.viabilidad || activeIdea.veredicto) && (
                    <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-100">
                      <h5 className="text-xs text-amber-900 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                        <HardHat className="w-4 h-4 text-amber-600" /> Viabilidad Técnica & Operativa
                      </h5>
                      <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-normal">
                        {activeIdea.viabilidad || activeIdea.veredicto}
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer Modal */}
                <div className="p-4 px-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Pulsa ESC o fuera para cerrar</span>
                  <button
                    onClick={() => setExpandedId(null)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl shadow-xs">
            <Sparkles className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600 text-sm font-medium">No se encontraron soluciones con esos filtros.</p>
            <button 
              onClick={() => { setAreaFilter(null); setCategoriaFilter(null); }} 
              className="mt-3 text-emerald-600 hover:text-emerald-700 text-xs font-bold underline underline-offset-4 cursor-pointer"
            >
              Restablecer todos los filtros
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
