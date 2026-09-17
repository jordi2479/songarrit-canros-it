"use client";

import { motion } from "framer-motion";
import { Building2, Store, Users, Package } from "lucide-react";
import { useTranslations } from "next-intl";

export function EsquemaEmpresa() {
  const tBloques = useTranslations("bloques");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center relative w-full"
      >
        {/* --- NIVEL 1: GLOBAL --- */}
        <motion.div variants={itemVariants} className="relative z-10 w-full max-w-md mb-12 md:mb-0">
          <div className="bg-slate-900 border-2 border-blue-500/30 rounded-2xl p-6 text-center shadow-xl shadow-blue-500/10">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-black text-white mb-2">{tBloques("b1")}</h4>
            <p className="text-slate-400 text-sm">{tBloques("b1Desc")}</p>
          </div>
        </motion.div>

        {/* --- LÍNEAS CONECTORAS (INLINE ROBUSTAS) --- */}
        <div className="w-full h-16 md:h-24 hidden md:block relative z-0 -my-1 pointer-events-none">
          <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 1000 100">
            {/* Línea hacia Ca'n Ros */}
            <motion.path
              d="M 500 0 C 500 50, 250 50, 250 100"
              fill="none"
              stroke="currentColor"
              className="text-slate-200"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Línea hacia Son Garrit */}
            <motion.path
              d="M 500 0 C 500 50, 750 50, 750 100"
              fill="none"
              stroke="currentColor"
              className="text-slate-200"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* --- NIVEL 2: LAS TIENDAS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10">
          
          {/* CA'N ROS (NÚCLEO/LABORATORIO) */}
          <motion.div variants={itemVariants} className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-6 md:p-8 shadow-xl shadow-emerald-500/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
            <div className="text-center mb-8 relative z-10">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest rounded-full mb-4">
                Laboratorio Inicial
              </span>
              <div className="flex justify-center items-center gap-3 mb-2">
                <Store className="w-6 h-6 text-emerald-600" />
                <h4 className="text-2xl font-black text-slate-900">Ca'n Ros</h4>
              </div>
              <p className="text-slate-500 text-sm">Donde implementamos y testeamos</p>
            </div>
            
            <div className="flex flex-col gap-3 relative z-10">
              <div className="bg-white border border-emerald-100 rounded-xl p-4 flex items-center gap-4">
                <div className="bg-slate-100 text-slate-600 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                   <Store className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">{tBloques("b2")}</h5>
                  <p className="text-xs text-slate-500">{tBloques("b2Sub")}</p>
                </div>
              </div>
              <div className="bg-white border border-emerald-100 rounded-xl p-4 flex items-center gap-4">
                <div className="bg-slate-100 text-slate-600 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                   <Users className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">{tBloques("b3")}</h5>
                  <p className="text-xs text-slate-500">{tBloques("b3Sub")}</p>
                </div>
              </div>
              <div className="bg-white border border-emerald-100 rounded-xl p-4 flex items-center gap-4">
                <div className="bg-slate-100 text-slate-600 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                   <Package className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">{tBloques("b4")}</h5>
                  <p className="text-xs text-slate-500">{tBloques("b4Sub")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FLECHA DE CLONACIÓN (Visible solo en desktop) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center flex-col gap-2">
            <motion.div 
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/20"
            >
              Clonación
            </motion.div>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M0 12H56M56 12L46 2M56 12L46 22" 
                stroke="#10b981" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 1 }}
              />
            </svg>
          </div>

          {/* SON GARRIT (CLONACIÓN) */}
          <motion.div variants={itemVariants} className="bg-slate-50/50 border-2 border-slate-200 border-dashed rounded-3xl p-6 md:p-8 relative opacity-80 transition-opacity hover:opacity-100">
            <div className="text-center mb-8 relative z-10">
              <span className="inline-block px-3 py-1 bg-slate-200 text-slate-600 text-xs font-black uppercase tracking-widest rounded-full mb-4">
                Destino Expansión
              </span>
              <div className="flex justify-center items-center gap-3 mb-2">
                <Store className="w-6 h-6 text-slate-500" />
                <h4 className="text-2xl font-black text-slate-700">Son Garrit</h4>
              </div>
              <p className="text-slate-500 text-sm">Réplica del modelo de éxito</p>
            </div>
            
            <div className="flex flex-col gap-3 relative z-10">
              <div className="bg-white/50 border border-slate-200 border-dashed rounded-xl p-4 flex items-center gap-4">
                <div className="bg-slate-200/50 text-slate-400 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                   <Store className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-600">{tBloques("b2")}</h5>
                  <p className="text-xs text-slate-400">{tBloques("b2Sub")}</p>
                </div>
              </div>
              <div className="bg-white/50 border border-slate-200 border-dashed rounded-xl p-4 flex items-center gap-4">
                <div className="bg-slate-200/50 text-slate-400 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                   <Users className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-600">{tBloques("b3")}</h5>
                  <p className="text-xs text-slate-400">{tBloques("b3Sub")}</p>
                </div>
              </div>
              <div className="bg-white/50 border border-slate-200 border-dashed rounded-xl p-4 flex items-center gap-4">
                <div className="bg-slate-200/50 text-slate-400 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                   <Package className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-600">{tBloques("b4")}</h5>
                  <p className="text-xs text-slate-400">{tBloques("b4Sub")}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
