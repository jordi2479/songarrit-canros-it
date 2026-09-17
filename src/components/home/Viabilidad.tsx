"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { PiggyBank, ShieldCheck, TrendingUp } from "lucide-react";
import { useLocale } from "next-intl";

export function Viabilidad() {
  const locale = useLocale();

  const isCa = locale === 'ca';
  const isEn = locale === 'en';
  const isDe = locale === 'de';

  const blocks = useMemo(() => {
    if (isCa) {
      return [
        {
          icon: <PiggyBank className="w-5 h-5 md:w-8 md:h-8 text-emerald-500" />,
          title: "Cost Operatiu Controlat",
          shortDesc: "Arquitectura Low-Code i IA sense llicències milionàries ni costos ocults.",
          desc: "Evitem llicències milionàries de programari monolític i tarifes abusives d'agències. Utilitzem arquitectura 'Low-Code' i IA per construir eines potents, a mida, i amb un cost de manteniment residual.",
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        },
        {
          icon: <ShieldCheck className="w-5 h-5 md:w-8 md:h-8 text-blue-500" />,
          title: "Risc Asimètric (Modular)",
          shortDesc: "Inversió per fites: només s'avança si la fase anterior genera tracció real.",
          desc: "En avançar per Horitzons de Maduresa, la inversió de temps i recursos és modular. Només s'avança al següent horitzó si la fase anterior ha generat tracció real. Sense grans desemborsaments de capital a cegues.",
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        },
        {
          icon: <TrendingUp className="w-5 h-5 md:w-8 md:h-8 text-violet-500" />,
          title: "Revalorització del Grup",
          shortDesc: "Marca unificada i processos automatitzats que multipliquen el valor patrimonial.",
          desc: "Una marca forta, unificada i amb processos operatius automatitzats no només genera estalvi diari. Multiplica el valor patrimonial de l'empresa de cara al futur i facilita enormement la gestió de la direcció.",
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        }
      ];
    }

    if (isEn) {
      return [
        {
          icon: <PiggyBank className="w-5 h-5 md:w-8 md:h-8 text-emerald-500" />,
          title: "Controlled Operating Costs",
          shortDesc: "Low-Code architecture & standard AI models without massive license fees.",
          desc: "We avoid million-dollar monolithic software licenses and abusive agency retainers. We use Low-Code architecture and state-of-the-art AI to build custom, agile tools with near-zero maintenance overhead.",
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        },
        {
          icon: <ShieldCheck className="w-5 h-5 md:w-8 md:h-8 text-blue-500" />,
          title: "Asymmetric Risk (Modular)",
          shortDesc: "Milestone-driven investment: only advancing once prior phase shows traction.",
          desc: "By progressing across Maturity Horizons, resource and time investment is strictly modular. We only step into the next horizon if the previous tools generate verified traction. Zero blind capital bets.",
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        },
        {
          icon: <TrendingUp className="w-5 h-5 md:w-8 md:h-8 text-violet-500" />,
          title: "Group Enterprise Valuation",
          shortDesc: "Unified brand & automated workflows increasing group equity value.",
          desc: "A strong, unified identity paired with automated operations does more than just save daily hours. It substantially multiplies enterprise valuation and makes executive management significantly simpler.",
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        }
      ];
    }

    if (isDe) {
      return [
        {
          icon: <PiggyBank className="w-5 h-5 md:w-8 md:h-8 text-emerald-500" />,
          title: "Kontrollierte Betriebskosten",
          shortDesc: "Low-Code-Architektur & KI ohne teure Monopol-Lizenzen.",
          desc: "Wir vermeiden Millionen-Lizenzgebühren schwerfälliger Standardsoftware und überhöhte Agenturhonorare. Mit Low-Code-Architektur und KI erstellen wir maßgeschneiderte, wartungsarme Werkzeuge.",
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        },
        {
          icon: <ShieldCheck className="w-5 h-5 md:w-8 md:h-8 text-blue-500" />,
          title: "Asymmetrisches Risiko (Modular)",
          shortDesc: "Meilenstein-Investition: Fortschritt nur nach realem Nutzennachweis.",
          desc: "Durch die Reifegrad-Horizonte investieren wir modular in Zeit und Ressourcen. Die nächste Phase startet nur, wenn die vorherige nachweisbare Effizienz bringt. Keine Blindinvestitionen.",
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        },
        {
          icon: <TrendingUp className="w-5 h-5 md:w-8 md:h-8 text-violet-500" />,
          title: "Aufwertung der Gruppe",
          shortDesc: "Einheitliche Marke und automatisierte Prozesse steigern Unternehmenswert.",
          desc: "Eine starke, einheitliche Marke und automatisierte Abläufe sparen nicht nur täglich Arbeitszeit. Sie steigern den Unternehmenswert nachhaltig und erleichtern der Geschäftsführung die Leitung.",
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        }
      ];
    }

    // Default: Español
    return [
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
  }, [isCa, isEn, isDe]);

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
