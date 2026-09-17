"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Building2, Store, Users, Settings, ArrowRight, Zap, Target } from "lucide-react";
import { Link } from "@/i18n/navigation";

// Datasets
import { catalogoAreas } from "@/data/catalogo";
import { catalogoAreasEn } from "@/data/catalogo_en";
import { catalogoAreasCa } from "@/data/catalogo_ca";
import { catalogoAreasDe } from "@/data/catalogo_de";

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
  const locale = useLocale();

  const areas = useMemo(() => {
    if (locale === 'en') return catalogoAreasEn;
    if (locale === 'ca') return catalogoAreasCa;
    if (locale === 'de') return catalogoAreasDe;
    return catalogoAreas;
  }, [locale]);

  const [hoveredLocal, setHoveredLocal] = useState<string | null>(null);

  const adminAreas = areas.filter(a => a.bloque === 'administracion');
  const clientesAreas = areas.filter(a => a.bloque === 'clientes');
  const operativaAreas = areas.filter(a => a.bloque === 'operativa');
  const globalAreas = areas.filter(a => a.bloque === 'global');

  // Si pasamos el ratón por una global, mostramos qué locales la alimentan
  const getActiveGlobals = () => {
    if (!hoveredLocal) return [];
    // Si estamos haciendo hover sobre un global, es él mismo
    if (globalAreas.find(a => a.id === hoveredLocal)) return [hoveredLocal];
    return sinapsis[hoveredLocal] || globalAreas.map(a => a.id); // si no hay mapeo, brilla todo
  };

  const getActiveLocals = () => {
    if (!hoveredLocal) return [];
    // Si hacemos hover sobre local, es él mismo
    if (!globalAreas.find(a => a.id === hoveredLocal)) return [hoveredLocal];
    // Si hacemos hover sobre global, buscamos los locales que lo apuntan
    return Object.entries(sinapsis)
      .filter(([localId, globalIds]) => globalIds.includes(hoveredLocal))
      .map(([localId]) => localId);
  };

  const activeGlobals = getActiveGlobals();
  const activeLocals = getActiveLocals();
  const isHovering = hoveredLocal !== null;

  return (
    <div className="w-full relative max-w-7xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-8 items-stretch justify-between relative">
        
        {/* IZQUIERDA: Bloque Estratégico (Global) */}
        <div className="w-full md:w-[45%] flex flex-col justify-center relative z-10">
          <div className="relative">
            {/* Efecto de aura centralizado cuando interactúas */}
            <div className={`absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full transition-opacity duration-700 pointer-events-none ${isHovering ? 'opacity-100' : 'opacity-0'}`} />
            
            <div className={`p-8 rounded-3xl border-2 transition-all duration-500 ${isHovering ? 'border-blue-500/40 bg-slate-900/80 shadow-2xl shadow-blue-500/10' : 'border-slate-800 bg-slate-900/50'}`}>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
                <Building2 className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">{t("grupo")}</h3>
                  <p className="text-sm text-blue-400 font-semibold tracking-wider">ESTRATEGIA CENTRAL</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {globalAreas.map((area) => {
                  const isActive = activeGlobals.includes(area.id);
                  const isDimmed = isHovering && !isActive;

                  return (
                    <Link 
                      key={area.id}
                      href={`/catalogo?area=${area.titulo}`}
                      onMouseEnter={() => setHoveredLocal(area.id)}
                      onMouseLeave={() => setHoveredLocal(null)}
                      className={`block p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                        isActive 
                          ? 'bg-blue-500/20 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-[1.02] z-10' 
                          : isDimmed
                            ? 'bg-slate-900 border-slate-800 opacity-40 grayscale'
                            : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {isActive && (
                        <motion.div layoutId="glowGlobal" className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0" />
                      )}
                      <div className="relative z-10 flex items-center justify-between">
                        <div>
                          <h4 className={`font-bold ${isActive ? 'text-blue-100' : 'text-slate-200'}`}>{area.titulo}</h4>
                        </div>
                        <Target className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-slate-600'} group-hover:text-blue-400 transition-colors`} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CENTRO: Conector Visual Abstracto (Flujo) - Solo Desktop */}
        <div className="hidden md:flex flex-col justify-center items-center w-[10%] relative z-0">
          
          {/* Eje central (Columna vertebral) */}
          <div className="absolute inset-y-10 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
          
          <motion.div 
            animate={{ 
              scale: isHovering ? 1.2 : 1, 
              opacity: isHovering ? 1 : 0.3,
              boxShadow: isHovering ? "0 0 40px rgba(59,130,246,0.5)" : "0 0 0px rgba(59,130,246,0)"
            }}
            className="w-12 h-12 bg-slate-900 border-2 border-blue-500/50 rounded-full flex items-center justify-center z-10 relative overflow-hidden"
          >
            <motion.div 
              animate={{ x: isHovering ? [ 20, -20 ] : 0, opacity: isHovering ? [0, 1, 0] : 0.5 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </motion.div>
            {!isHovering && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400/50">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            )}
          </motion.div>
        </div>

        {/* DERECHA: Bloques Tácticos (Local) */}
        <div className="w-full md:w-[45%] flex flex-col gap-6 relative z-10">
          <LocalBlock 
            title={t("nucleo")} 
            icon={Store} 
            color="emerald" 
            areas={adminAreas} 
            hoveredLocal={hoveredLocal}
            setHovered={setHoveredLocal}
            activeLocals={activeLocals}
            isHovering={isHovering}
          />
          <LocalBlock 
            title={t("clientes")} 
            icon={Users} 
            color="violet" 
            areas={clientesAreas} 
            hoveredLocal={hoveredLocal}
            setHovered={setHoveredLocal}
            activeLocals={activeLocals}
            isHovering={isHovering}
          />
          <LocalBlock 
            title={t("operativa")} 
            icon={Settings} 
            color="amber" 
            areas={operativaAreas} 
            hoveredLocal={hoveredLocal}
            setHovered={setHoveredLocal}
            activeLocals={activeLocals}
            isHovering={isHovering}
          />
        </div>

      </div>
    </div>
  );
}

// Subcomponente para los bloques locales
function LocalBlock({ title, icon: Icon, color, areas, hoveredLocal, setHovered, activeLocals, isHovering }: any) {
  return (
    <div className={`p-6 rounded-3xl border transition-all duration-500 bg-slate-900/50 ${isHovering ? 'border-slate-800' : 'border-slate-800'}`}>
      <div className="flex items-center gap-2 mb-4">
        <Icon className={`w-5 h-5 text-${color}-400`} />
        <h3 className="font-bold text-slate-300 uppercase tracking-wider text-sm">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {areas.map((area: any) => {
          const isActive = activeLocals.includes(area.id);
          const isDimmed = isHovering && !isActive;

          return (
            <Link 
              key={area.id}
              href={`/catalogo?area=${area.titulo}`}
              onMouseEnter={() => setHovered(area.id)}
              onMouseLeave={() => setHovered(null)}
              className={`p-3 rounded-lg border transition-all duration-300 cursor-pointer flex justify-between items-center group ${
                isActive 
                  ? `bg-${color}-500/20 border-${color}-400/50 shadow-[0_0_15px_rgba(0,0,0,0.2)]` 
                  : isDimmed
                    ? 'bg-slate-900 border-slate-800/50 opacity-30 grayscale'
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <h4 className={`text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {area.titulo}
                </h4>
              </div>
              <Zap className={`w-3 h-3 flex-shrink-0 ${isActive ? `text-${color}-400` : 'text-slate-600 opacity-0 group-hover:opacity-100'} transition-all`} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
