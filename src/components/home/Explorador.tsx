"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Building2, Store, Users, Settings, ArrowRight, Zap, Target } from "lucide-react";

// Datasets
import { catalogoCategorias } from "@/data/catalogo";
import { catalogoCategoriasEn } from "@/data/catalogo_en";
import { catalogoCategoriasCa } from "@/data/catalogo_ca";
import { catalogoCategoriasDe } from "@/data/catalogo_de";
import { AREA_THEMES } from "@/data/areaColors";
import { AreaId } from "@/data/types";

// Mapa de sinapsis: Área Local ID -> Array de Áreas Globales ID
const sinapsis: Record<string, string[]> = {
  // Operativa -> Global
  "area-01": ["area-05", "area-06"], // Compras/Stock -> Centralizadas, Compartit
  "area-11": ["area-06", "area-08"], // Logistica -> Compartit, Identidad
  // Administración -> Global
  "area-03": ["area-04", "area-07"], // Direccion -> Estrategia, Finanzas
  "area-02": ["area-07"], // Finanzas Locales -> Finanzas Grupo
  "area-10": ["area-04"], // Equipo -> Estrategia
  "area-12": ["area-04", "area-07"], // Procesos -> Estrategia, Finanzas
  "area-15": ["area-04"], // Digital -> Estrategia
  // Clientes -> Global
  "area-09": ["area-07", "area-08"], // Ventas -> Finanzas, Identidad
  "area-14": ["area-08"], // Marketing -> Identidad
  // Fallbacks generales
};

