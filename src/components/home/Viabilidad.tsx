"use client";

import { motion } from "framer-motion";
import { PiggyBank, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export function Viabilidad() {
  const tViab = useTranslations("viabilidad");
  
  const blocks = [
    {
      icon: <PiggyBank className="w-5 h-5 md:w-8 md:h-8 text-emerald-500" />,
      title: "Coste Operativo Controlado",
      shortDesc: "Arquitectura Low-Code e IA sin licencias millonarias ni costes ocultos.",
      desc: "Evitamos licencias millonarias de software monolítico y tarifas abusivas de agencias. Utilizamos arquitectura 'Low-Code' e IA para construir herramientas potentes, a medida, y con un coste de mantenimiento residual.",
      color: "border-slate-800 bg-slate-900/50",
      iconBg: "bg-slate-800"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 md:w-8 md:h-8 text-blue-500" />,
      title: "Riesgo Asimétrico (Modular)",
      shortDesc: "Inversión por hitos: solo se avanza si la fase anterior genera tracción real.",
      desc: "Al avanzar por Horizontes de Madurez, la inversión de tiempo y recursos es modular. Solo se avanza al siguiente horizonte si la fase anterior ha generado tracción real. Sin grandes desembolsos de capital a ciegas.",
      color: "border-slate-800 bg-slate-900/50",
      iconBg: "bg-slate-800"
    },
    {
      icon: <TrendingUp className="w-5 h-5 md:w-8 md:h-8 text-violet-500" />,
      title: "Revalorización del Grupo",
      shortDesc: "Marca unificada y procesos automatizados que multiplican el valor patrimonial.",
      desc: "Una marca fuerte, unificada y con procesos operativos automatizados no solo genera ahorro diario. Multiplica el valor patrimonial de la empresa de cara al futuro y facilita enormemente la gestión de la dirección.",
      color: "border-slate-800 bg-slate-900/50",
      iconBg: "bg-slate-800"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto pb-6 md:pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
        {blocks.map((block, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border shadow-xs hover:shadow-md transition-shadow ${block.color} flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center md:block gap-3 mb-2 md:mb-6">
                <div className={`w-9 h-9 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center border border-slate-700 ${block.iconBg} shrink-0`}>
                  {block.icon}
                </div>
                <h3 className="text-sm sm:text-base md:text-xl font-black text-white leading-snug">{block.title}</h3>
              </div>
              {/* Resumen corto en móvil */}
              <p className="text-slate-400 text-xs leading-relaxed md:hidden">
                {block.shortDesc}
              </p>
              {/* Texto completo en desktop */}
              <p className="hidden md:block text-slate-400 text-sm leading-relaxed">
                {block.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
