"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "@/i18n/navigation";
import {
  Flame, BarChart3, Clock, Shield, Handshake, RotateCcw,
  Building2, Store, Users, Settings, ArrowRight,
  ShoppingCart, CreditCard, Compass,
  LayoutDashboard, Package, Truck, UserCog, Lock, MessageSquare, Wrench,
  TrendingUp, PiggyBank, AlertTriangle, Sparkles, XCircle, CheckCircle2,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Section } from "@/components/layout/Section";
import { Navbar } from "@/components/layout/Navbar";
import { EsquemaEmpresa } from "@/components/layout/EsquemaEmpresa";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Explorador } from "@/components/home/Explorador";
import { BuscadorSoluciones } from "@/components/prototipos/BuscadorSoluciones";
import { ModeloImplantacion } from "@/components/home/ModeloImplantacion";
import { Viabilidad } from "@/components/home/Viabilidad";

/* ─── Helper: animated card ─── */
function FadeCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const colorClasses: Record<string, { card: string; badge: string; icon: string }> = {
  blue: { card: "border-blue-500/20 hover:border-blue-500/40", badge: "bg-blue-500/10 text-blue-400", icon: "text-blue-400" },
  emerald: { card: "border-emerald-500/20 hover:border-emerald-500/40", badge: "bg-emerald-500/10 text-emerald-400", icon: "text-emerald-400" },
  violet: { card: "border-violet-500/20 hover:border-violet-500/40", badge: "bg-violet-500/10 text-violet-400", icon: "text-violet-400" },
  amber: { card: "border-amber-500/20 hover:border-amber-500/40", badge: "bg-amber-500/10 text-amber-400", icon: "text-amber-400" },
};

