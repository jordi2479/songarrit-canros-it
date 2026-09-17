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
import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { Navbar } from "@/components/layout/Navbar";
import { EsquemaEmpresa } from "@/components/layout/EsquemaEmpresa";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Explorador } from "@/components/home/Explorador";
import { AlertaStock } from "@/components/prototipos/AlertaStock";
import { ComparadorTarifas } from "@/components/prototipos/ComparadorTarifas";

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
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
            className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {tHero("subtitle")} <strong className="text-white font-semibold">{tHero("brand")}</strong>
          </motion.p>
        </div>
        <ScrollIndicator targetId="problema" />
      </Section>

      {/* ─── SECCIÓN 2: EL PROBLEMA ─── */}
      <Section id="problema">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-tight">
              {tProb("title")}{" "}
              <span className="text-emerald-500">{tProb("highlight")}</span>{" "}
              {tProb("titleEnd")}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {tProb("intro")}
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Flame, title: tProb("pain1Title"), desc: tProb("pain1Desc"), color: "red" as const },
              { icon: BarChart3, title: tProb("pain2Title"), desc: tProb("pain2Desc"), color: "amber" as const },
              { icon: Clock, title: tProb("pain3Title"), desc: tProb("pain3Desc"), color: "blue" as const },
            ].map((item, i) => (
              <FadeCard key={item.title} delay={i * 0.15} className={`p-6 rounded-2xl border bg-slate-50 ${
                item.color === "red" ? "border-red-200" : item.color === "amber" ? "border-amber-200" : "border-blue-200"
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    item.color === "red" ? "bg-red-100 text-red-500" : item.color === "amber" ? "bg-amber-100 text-amber-500" : "bg-blue-100 text-blue-500"
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
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
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-tight">
            {tSol("title1")}<br/>
            <span className="text-emerald-400">{tSol("title2")}</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-16">
            {tSol("desc")}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { antes: tSol("antes1"), despues: tSol("despues1"), delay: 0 },
              { antes: tSol("antes2"), despues: tSol("despues2"), delay: 0.15 },
              { antes: tSol("antes3"), despues: tSol("despues3"), delay: 0.3 },
            ].map((item, idx) => (
              <FadeCard key={idx} delay={item.delay} className="rounded-2xl bg-slate-900 border border-slate-800 flex flex-col h-full min-h-[20rem] text-center">
                <div className="flex-1 p-6 flex flex-col justify-end items-center">
                  <div className="text-slate-400 text-base mb-4">{item.antes}</div>
                  <span className="flex items-center justify-center gap-2 text-base font-black text-slate-500 uppercase tracking-widest">
                    <XCircle className="w-5 h-5" /> Antes
                  </span>
                </div>
                <div className="h-px bg-slate-800 w-full"></div>
                <div className="flex-1 p-6 flex flex-col justify-start items-center">
                  <span className="flex items-center justify-center gap-2 text-base font-black text-emerald-500 uppercase tracking-widest mb-4">
                    <CheckCircle2 className="w-5 h-5" /> Con IA
                  </span>
                  <div className="text-white text-base font-bold">{item.despues}</div>
                </div>
              </FadeCard>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── SECCIÓN 4: EL PERFIL HÍBRIDO ─── */}
      <Section id="perfil" className="bg-gradient-to-b from-white to-emerald-50/30">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-tight text-slate-900">
            {tPerfil("title")}
          </h2>
          <div className="text-xl md:text-2xl text-slate-600 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            {tPerfil.rich("intro", {
              bold: (chunks) => <strong className="text-slate-900 font-bold">{chunks}</strong>,
              highlight: (chunks) => <span className="text-emerald-600 font-bold">{chunks}</span>,
              p: (chunks) => <p className="mb-6 last:mb-0">{chunks}</p>
            })}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeCard delay={0} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 text-left">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-5">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{tPerfil("mostrador")}</h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                {mostradorItems.map((item, i) => (
                  <li key={i}>
                    <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                  </li>
                ))}
              </ul>
            </FadeCard>
            <FadeCard delay={0.2} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 text-left">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{tPerfil("procesos")}</h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                {procesosItems.map((item, i) => (
                  <li key={i}>
                    <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                  </li>
                ))}
              </ul>
            </FadeCard>
          </div>
        </div>
      </Section>

      {/* ─── SECCIÓN 5: LAS 3 GARANTÍAS ─── */}
      <Section id="garantias" dark>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
            {tGarantias("title")}<br/><span className="text-emerald-400">{tGarantias("highlight")}</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-normal">
            {tGarantias("desc")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Shield, title: tGarantias("g1Title"), desc: tGarantias("g1Desc"), color: "emerald" },
            { icon: Handshake, title: tGarantias("g2Title"), desc: tGarantias("g2Desc"), color: "blue" },
            { icon: RotateCcw, title: tGarantias("g3Title"), desc: tGarantias("g3Desc"), color: "amber" },
          ].map((g, i) => (
            <FadeCard key={g.title} delay={i * 0.15} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col justify-between">
              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${
                  g.color === "emerald" ? "bg-emerald-500/10 text-emerald-400" :
                  g.color === "blue" ? "bg-blue-500/10 text-blue-400" :
                  "bg-amber-500/10 text-amber-400"
                }`}>
                  <g.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-white mb-3 text-lg">{g.title}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mt-2">{g.desc}</p>
            </FadeCard>
          ))}
        </div>
      </Section>

      {/* ─── SECCIÓN 6: LOS 4 BLOQUES ─── */}
      <Section id="bloques" className="bg-slate-50">
        <div className="text-center mb-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase mb-4">
            {tBloques("badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 leading-tight">
            {tBloques("title")} <span className="text-emerald-600">{tBloques("highlight")}</span>
          </h2>
          <div className="text-lg md:text-xl text-slate-500 max-w-4xl mx-auto mb-6 leading-relaxed">
            {tBloques.rich("desc", {
              bold: (chunks) => <strong className="text-slate-800 font-bold">{chunks}</strong>
            })}
          </div>
        </div>
        <EsquemaEmpresa />
      </Section>

      {/* ─── SECCIÓN 7: ZOOM ÁREAS ─── */}
      <Section id="areas" dark>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            {tAreas("title")} <span className="text-emerald-400">{tAreas("highlight")}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {tAreas("desc")}
          </p>
        </div>
        
        <Explorador />
        
      </Section>

      {/* ─── SECCIÓN 8: MINI-PROTOTIPOS ─── */}
      <Section id="prototipos" className="bg-gradient-to-b from-slate-950 to-slate-900" dark>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            {tProto("title")} <span className="text-emerald-400">{tProto("highlight")}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {tProto("desc")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <AlertaStock />
          <ComparadorTarifas />
        </div>
      </Section>

      {/* ─── SECCIÓN 9: VIABILIDAD ─── */}
      <Section id="viabilidad">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 leading-tight">
            {tViab("title")} <span className="text-emerald-600">{tViab("highlight")}</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            {tViab("desc")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <FadeCard delay={0} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <PiggyBank className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-lg font-black text-slate-900 mb-2">{tViab("inversionTitle")}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: "75%" }}></div>
                </div>
                <span className="text-slate-900 font-bold whitespace-nowrap">75%</span>
              </div>
              <p className="text-slate-500">{tViab("inversion75")}</p>
              <div className="flex items-center gap-3">
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: "25%" }}></div>
                </div>
                <span className="text-slate-900 font-bold whitespace-nowrap">25%</span>
              </div>
              <p className="text-slate-500">{tViab("inversion25")}</p>
            </div>
          </FadeCard>
          <FadeCard delay={0.15} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <Clock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-black text-slate-900 mb-2">{tViab("tiempoTitle")}</h3>
            <div className="space-y-4 text-sm mt-4">
              <div>
                <div className="flex justify-between text-xs mb-1"><span className="text-slate-500">{tViab("tiempoAntes")}</span><span className="text-red-500 font-bold">{tViab("tiempoAntesVal")}</span></div>
                <div className="w-full bg-red-100 rounded-full h-3"><div className="bg-red-400 h-full rounded-full" style={{ width: "100%" }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1"><span className="text-slate-500">{tViab("tiempoDespues")}</span><span className="text-emerald-600 font-bold">{tViab("tiempoDespuesVal")}</span></div>
                <div className="w-full bg-emerald-100 rounded-full h-3"><div className="bg-emerald-500 h-full rounded-full" style={{ width: "12.5%" }}></div></div>
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-4">{tViab("tiempoNota")}</p>
          </FadeCard>
          <FadeCard delay={0.3} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <AlertTriangle className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-lg font-black text-slate-900 mb-2">{tViab("riesgosTitle")}</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span><strong className="text-slate-900">{tViab("riesgo1Label")}</strong> {tViab("riesgo1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span><strong className="text-slate-900">{tViab("riesgo2Label")}</strong> {tViab("riesgo2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">!</span>
                <span><strong className="text-slate-900">{tViab("riesgo3Label")}</strong> {tViab("riesgo3")}</span>
              </li>
            </ul>
          </FadeCard>
        </div>
      </Section>

      {/* ─── SECCIÓN 10: CIERRE ─── */}
      <Section id="cierre" dark className="bg-gradient-to-b from-slate-950 to-emerald-950">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
              {tCierre("title1")}<br/>
              <span className="text-emerald-400">{tCierre("highlight")}</span><br/>
              {tCierre("title2")}
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl mx-auto">
              {tCierre("desc")}
            </p>
            <Link href="/catalogo" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg rounded-2xl transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5">
              {tCierre("cta")} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
