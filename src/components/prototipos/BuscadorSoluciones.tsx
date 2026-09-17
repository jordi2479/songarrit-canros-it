"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Search, Sparkles, Loader2, BarChart, ChevronDown, Activity, ChevronUp, Layers, CheckCircle2 } from "lucide-react";

// Datasets
import { catalogoAreas } from "@/data/catalogo";
import { catalogoAreasEn } from "@/data/catalogo_en";
import { catalogoAreasCa } from "@/data/catalogo_ca";
import { catalogoAreasDe } from "@/data/catalogo_de";

export function BuscadorSoluciones() {
  const t = useTranslations("catalogo");
  const locale = useLocale();

  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  // Filters
  const [filterBloque, setFilterBloque] = useState<string>("Todos");
  const [filterEstado, setFilterEstado] = useState<string>("Todos");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Get flattened ideas
  const allIdeas = useMemo(() => {
    let areas = catalogoAreas;
    if (locale === 'en') areas = catalogoAreasEn;
    if (locale === 'ca') areas = catalogoAreasCa;
    if (locale === 'de') areas = catalogoAreasDe;
    
    const flat: any[] = [];
    areas.forEach(a => {
      a.propuestas.forEach(p => {
        flat.push({
          ...p,
          areaTitulo: a.titulo,
          bloque: a.bloque
        });
      });
    });
    return flat;
  }, [locale]);

  const uniqueBloques = ["Todos", ...Array.from(new Set(allIdeas.map(i => i.bloque)))];
  const uniqueEstados = ["Todos", ...Array.from(new Set(allIdeas.map(i => i.estado)))];

  // Predefined pills
  const commonChallenges = [
    { label: "Evitar roturas de stock", keyword: "rotura" },
    { label: "Fidelizar cliente PRO", keyword: "pro" },
    { label: "Mejorar márgenes", keyword: "margen" },
    { label: "Ver todo el catálogo", keyword: "ALL" }
  ];

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery === "ALL" ? "" : searchQuery);
    setIsSearching(true);
    setHasSearched(false);
    setExpandedId(null);

    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 800); // reduced wait for better UX
  };

  const filteredResults = useMemo(() => {
    if (!hasSearched) return [];
    
    return allIdeas.filter(idea => {
      // 1. Text Search
      const lowerQuery = query.toLowerCase();
      const matchesText = !query || 
        (idea.titulo && idea.titulo.toLowerCase().includes(lowerQuery)) || 
        (idea.descripcion && idea.descripcion.toLowerCase().includes(lowerQuery)) ||
        (idea.descripcionLarga && idea.descripcionLarga.toLowerCase().includes(lowerQuery));
        
      // 2. Filters
      const matchesBloque = filterBloque === "Todos" || idea.bloque === filterBloque;
      const matchesEstado = filterEstado === "Todos" || idea.estado === filterEstado;
      
      return matchesText && matchesBloque && matchesEstado;
    });
  }, [query, filterBloque, filterEstado, hasSearched, allIdeas]);

  const getBeneficioColor = (val: string) => {
    if (val?.toLowerCase() === "alto") return "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (val?.toLowerCase() === "medio") return "text-amber-600 bg-amber-50 border-amber-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getFacilidadColor = (val: string) => {
    if (val?.toLowerCase() === "alta") return "text-blue-600 bg-blue-50 border-blue-200";
    if (val?.toLowerCase() === "media") return "text-violet-600 bg-violet-50 border-violet-200";
    return "text-slate-600 bg-slate-50 border-slate-200";
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      
      {/* Search Input Box */}
      <div className="w-full relative group">
        <div className="absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative flex flex-col sm:flex-row items-center bg-white border-2 border-slate-200 hover:border-emerald-500 focus-within:border-emerald-400 rounded-3xl shadow-xl transition-all duration-300 p-2 gap-2">
          <div className="pl-4 text-emerald-500 hidden sm:block">
            <Sparkles className="w-6 h-6" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
            placeholder="Ej: ¿Cómo optimizo el almacén?"
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 px-4 py-4 text-lg focus:outline-none"
          />
          <button
            onClick={() => handleSearch(query || "ALL")}
            disabled={isSearching}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30"
          >
            {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
            <span>Analizar</span>
          </button>
        </div>
      </div>

      {/* Sugerencias */}
      {!hasSearched && !isSearching && (
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <span className="text-sm font-semibold text-slate-500">O empieza por:</span>
          {commonChallenges.map((challenge, idx) => (
            <button
              key={idx}
              onClick={() => handleSearch(challenge.keyword)}
              className="px-4 py-2 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 border border-slate-200 hover:border-emerald-200 rounded-full text-sm transition-all font-medium"
            >
              {challenge.label}
            </button>
          ))}
        </div>
      )}

      {/* Filtros Activos (solo si ya buscó) */}
      <AnimatePresence>
        {hasSearched && !isSearching && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="w-full flex flex-wrap items-center gap-4 mt-6 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-2 mr-4">
              <Layers className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-bold text-slate-700">Filtros:</span>
            </div>
            
            <select 
              value={filterBloque} 
              onChange={(e) => setFilterBloque(e.target.value)}
              className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:border-emerald-500"
            >
              {uniqueBloques.map(b => (
                <option key={b} value={b}>{b === "Todos" ? "Todas las Áreas" : b}</option>
              ))}
            </select>

            <select 
              value={filterEstado} 
              onChange={(e) => setFilterEstado(e.target.value)}
              className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:border-emerald-500"
            >
              {uniqueEstados.map(e => (
                <option key={e} value={e}>{e === "Todos" ? "Cualquier Estado" : e}</option>
              ))}
            </select>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resultados */}
      <div className="w-full mt-8 min-h-[400px]">
        <AnimatePresence mode="wait">
          
          {isSearching && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center text-emerald-500 h-full py-20"
            >
              <Loader2 className="w-16 h-16 mb-6 animate-spin" />
              <p className="text-xl font-black animate-pulse">Analizando 150 iniciativas...</p>
            </motion.div>
          )}

          {!isSearching && hasSearched && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold text-slate-500 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                {filteredResults.length} iniciativas encontradas
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResults.map((idea, i) => {
                  const isExpanded = expandedId === idea.id;
                  
                  return (
                    <motion.div
                      layout
                      key={idea.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i > 5 ? 0 : i * 0.05 }}
                      className={`bg-white border transition-all duration-300 rounded-3xl overflow-hidden shadow-lg ${
                        isExpanded ? "border-emerald-400 shadow-emerald-500/10 md:col-span-2" : "border-slate-200 hover:border-emerald-300"
                      }`}
                    >
                      <div className="p-6 md:p-8 cursor-pointer flex flex-col h-full" onClick={() => setExpandedId(isExpanded ? null : idea.id)}>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            {idea.areaTitulo}
                          </span>
                          <button className="text-slate-400 hover:text-emerald-500 transition-colors">
                            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                          </button>
                        </div>
                        
                        <h4 className="text-xl font-black text-slate-900 mb-3">{idea.titulo}</h4>
                        <p className={`text-sm text-slate-600 mb-6 ${!isExpanded && "line-clamp-2"}`}>
                          {idea.descripcion}
                        </p>
                        
                        {/* Quick Tags always visible */}
                        <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-slate-100">
                          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${getBeneficioColor(idea.beneficio)}`}>
                            <BarChart className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">Impacto: {idea.beneficio}</span>
                          </div>
                          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${getFacilidadColor(idea.facilidad)}`}>
                            <Activity className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">Facilidad: {idea.facilidad}</span>
                          </div>
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-8 mt-8 border-t-2 border-dashed border-slate-100">
                                <h5 className="font-bold text-slate-900 mb-2">Detalle de la Iniciativa</h5>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                  {idea.descripcionLarga || "No hay detalle extendido para esta iniciativa."}
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                  <div>
                                    <h5 className="font-bold text-slate-900 text-sm mb-2">Veredicto / Estrategia</h5>
                                    <p className="text-xs text-slate-600">{idea.veredicto || "Pendiente de análisis"}</p>
                                  </div>
                                  <div>
                                    <h5 className="font-bold text-slate-900 text-sm mb-2">Stack / Requisitos</h5>
                                    <div className="flex flex-wrap gap-2">
                                      {idea.stack ? idea.stack.split(',').map((s: string, idx: number) => (
                                        <span key={idx} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-semibold text-slate-700">
                                          {s.trim()}
                                        </span>
                                      )) : <span className="text-xs text-slate-500">Estándar</span>}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {filteredResults.length === 0 && (
                <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl">
                  <p className="text-slate-500 text-lg">No hemos encontrado iniciativas con esos filtros.</p>
                  <button 
                    onClick={() => { setFilterBloque("Todos"); setFilterEstado("Todos"); setQuery(""); }}
                    className="mt-4 px-6 py-2 bg-emerald-50 text-emerald-600 font-bold rounded-full hover:bg-emerald-100"
                  >
                    Limpiar Filtros
                  </button>
                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}
