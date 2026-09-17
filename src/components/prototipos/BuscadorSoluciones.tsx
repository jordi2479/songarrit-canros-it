"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ChevronDown, ChevronUp, Zap, ShieldAlert, BarChart, HardHat, Layers, Activity, Sparkles, X, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import { catalogoCategorias } from "@/data/catalogo";
import { catalogoCategoriasEn } from "@/data/catalogo_en";
import { catalogoCategoriasCa } from "@/data/catalogo_ca";
import { catalogoCategoriasDe } from "@/data/catalogo_de";

export function BuscadorSoluciones() {
  const t = useTranslations("catalogo");
  const locale = useLocale();
  const [search, setSearch] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Nivel 1 - Estructura
  const [areaFilter, setAreaFilter] = useState<string | null>(null);
  const [categoriaFilter, setCategoriaFilter] = useState<string | null>(null);
  
  // Nivel 2 - Analítica
  const [metricaFilter, setMetricaFilter] = useState<'beneficio' | 'riesgo' | 'facilidad' | null>(null);
  const [metricaValorFilter, setMetricaValorFilter] = useState<string | null>(null);
  
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

  const customAreaLabels: Record<string, string> = {
    global: t("grupo"), 
    administracion: t("nucleo"), 
    clientes: t("clientes"), 
    operativa: t("operativa"),
  };

  const metricaBotones = [
    { id: 'beneficio', label: t("beneficio"), icon: BarChart },
    { id: 'riesgo', label: t("riesgo"), icon: ShieldAlert },
    { id: 'facilidad', label: t("facilidad"), icon: Activity }
  ];

  const valoresPorMetrica = {
    beneficio: [
      { id: 'alto', label: t("alto"), dot: 'bg-emerald-500', active: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
      { id: 'medio', label: t("medio"), dot: 'bg-amber-500', active: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
      { id: 'bajo', label: t("bajo"), dot: 'bg-red-500', active: 'bg-red-500/20 text-red-400 border-red-500/30' }
    ],
    riesgo: [
      { id: 'bajo', label: t("bajo"), dot: 'bg-emerald-500', active: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
      { id: 'medio', label: t("medio"), dot: 'bg-amber-500', active: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
      { id: 'alto', label: t("alto"), dot: 'bg-red-500', active: 'bg-red-500/20 text-red-400 border-red-500/30' }
    ],
    facilidad: [
      { id: 'alto', label: t("alto"), dot: 'bg-emerald-500', active: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
      { id: 'medio', label: t("medio"), dot: 'bg-amber-500', active: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
      { id: 'bajo', label: t("bajo"), dot: 'bg-red-500', active: 'bg-red-500/20 text-red-400 border-red-500/30' }
    ]
  };

  const areasParaBloque = useMemo(() => {
    if (!areaFilter) return [];
    return localizedCatalogoAreas.filter(a => a.area === areaFilter).map(a => a.titulo);
  }, [areaFilter, localizedCatalogoAreas]);

  const filtered = useMemo(() => {
    return allPropuestas.filter((idea) => {
      const matchSearch = search === "" ||
        idea.titulo.toLowerCase().includes(search.toLowerCase()) ||
        idea.descripcion.toLowerCase().includes(search.toLowerCase()) ||
        idea.categoriaTitulo.toLowerCase().includes(search.toLowerCase());
        
      const matchBloque = !areaFilter || idea.area === areaFilter;
      const matchArea = !categoriaFilter || idea.categoriaTitulo === categoriaFilter;
      
      const matchMetrica = !metricaValorFilter || (
        metricaFilter === 'beneficio' ? idea.beneficio?.toLowerCase() === metricaValorFilter :
        metricaFilter === 'riesgo' ? idea.riesgo?.toLowerCase() === metricaValorFilter :
        metricaFilter === 'facilidad' ? idea.facilidad?.toLowerCase() === metricaValorFilter : true
      );
      
      return matchSearch && matchBloque && matchArea && matchMetrica;
    });
  }, [search, areaFilter, categoriaFilter, metricaFilter, metricaValorFilter, allPropuestas]);

  const getRiesgoBadge = (val: string) => {
    const v = val?.toLowerCase();
    if (v === "bajo") return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
    if (v === "medio") return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    return "text-red-400 bg-red-500/10 border-red-500/20";
  };

  const getBeneficioBadge = (val: string) => {
    const v = val?.toLowerCase();
    if (v === "alto") return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
    if (v === "medio") return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    return "text-red-400 bg-red-500/10 border-red-500/20";
  };
  
  const getFacilidadBadge = (val: string) => {
    const v = val?.toLowerCase();
    if (v === "alta" || v === "alto") return "text-blue-400 bg-blue-500/10 border-blue-500/20";
    if (v === "media" || v === "medio") return "text-violet-400 bg-violet-500/10 border-violet-500/20";
    return "text-slate-400 bg-slate-500/10 border-slate-500/20";
  };

  const handleBloqueClick = (key: string) => {
    if (areaFilter === key) {
      setAreaFilter(null);
      setCategoriaFilter(null);
    } else {
      setAreaFilter(key);
      setCategoriaFilter(null);
    }
  };

  const handleMetricaClick = (key: 'beneficio' | 'riesgo' | 'facilidad') => {
    if (metricaFilter === key) {
      setMetricaFilter(null);
      setMetricaValorFilter(null);
    } else {
      setMetricaFilter(key);
      setMetricaValorFilter(null);
    }
  };

  const clearAllFilters = () => {
    setSearch("");
    setAreaFilter(null);
    setCategoriaFilter(null);
    setMetricaFilter(null);
    setMetricaValorFilter(null);
  };

  const hasActiveFilters = Boolean(search || areaFilter || categoriaFilter || metricaFilter || metricaValorFilter);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      
      {/* BLOQUE 1: CONSOLA DE FILTRADO Y BÚSQUEDA */}
      <div className="w-full bg-slate-900/95 text-white border border-slate-800 rounded-3xl shadow-xl p-5 md:p-6 backdrop-blur-sm">
        
        {/* Cabecera del Panel */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base md:text-lg leading-tight">
                Consola de Filtros
              </h3>
              <p className="text-xs text-slate-400">Selecciona por área operativa o perfil analítico</p>
            </div>
          </div>
          
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <X className="w-3.5 h-3.5 text-red-400" />
              <span>Limpiar filtros</span>
            </button>
          )}
        </div>

        {/* Barra de Búsqueda */}
        <div className="relative mb-4">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder={t("buscar")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-inner"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sección de Botones de Filtro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          
          {/* 1. Macro-Área & Subcategorías */}
          <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-800/80 flex flex-col gap-2.5">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mr-1">Área:</span>
              {Object.entries(customAreaLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => handleBloqueClick(key)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    areaFilter === key
                      ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {areaFilter && areasParaBloque.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-1.5 items-center pt-2.5 border-t border-slate-800/80">
                    <Layers className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mr-1">Categorías:</span>
                    {areasParaBloque.map((areaNombre) => (
                      <button
                        key={areaNombre}
                        onClick={() => setCategoriaFilter(categoriaFilter === areaNombre ? null : areaNombre)}
                        className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                          categoriaFilter === areaNombre
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold"
                            : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800"
                        }`}
                      >
                        {areaNombre}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 2. Métricas & Niveles */}
          <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-800/80 flex flex-col gap-2.5">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mr-1">Métrica:</span>
              {metricaBotones.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => handleMetricaClick(btn.id as any)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    metricaFilter === btn.id
                      ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
                  }`}
                >
                  <btn.icon className={`w-3.5 h-3.5 ${metricaFilter === btn.id ? "text-white" : "text-slate-400"}`} />
                  {btn.label}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {metricaFilter && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-1.5 items-center pt-2.5 border-t border-slate-800/80">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mr-1">Nivel:</span>
                    {valoresPorMetrica[metricaFilter].map((val) => (
                      <button
                        key={val.id}
                        onClick={() => setMetricaValorFilter(metricaValorFilter === val.id ? null : val.id)}
                        className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all flex items-center gap-1.5 cursor-pointer border ${
                          metricaValorFilter === val.id
                            ? val.active
                            : "bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${val.dot}`}></span>
                        {val.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* BLOQUE 2: MURAL DE INICIATIVAS (SIN CONTENEDOR CERRADO) */}
      <div className="w-full flex flex-col gap-4">
        
        {/* Barra de Estado de Resultados */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Iniciativas Encontradas
            </span>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {filtered.length} {filtered.length === 1 ? 'iniciativa' : 'iniciativas'}
          </span>
        </div>

        {/* Rejilla de Tarjetas 2 Columnas Libre */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          <AnimatePresence mode="popLayout">
            {filtered.map((idea) => {
              const isExpanded = expandedId === idea.id;
              return (
                <motion.div
                  key={idea.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-slate-900/90 border transition-all rounded-2xl overflow-hidden flex flex-col ${
                    isExpanded 
                      ? "border-emerald-500/60 shadow-2xl shadow-emerald-950/50 bg-slate-900" 
                      : "border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/100"
                  }`}
                >
                  {/* Tarjeta Principal */}
                  <div 
                    onClick={() => setExpandedId(isExpanded ? null : idea.id)}
                    className="p-4 md:p-5 cursor-pointer flex flex-col h-full justify-between gap-3 group select-none"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded-md text-[10px] font-bold uppercase tracking-wider">
                            {customAreaLabels[idea.area] || idea.area}
                          </span>
                          <span className="px-2 py-0.5 bg-slate-800/60 text-slate-400 rounded-md text-[10px] font-medium tracking-wide border border-slate-700/50">
                            {idea.categoriaTitulo}
                          </span>
                        </div>
                        
                        <div className="text-slate-500 group-hover:text-emerald-400 transition-colors p-1">
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>

                      <h4 className="font-bold text-sm md:text-base text-white group-hover:text-emerald-300 transition-colors leading-snug">
                        {idea.titulo}
                      </h4>
                      
                      <p className={`text-xs text-slate-400 mt-2 leading-relaxed ${!isExpanded ? "line-clamp-2" : ""}`}>
                        {idea.descripcion}
                      </p>
                    </div>

                    {/* Métricas Inferiores */}
                    <div className="flex items-center gap-1.5 pt-3 border-t border-slate-800/70 flex-wrap">
                      <div className={`px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1 ${getBeneficioBadge(idea.beneficio)}`}>
                        <BarChart className="w-3 h-3" />
                        <span>{idea.beneficio}</span>
                      </div>
                      <div className={`px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1 ${getRiesgoBadge(idea.riesgo)}`}>
                        <ShieldAlert className="w-3 h-3" />
                        <span>{idea.riesgo}</span>
                      </div>
                      <div className={`px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1 ${getFacilidadBadge(idea.facilidad)}`}>
                        <Activity className="w-3 h-3" />
                        <span>{idea.facilidad}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desplegable In-Place */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden bg-slate-950/70 border-t border-slate-800"
                      >
                        <div className="p-4 md:p-5 space-y-4">
                          
                          <div>
                            <h5 className="text-[11px] text-emerald-400 uppercase tracking-wider font-bold mb-1.5 flex items-center gap-1.5">
                              <Zap className="w-3.5 h-3.5" /> Resumen Ejecutivo & Detalle
                            </h5>
                            <p className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                              {idea.descripcionLarga || idea.descripcion}
                            </p>
                          </div>

                          {idea.veredicto && (
                            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800/90">
                              <h5 className="text-[11px] text-amber-400 uppercase tracking-wider font-bold mb-1 flex items-center gap-1.5">
                                <HardHat className="w-3.5 h-3.5" /> Veredicto Operativo
                              </h5>
                              <p className="text-xs text-slate-400 leading-relaxed font-mono whitespace-pre-wrap">
                                {idea.veredicto}
                              </p>
                            </div>
                          )}

                          {idea.stack && (
                            <div className="pt-2 border-t border-slate-800/80">
                              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1.5">Stack & Herramientas</span>
                              <div className="flex flex-wrap gap-1.5">
                                {idea.stack.split(',').map((s: string, idx: number) => (
                                  <span key={idx} className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-md text-[10px] font-semibold text-slate-300">
                                    {s.trim()}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <Sparkles className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 text-sm font-medium">No se encontraron soluciones con esos filtros.</p>
            <button 
              onClick={clearAllFilters} 
              className="mt-3 text-emerald-400 hover:text-emerald-300 text-xs font-bold underline underline-offset-4 cursor-pointer"
            >
              Restablecer todos los filtros
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