/* ═══════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════ */
export default function Home() {
  const locale = useLocale();
  const tHero = useTranslations("hero");
  const tProb = useTranslations("problema");
  const tSol = useTranslations("solucion");
  const tPerfil = useTranslations("perfil");
  const tGarantias = useTranslations("garantias");
  const tBloques = useTranslations("bloques");
  const tAreas = useTranslations("areas");
  const tProto = useTranslations("prototipos");
  const tViab = useTranslations("viabilidad");
  const tCierre = useTranslations("cierre");

  const bloques = [
    {
      id: "B1", nombre: tBloques("b1"), icon: Building2, color: "blue",
      desc: tBloques("b1Desc"),
      areas: [
        { num: "04", nombre: tAreas("a04"), icon: Compass },
        { num: "05", nombre: tAreas("a05"), icon: ShoppingCart },
        { num: "06", nombre: tAreas("a06"), icon: Package },
        { num: "07", nombre: tAreas("a07"), icon: CreditCard },
        { num: "08", nombre: tAreas("a08"), icon: Sparkles },
      ],
    },
    {
      id: "B2", nombre: tBloques("b2"), icon: Store, color: "emerald",
      desc: tBloques("b2Desc"),
      areas: [
        { num: "01", nombre: tAreas("a01"), icon: ShoppingCart },
        { num: "02", nombre: tAreas("a02"), icon: CreditCard },
        { num: "03", nombre: tAreas("a03"), icon: LayoutDashboard },
      ],
    },
    {
      id: "B3", nombre: tBloques("b3"), icon: Users, color: "violet",
      desc: tBloques("b3Desc"),
      areas: [
        { num: "09", nombre: tAreas("a09"), icon: TrendingUp },
        { num: "10", nombre: tAreas("a10"), icon: UserCog },
        { num: "14", nombre: tAreas("a14"), icon: MessageSquare },
      ],
    },
    {
      id: "B4", nombre: tBloques("b4"), icon: Settings, color: "amber",
      desc: tBloques("b4Desc"),
      areas: [
        { num: "11", nombre: tAreas("a11"), icon: Truck },
        { num: "12", nombre: tAreas("a12"), icon: UserCog },
        { num: "13", nombre: tAreas("a13"), icon: Lock },
        { num: "15", nombre: tAreas("a15"), icon: Wrench },
      ],
    },
  ];

  const mostradorItems = tPerfil.raw("mostradorItems") as {title: string, desc: string}[];
  const procesosItems = tPerfil.raw("procesosItems") as {title: string, desc: string}[];

  return (
    <>
      <Navbar />

      {/* ─── SECCIÓN 1: HERO ─── */}
      <Section id="hero" dark className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            className="inline-block mb-8 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{tHero("badge")}</span>
          </motion.div>
          <AnimatedText
            text={tHero("title")}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8"
            delay={0.4}
          />
          <motion.p
            className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span>{tHero("subtitle")}</span>
            <span className="block mt-1 text-slate-300">
              {tHero("groupPrefix")}{" "}
              <strong className="text-white font-semibold">{tHero("brand")}</strong>
            </span>
          </motion.p>
          <ScrollIndicator targetId="problema" />
        </div>
      </Section>

      {/* ─── SECCIÓN 2: EL PROBLEMA ─── */}
      <Section id="problema">
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3 md:mb-8 leading-tight">
              {tProb("title")}{" "}
              <span className="text-emerald-500">{tProb("highlight")}</span>{" "}
              {tProb("titleEnd")}
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-slate-600 leading-relaxed">
              {tProb("intro")}
            </p>
          </div>
          <div className="space-y-2.5 md:space-y-4">
            {[
              { icon: Flame, title: tProb("pain1Title"), desc: tProb("pain1Desc"), color: "red" as const },
              { icon: BarChart3, title: tProb("pain2Title"), desc: tProb("pain2Desc"), color: "amber" as const },
              { icon: Clock, title: tProb("pain3Title"), desc: tProb("pain3Desc"), color: "blue" as const },
            ].map((item, i) => (
              <FadeCard key={item.title} delay={i * 0.15} className={`p-3.5 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border bg-slate-50 ${
                item.color === "red" ? "border-red-200" : item.color === "amber" ? "border-amber-200" : "border-blue-200"
              }`}>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 ${
                    item.color === "red" ? "bg-red-100 text-red-500" : item.color === "amber" ? "bg-amber-100 text-amber-500" : "bg-blue-100 text-blue-500"
                  }`}>
                    <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base mb-0.5 md:mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-xs md:text-sm line-clamp-2 md:line-clamp-none">{item.desc}</p>
                  </div>
                </div>
              </FadeCard>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── SECCIÓN 3: LA SOLUCIÓN ─── */}
      <Section id="solucion" dark>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3 md:mb-8 leading-tight">
            {tSol("title1")}<br/>
            <span className="text-emerald-400">{tSol("title2")}</span>
          </h2>
          <p className="text-xs sm:text-base md:text-xl text-slate-400 leading-relaxed mb-6 md:mb-16">
            {tSol("desc")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {[
              { antes: tSol("antes1"), despues: tSol("despues1"), delay: 0 },
              { antes: tSol("antes2"), despues: tSol("despues2"), delay: 0.15 },
              { antes: tSol("antes3"), despues: tSol("despues3"), delay: 0.3 },
            ].map((item, idx) => (
              <FadeCard key={idx} delay={item.delay} className="rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 flex flex-col h-full min-h-0 md:min-h-[22rem] text-center overflow-hidden">
                {/* Mitad Superior: Antes (50% exacto en desktop) */}
                <div className="p-3.5 md:p-6 flex-1 flex flex-col justify-center md:justify-between items-center gap-2 md:gap-4">
                  <div className="text-slate-400 text-xs sm:text-sm md:text-base flex-1 flex items-center justify-center leading-relaxed">
                    {item.antes}
                  </div>
                  <span className="flex items-center justify-center gap-1.5 md:gap-2 text-xs md:text-base font-black text-slate-500 uppercase tracking-wider md:tracking-widest shrink-0">
                    <XCircle className="w-3.5 h-3.5 md:w-5 md:h-5 text-rose-500" /> {tSol("antesTag")}
                  </span>
                </div>

                {/* Línea divisoria centrada perfectamente a la misma altura */}
                <div className="h-px bg-slate-800 w-full shrink-0"></div>

                {/* Mitad Inferior: Con IA (50% exacto en desktop) */}
                <div className="p-3.5 md:p-6 flex-1 flex flex-col justify-center md:justify-between items-center gap-2 md:gap-4">
                  <span className="flex items-center justify-center gap-1.5 md:gap-2 text-xs md:text-base font-black text-emerald-500 uppercase tracking-wider md:tracking-widest shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-5 md:h-5 text-emerald-500" /> {tSol("conIaTag")}
                  </span>
                  <div className="text-white text-xs sm:text-sm md:text-base font-bold flex-1 flex items-center justify-center leading-relaxed">
                    {item.despues}
                  </div>
                </div>
              </FadeCard>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── SECCIÓN 4: EL PERFIL HÍBRIDO ─── */}
      <Section id="perfil" className="bg-gradient-to-b from-white to-emerald-50/30">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3 md:mb-8 leading-tight text-slate-900">
            {tPerfil("title")}
          </h2>
          <div className="text-xs sm:text-base md:text-2xl text-slate-600 mb-6 md:mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            {tPerfil.rich("intro", {
              bold: (chunks) => <strong className="text-slate-900 font-bold">{chunks}</strong>,
              highlight: (chunks) => <span className="text-emerald-600 font-bold">{chunks}</span>,
              p: (chunks) => <p className="mb-2 md:mb-6 last:mb-0">{chunks}</p>
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
            <FadeCard delay={0} className="p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-200/50 text-left flex flex-col justify-start">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6">
                <div className="w-9 h-9 md:w-12 md:h-12 bg-emerald-100 text-emerald-600 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                  <Store className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 leading-tight">{tPerfil("mostrador")}</h3>
              </div>
              <ul className="space-y-1.5 md:space-y-3 text-slate-600 text-xs md:text-sm">
                {mostradorItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>
                      <strong className="text-slate-900 font-bold">{item.title}</strong>
                      <span className="hidden md:inline">: {item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </FadeCard>
            <FadeCard delay={0.2} className="p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-200/50 text-left flex flex-col justify-start">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6">
                <div className="w-9 h-9 md:w-12 md:h-12 bg-blue-100 text-blue-600 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                  <LayoutDashboard className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 leading-tight">{tPerfil("procesos")}</h3>
              </div>
              <ul className="space-y-1.5 md:space-y-3 text-slate-600 text-xs md:text-sm">
                {procesosItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>
                      <strong className="text-slate-900 font-bold">{item.title}</strong>
                      <span className="hidden md:inline">: {item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </FadeCard>
          </div>
        </div>
      </Section>

      {/* ─── SECCIÓN 5: LAS 3 GARANTÍAS ─── */}
      <Section id="garantias" dark>
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 md:mb-6 leading-tight">
            {tGarantias("title")}<br/><span className="text-emerald-400">{tGarantias("highlight")}</span>
          </h2>
          <p className="text-xs sm:text-base md:text-xl text-slate-400 leading-relaxed font-normal">
            {tGarantias("desc")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
          {[
            { icon: Shield, title: tGarantias("g1Title"), desc: tGarantias("g1Desc"), color: "emerald" },
            { icon: Handshake, title: tGarantias("g2Title"), desc: tGarantias("g2Desc"), color: "blue" },
            { icon: RotateCcw, title: tGarantias("g3Title"), desc: tGarantias("g3Desc"), color: "amber" },
          ].map((g, i) => (
            <FadeCard key={g.title} delay={i * 0.15} className="p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col justify-between">
              <div>
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-5 ${
                  g.color === "emerald" ? "bg-emerald-500/10 text-emerald-400" :
                  g.color === "blue" ? "bg-blue-500/10 text-blue-400" :
                  "bg-amber-500/10 text-amber-400"
                }`}>
                  <g.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h3 className="font-bold text-white mb-1 md:mb-3 text-sm sm:text-base md:text-lg">{g.title}</h3>
              </div>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed line-clamp-2 md:line-clamp-none mt-1 md:mt-2">{g.desc}</p>
            </FadeCard>
          ))}
        </div>
      </Section>

      {/* ─── SECCIÓN 6: LOS 4 BLOQUES ─── */}
      <Section id="bloques" className="bg-slate-50">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 leading-tight">
            {tBloques("title")} <span className="text-emerald-600">{tBloques("highlight")}</span>
          </h2>
          <div className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed space-y-3">
            {tBloques.rich("desc", {
              p: (chunks) => <p>{chunks}</p>,
              bold: (chunks) => <strong className="text-slate-900 font-bold">{chunks}</strong>,
              italic: (chunks) => <span className="text-slate-500 font-medium italic">{chunks}</span>
            })}
          </div>
        </div>
        <EsquemaEmpresa />
      </Section>

      {/* ─── SECCIÓN 7: ZOOM ÁREAS ─── */}
      <Section id="areas" dark>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            {tAreas("title")} <span className="text-blue-400">{tAreas("highlight")}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {tAreas("desc")}
          </p>
        </div>
        
        <Explorador />
        
      </Section>

      {/* ─── SECCIÓN 8: BUSCADOR DE SOLUCIONES (PROTOTIPOS) ─── */}
      <Section id="prototipos" className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            {tProto("title")} <span className="text-emerald-500">{tProto("highlight")}</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {tProto("desc")}
          </p>
        </div>
        
        <BuscadorSoluciones />
        
      </Section>

      {/* ─── SECCIÓN 9: MODELO DE IMPLANTACIÓN ─── */}
      <Section id="implantacion" dark>
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 md:mb-4 leading-tight">
            {tViab("title")} <span className="text-blue-400">{tViab("highlight")}</span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
            {tViab("desc")}
          </p>
        </div>
        
        <ModeloImplantacion />

      </Section>

      {/* ─── SECCIÓN 10: VIABILIDAD (Negocio) ─── */}
      <Section id="viabilidad" dark className="bg-gradient-to-b from-slate-950 to-emerald-950">
        <div className="text-center mb-6 md:mb-16">
          <div className="flex justify-center items-center gap-2 mb-3 md:mb-6">
            <span className="px-2.5 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              {locale === 'ca' ? "Filosofia d'Execució" : locale === 'en' ? "Execution Philosophy" : locale === 'de' ? "Ausführungsphilosophie" : "Filosofía de Ejecución"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3 md:mb-6 text-white leading-tight">
            {locale === 'ca' ? (
              <>Transformació Orgànica i <span className="text-emerald-400">Segura</span></>
            ) : locale === 'en' ? (
              <>Organic and <span className="text-emerald-400">Secure</span> Transformation</>
            ) : locale === 'de' ? (
              <>Organische und <span className="text-emerald-400">Sichere</span> Transformation</>
            ) : (
              <>Transformación Orgánica y <span className="text-emerald-400">Segura</span></>
            )}
          </h2>
          {/* Móvil: Directo y claro */}
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed md:hidden font-normal">
            {locale === 'ca' ? (
              <>Premissa innegociable: <strong className="text-white">no interrompre l'operativa diària</strong>. Injeccions tecnològiques modulars provades al taulell: <strong className="text-emerald-400">si no facilita la feina immediata, es descarta.</strong></>
            ) : locale === 'en' ? (
              <>Non-negotiable rule: <strong className="text-white">zero disruption to daily business</strong>. Modular tech injected and verified at counter: <strong className="text-emerald-400">if it doesn't instantly ease team work, it is discarded.</strong></>
            ) : locale === 'de' ? (
              <>Unverhandelbar: <strong className="text-white">keine Unterbrechung des Tagesgeschäfts</strong>. Modulare Technologien, direkt am Tresen erprobt: <strong className="text-emerald-400">wenn es die Arbeit nicht sofort erleichtert, wird es verworfen.</strong></>
            ) : (
              <>Premisa innegociable: <strong className="text-white">no interrumpir la operativa diaria</strong>. Inyecciones tecnológicas modulares probadas en el mostrador: <strong className="text-emerald-400">si no facilita el trabajo inmediato, se descarta.</strong></>
            )}
          </p>
          {/* Desktop: Párrafo completo */}
          <p className="hidden md:block text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {locale === 'ca' ? (
              <>La premissa innegociable d'aquest pla és <strong className="text-white">no interrompre ni desestabilitzar l'operativa diària</strong> de les botigues. No apliquem revolucions teòriques. El desenvolupament es planteja mitjançant injeccions tecnològiques modulars que es proven i validen directament al taulell. <strong className="text-emerald-400"> Si una solució no facilita la feina de l'equip de forma immediata, es descarta.</strong></>
            ) : locale === 'en' ? (
              <>The non-negotiable premise of this roadmap is <strong className="text-white">never disrupting daily store operations</strong>. We avoid theoretical revolutions. Execution is deployed through modular technological injections tested and validated live at the counter. <strong className="text-emerald-400"> If a solution does not immediately make the team's work easier, it is discarded.</strong></>
            ) : locale === 'de' ? (
              <>Die unverhandelbare Prämisse dieses Plans ist es, <strong className="text-white">das Tagesgeschäft der Filialen niemals zu stören</strong>. Wir vermeiden theoretische Revolutionen. Die Entwicklung erfolgt über modulare Technologiebausteine, die direkt am Tresen getestet werden. <strong className="text-emerald-400"> Wenn eine Lösung die Arbeit des Teams nicht sofort spürbar erleichtert, wird sie verworfen.</strong></>
            ) : (
              <>La premisa innegociable de este plan es <strong className="text-white">no interrumpir ni desestabilizar la operativa diaria</strong> de las tiendas. No aplicamos revoluciones teóricas. El desarrollo se plantea mediante inyecciones tecnológicas modulares que se prueban y validan directamente en el mostrador. <strong className="text-emerald-400"> Si una solución no facilita el trabajo del equipo de forma inmediata, se descarta.</strong></>
            )}
          </p>
        </div>
        <Viabilidad />
      </Section>

      {/* ─── FOOTER MINIMALISTA ─── */}
      <footer className="w-full bg-emerald-950 border-t border-emerald-900/50 py-12 text-center">
        <p className="text-emerald-500/60 font-medium text-sm tracking-widest uppercase mb-2">
          Grupo Son Garrit &amp; Ca'n Ros
        </p>
        <p className="text-emerald-400/40 text-xs">
          {locale === 'ca' ? "El futur del grup. Construït des de dins." : locale === 'en' ? "The future of the group. Built from within." : locale === 'de' ? "Die Zukunft der Gruppe. Von innen heraus aufgebaut." : "El futuro del grupo. Construido desde dentro."}
        </p>
      </footer>
    </>
  );
}
