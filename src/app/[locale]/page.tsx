"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "@/i18n/navigation";
import {
  Flame, BarChart3, Clock, Shield, Handshake, RotateCcw,
  Building2, Store, Users, Settings, ArrowRight,
  ShoppingCart, CreditCard, Compass,
  LayoutDashboard, Package, Truck, UserCog, Lock, MessageSquare, Wrench,
  TrendingUp, PiggyBank, AlertTriangle, Sparkles,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
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

/* ─── Áreas por bloque ─── */
const bloques = [
  {
    id: "B1", nombre: "Grupo", icon: Building2, color: "blue",
    desc: "Sinergias Palma + Campos",
    areas: [
      { num: "04", nombre: "Dirección de Grupo", icon: Compass },
      { num: "05", nombre: "Compras Centralizadas", icon: ShoppingCart },
      { num: "06", nombre: "Stock Compartido", icon: Package },
      { num: "07", nombre: "Tesorería de Grupo", icon: CreditCard },
      { num: "08", nombre: "Marcas Locales", icon: Sparkles },
    ],
  },
  {
    id: "B2", nombre: "Núcleo", icon: Store, color: "emerald",
    desc: "Gestión interna Ca'n Ros",
    areas: [
      { num: "01", nombre: "Compras y Stock", icon: ShoppingCart },
      { num: "02", nombre: "Finanzas Tienda", icon: CreditCard },
      { num: "03", nombre: "Dirección Tienda", icon: LayoutDashboard },
    ],
  },
  {
    id: "B3", nombre: "Clientes", icon: Users, color: "violet",
    desc: "Mostrador, marketing y ventas",
    areas: [
      { num: "09", nombre: "Marketing y Reputación", icon: TrendingUp },
      { num: "10", nombre: "Saber Hacer Palma→Campos", icon: UserCog },
      { num: "14", nombre: "Atención y WhatsApp", icon: MessageSquare },
    ],
  },
  {
    id: "B4", nombre: "Operativa", icon: Settings, color: "amber",
    desc: "Logística, equipo y seguridad",
    areas: [
      { num: "11", nombre: "Reparto a Obra", icon: Truck },
      { num: "12", nombre: "Equipo y Administración", icon: UserCog },
      { num: "13", nombre: "Seguridad y Control", icon: Lock },
      { num: "15", nombre: "Operaciones Auxiliares", icon: Wrench },
    ],
  },
];

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
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Propuesta de Departamento IT</span>
          </motion.div>
          <AnimatedText
            text="Dos tiendas. Un grupo. Cero caos."
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8"
            delay={0.4}
          />
          <motion.p
            className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Propuesta de Departamento de Operaciones e IT para el Grupo <strong className="text-white font-semibold">Son Garrit + Ca'n Ros</strong>
          </motion.p>
        </div>
        <ScrollIndicator targetId="problema" />
      </Section>

      {/* ─── SECCIÓN 2: EL PROBLEMA ─── */}
      <Section id="problema">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-tight">
              ¿Qué implica gestionar
              <span className="text-emerald-500"> 2 tiendas</span> con métodos de 1?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Adquirir Ca'n Ros fue un éxito estratégico, pero a nivel operativo multiplica el estrés.
              Los métodos tradicionales diseñados para una sola tienda generan desorden silencioso que roba horas de venta cada semana.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Flame, title: "Apagar fuegos", desc: "El tiempo se invierte en urgencias en lugar de planificar.", color: "red" as const },
              { icon: BarChart3, title: "Datos cruzados a mano", desc: "Tarifas, stock y facturas comparadas manualmente entre Palma y Campos.", color: "amber" as const },
              { icon: Clock, title: "Horas perdidas", desc: "Los encargados pasan más tiempo tecleando que vendiendo en mostrador.", color: "blue" as const },
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
            No se trata de comprar programas.<br/>
            <span className="text-emerald-400">Se trata de poner orden.</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-16">
            Un Departamento de IT interno elimina el trabajo mecánico: puntear facturas, revisar stock a ojo, redactar correos repetitivos. Los encargados vuelven al mostrador a vender.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { antes: "📋 Facturas a mano", despues: "✅ Factura revisada al instante", delay: 0 },
              { antes: "📦 Stock a ojo", despues: "📊 Alerta de rotura inteligente", delay: 0.15 },
              { antes: "✉️ Correos manuales", despues: "🤖 Borrador listo para enviar", delay: 0.3 },
            ].map((item) => (
              <FadeCard key={item.antes} delay={item.delay} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-slate-500 text-sm mb-4 line-through">{item.antes}</div>
                <div className="text-lg font-bold text-white">{item.despues}</div>
              </FadeCard>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── SECCIÓN 4: EL PERFIL HÍBRIDO ─── */}
      <Section id="perfil" className="bg-gradient-to-b from-white to-emerald-50/30">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-slate-900">
            El Perfil Híbrido
          </h2>
          <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto">
            Una agencia monta un panel bonito. Pero <strong className="text-slate-900">no sabe qué es un taco químico</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeCard delay={0} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 text-left">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-5">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">50% Mostrador</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Cobrar y atender al profesional</li>
                <li>• Reponer y ordenar almacén</li>
                <li>• Conocer el catálogo de primera mano</li>
                <li>• Detectar los cuellos de botella reales</li>
              </ul>
            </FadeCard>
            <FadeCard delay={0.2} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 text-left">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">50% Procesos</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Automatizar alertas y cuadros de mando</li>
                <li>• Diseñar herramientas a medida</li>
                <li>• Coordinar al especialista externo</li>
                <li>• Analizar datos de las dos tiendas</li>
              </ul>
            </FadeCard>
          </div>
        </div>
      </Section>

      {/* ─── SECCIÓN 5: LAS 3 GARANTÍAS ─── */}
      <Section id="garantias" dark>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-center leading-tight">
          Tres garantías<br/><span className="text-emerald-400">inquebrantables</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Shield, title: "Propone el sistema, dispone la Dirección", desc: "Nada se ejecuta sin vuestro clic de aprobación. Las automatizaciones solo generan borradores.", color: "emerald" },
            { icon: Handshake, title: "Lo sensible, con especialista", desc: "TPV, ERP y banco los toca un profesional certificado. Yo coordino la lógica, no el código crítico.", color: "blue" },
            { icon: RotateCcw, title: "100% Reversible", desc: "Si algo no funciona, se apaga en un minuto. El negocio sigue igual que hoy. Cero daño.", color: "amber" },
          ].map((g, i) => (
            <FadeCard key={g.title} delay={i * 0.15} className={`p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${
                g.color === "emerald" ? "bg-emerald-500/10 text-emerald-400" :
                g.color === "blue" ? "bg-blue-500/10 text-blue-400" :
                "bg-amber-500/10 text-amber-400"
              }`}>
                <g.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-white mb-3 text-lg">{g.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{g.desc}</p>
            </FadeCard>
          ))}
        </div>
      </Section>

      {/* ─── SECCIÓN 6: LOS 4 BLOQUES ─── */}
      <Section id="bloques">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 leading-tight">
            150 ideas en <span className="text-emerald-600">4 pilares</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Todo el trabajo organizado en bloques estructurales. De lo macro (el grupo) a lo micro (el mostrador).
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {bloques.map((b, i) => {
            const c = colorClasses[b.color];
            return (
              <FadeCard key={b.id} delay={i * 0.1} className={`p-8 rounded-2xl bg-white border-2 ${c.card} shadow-sm hover:shadow-lg transition-all cursor-default group`}>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.badge}`}>
                    <b.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${c.icon}`}>{b.id}</span>
                    <h3 className="text-xl font-black text-slate-900">{b.nombre}</h3>
                  </div>
                </div>
                <p className="text-slate-500 text-sm mb-5">{b.desc}</p>
                <div className="space-y-2">
                  {b.areas.map((a) => (
                    <div key={a.num} className="flex items-center gap-3 text-sm text-slate-600 py-1.5 px-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <a.icon className="w-4 h-4 text-slate-400" />
                      <span className="font-mono text-xs text-slate-400">{a.num}</span>
                      <span>{a.nombre}</span>
                    </div>
                  ))}
                </div>
              </FadeCard>
            );
          })}
        </div>
      </Section>

      {/* ─── SECCIÓN 7: ZOOM ÁREAS ─── */}
      <Section id="areas" dark>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            15 áreas. <span className="text-emerald-400">10 ideas cada una.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Cada área del negocio tiene 10 propuestas concretas analizadas. Desde las compras de Ca'n Ros hasta la ruta de la furgoneta.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
          {bloques.flatMap((b) =>
            b.areas.map((a, i) => {
              const c = colorClasses[b.color];
              return (
                <FadeCard key={a.num} delay={i * 0.05} className={`p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all text-center group cursor-default`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2 ${c.badge}`}>
                    <a.icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 block">{a.num}</span>
                  <span className="text-xs text-slate-300 font-medium block mt-1">{a.nombre}</span>
                  <span className="text-[10px] text-slate-600 mt-2 block">10 proyectos</span>
                </FadeCard>
              );
            })
          )}
        </div>
        <div className="text-center mt-12">
          <Link href="/catalogo" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40">
            Explorar las 150 ideas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* ─── SECCIÓN 8: MINI-PROTOTIPOS ─── */}
      <Section id="prototipos" className="bg-gradient-to-b from-slate-950 to-slate-900" dark>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            Así se verá en el <span className="text-emerald-400">día a día</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Prototipos funcionales. Haced clic. Probad. Esto es lo que veréis en vuestro móvil o pantalla cada mañana.
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
            El baño de <span className="text-emerald-600">realidad</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            No todo es gratis ni inmediato. Transparencia total sobre costes, tiempos y riesgos.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <FadeCard delay={0} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <PiggyBank className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-lg font-black text-slate-900 mb-2">Inversión</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: "75%" }}></div>
                </div>
                <span className="text-slate-900 font-bold whitespace-nowrap">75%</span>
              </div>
              <p className="text-slate-500">Cubierto por el rol híbrido (herramientas no-code, IA estándar)</p>
              <div className="flex items-center gap-3">
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: "25%" }}></div>
                </div>
                <span className="text-slate-900 font-bold whitespace-nowrap">25%</span>
              </div>
              <p className="text-slate-500">Requiere inversión externa (especialista TPV/ERP, licencias)</p>
            </div>
          </FadeCard>
          <FadeCard delay={0.15} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <Clock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-black text-slate-900 mb-2">Tiempo</h3>
            <div className="space-y-4 text-sm mt-4">
              <div>
                <div className="flex justify-between text-xs mb-1"><span className="text-slate-500">Antes (manual)</span><span className="text-red-500 font-bold">2 horas</span></div>
                <div className="w-full bg-red-100 rounded-full h-3"><div className="bg-red-400 h-full rounded-full" style={{ width: "100%" }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1"><span className="text-slate-500">Después (supervisión)</span><span className="text-emerald-600 font-bold">15 min</span></div>
                <div className="w-full bg-emerald-100 rounded-full h-3"><div className="bg-emerald-500 h-full rounded-full" style={{ width: "12.5%" }}></div></div>
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-4">El humano nunca desaparece. Solo deja de picar teclas.</p>
          </FadeCard>
          <FadeCard delay={0.3} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <AlertTriangle className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-lg font-black text-slate-900 mb-2">Riesgos</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span><strong className="text-slate-900">Operativo:</strong> Cero. Solo genera borradores.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span><strong className="text-slate-900">Económico:</strong> 100% reversible. Se apaga en 1 minuto.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">!</span>
                <span><strong className="text-slate-900">Datos:</strong> El primer mes será limpiar tarifas y códigos.</span>
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
              Arrancamos con<br/>
              <span className="text-emerald-400">2 pruebas piloto</span><br/>
              este mes.
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl mx-auto">
              Elegid las áreas que más os duelen. Medimos resultados reales. Decidís si seguimos.
            </p>
            <Link href="/catalogo" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg rounded-2xl transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5">
              Explorar el catálogo completo <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
