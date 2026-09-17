"use client";

import { motion } from "framer-motion";
import { Handshake, Map, ShieldCheck, Cpu, Briefcase, Unlock, ArrowRight, Sparkles } from "lucide-react";

export function ModeloImplantacion() {
  const horizontes = [
    {
      id: "H1",
      title: "Cimientos & Cultura",
      goal: "Preparar el terreno operativo y mental.",
      shortGoal: "Identidad unificada y capacitación básica sin fricción.",
      marca: "Unificación de identidad y auditoría de percepción.",
      ia: "Capacitación básica del equipo y estructuración de datos.",
      trigger: "El equipo asimila la identidad y pierde el miedo tecnológico."
    },
    {
      id: "H2",
      title: "Despliegue bajo Demanda",
      goal: "Inyecciones de eficiencia sin parar la tienda.",
      shortGoal: "Herramientas modulares directas al mostrador.",
      marca: "Lanzamiento de campañas y fidelización PRO unificada.",
      ia: "Implementación de soluciones del catálogo según cuellos de botella.",
      trigger: "Las herramientas iniciales fluyen solas y generan ahorro real."
    },
    {
      id: "H3",
      title: "Sinergia Global",
      goal: "Escalabilidad de Grupo (Son Garrit + Ca'n Ros).",
      shortGoal: "Compras centralizadas y stock compartido entre tiendas.",
      marca: "Posicionamiento dominando el mercado local como Grupo.",
      ia: "Automatización cruzada (compras centralizadas, stock compartido).",
      trigger: "Visión completa y unificada alcanzada."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-4 md:py-10">
      
      {/* CARD LIDERAZGO (El Rol en 3a persona) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full bg-slate-900 border border-slate-800 rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden group mb-6 md:mb-8"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center relative z-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-2 md:mb-4">
              <span className="px-2.5 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
                Posicionamiento Operativo
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-white mb-2 md:mb-4 leading-tight">
              Facilitador de Innovación
            </h3>
            {/* Texto en móvil: Conciso y directo */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed md:hidden font-normal">
              Figura de confianza técnica y transversal para conectar la estrategia de dirección con la operativa diaria, liberando carga ejecutiva y modernizando la empresa sin detener la tienda.
            </p>
            {/* Texto completo en desktop */}
            <p className="hidden md:block text-slate-400 text-lg leading-relaxed font-normal">
              Para orquestar la sincronización entre el área de negocio y la operativa diaria, se plantea la necesidad de un 
              <strong className="text-blue-400 font-semibold"> facilitador de innovación operativa</strong>. Una 
              <strong className="text-white font-semibold"> figura de confianza transversal</strong> con capacidades técnicas en el sector que conecte 
              la visión estratégica de la dirección con la realidad del equipo. El objetivo es descargar de carga ejecutiva a la propiedad, 
              garantizando una modernización liderada desde el ADN de la empresa.
            </p>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="w-32 h-32 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-all">
              <Briefcase className="w-12 h-12 text-blue-400" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* HORIZONTES DE MADUREZ */}
      <div className="mb-4 md:mb-6">
        <h3 className="text-lg md:text-2xl font-black text-white mb-1 md:mb-2">Horizontes de Madurez</h3>
        <p className="text-xs md:text-base text-slate-400">Avanzamos por consolidación de hitos, no por calendarios teóricos inflexibles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 relative">
        {horizontes.map((h, i) => (
          <motion.div 
            key={h.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 relative flex flex-col justify-between"
          >
            <div>
              {/* Cabecera Horizonte */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800 flex items-center justify-center font-black text-xs md:text-base text-white border border-slate-700 shrink-0">
                  {h.id}
                </div>
                <div>
                  <h4 className="text-sm md:text-xl font-bold text-white leading-tight">{h.title}</h4>
                  <p className="text-slate-400 text-xs font-medium md:hidden">{h.shortGoal}</p>
                </div>
              </div>
              
              {/* Objetivo Desktop */}
              <p className="hidden md:block text-slate-400 text-sm mb-8 font-medium">{h.goal}</p>
              
              {/* Versión Móvil Compacta */}
              <div className="md:hidden space-y-1.5 py-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                  <span className="text-slate-400 font-medium">Marca:</span>
                  <span className="text-slate-200 truncate">{h.marca}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-slate-400 font-medium">IA & Sistemas:</span>
                  <span className="text-slate-200 truncate">{h.ia}</span>
                </div>
              </div>

              {/* Versión Desktop Completa */}
              <div className="hidden md:block space-y-6 flex-1">
                <div className="relative pl-4 border-l-2 border-violet-500/30">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-slate-900 rounded-full border-4 border-violet-500" />
                  <h5 className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-1">Track: Marca</h5>
                  <p className="text-sm text-slate-300">{h.marca}</p>
                </div>
                <div className="relative pl-4 border-l-2 border-emerald-500/30">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-slate-900 rounded-full border-4 border-emerald-500" />
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">Track: IA & Sistemas</h5>
                  <p className="text-sm text-slate-300">{h.ia}</p>
                </div>
              </div>
            </div>

            {/* Hito de Consolidación */}
            <div className="mt-3 md:mt-8 pt-2.5 md:pt-6 border-t border-slate-800/80">
              <div className="flex items-start gap-2 md:gap-3">
                <Unlock className="w-3.5 h-3.5 md:w-5 md:h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="block text-[10px] md:text-xs font-bold text-amber-500 uppercase tracking-wider mb-0.5 md:mb-1">Hito de Consolidación</span>
                  <span className="text-xs md:text-sm text-slate-400 leading-snug block">{h.trigger}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
