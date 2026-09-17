"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ChevronDown, ChevronUp, ArrowLeft, Zap, ShieldAlert, BarChart, HardHat, Layers, Activity } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { catalogoAreas } from "@/data/catalogo";

export default function Catalogo() {
  const t = useTranslations("catalogo");
  const [search, setSearch] = useState("");
  
  // Nivel 1 - Estructura
  const [bloqueFilter, setBloqueFilter] = useState<string | null>(null);
  const [areaFilter, setAreaFilter] = useState<string | null>(null);
  
  // Nivel 1 - Analítica
  const [metricaFilter, setMetricaFilter] = useState<'beneficio' | 'riesgo' | 'facilidad' | null>(null);
  const [metricaValorFilter, setMetricaValorFilter] = useState<string | null>(null);
  
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const allPropuestas = useMemo(() => {
    const list: any[] = [];
    catalogoAreas.forEach(area => {
      area.propuestas.forEach(prop => {
        list.push({
          ...prop,
          areaTitulo: area.titulo,
          bloque: area.bloque
        });
      });
    });
    return list;
  }, []);

  const customBloqueLabels: Record<string, string> = {
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
    if (!bloqueFilter) return [];
    return catalogoAreas.filter(a => a.bloque === bloqueFilter).map(a => a.titulo);
  }, [bloqueFilter]);

  const filtered = useMemo(() => {
    return allPropuestas.filter((idea) => {
      const matchSearch = search === "" ||
        idea.titulo.toLowerCase().includes(search.toLowerCase()) ||
        idea.descripcion.toLowerCase().includes(search.toLowerCase()) ||
        idea.areaTitulo.toLowerCase().includes(search.toLowerCase());
        
      const matchBloque = !bloqueFilter || idea.bloque === bloqueFilter;
      const matchArea = !areaFilter || idea.areaTitulo === areaFilter;
      
      const matchMetrica = !metricaValorFilter || (
        metricaFilter === 'beneficio' ? idea.beneficio?.toLowerCase() === metricaValorFilter :
        metricaFilter === 'riesgo' ? idea.riesgo?.toLowerCase() === metricaValorFilter :
        metricaFilter === 'facilidad' ? idea.facilidad?.toLowerCase() === metricaValorFilter : true
      );
      
      return matchSearch && matchBloque && matchArea && matchMetrica;
    });
  }, [search, bloqueFilter, areaFilter, metricaFilter, metricaValorFilter, allPropuestas]);

  const getRiesgoTextColor = (val: string) => {
    if (val?.toLowerCase() === "alto") return "text-red-500";
    if (val?.toLowerCase() === "medio") return "text-amber-500";
    return "text-emerald-500";
  };

  const getBeneficioTextColor = (val: string) => {
    if (val?.toLowerCase() === "alto") return "text-emerald-500";
    if (val?.toLowerCase() === "medio") return "text-amber-500";
    return "text-red-500";
  };
  
  const getFacilidadTextColor = (val: string) => {
    if (val?.toLowerCase() === "alto") return "text-emerald-500";
    if (val?.toLowerCase() === "medio") return "text-amber-500";
    return "text-red-500";
  };

  const getRiesgoColor = getRiesgoTextColor;
  const getBeneficioColor = getBeneficioTextColor;

  const handleBloqueClick = (key: string) => {
    if (bloqueFilter === key) {
      setBloqueFilter(null);
      setAreaFilter(null);
    } else {
      setBloqueFilter(key);
      setAreaFilter(null);
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

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> {t("volver")}
            </Link>
            <span className="text-sm text-slate-500">
              {t("mostrando")} <strong className="text-white">{filtered.length}</strong> de {allPropuestas.length} ideas
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
              className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-inner"
            />
          </div>

          {/* Línea Principal (Padres) */}
          <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
            
            {/* Bloques (Alineados a la izquierda) */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-3.5 h-3.5 text-slate-500 mr-1" />
              {Object.entries(customBloqueLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => handleBloqueClick(key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    bloqueFilter === key
                      ? "bg-blue-500 text-white border border-blue-400"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            
            {/* Métricas (Alineados a la derecha) */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs uppercase font-bold text-slate-500 mr-1 hidden md:block">Métricas:</span>
              {metricaBotones.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => handleMetricaClick(btn.id as any)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    metricaFilter === btn.id
                      ? "bg-emerald-500 text-white border border-emerald-400"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700"
                  }`}
                >
                  <btn.icon className={`w-3.5 h-3.5 ${metricaFilter === btn.id ? "text-white" : "text-slate-500"}`} />
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Línea Secundaria (Hijos) */}
          <AnimatePresence>
            {(bloqueFilter || metricaFilter) && (
              <motion.div 
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-3 border-t border-slate-800 flex flex-col md:flex-row flex-wrap gap-4 items-start md:items-center justify-between bg-slate-900/50 p-3 rounded-xl">
                  
                  {/* Hijos de Bloques */}
                  <div className="flex flex-wrap gap-2 items-center">
                    {bloqueFilter && areasParaBloque.length > 0 && (
                      <>
                        <Layers className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mr-1">Áreas:</span>
                        {areasParaBloque.map((areaNombre) => (
                          <button
                            key={areaNombre}
                            onClick={() => setAreaFilter(areaFilter === areaNombre ? null : areaNombre)}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                              areaFilter === areaNombre
                                ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                                : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800"
                            }`}
                          >
                            {areaNombre}
                          </button>
                        ))}
                      </>
                    )}
                  </div>

                  {/* Hijos de Métricas */}
                  <div className="flex flex-wrap gap-2 items-center">
                    {metricaFilter && (
                      <>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mr-1">Nivel:</span>
                        {valoresPorMetrica[metricaFilter].map((val) => (
                          <button
                            key={val.id}
                            onClick={() => setMetricaValorFilter(metricaValorFilter === val.id ? null : val.id)}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer border ${
                              metricaValorFilter === val.id
                                ? val.active
                                : "bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200"
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${val.dot}`}></span>
                            {val.label}
                          </button>
                        ))}
                      </>
                    )}
                  </div>
                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
                      {customBloqueLabels[idea.bloque] || idea.bloque}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-800/50 text-slate-400 rounded text-[10px] font-bold uppercase tracking-wider flex-shrink-0 border border-slate-700/50">
                      {idea.areaTitulo}
                    </span>
                  </div>
                  
                  <span className="font-semibold text-sm text-white flex-1">{idea.titulo}</span>
                  
                  <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                    {/* Mini Dashboard de Métricas (Solo visible en desktop) */}
                    <div className="hidden md:flex items-center gap-3 mr-2 bg-slate-950/50 px-3 py-1.5 rounded-lg border border-slate-800/50">
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
                      <div title={`Facilidad: ${idea.facilidad}`} className={`flex items-center gap-1.5 ${getFacilidadTextColor(idea.facilidad)}`}>
                        <Activity className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">{idea.facilidad}</span>
                      </div>
                    </div>

                    {expandedId === idea.id ? (
                      <ChevronUp className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
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
                        
                        <div className="md:col-span-2 space-y-6">
                          <div>
                            <h4 className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                              <Zap className="w-4 h-4" /> Resumen Ejecutivo
                            </h4>
                            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{idea.descripcionLarga || idea.descripcion}</p>
                          </div>
                          
                          {idea.veredicto && (
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 shadow-inner">
                              <h4 className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                                <HardHat className="w-4 h-4" /> Veredicto honesto
                              </h4>
                              <p className="text-sm text-slate-400 leading-relaxed font-mono whitespace-pre-wrap">{idea.veredicto}</p>
                            </div>
                          )}
                        </div>

                        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 h-fit space-y-4 shadow-inner">
                          <div>
                            <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Impacto / Beneficio</h4>
                            <p className={`text-sm font-bold flex items-center gap-2 ${getBeneficioColor(idea.beneficio)}`}>
                              <BarChart className="w-4 h-4" /> {idea.beneficio}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Riesgo / Fricción</h4>
                            <p className="text-sm font-bold flex items-center gap-2 text-slate-300">
                              <ShieldAlert className="w-4 h-4" /> {idea.riesgo}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Facilidad Técnica</h4>
                            <p className="text-sm text-slate-300">{idea.facilidad}</p>
                          </div>
                          <div>
                            <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Stack Propuesto</h4>
                            <p className="text-sm text-slate-400">{idea.stack}</p>
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
