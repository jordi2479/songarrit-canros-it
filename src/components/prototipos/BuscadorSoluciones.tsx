"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Search, Sparkles, BarChart, ChevronDown, Activity, ChevronUp, Bot, User, RotateCcw } from "lucide-react";

import { catalogoAreas } from "@/data/catalogo";
import { catalogoAreasEn } from "@/data/catalogo_en";
import { catalogoAreasCa } from "@/data/catalogo_ca";
import { catalogoAreasDe } from "@/data/catalogo_de";

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: { label: string; action: () => void }[];
  isResult?: boolean;
};

export function BuscadorSoluciones() {
  const locale = useLocale();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  
  // Search State
  const [activeArea, setActiveArea] = useState<string | null>(null);
  const [activeImpact, setActiveImpact] = useState<string | null>(null);
  const [activeText, setActiveText] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [liveSubFilter, setLiveSubFilter] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Get flattened ideas
  const allIdeas = useMemo(() => {
    let areas = catalogoAreas;
    if (locale === 'en') areas = catalogoAreasEn;
    if (locale === 'ca') areas = catalogoAreasCa;
    if (locale === 'de') areas = catalogoAreasDe;
    
    const flat: any[] = [];
    areas.forEach(a => {
      a.propuestas.forEach(p => {
        flat.push({ ...p, areaTitulo: a.titulo, bloque: a.bloque });
      });
    });
    return flat;
  }, [locale]);

  // INITIAL BOT MESSAGE
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "msg-1",
          sender: "bot",
          text: "Hola, soy el asistente de innovación. ¿Qué reto operativo quieres resolver hoy? Puedes describirlo o elegir un área.",
          options: [
            { label: "🏢 Área: Administración", action: () => handleUserSelection("🏢 Área: Administración", { area: "administracion" }) },
            { label: "📦 Área: Operativa / Almacén", action: () => handleUserSelection("📦 Área: Operativa / Almacén", { area: "operativa" }) },
            { label: "🤝 Área: Clientes / Ventas", action: () => handleUserSelection("🤝 Área: Clientes / Ventas", { area: "clientes" }) },
            { label: "🌐 Proyectos Globales", action: () => handleUserSelection("🌐 Proyectos Globales", { area: "global" }) }
          ]
        }
      ]);
    }
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isTyping]);

  const handleUserSelection = (text: string, filters: { area?: string, impact?: string, textSearch?: string }) => {
    setLiveSubFilter(""); // Reset live filter on new selection
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages(prev => {
      const newArr = [...prev];
      if (newArr.length > 0 && newArr[newArr.length - 1].sender === 'bot') {
        newArr[newArr.length - 1].options = undefined;
      }
      return [...newArr, userMsg];
    });

    // Lookahead for zero results on free text search
    let shouldAbort = false;
    if (filters.textSearch) {
      const lower = filters.textSearch.toLowerCase();
      const hasMatches = allIdeas.some(idea => 
        (idea.titulo && idea.titulo.toLowerCase().includes(lower)) || 
        (idea.descripcion && idea.descripcion.toLowerCase().includes(lower))
      );
      if (!hasMatches) {
        shouldAbort = true;
      }
    }

    if (shouldAbort) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          sender: "bot",
          text: `No he encontrado iniciativas que mencionen "${filters.textSearch}". Prueba a usar otras palabras o selecciona un área base para empezar.`,
          options: [
            { label: "🏢 Área: Administración", action: () => handleUserSelection("🏢 Área: Administración", { area: "administracion" }) },
            { label: "📦 Área: Operativa / Almacén", action: () => handleUserSelection("📦 Área: Operativa / Almacén", { area: "operativa" }) },
            { label: "🤝 Área: Clientes / Ventas", action: () => handleUserSelection("🤝 Área: Clientes / Ventas", { area: "clientes" }) },
            { label: "🌐 Proyectos Globales", action: () => handleUserSelection("🌐 Proyectos Globales", { area: "global" }) }
          ]
        }]);
      }, 800);
      return; // Stop flow and do not set active states
    }

    let nextArea = activeArea;
    if (filters.area !== undefined) { nextArea = filters.area; setActiveArea(filters.area); }
    if (filters.impact !== undefined) { setActiveImpact(filters.impact); }
    if (filters.textSearch !== undefined) { setActiveText(filters.textSearch); }

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      if (filters.area !== undefined || filters.textSearch !== undefined) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          sender: "bot",
          text: "Entendido. ¿Qué tipo de iniciativa priorizamos para empezar?",
          options: [
            { label: "🚀 Alto Impacto (Estratégico)", action: () => handleUserSelection("🚀 Alto Impacto (Estratégico)", { impact: "Alto" }) },
            { label: "⚡ Victorias Rápidas (Alta Facilidad)", action: () => handleUserSelection("⚡ Victorias Rápidas (Alta Facilidad)", { impact: "QuickWin" }) },
            { label: "👀 Ver todas las iniciativas", action: () => handleUserSelection("👀 Ver todas las iniciativas", { impact: "Todas" }) }
          ]
        }]);
      } 
      else if (filters.impact !== undefined) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          sender: "bot",
          text: "Analizando el catálogo base con tus preferencias... Aquí tienes las mejores iniciativas preparadas para ti.",
          isResult: true
        }]);
        setShowResults(true);
      }
    }, 800);
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const val = inputValue.trim();
    setInputValue("");
    handleUserSelection(val, { textSearch: val });
  };

  const restartChat = () => {
    setActiveArea(null);
    setActiveImpact(null);
    setActiveText(null);
    setShowResults(false);
    setExpandedId(null);
    setLiveSubFilter("");
    setMessages([
      {
        id: Date.now().toString(),
        sender: "bot",
        text: "¡Empecemos de nuevo! ¿En qué área nos enfocamos?",
        options: [
          { label: "🏢 Área: Administración", action: () => handleUserSelection("🏢 Área: Administración", { area: "administracion" }) },
          { label: "📦 Área: Operativa / Almacén", action: () => handleUserSelection("📦 Área: Operativa / Almacén", { area: "operativa" }) },
          { label: "🤝 Área: Clientes / Ventas", action: () => handleUserSelection("🤝 Área: Clientes / Ventas", { area: "clientes" }) },
          { label: "🌐 Proyectos Globales", action: () => handleUserSelection("🌐 Proyectos Globales", { area: "global" }) }
        ]
      }
    ]);
  };

  const filteredResults = useMemo(() => {
    if (!showResults) return [];
    
    return allIdeas.filter(idea => {
      // Area match
      const matchesArea = !activeArea || activeArea === "global" ? true : idea.bloque === activeArea;
      
      // Text match (Original chat search)
      const lowerQuery = activeText?.toLowerCase() || "";
      const matchesText = !activeText || 
        (idea.titulo && idea.titulo.toLowerCase().includes(lowerQuery)) || 
        (idea.descripcion && idea.descripcion.toLowerCase().includes(lowerQuery));
        
      // Impact match
      let matchesImpact = true;
      if (activeImpact === "Alto") matchesImpact = idea.beneficio?.toLowerCase() === "alto";
      if (activeImpact === "QuickWin") matchesImpact = idea.facilidad?.toLowerCase() === "alta";
      
      // Live Sub-filter (Tags/Keywords)
      const subQuery = liveSubFilter.toLowerCase();
      const matchesSubFilter = !subQuery || 
        (idea.titulo && idea.titulo.toLowerCase().includes(subQuery)) ||
        (idea.descripcion && idea.descripcion.toLowerCase().includes(subQuery)) ||
        (idea.descripcionLarga && idea.descripcionLarga.toLowerCase().includes(subQuery)) ||
        (idea.stack && idea.stack.toLowerCase().includes(subQuery));

      return matchesArea && matchesText && matchesImpact && matchesSubFilter;
    });
  }, [activeArea, activeImpact, activeText, liveSubFilter, showResults, allIdeas]);

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
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8">
      
      {/* Chat Window */}
      <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-white font-bold">Asistente Operativo</h3>
              <p className="text-emerald-400/80 text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> En línea
              </p>
            </div>
          </div>
          <button onClick={restartChat} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors" title="Reiniciar Asistente">
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div ref={messagesContainerRef} className="p-6 overflow-y-auto h-[400px] bg-slate-50 space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-slate-800 text-white' : 'bg-emerald-100 text-emerald-600'}`}>
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className={`px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed ${msg.sender === 'user' ? 'bg-slate-800 text-white rounded-tr-sm shadow-md' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm shadow-sm'}`}>
                      {msg.text}
                    </div>

                    {msg.options && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={opt.action}
                            className="px-4 py-2 bg-white border border-emerald-200 hover:border-emerald-500 hover:bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold transition-all shadow-sm text-left"
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="px-5 py-4 bg-white border border-slate-200 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200">
          <form onSubmit={(e) => { e.preventDefault(); if (!showResults) handleTextSubmit(e); }} className="relative flex items-center">
            <input
              type="text"
              value={showResults ? liveSubFilter : inputValue}
              onChange={(e) => showResults ? setLiveSubFilter(e.target.value) : setInputValue(e.target.value)}
              disabled={isTyping}
              placeholder={showResults ? "Filtra los resultados por palabra clave (ej. Airtable, clientes)..." : "O escribe tu problema aquí..."}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 pr-12 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50 transition-all"
            />
            <button
              type="submit"
              disabled={(!inputValue.trim() && !showResults) || isTyping}
              className="absolute right-2 p-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg disabled:opacity-50 disabled:bg-slate-200 disabled:text-slate-400 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Resultados Extendidos */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                {filteredResults.length} iniciativas seleccionadas
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {filteredResults.map((idea, i) => {
                const isExpanded = expandedId === idea.id;
                return (
                  <motion.div
                    layout
                    key={idea.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i > 5 ? 0 : i * 0.05 }}
                    className={`bg-white border transition-all duration-300 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg ${
                      isExpanded ? "border-emerald-400 shadow-emerald-500/10 md:col-span-2 lg:col-span-3" : "border-slate-200 hover:border-emerald-300"
                    }`}
                  >
                    <div className="cursor-pointer h-full flex flex-col group" onClick={() => setExpandedId(isExpanded ? null : idea.id)}>
                      
                      {/* MOBILE COMPACT ROW (Only visible on mobile when NOT expanded) */}
                      <div className={`md:hidden p-4 flex items-center justify-between ${isExpanded ? "hidden" : "flex"}`}>
                        <div className="flex flex-col gap-1 pr-4">
                          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{idea.areaTitulo}</span>
                          <h4 className="text-sm font-bold text-slate-900 leading-tight line-clamp-1">{idea.titulo}</h4>
                        </div>
                        <ChevronDown className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 flex-shrink-0 transition-colors" />
                      </div>

                      {/* DESKTOP CARD / MOBILE EXPANDED VIEW */}
                      <div className={`p-5 md:p-8 flex-col h-full ${!isExpanded ? "hidden md:flex" : "flex"}`}>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                            {idea.areaTitulo}
                          </span>
                          <button className="text-slate-400 group-hover:text-emerald-500 transition-colors">
                            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6 hidden md:block" />}
                          </button>
                        </div>
                        
                        <h4 className="text-lg md:text-xl font-black text-slate-900 mb-3 leading-tight">{idea.titulo}</h4>
                        <p className={`text-sm text-slate-600 mb-5 md:mb-6 ${!isExpanded && "line-clamp-2"}`}>
                          {idea.descripcion}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-2 mt-auto pt-4 border-t border-slate-100">
                          <div className={`flex items-center gap-1 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg border ${getBeneficioColor(idea.beneficio)}`}>
                            <BarChart className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Impacto: {idea.beneficio}</span>
                          </div>
                          <div className={`flex items-center gap-1 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg border ${getFacilidadColor(idea.facilidad)}`}>
                            <Activity className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Facilidad: {idea.facilidad}</span>
                          </div>
                        </div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t-2 border-dashed border-slate-100">
                                <h5 className="font-bold text-slate-900 mb-2">Detalle de la Iniciativa</h5>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                  {idea.descripcionLarga || "No hay detalle extendido para esta iniciativa."}
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-200">
                                  <div>
                                    <h5 className="font-bold text-slate-900 text-sm mb-2">Veredicto / Estrategia</h5>
                                    <p className="text-xs text-slate-600 leading-relaxed">{idea.veredicto || "Pendiente de análisis"}</p>
                                  </div>
                                  <div>
                                    <h5 className="font-bold text-slate-900 text-sm mb-2">Stack / Requisitos</h5>
                                    <div className="flex flex-wrap gap-2">
                                      {idea.stack ? idea.stack.split(',').map((s: string, idx: number) => (
                                        <span key={idx} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-semibold text-slate-700 shadow-sm">
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
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {filteredResults.length === 0 && (
              <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl mt-6">
                <p className="text-slate-500 text-lg">No hemos encontrado iniciativas con estos criterios.</p>
                <button 
                  onClick={restartChat}
                  className="mt-4 px-6 py-2 bg-emerald-50 text-emerald-600 font-bold rounded-full hover:bg-emerald-100"
                >
                  Probar otra búsqueda
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
