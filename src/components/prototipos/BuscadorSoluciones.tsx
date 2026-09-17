"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ChevronDown, ChevronUp, Zap, ShieldAlert, BarChart, HardHat, Layers, Activity, Sparkles, X, SlidersHorizontal, ArrowUpDown, Maximize2 } from "lucide-react";
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
                  className="bg-slate-900/90 border border-slate-800/80 hover:border-emerald-500/50 hover:bg-slate-900 transition-all rounded-2xl overflow-hidden flex flex-col justify-between p-4 md:p-5 cursor-pointer group select-none shadow-sm hover:shadow-xl hover:shadow-emerald-950/20"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded-md text-[10px] font-bold uppercase tracking-wider">
                          {customAreaLabels[idea.area] || idea.area}
                        </span>
                        <span className="px-2 py-0.5 bg-slate-800/60 text-slate-400 rounded-md text-[10px] font-medium tracking-wide border border-slate-700/50">
                          {idea.categoriaTitulo}
                        </span>
                        {idea.acceso && (
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                            idea.acceso === 'escritura'
                              ? 'bg-amber-950/40 text-amber-400 border-amber-800/50'
                              : 'bg-cyan-950/40 text-cyan-400 border-cyan-800/50'
                          }`}>
                            {idea.acceso === 'escritura' ? 'Escritura' : 'Lectura'}
                          </span>
                        )}
                      </div>
                      
                      <div className="text-slate-500 group-hover:text-emerald-400 transition-colors p-1 flex-shrink-0">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h4 className="font-bold text-sm md:text-base text-white group-hover:text-emerald-300 transition-colors leading-snug mb-2">
                      {idea.titulo}
                    </h4>
                    
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {idea.descripcion}
                    </p>
                  </div>

                  {/* Métricas Inferiores */}
                  <div className="flex items-center gap-1.5 pt-3 mt-4 border-t border-slate-800/70 flex-wrap">
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
                className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
              />

              {/* Caja Modal Flotante */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 16 }}
                transition={{ type: "spring", duration: 0.32, bounce: 0.1 }}
                className="relative w-full max-w-3xl max-h-[88vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl shadow-emerald-950/60 overflow-hidden flex flex-col z-10"
              >
                {/* Header modal */}
                <div className="p-6 pb-4 border-b border-slate-800 flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 bg-slate-800 text-slate-200 rounded-md text-[11px] font-bold uppercase tracking-wider">
                        {customAreaLabels[activeIdea.area] || activeIdea.area}
                      </span>
                      <span className="px-2.5 py-0.5 bg-slate-800/80 text-slate-300 rounded-md text-[11px] font-medium tracking-wide border border-slate-700">
                        {activeIdea.categoriaTitulo}
                      </span>
                      {activeIdea.acceso && (
                        <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider border ${
                          activeIdea.acceso === 'escritura'
                            ? 'bg-amber-950/50 text-amber-300 border-amber-800/60'
                            : 'bg-cyan-950/50 text-cyan-300 border-cyan-800/60'
                        }`}>
                          {activeIdea.acceso === 'escritura' ? 'Escritura en sistemas' : 'Solo lectura'}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                      {activeIdea.titulo}
                    </h3>
                  </div>
                  <button
                    onClick={() => setExpandedId(null)}
                    className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-full transition-colors cursor-pointer flex-shrink-0"
                    title="Cerrar (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Dashboard de Métricas en el Modal */}
                <div className="px-6 py-3 bg-slate-950/60 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Beneficio:</span>
                      <span className={`font-bold flex items-center gap-1 ${getBeneficioBadge(activeIdea.beneficio)} px-2 py-0.5 rounded-md border text-[11px]`}>
                        <BarChart className="w-3 h-3" /> {activeIdea.beneficio}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Riesgo:</span>
                      <span className={`font-bold flex items-center gap-1 ${getRiesgoBadge(activeIdea.riesgo)} px-2 py-0.5 rounded-md border text-[11px]`}>
                        <ShieldAlert className="w-3 h-3" /> {activeIdea.riesgo}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Facilidad:</span>
                      <span className={`font-bold flex items-center gap-1 ${getFacilidadBadge(activeIdea.facilidad)} px-2 py-0.5 rounded-md border text-[11px]`}>
                        <Activity className="w-3 h-3" /> {activeIdea.facilidad}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{activeIdea.id}</span>
                </div>

                {/* Contenido scrolleable */}
                <div className="p-6 overflow-y-auto space-y-6">
                  <div>
                    <h5 className="text-xs text-emerald-400 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Resumen Ejecutivo
                    </h5>
                    <p className="text-sm md:text-base text-slate-200 leading-relaxed whitespace-pre-wrap">
                      {activeIdea.descripcionLarga || activeIdea.descripcion}
                    </p>
                  </div>

                  {activeIdea.ejemplo && (
                    <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 shadow-inner">
                      <h5 className="text-xs text-cyan-400 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                        <Activity className="w-4 h-4" /> Caso de uso
                      </h5>
                      <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                        {activeIdea.ejemplo}
                      </p>
                    </div>
                  )}

                  {(activeIdea.viabilidad || activeIdea.veredicto) && (
                    <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 shadow-inner">
                      <h5 className="text-xs text-amber-400 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                        <HardHat className="w-4 h-4" /> Viabilidad Técnica & Operativa
                      </h5>
                      <p className="text-sm text-slate-400 leading-relaxed font-mono whitespace-pre-wrap">
                        {activeIdea.viabilidad || activeIdea.veredicto}
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer Modal */}
                <div className="p-4 px-6 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Pulsa ESC o fuera para cerrar</span>
                  <button
                    onClick={() => setExpandedId(null)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

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
