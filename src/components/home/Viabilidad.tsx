"use client";

import { motion } from "framer-motion";
import { PiggyBank, ShieldCheck, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export function Viabilidad() {
  const tViab = useTranslations("viabilidad");
  
  const blocks = [
    {
      icon: <PiggyBank className="w-8 h-8 text-emerald-600 mb-4" />,
      title: "Coste Operativo Controlado",
      desc: "Evitamos licencias millonarias de software monolítico y tarifas abusivas de agencias. Utilizamos arquitectura 'Low-Code' e IA para construir herramientas potentes, a medida, y con un coste de mantenimiento residual.",
      color: "border-emerald-200 bg-emerald-50/50"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />,
      title: "Riesgo Asimétrico (Modular)",
      desc: "Al avanzar por Horizontes de Madurez, la inversión de tiempo y recursos es modular. Solo se avanza al siguiente horizonte si la fase anterior ha generado tracción real. Sin grandes desembolsos de capital a ciegas.",
      color: "border-blue-200 bg-blue-50/50"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-violet-600 mb-4" />,
      title: "Revalorización del Grupo",
      desc: "Una marca fuerte, unificada y con procesos operativos automatizados no solo genera ahorro diario. Multiplica el valor patrimonial de la empresa de cara al futuro y facilita enormemente la gestión de la dirección.",
      color: "border-violet-200 bg-violet-50/50"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto pb-10">
      <div className="grid md:grid-cols-3 gap-8">
        {blocks.map((block, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`p-8 rounded-3xl border shadow-sm hover:shadow-md transition-shadow bg-white ${block.color.split(' ')[0]}`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${block.color.split(' ')[1]}`}>
              {block.icon}
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">{block.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {block.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