export function Explorador() {
  const t = useTranslations("catalogo");
  const tCategorias = useTranslations("categorias");
  const locale = useLocale();

  const areas = useMemo(() => {
    if (locale === 'en') return catalogoCategoriasEn;
    if (locale === 'ca') return catalogoCategoriasCa;
    if (locale === 'de') return catalogoCategoriasDe;
    return catalogoCategorias;
  }, [locale]);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeId = hoveredId || selectedId;

  const adminAreas = areas.filter(a => a.area === 'administracion');
  const clientesAreas = areas.filter(a => a.area === 'clientes');
  const operativaAreas = areas.filter(a => a.area === 'operativa');
  const globalAreas = areas.filter(a => a.area === 'global');

  // Si pasamos el ratón o seleccionamos una global, mostramos qué locales la alimentan
  const getActiveGlobals = () => {
    if (!activeId) return [];
    if (globalAreas.find(a => a.id === activeId)) return [activeId];
    return sinapsis[activeId] || globalAreas.map(a => a.id);
  };

  const getActiveLocals = () => {
    if (!activeId) return [];
    if (!globalAreas.find(a => a.id === activeId)) return [activeId];
    return Object.entries(sinapsis)
      .filter(([localId, globalIds]) => globalIds.includes(activeId))
      .map(([localId]) => localId);
  };

  const activeGlobals = getActiveGlobals();
  const activeLocals = getActiveLocals();
  const isInteracting = activeId !== null;

  const toggleSelect = (id: string) => {
    setSelectedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full relative max-w-7xl mx-auto py-6 md:py-10 px-3 sm:px-4">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-stretch justify-between relative">
        
        {/* IZQUIERDA: Bloque Estratégico (Global) */}
        <div className="w-full md:w-[45%] flex flex-col justify-center relative z-10">
          <div className="relative">
            {/* Efecto de aura centralizado cuando interactúas */}
            <div className={`absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full transition-opacity duration-700 pointer-events-none ${isInteracting ? 'opacity-100' : 'opacity-0'}`} />
            
            <div className={`p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 transition-all duration-500 ${
              isInteracting && activeGlobals.length > 0 
                ? 'border-indigo-500/50 bg-slate-900/90 shadow-2xl shadow-indigo-500/15' 
                : 'border-indigo-500/20 bg-slate-900/60 hover:border-indigo-500/40'
            }`}>
              <div className="flex items-center justify-between mb-4 md:mb-8 pb-3 md:pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Building2 className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight">{t("grupo")}</h3>
                    <p className="text-xs md:text-sm text-indigo-400 font-semibold tracking-wider">{tCategorias("estrategiaCentral")}</p>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
              </div>

              <div className="grid grid-cols-1 gap-2.5 md:gap-3">
                {globalAreas.map((area) => {
                  const isActive = activeGlobals.includes(area.id);
                  const isDimmed = isInteracting && !isActive;
                  const isPinned = selectedId === area.id;

                  return (
                    <button 
                      key={area.id}
                      type="button"
                      onClick={() => toggleSelect(area.id)}
                      onMouseEnter={() => setHoveredId(area.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`w-full text-left block p-3 md:p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                        isActive 
                          ? 'bg-indigo-500/20 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] scale-[1.02] z-10' 
                          : isDimmed
                            ? 'bg-slate-900 border-slate-800 opacity-40 grayscale'
                            : 'bg-slate-950/80 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900'
                      } ${isPinned ? 'ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900' : ''}`}
                    >
                      {isActive && (
                        <motion.div layoutId="glowGlobal" className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0" />
                      )}
                      <div className="relative z-10 flex items-center justify-between">
                        <div>
                          <h4 className={`text-sm md:text-base font-bold ${isActive ? 'text-indigo-100' : 'text-slate-200 group-hover:text-indigo-200 transition-colors'}`}>{area.titulo}</h4>
                        </div>
                        <Target className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'text-indigo-400' : 'text-slate-600'} group-hover:text-indigo-400 transition-colors`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CONECTOR MÓVIL: Sinergias Global a Local */}
        <div className="md:hidden flex flex-col items-center my-2 gap-1 relative z-0">
          <div className="w-0.5 h-3 bg-indigo-500/40" />
          <div className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
            <Zap className="w-3 h-3 text-indigo-400 animate-pulse" />
            <span>{tCategorias("sinergiasBadge")}</span>
          </div>
          <div className="w-0.5 h-3 bg-indigo-500/40" />
        </div>

        {/* CENTRO: Conector Visual Abstracto (Flujo) - Solo Desktop */}
        <div className="hidden md:flex flex-col justify-center items-center w-[10%] relative z-0">
          
          {/* Eje central (Columna vertebral) */}
          <div className="absolute inset-y-10 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent"></div>
          
          <motion.div 
            animate={{ 
              scale: isInteracting ? 1.2 : 1, 
              opacity: isInteracting ? 1 : 0.4,
              boxShadow: isInteracting ? "0 0 40px rgba(99,102,241,0.5)" : "0 0 0px rgba(99,102,241,0)"
            }}
            className="w-12 h-12 bg-slate-900 border-2 border-indigo-500/50 rounded-full flex items-center justify-center z-10 relative overflow-hidden"
          >
            <motion.div 
              animate={{ x: isInteracting ? [ 20, -20 ] : 0, opacity: isInteracting ? [0, 1, 0] : 0.5 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </motion.div>
            {!isInteracting && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400/50">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            )}
          </motion.div>
        </div>

        {/* DERECHA: Bloques Tácticos (Local) */}
        <div className="w-full md:w-[45%] flex flex-col gap-4 md:gap-6 relative z-10">
          <LocalBlock 
            title={t("nucleo")} 
            icon={Store} 
            areaId="administracion" 
            areas={adminAreas} 
            selectedId={selectedId}
            onToggleSelect={toggleSelect}
            hoveredId={hoveredId}
            setHovered={setHoveredId}
            activeLocals={activeLocals}
            isInteracting={isInteracting}
          />
          <LocalBlock 
            title={t("clientes")} 
            icon={Users} 
            areaId="clientes" 
            areas={clientesAreas} 
            selectedId={selectedId}
            onToggleSelect={toggleSelect}
            hoveredId={hoveredId}
            setHovered={setHoveredId}
            activeLocals={activeLocals}
            isInteracting={isInteracting}
          />
          <LocalBlock 
            title={t("operativa")} 
            icon={Settings} 
            areaId="operativa" 
            areas={operativaAreas} 
            selectedId={selectedId}
            onToggleSelect={toggleSelect}
            hoveredId={hoveredId}
            setHovered={setHoveredId}
            activeLocals={activeLocals}
            isInteracting={isInteracting}
          />
        </div>

      </div>
    </div>
  );
}

// Subcomponente para los bloques locales
function LocalBlock({ 
  title, 
  icon: Icon, 
  areaId, 
  areas, 
  selectedId, 
  onToggleSelect, 
  setHovered, 
  activeLocals, 
  isInteracting 
}: any) {
  const theme = AREA_THEMES[areaId as AreaId]?.dark;
  const dotColor = AREA_THEMES[areaId as AreaId]?.dot || 'bg-slate-400';
  const colorName = AREA_THEMES[areaId as AreaId]?.colorName || 'slate';
  const iconColor = theme?.baseText || 'text-slate-400';

  const isBlockActive = areas.some((a: any) => activeLocals.includes(a.id));

  // Mapping de ring según colorName
  const ringClasses: Record<string, string> = {
    sky: 'ring-sky-400',
    amber: 'ring-amber-400',
    emerald: 'ring-emerald-400',
    indigo: 'ring-indigo-400',
  };

  const ringClass = ringClasses[colorName] || 'ring-blue-400';

  return (
    <div className={`p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl border transition-all duration-500 bg-slate-900/50 ${
      isBlockActive 
        ? `${theme?.border} ${theme?.glow} bg-slate-900/80` 
        : `border-slate-800 ${theme?.bgHover}`
    }`}>
      <div className="flex items-center justify-between mb-3 md:mb-4 pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${theme?.badge}`}>
            <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
          </div>
          <h3 className="font-bold text-white uppercase tracking-wider text-xs md:text-sm">{title}</h3>
        </div>
        <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {areas.map((area: any) => {
          const isActive = activeLocals.includes(area.id);
          const isDimmed = isInteracting && !isActive;
          const isPinned = selectedId === area.id;

          return (
            <button 
              key={area.id}
              type="button"
              onClick={() => onToggleSelect(area.id)}
              onMouseEnter={() => setHovered(area.id)}
              onMouseLeave={() => setHovered(null)}
              className={`w-full text-left p-2.5 sm:p-3 rounded-lg border transition-all duration-300 cursor-pointer flex justify-between items-center group ${
                isActive 
                  ? `${theme?.badge} ${theme?.border} ${theme?.glow} scale-[1.02] z-10` 
                  : isDimmed
                    ? 'bg-slate-900 border-slate-800/50 opacity-30 grayscale'
                    : `bg-slate-950 border-slate-800 ${theme?.borderHover}`
              } ${isPinned ? `ring-2 ${ringClass} ring-offset-2 ring-offset-slate-900` : ''}`}
            >
              <div>
                <h4 className={`text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white transition-colors'}`}>
                  {area.titulo}
                </h4>
              </div>
              <Zap className={`w-3 h-3 flex-shrink-0 ${isActive ? iconColor : 'text-slate-600 opacity-0 group-hover:opacity-100'} transition-all`} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
