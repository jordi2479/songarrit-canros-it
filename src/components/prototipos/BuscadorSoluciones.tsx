"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Search, Sparkles, Loader2, BarChart, ShieldAlert, Activity, ArrowRight, Lightbulb } from "lucide-react";
import { Link } from "@/i18n/navigation";

// Datasets (to search across all ideas)
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
  const [results, setResults] = useState<any[]>([]);

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

  // Predefined pills
  const commonChallenges = [
    { label: "Evitar roturas de stock", keyword: "rotura" },
    { label: "Fidelizar cliente PRO", keyword: "pro" },
    { label: "Mejorar márgenes", keyword: "margen" },
    { label: "Optimizar almacén", keyword: "almac" }
  ];

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    setQuery(searchQuery);
    setIsSearching(true);
    setHasSearched(false);

    // Simulate AI / Search processing time
    setTimeout(() => {
      const lowerQuery = searchQuery.toLowerCase();
      // Simple fuzzy match
      const matched = allIdeas.filter(idea => 
        (idea.titulo && idea.titulo.toLowerCase().includes(lowerQuery)) || 
        (idea.descripcion && idea.descripcion.toLowerCase().includes(lowerQuery)) ||
        (idea.descripcionLarga && idea.descripcionLarga.toLowerCase().includes(lowerQuery))
      );
      
      // If no exact matches, just return some top ideas as fallback for demo purposes
      const finalResults = matched.length > 0 
        ? matched.slice(0, 3) 
        : allIdeas.filter(idea => idea.beneficio?.toLowerCase() === 'alto').slice(0, 3);
        
      setResults(finalResults);
      setIsSearching(false);
      setHasSearched(true);
    }, 1200); // 1.2s of "thinking"
  };

  const getBeneficioColor = (val: string) => {
    if (val?.toLowerCase() === "alto") return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
    if (val?.toLowerCase() === "medio") return "text-amber-500 bg-amber-500/10 border-amber-500/20";
    return "text-red-500 bg-red-500/10 border-red-500/20";
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      
      {/* Search Input Box */}
      <div className="w-full relative group">
        <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative flex items-center bg-slate-900 border-2 border-slate-700 hover:border-emerald-500 focus-within:border-emerald-400 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="pl-6 text-emerald-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
            placeholder="Ej: ¿Cómo reduzco las roturas de stock en verano?"
            className="w-full bg-transparent text-white placeholder-slate-500 px-6 py-6 text-lg focus:outline-none"
          />
          <button
            onClick={() => handleSearch(query)}
            disabled={!query.trim() || isSearching}
            className="mr-3 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
            <span className="hidden sm:inline">Analizar</span>
          </button>
        </div>
      </div>

      {/* Sugerencias */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
        <span className="text-sm font-semibold text-slate-500">Retos comunes:</span>
        {commonChallenges.map((challenge, idx) => (
          <button
            key={idx}
            onClick={() => handleSearch(challenge.keyword)}
            className="px-4 py-2 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-emerald-500/50 rounded-full text-sm transition-all"
          >
            {challenge.label}
          </button>
        ))}
      </div>

      {/* Resultados */}
      <div className="w-full mt-12 min-h-[400px]">
        <AnimatePresence mode="wait">
          
          {/* Estado Inicial */}
          {!isSearching && !hasSearched && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-slate-500 h-full py-20"
            >
              <Lightbulb className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-lg">Describe un problema y el asistente buscará las mejores iniciativas.</p>
            </motion.div>
          )}

          {/* Estado Pensando */}
          {isSearching && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center text-emerald-400 h-full py-20"
            >
              <Loader2 className="w-16 h-16 mb-6 animate-spin" />
              <p className="text-xl font-bold animate-pulse">Analizando catálogo de soluciones...</p>
              <p className="text-sm text-slate-500 mt-2">Cruzando tu reto con 150 iniciativas documentadas.</p>
            </motion.div>
          )}

          {/* Estado Resultados */}
          {!isSearching && hasSearched && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-black text-white text-center mb-8 flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6 text-emerald-400" />
                Se han encontrado {results.length} iniciativas clave de alto impacto
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {results.map((idea, i) => (
                  <motion.div
                    key={idea.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col shadow-xl transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                        {idea.areaTitulo}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-3 leading-tight">{idea.titulo}</h4>
                    <p className="text-sm text-slate-400 flex-1 mb-6 line-clamp-3">{idea.descripcion}</p>
                    
                    <div className="mt-auto space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${getBeneficioColor(idea.beneficio)}`}>
                          <BarChart className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Impacto: {idea.beneficio}</span>
                        </div>
                      </div>
                      
                      <Link 
                        href={`/catalogo`} 
                        className="flex items-center justify-center w-full gap-2 px-4 py-3 bg-slate-950 hover:bg-emerald-500 text-slate-300 hover:text-white rounded-xl font-semibold transition-all group-hover:border-emerald-400 border border-slate-800"
                      >
                        Ver detalle <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}
