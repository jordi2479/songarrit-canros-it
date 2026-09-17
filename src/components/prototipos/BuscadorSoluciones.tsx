"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Zap, ShieldAlert, BarChart, HardHat, Layers, Activity, Wrench, Sparkles, X, SlidersHorizontal, ArrowUpDown, Maximize2, CheckCircle2, Store, TrendingUp, AlertCircle, Cpu } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import { catalogoCategorias } from "@/data/catalogo";
import { catalogoCategoriasEn } from "@/data/catalogo_en";
import { catalogoCategoriasCa } from "@/data/catalogo_ca";
import { catalogoCategoriasDe } from "@/data/catalogo_de";
import { AREA_THEMES } from "@/data/areaColors";
import { AreaId } from "@/data/types";

const cardSpringTransition = {
  type: "spring" as const,
  damping: 28,
  stiffness: 260,
  mass: 0.85
};

function FormattedText({ 
  text, 
  className = "",
  boldClassName = "font-bold text-slate-900" 
}: { 
  text?: string; 
  className?: string;
  boldClassName?: string;
}) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className={boldClassName}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      })}
    </span>
  );
}

export function BuscadorSoluciones() {
  const t = useTranslations("catalogo");
  const locale = useLocale();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Filtros
  const [areaFilter, setAreaFilter] = useState<string | null>(null);
  const [categoriaFilter, setCategoriaFilter] = useState<string | null>(null);
  
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'accion' | 'negocio' | 'tecnica'>('accion');

  // Cerrar con Escape y bloquear scroll del body mientras la carta está en primer plano
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExpandedId(null);
      }
    };
    if (expandedId) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [expandedId]);

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
      setActiveTab('accion');
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

  const isCa = locale === 'ca';
  const isEn = locale === 'en';
  const isDe = locale === 'de';

  const uiText = {
    iniciativasEncontradas: isCa ? "Iniciatives Trobades" : isEn ? "Initiatives Found" : isDe ? "Gefundene Initiativen" : "Iniciativas Encontradas",
    iniciativaSingular: isCa ? "iniciativa" : isEn ? "initiative" : isDe ? "Initiative" : "iniciativa",
    iniciativasPlural: isCa ? "iniciatives" : isEn ? "initiatives" : isDe ? "Initiativen" : "iniciativas",
    planAccion: isCa ? "1. Pla d'Acció" : isEn ? "1. Action Plan" : isDe ? "1. Aktionsplan" : "1. Plan de Acción",
    casoNegocio: isCa ? "2. Cas de Negoci" : isEn ? "2. Business Case" : isDe ? "2. Business Case" : "2. Caso de Negocio",
    viabilidadTecnica: isCa ? "3. Viabilitat Tècnica" : isEn ? "3. Technical Feasibility" : isDe ? "3. Technische Machbarkeit" : "3. Viabilidad Técnica",
    objetivoEjecutivo: isCa ? "Objectiu Executiu" : isEn ? "Executive Objective" : isDe ? "Führungsziel" : "Objetivo Ejecutivo",
    aisladoText: isCa 
      ? "Procés analític aïllat. S'executa sobre còpies i volcats programats sense sobrecarregar ni posar en risc els sistemes de mostrador."
      : isEn
      ? "Isolated analytical process. Runs on scheduled dumps without overloading counter POS systems."
      : isDe
      ? "Isolierter analytischer Prozess. Läuft auf zeitgesteuerten Kopien ohne Kassenrisiko."
      : "Proceso analítico aislado. Se ejecuta sobre copias y volcados programados sin sobrecargar ni poner en riesgo los sistemas de mostrador.",
    verAccion: isCa ? "Veure en acció?" : isEn ? "See in action?" : isDe ? "In Aktion sehen?" : "¿Ver en acción?",
    casoNegocioLink: isCa ? "Cas de Negoci →" : isEn ? "Business Case →" : isDe ? "Business Case →" : "Caso de Negocio →",
    hojaRuta: isCa ? "Full de Ruta d'Implantació" : isEn ? "Implementation Roadmap" : isDe ? "Implementierungs-Roadmap" : "Hoja de Ruta de Implementación",
    fasesRapidas: isCa ? "4 Fases Ràpides" : isEn ? "4 Fast Phases" : isDe ? "4 Schnelle Phasen" : "4 Fases Rápidas",
    situacionActual: isCa ? "Situació Actual (El Problema)" : isEn ? "Current Situation (The Problem)" : isDe ? "Aktuelle Situation (Das Problem)" : "Situación Actual (El Problema)",
    friccionText: isCa ? "Fricció o pèrdua operativa identificada en el dia a dia." : isEn ? "Operational friction or loss identified day-to-day." : isDe ? "Im Alltag festgestellter operativer Verlust." : "Fricción o pérdida operativa identificada en el día a día.",
    impactoRoi: isCa ? "Impacte i Retorn (ROI)" : isEn ? "Impact & Return (ROI)" : isDe ? "Wirkung & Rendite (ROI)" : "Impacto y Retorno (ROI)",
    beneficioEstimado: isCa ? "Benefici estimat:" : isEn ? "Estimated benefit:" : isDe ? "Geschätzter Nutzen:" : "Beneficio estimado:",
    retornoDirecto: isCa ? "Retorn Directe" : isEn ? "Direct Return" : isDe ? "Direkte Rendite" : "Retorno Directo",
    arquitectura: isCa ? "Arquitectura & Desacoblament" : isEn ? "Architecture & Decoupling" : isDe ? "Architektur & Entkopplung" : "Arquitectura & Desacoplamiento",
    aislamientoGarantizado: isCa ? "Aïllament transaccional garantit (zero risc per a la tenda)" : isEn ? "Guaranteed transactional isolation (zero store risk)" : isDe ? "Garantierte transaktionale Isolation (Null Risiko)" : "Aislamiento transaccional garantizado (cero riesgo para la tienda)",
    softwareRecomendado: isCa ? "Programari Recomanat (Kit Principal)" : isEn ? "Recommended Software (Core Kit)" : isDe ? "Empfohlene Software (Haupt-Kit)" : "Software Recomendado (Kit Principal)",
    esencial: isCa ? "Essencial" : isEn ? "Essential" : isDe ? "Wesentlich" : "Esencial",
    softwareOpcional: isCa ? "Alternatives / Programari Opcional" : isEn ? "Alternatives / Optional Software" : isDe ? "Alternativen / Optionale Software" : "Alternativas / Software Opcional",
    integracionTienda: isCa ? "Integració amb Tenda:" : isEn ? "Store Integration:" : isDe ? "Filialintegration:" : "Integración con Tienda:",
    escrituraLabel: isCa ? "Importació a ERP/TPV (amb validació)" : isEn ? "ERP/POS Import (validated)" : isDe ? "ERP/Kasse Import (validiert)" : "Importación a ERP/TPV (con validación)",
    lecturaLabel: isCa ? "Volcat segur des d'ERP/TPV" : isEn ? "Safe ERP/POS export dump" : isDe ? "Sicherer ERP/Kasse Datenabzug" : "Volcado seguro desde ERP/TPV",
    escCerrar: isCa ? "Prem ESC o a fora per tornar a la taula" : isEn ? "Press ESC or click outside to return to board" : isDe ? "ESC drücken oder außen klicken" : "Pulsa ESC o fuera para volver a la mesa",
    cerrarFicha: isCa ? "Tancar Fitxa" : isEn ? "Close Card" : isDe ? "Karte Schließen" : "Cerrar Ficha",
  };

  // Semántica de métricas: Verde (Favorable), Amarillo (Neutro), Rojo (Desafiante)
  const getBeneficioBadge = (val: string) => {
    const v = val?.toLowerCase().trim();
    if (v === "alto" || v === "alt" || v === "high" || v === "hoch") {
      return "text-emerald-700 bg-emerald-50 border-emerald-200/80";
    }
    if (v === "medio" || v === "mitjà" || v === "mitja" || v === "medium" || v === "mittel") {
      return "text-amber-700 bg-amber-50 border-amber-200/80";
    }
    return "text-red-700 bg-red-50 border-red-200/80";
  };

  const getRiesgoBadge = (val: string) => {
    const v = val?.toLowerCase().trim();
    if (v === "bajo" || v === "baix" || v === "low" || v === "niedrig") {
      return "text-emerald-700 bg-emerald-50 border-emerald-200/80";
    }
    if (v === "medio" || v === "mitjà" || v === "mitja" || v === "medium" || v === "mittel") {
      return "text-amber-700 bg-amber-50 border-amber-200/80";
    }
    return "text-red-700 bg-red-50 border-red-200/80";
  };
  
  const getDificultadBadge = (val?: string) => {
    const v = val?.toLowerCase().trim();
    if (v === "alta" || v === "alto" || v === "alt" || v === "high" || v === "hoch") {
      return "text-red-700 bg-red-50 border-red-200/80";
    }
    if (v === "media" || v === "medio" || v === "mitjana" || v === "mitjà" || v === "mitja" || v === "medium" || v === "mittel") {
      return "text-amber-700 bg-amber-50 border-amber-200/80";
    }
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
      <div className="w-full flex flex-col gap-4 md:gap-6 bg-white border border-slate-200/90 rounded-2xl md:rounded-3xl shadow-lg shadow-slate-200/50 p-4 sm:p-6 md:p-8">
        
        {/* Cabecera del Panel */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md shrink-0">
              <Layers className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-base md:text-lg leading-tight">
                Mapa de Iniciativas
              </h3>
              <p className="text-[11px] md:text-xs text-slate-500 font-medium hidden sm:block mt-0.5">Explora las soluciones por área y categoría</p>
            </div>
          </div>
          
          {(areaFilter || categoriaFilter) && (
            <button
              onClick={() => { setAreaFilter(null); setCategoriaFilter(null); }}
              className="px-3 py-1.5 md:px-4 md:py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs shrink-0"
            >
              <X className="w-3.5 h-3.5 text-red-500" />
              <span>{isCa ? "Restablir" : isEn ? "Reset" : isDe ? "Zurücksetzen" : "Restablecer"}</span>
            </button>
          )}
        </div>

        <div className="w-full h-px bg-slate-100"></div>

        {/* VISTA MOBILE (< md): 2 Filas de Píldoras Deslizables (Áreas y Categorías) */}
        <div className="flex flex-col gap-3 md:hidden">
          {/* Fila 1: Macro-Áreas en píldoras horizontales deslizables */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {isCa ? "1. Tria una Àrea:" : isEn ? "1. Select an Area:" : isDe ? "1. Bereich wählen:" : "1. Selecciona un Área:"}
            </span>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-1 px-1 scroll-smooth">
              {Object.entries(customAreaLabels).map(([key, label]) => {
                const isActive = areaFilter === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleBloqueClick(key)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border shrink-0 transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? AREA_THEMES[key as AreaId].light.pillActive
                        : "bg-white text-slate-600 border-slate-200 shadow-2xs hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${areaDotClasses[key]}`} />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Fila 2: Categorías correspondientes en píldoras horizontales deslizables */}
          <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-100">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {isCa ? "2. Filtra per Categoria:" : isEn ? "2. Filter by Category:" : isDe ? "2. Nach Kategorie filtern:" : "2. Filtra por Categoría:"}
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 -mx-1 px-1 scroll-smooth">
              {localizedCatalogoAreas
                .filter(cat => !areaFilter || cat.area === areaFilter)
                .map(cat => {
                  const isSelectedCat = categoriaFilter === cat.titulo;
                  const theme = AREA_THEMES[cat.area as AreaId]?.light;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setCategoriaFilter(isSelectedCat ? null : cat.titulo)}
                      className={`whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-semibold border transition-all shrink-0 cursor-pointer ${
                        isSelectedCat
                          ? `shadow-sm ${theme?.badge} border-current`
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {cat.titulo}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>

        {/* VISTA DESKTOP (>= md): Exactamente idéntica a la actual */}
        <div className="hidden md:flex md:flex-col md:gap-6">
          {/* 1. Macro-Áreas (Toggles) */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mr-2">Áreas:</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mr-2">Categorías:</span>
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
        </div>

      </div>

      {/* BLOQUE 2: MURAL DE INICIATIVAS */}
      <div className="w-full flex flex-col gap-4">
        
        {/* Barra de Estado de Resultados */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
              {uiText.iniciativasEncontradas}
            </span>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            {filtered.length} {filtered.length === 1 ? uiText.iniciativaSingular : uiText.iniciativasPlural}
          </span>
        </div>

        {/* Guía en Móvil cuando no hay nada seleccionado */}
        {!areaFilter && !categoriaFilter && (
          <div className="md:hidden bg-white border border-slate-200/90 rounded-2xl p-6 text-center shadow-xs">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-100">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              {isCa ? "Tria una àrea per començar" : isEn ? "Select an area to start" : isDe ? "Wählen Sie einen Bereich" : "Elige un área para comenzar"}
            </h4>
            <p className="text-xs text-slate-500 max-w-xs mx-auto mb-4">
              {isCa 
                ? "Prem qualsevol dels 4 blocs superiors per veure les seves iniciatives en format compacte." 
                : isEn 
                ? "Tap any of the 4 top blocks to view its initiatives in compact view." 
                : isDe 
                ? "Tippen Sie auf einen der 4 oberen Blöcke, um die Initiativen kompakt zu sehen." 
                : "Pulsa cualquiera de los 4 bloques superiores para ver sus iniciativas en formato compacto."}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {Object.entries(customAreaLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => handleBloqueClick(key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                    AREA_THEMES[key as AreaId].light.pillActive
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${areaDotClasses[key]}`} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Rejilla de Tarjetas (en móvil se ocultan si no hay filtro activo para evitar saturar) */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 md:gap-4 items-stretch ${
          !areaFilter && !categoriaFilter ? 'hidden md:grid' : ''
        }`}>
          <AnimatePresence mode="popLayout">
            {filtered.map((idea) => {
              return (
                <motion.div
                  layoutId={`card-container-${idea.id}`}
                  key={idea.id}
                  transition={cardSpringTransition}
                  whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  onClick={() => {
                    setActiveTab('accion');
                    setExpandedId(idea.id);
                  }}
                  className={`bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-lg rounded-xl md:rounded-2xl overflow-hidden flex flex-col justify-between p-3 sm:p-4 md:p-5 cursor-pointer group select-none shadow-xs ${
                    areaBorderHover[idea.area] || ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1.5 mb-1.5 md:mb-2.5">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`px-1.5 md:px-2 py-0.5 rounded-md text-[9px] md:text-[10px] font-bold uppercase tracking-wider border ${
                          areaBadgeClasses[idea.area] || 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}>
                          {customAreaLabels[idea.area] || idea.area}
                        </span>
                        <span className="px-1.5 md:px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[9px] md:text-[10px] font-medium tracking-wide border border-slate-200/80">
                          {idea.categoriaTitulo}
                        </span>
                      </div>
                      
                      <div className="text-slate-400 group-hover:text-slate-700 transition-colors p-0.5 md:p-1 flex-shrink-0">
                        <Maximize2 className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      </div>
                    </div>

                    <motion.h4
                      layoutId={`card-title-${idea.id}`}
                      transition={cardSpringTransition}
                      className="font-bold text-xs sm:text-sm md:text-base text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-1 md:mb-2"
                    >
                      {idea.titulo}
                    </motion.h4>
                    
                    {/* Solo visible en pantallas grandes (Desktop/Tablet) */}
                    <p className="hidden md:block text-xs text-slate-600 leading-relaxed line-clamp-3">
                      <FormattedText text={idea.descripcion} />
                    </p>
                  </div>

                  {/* Métricas Inferiores */}
                  <div className="flex items-center gap-1 md:gap-1.5 pt-2 md:pt-3 mt-2 md:mt-4 border-t border-slate-100 flex-wrap">
                    <div className={`px-1.5 md:px-2 py-0.5 rounded-md text-[9px] md:text-[10px] font-bold border flex items-center gap-1 ${getBeneficioBadge(idea.beneficio)}`}>
                      <BarChart className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      <span>{idea.beneficio}</span>
                    </div>
                    <div className={`px-1.5 md:px-2 py-0.5 rounded-md text-[9px] md:text-[10px] font-bold border flex items-center gap-1 ${getRiesgoBadge(idea.riesgo)}`}>
                      <ShieldAlert className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      <span>{idea.riesgo}</span>
                    </div>
                    <div title={`Dificultad: ${idea.dificultad || idea.facilidad}`} className={`px-1.5 md:px-2 py-0.5 rounded-md text-[9px] md:text-[10px] font-bold border flex items-center gap-1 ${getDificultadBadge(idea.dificultad || idea.facilidad)}`}>
                      <Wrench className="w-2.5 h-2.5 md:w-3 md:h-3" />
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
            >
              {/* Fondo desenfocado */}
              <div
                onClick={() => setExpandedId(null)}
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer"
              />

              {/* Caja Dossier Flotante (Mantiene la proporción apaisada de la tarjeta original) */}
              <motion.div
                layoutId={`card-container-${activeIdea.id}`}
                transition={cardSpringTransition}
                className="relative w-full max-w-lg md:max-w-4xl lg:max-w-5xl h-[88vh] md:h-[600px] lg:h-[620px] md:max-h-[88vh] bg-white border border-slate-200/90 rounded-3xl shadow-2xl shadow-slate-950/40 overflow-hidden flex flex-col z-10"
              >
                {/* Cabecera del Dossier */}
                <div className="p-5 md:px-7 pb-3.5 border-b border-slate-100 bg-white shrink-0">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider border ${
                        areaBadgeClasses[activeIdea.area] || 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {customAreaLabels[activeIdea.area] || activeIdea.area}
                      </span>
                      <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md text-[11px] font-medium tracking-wide border border-slate-200">
                        {activeIdea.categoriaTitulo}
                      </span>
                    </div>
                    <motion.h3
                      layoutId={`card-title-${activeIdea.id}`}
                      transition={cardSpringTransition}
                      className="text-lg md:text-2xl font-bold text-slate-900 leading-snug"
                    >
                      {activeIdea.titulo}
                    </motion.h3>
                  </div>
                </div>

                {/* Contenedor interior del dossier que se revela suavemente mientras la carta se abre */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, delay: 0.06 }}
                  className="flex flex-col flex-1 overflow-hidden"
                >

                {/* Pestañas estilo Carpeta Clasificadora / Dossier */}
                <div className="flex items-end px-5 md:px-7 pt-2.5 bg-slate-100/90 border-b border-slate-200 gap-2 select-none shrink-0 overflow-hidden no-scrollbar">
                  <button
                    onClick={() => setActiveTab('accion')}
                    className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer relative border-t border-x ${
                      activeTab === 'accion'
                        ? 'bg-white text-slate-900 border-slate-200 -mb-px pb-3 shadow-xs'
                        : 'bg-slate-200/50 text-slate-500 border-transparent hover:text-slate-800 hover:bg-slate-200/80'
                    }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${activeTab === 'accion' ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <span>{uiText.planAccion}</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('negocio')}
                    className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer relative border-t border-x ${
                      activeTab === 'negocio'
                        ? 'bg-white text-slate-900 border-slate-200 -mb-px pb-3 shadow-xs'
                        : 'bg-slate-200/50 text-slate-500 border-transparent hover:text-slate-800 hover:bg-slate-200/80'
                    }`}
                  >
                    <Store className={`w-3.5 h-3.5 ${activeTab === 'negocio' ? 'text-amber-600' : 'text-slate-400'}`} />
                    <span>{uiText.casoNegocio}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('tecnica')}
                    className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer relative border-t border-x ${
                      activeTab === 'tecnica'
                        ? 'bg-white text-slate-900 border-slate-200 -mb-px pb-3 shadow-xs'
                        : 'bg-slate-200/50 text-slate-500 border-transparent hover:text-slate-800 hover:bg-slate-200/80'
                    }`}
                  >
                    <HardHat className={`w-3.5 h-3.5 ${activeTab === 'tecnica' ? 'text-sky-600' : 'text-slate-400'}`} />
                    <span>{uiText.viabilidadTecnica}</span>
                  </button>
                </div>

                {/* Barra de Métricas Semáforo */}
                <div className="px-5 md:px-7 py-2 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
                  <div className="flex items-center gap-3.5 flex-wrap">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{t("beneficio")}:</span>
                      <span className={`font-bold flex items-center gap-1 ${getBeneficioBadge(activeIdea.beneficio)} px-2 py-0.5 rounded-md border text-[10px]`}>
                        <BarChart className="w-3 h-3" /> {activeIdea.beneficio}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{t("riesgo")}:</span>
                      <span className={`font-bold flex items-center gap-1 ${getRiesgoBadge(activeIdea.riesgo)} px-2 py-0.5 rounded-md border text-[10px]`}>
                        <ShieldAlert className="w-3 h-3" /> {activeIdea.riesgo}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{t("dificultad")}:</span>
                      <span className={`font-bold flex items-center gap-1 ${getDificultadBadge(activeIdea.dificultad || activeIdea.facilidad)} px-2 py-0.5 rounded-md border text-[10px]`}>
                        <Wrench className="w-3 h-3" /> {activeIdea.dificultad || activeIdea.facilidad}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-400 hidden sm:inline">{activeIdea.id}</span>
                </div>

                {/* Cuerpo del Dossier (Layout apaisado en 2 columnas según pestaña) */}
                <div className="p-5 md:p-7 overflow-y-auto no-scrollbar bg-white flex-1">
                  
                  {/* PESTAÑA 1: PLAN DE ACCIÓN (2 Columnas Apaisadas - Cero Scroll) */}
                  {activeTab === 'accion' && (
                    <motion.div
                      key="accion"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-stretch h-full"
                    >
                      {/* Columna Izquierda: Objetivo Ejecutivo */}
                      <div className="md:col-span-5 flex flex-col justify-between gap-4 bg-slate-50 border border-slate-200/90 rounded-2xl p-5 shadow-2xs">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800">
                              {uiText.objetivoEjecutivo}
                            </span>
                          </div>
                          <p className="text-base md:text-lg font-bold text-slate-900 leading-snug">
                            <FormattedText text={activeIdea.descripcion} />
                          </p>
                          <p className="text-xs text-slate-600 leading-relaxed pt-1">
                            {uiText.aisladoText}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                          <span className="text-slate-500">{uiText.verAccion}</span>
                          <button
                            onClick={() => setActiveTab('negocio')}
                            className="font-bold text-amber-700 hover:text-amber-800 hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            {uiText.casoNegocioLink}
                          </button>
                        </div>
                      </div>

                      {/* Columna Derecha: Hoja de Ruta de 4 Pasos */}
                      <div className="md:col-span-7 flex flex-col justify-between space-y-3">
                        <div className="flex items-center justify-between pb-1">
                          <h4 className="text-xs text-slate-700 uppercase tracking-widest font-bold flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {uiText.hojaRuta}
                          </h4>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{uiText.fasesRapidas}</span>
                        </div>

                        {activeIdea.pasos && (
                          <div className="grid gap-2.5">
                            {activeIdea.pasos.map((paso: string, idx: number) => (
                              <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center border border-emerald-200 mt-0.5">
                                  {idx + 1}
                                </span>
                                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                                  <FormattedText text={paso} />
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* PESTAÑA 2: CASO DE NEGOCIO (Opción A: Problema en Tienda vs. Retorno ROI) */}
                  {activeTab === 'negocio' && (
                    <motion.div
                      key="negocio"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 h-full items-stretch"
                    >
                      {/* Columna 1: El Problema en Tienda */}
                      <div className="bg-rose-50/40 p-5 rounded-2xl border border-rose-200/80 shadow-2xs flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                            <h5 className="text-xs text-rose-900 uppercase tracking-widest font-bold flex items-center gap-2">
                              <AlertCircle className="w-4 h-4 text-rose-600" /> {uiText.situacionActual}
                            </h5>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-normal">
                            <FormattedText text={activeIdea.ejemplo || activeIdea.descripcion} boldClassName="font-bold text-rose-950" />
                          </p>
                        </div>
                        <div className="pt-3 border-t border-rose-200/60 text-[11px] text-rose-800 font-medium flex items-center gap-1.5">
                          <Store className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                          <span>{uiText.friccionText}</span>
                        </div>
                      </div>

                      {/* Columna 2: Impacto y Retorno (ROI) */}
                      <div className="bg-emerald-50/40 p-5 rounded-2xl border border-emerald-200/80 shadow-2xs flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <h5 className="text-xs text-emerald-900 uppercase tracking-widest font-bold flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-emerald-600" /> {uiText.impactoRoi}
                            </h5>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-normal">
                            <FormattedText text={activeIdea.descripcionLarga || activeIdea.descripcion} boldClassName="font-bold text-emerald-950" />
                          </p>
                        </div>
                        <div className="pt-3 border-t border-emerald-200/60 text-[11px] text-emerald-800 font-medium flex items-center justify-between">
                          <span>{uiText.beneficioEstimado} <strong>{activeIdea.beneficio}</strong></span>
                          <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">{uiText.retornoDirecto}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* PESTAÑA 3: VIABILIDAD TÉCNICA (2 Columnas Apaisadas) */}
                  {activeTab === 'tecnica' && (
                    <motion.div
                      key="tecnica"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 h-full items-start"
                    >
                      {/* Columna Izquierda: Arquitectura & Desacoplamiento */}
                      {(activeIdea.viabilidad || activeIdea.veredicto) && (
                        <div className="md:col-span-6 bg-sky-50/40 p-5 rounded-2xl border border-sky-200/80 shadow-2xs flex flex-col justify-between">
                          <div>
                            <h5 className="text-xs text-sky-900 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                              <HardHat className="w-4 h-4 text-sky-600" /> {uiText.arquitectura}
                            </h5>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-normal">
                              <FormattedText text={activeIdea.viabilidad || activeIdea.veredicto} boldClassName="font-bold text-sky-950" />
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-sky-200/60 text-[11px] text-sky-800 font-semibold flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            {uiText.aislamientoGarantizado}
                          </div>
                        </div>
                      )}

                      {/* Columna Derecha: Ecosistema de Software & Herramientas */}
                      <div className="md:col-span-6 flex flex-col gap-3">
                        
                        {/* Software Recomendado */}
                        {activeIdea.softwareRecomendado && activeIdea.softwareRecomendado.length > 0 && (
                          <div className="bg-slate-50/90 p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
                            <div className="flex items-center justify-between gap-2 mb-2.5">
                              <span className="text-[10px] text-slate-700 uppercase font-bold tracking-wider flex items-center gap-1.5">
                                <Cpu className="w-3.5 h-3.5 text-emerald-600" /> {uiText.softwareRecomendado}
                              </span>
                              <span className="text-[10px] text-emerald-700 bg-emerald-100/70 font-bold px-2 py-0.5 rounded-md">
                                {uiText.esencial}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {activeIdea.softwareRecomendado.map((soft: string, sIdx: number) => (
                                <span
                                  key={sIdx}
                                  className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 shadow-2xs flex items-center gap-1.5"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                  {soft}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Software Opcional / Alternativas */}
                        {activeIdea.softwareOpcional && activeIdea.softwareOpcional.length > 0 && (
                          <div className="bg-slate-50/60 p-3.5 rounded-2xl border border-slate-200/70 shadow-2xs">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block mb-2">
                              {uiText.softwareOpcional}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {activeIdea.softwareOpcional.map((soft: string, sIdx: number) => (
                                <span
                                  key={sIdx}
                                  className="px-2 py-0.5 bg-slate-100/80 border border-slate-200/60 rounded-md text-[11px] font-medium text-slate-600"
                                >
                                  {soft}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tipo de Integración con ERP/TPV */}
                        <div className="bg-slate-50/60 px-4 py-2.5 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs">
                          <span className="text-slate-500 text-[11px] font-medium">{uiText.integracionTienda}</span>
                          <span className="font-bold text-slate-800 text-[11px]">
                            {activeIdea.acceso === 'escritura' ? uiText.escrituraLabel : uiText.lecturaLabel}
                          </span>
                        </div>

                      </div>
                    </motion.div>
                  )}

                </div>

                {/* Footer del Dossier */}
                <div className="p-3.5 px-6 border-t border-slate-100 bg-slate-50/90 flex items-center justify-between shrink-0">
                  <span className="text-xs text-slate-400">{uiText.escCerrar}</span>
                  <button
                    onClick={() => setExpandedId(null)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                  >
                    {uiText.cerrarFicha}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
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
