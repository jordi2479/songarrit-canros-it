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
          icon: <PiggyBank className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />,
          title: "Cost Operatiu Controlat",
          shortDesc: (
            <>Arquitectura <strong className="text-white font-semibold">Low-Code i IA</strong> sense llicències milionàries ni costos ocults.</>
          ),
          desc: (
            <>Evitem <strong className="text-slate-200 font-semibold">llicències milionàries</strong> de programari monolític i tarifes abusives d'agències. Utilitzem arquitectura <strong className="text-white font-semibold">"Low-Code" i IA</strong> per construir eines potents, a mida, i amb un <strong className="text-emerald-400 font-semibold">cost de manteniment residual</strong>.</>
          ),
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        },
        {
          icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />,
          title: "Risc Asimètric (Modular)",
          shortDesc: (
            <>Inversió per fites: <strong className="text-white font-semibold">només s'avança</strong> si la fase anterior genera tracció real.</>
          ),
          desc: (
            <>En avançar per Horitzons de Maduresa, la inversió de temps i recursos és <strong className="text-white font-semibold">estrictament modular</strong>. Només s'avança al següent horitzó si la fase anterior ha generat <strong className="text-blue-400 font-semibold">tracció real</strong>. Sense grans desemborsaments de capital a cegues.</>
          ),
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        },
        {
          icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-violet-500" />,
          title: "Revalorització del Grup",
          shortDesc: (
            <><strong className="text-white font-semibold">Marca unificada</strong> i processos automatitzats que multipliquen el valor patrimonial.</>
          ),
          desc: (
            <>Una <strong className="text-white font-semibold">marca forta i unificada</strong> amb processos operatius automatitzats no només genera estalvi diari: <strong className="text-violet-400 font-semibold">multiplica el valor patrimonial</strong> de l'empresa de cara al futur i facilita enormement la gestió de la direcció.</>
          ),
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        }
      ];
    }

    if (isEn) {
      return [
        {
          icon: <PiggyBank className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />,
          title: "Controlled Operating Costs",
          shortDesc: (
            <>Low-Code architecture & <strong className="text-white font-semibold">AI models</strong> without massive software fees.</>
          ),
          desc: (
            <>We avoid <strong className="text-slate-200 font-semibold">million-dollar licenses</strong> for monolithic software and agency retainers. We use <strong className="text-white font-semibold">Low-Code & AI</strong> to build agile tools with <strong className="text-emerald-400 font-semibold">near-zero maintenance costs</strong>.</>
          ),
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        },
        {
          icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />,
          title: "Asymmetric Risk (Modular)",
          shortDesc: (
            <>Milestone-driven: <strong className="text-white font-semibold">only advancing</strong> once prior phase shows real traction.</>
          ),
          desc: (
            <>By progressing across Horizons, time and capital allocation is <strong className="text-white font-semibold">strictly modular</strong>. We only step into the next horizon if the previous tools generate <strong className="text-blue-400 font-semibold">verified traction</strong>. Zero blind bets.</>
          ),
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        },
        {
          icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-violet-500" />,
          title: "Group Enterprise Valuation",
          shortDesc: (
            <><strong className="text-white font-semibold">Unified brand</strong> and automated workflows increasing group equity value.</>
          ),
          desc: (
            <>A <strong className="text-white font-semibold">strong unified identity</strong> paired with automated workflows does more than save daily hours: it <strong className="text-violet-400 font-semibold">multiplies enterprise valuation</strong> and streamlines management.</>
          ),
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        }
      ];
    }

    if (isDe) {
      return [
        {
          icon: <PiggyBank className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />,
          title: "Kontrollierte Betriebskosten",
          shortDesc: (
            <>Low-Code-Architektur & <strong className="text-white font-semibold">KI</strong> ohne teure Monopol-Lizenzen.</>
          ),
          desc: (
            <>Wir vermeiden <strong className="text-slate-200 font-semibold">Millionen-Lizenzgebühren</strong> und überhöhte Agenturhonorare. Mit <strong className="text-white font-semibold">Low-Code & KI</strong> erstellen wir maßgeschneiderte Werkzeuge mit <strong className="text-emerald-400 font-semibold">minimalen Wartungskosten</strong>.</>
          ),
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        },
        {
          icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />,
          title: "Asymmetrisches Risiko (Modular)",
          shortDesc: (
            <>Meilenstein-Investition: <strong className="text-white font-semibold">Fortschritt nur</strong> nach realem Nutzennachweis.</>
          ),
          desc: (
            <>Durch Reifegrad-Horizonte investieren wir <strong className="text-white font-semibold">streng modular</strong> in Ressourcen. Die nächste Phase startet nur, wenn die vorherige <strong className="text-blue-400 font-semibold">echte Effizienz</strong> bringt. Keine Blindinvestitionen.</>
          ),
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        },
        {
          icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-violet-500" />,
          title: "Aufwertung der Gruppe",
          shortDesc: (
            <><strong className="text-white font-semibold">Einheitliche Marke</strong> und automatisierte Prozesse steigern Unternehmenswert.</>
          ),
          desc: (
            <>Eine <strong className="text-white font-semibold">starke, einheitliche Marke</strong> und automatisierte Abläufe sparen nicht nur Arbeitszeit: Sie <strong className="text-violet-400 font-semibold">steigern den Unternehmenswert</strong> nachhaltig und entlasten die Leitung.</>
          ),
          color: "border-slate-800 bg-slate-900/50",
          iconBg: "bg-slate-800"
        }
      ];
    }

    // Default: Español
    return [
      {
        icon: <PiggyBank className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />,
        title: "Coste Operativo Controlado",
        shortDesc: (
          <>Arquitectura <strong className="text-white font-semibold">Low-Code e IA</strong> sin licencias millonarias ni costes ocultos.</>
        ),
        desc: (
          <>Evitamos <strong className="text-slate-200 font-semibold">licencias millonarias</strong> de software monolítico y tarifas abusivas de agencias. Utilizamos arquitectura <strong className="text-white font-semibold">"Low-Code" e IA</strong> para construir herramientas potentes, a medida, y con un <strong className="text-emerald-400 font-semibold">coste de mantenimiento residual</strong>.</>
        ),
        color: "border-slate-800 bg-slate-900/50",
        iconBg: "bg-slate-800"
      },
      {
        icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />,
        title: "Riesgo Asimétrico (Modular)",
        shortDesc: (
          <>Inversión por hitos: <strong className="text-white font-semibold">solo se avanza</strong> si la fase anterior genera tracción real.</>
        ),
        desc: (
          <>Al avanzar por Horizontes de Madurez, la inversión de tiempo y recursos es <strong className="text-white font-semibold">estrictamente modular</strong>. Solo se avanza al siguiente horizonte si la fase anterior ha generado <strong className="text-blue-400 font-semibold">tracción real</strong>. Sin grandes desembolsos de capital a ciegas.</>
        ),
        color: "border-slate-800 bg-slate-900/50",
        iconBg: "bg-slate-800"
      },
      {
        icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-violet-500" />,
        title: "Revalorización del Grupo",
        shortDesc: (
          <><strong className="text-white font-semibold">Marca unificada</strong> y procesos automatizados que multiplican el valor patrimonial.</>
        ),
        desc: (
          <>Una <strong className="text-white font-semibold">marca fuerte y unificada</strong> con procesos operativos automatizados no solo genera ahorro diario: <strong className="text-violet-400 font-semibold">multiplica el valor patrimonial</strong> de la empresa de cara al futuro y facilita enormemente la gestión directiva.</>
        ),
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
              <div className="flex items-center gap-3 sm:gap-4 mb-3 md:mb-5">
                <div className={`w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center border border-slate-700 ${block.iconBg} shrink-0`}>
                  {block.icon}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-black text-white leading-snug">{block.title}</h3>
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
