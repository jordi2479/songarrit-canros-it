"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Briefcase, Unlock } from "lucide-react";
import { useLocale } from "next-intl";

export function ModeloImplantacion() {
  const locale = useLocale();

  const isCa = locale === 'ca';
  const isEn = locale === 'en';
  const isDe = locale === 'de';

  const t = useMemo(() => {
    if (isCa) {
      return {
        badge: "Posicionament Operatiu",
        roleTitle: "Facilitador d'Innovació",
        roleMobile: "Figura de confiança tècnica i transversal per connectar l'estratègia de direcció amb l'operativa diària, alliberant càrrega executiva i modernitzant l'empresa sense aturar la botiga.",
        roleDesktopPrefix: "Per orquestrar la sincronització entre l'àrea de negoci i l'operativa diària, es planteja la necessitat d'un ",
        roleDesktopHighlight1: "facilitador d'innovació operativa",
        roleDesktopMiddle: ". Una ",
        roleDesktopHighlight2: "figura de confiança transversal",
        roleDesktopEnd: " amb capacitats tècniques en el sector que connecti la visió estratègica de la direcció amb la realitat de l'equip. L'objectiu és descarregar de càrrega executiva a la propietat, garantint una modernització liderada des de l'ADN de l'empresa.",
        sectionTitle: "Horitzons de Maduresa",
        sectionSubtitle: "Avancem per consolidació de fites, no per calendaris teòrics inflexibles.",
        trackMarca: "Track: Marca",
        trackIa: "Track: IA i Sistemes",
        hitoBadge: "Fita de Consolidació",
        horizontes: [
          {
            id: "H1",
            title: "Fonaments i Cultura",
            goal: (
              <>Preparar el <strong className="text-white font-semibold">terreny operatiu i mental</strong> per a la digitalització.</>
            ),
            shortGoal: (
              <>Identitat <strong className="text-white font-semibold">unificada</strong> i capacitació sense fricció.</>
            ),
            marca: (
              <>Unificació d'<strong className="text-white font-semibold">identitat de Grup</strong> i auditoria de percepció.</>
            ),
            ia: (
              <>Capacitació de l'equip i <strong className="text-white font-semibold">estructuració de dades</strong>.</>
            ),
            trigger: (
              <>L'equip <strong className="text-amber-400 font-semibold">assimila la identitat</strong> i perd la por tecnològica.</>
            )
          },
          {
            id: "H2",
            title: "Desplegament sota Demanda",
            goal: (
              <>Injeccions d'<strong className="text-white font-semibold">eficiència directa</strong> sense aturar la botiga.</>
            ),
            shortGoal: (
              <>Eines <strong className="text-white font-semibold">modulars</strong> directes al taulell.</>
            ),
            marca: (
              <>Llançament de campanyes i <strong className="text-white font-semibold">fidelització PRO unificada</strong>.</>
            ),
            ia: (
              <>Implementació de solucions segons <strong className="text-white font-semibold">colls d'ampolla</strong>.</>
            ),
            trigger: (
              <>Les eines <strong className="text-amber-400 font-semibold">flueixen soles</strong> i generen estalvi real.</>
            )
          },
          {
            id: "H3",
            title: "Sinergia Global",
            goal: (
              <>Escalabilitat total de Grup <strong className="text-white font-semibold">(Son Garrit + Ca'n Ros)</strong>.</>
            ),
            shortGoal: (
              <><strong className="text-white font-semibold">Compres centralitzades</strong> i estoc compartit.</>
            ),
            marca: (
              <>Posicionament dominant el mercat local com a <strong className="text-white font-semibold">Grup</strong>.</>
            ),
            ia: (
              <>Automatització creuada (<strong className="text-white font-semibold">compres i estoc compartit</strong>).</>
            ),
            trigger: (
              <><strong className="text-amber-400 font-semibold">Visió 360° unificada</strong> assolida.</>
            )
          }
        ]
      };
    }

    if (isEn) {
      return {
        badge: "Operational Positioning",
        roleTitle: "Innovation Facilitator",
        roleMobile: "Cross-functional technical trusted figure connecting leadership strategy with daily store operations, lifting executive workload without halting business.",
        roleDesktopPrefix: "To orchestrate seamless alignment between business strategy and daily operations, an ",
        roleDesktopHighlight1: "operational innovation facilitator",
        roleDesktopMiddle: " is established. A ",
        roleDesktopHighlight2: "cross-functional trusted figure",
        roleDesktopEnd: " with industry technical expertise connecting executive vision with team reality. The goal is to relieve property executive burden, guaranteeing modernization driven from company DNA.",
        sectionTitle: "Maturity Horizons",
        sectionSubtitle: "We advance by milestone validation, not by rigid theoretical timelines.",
        trackMarca: "Track: Brand",
        trackIa: "Track: AI & Systems",
        hitoBadge: "Consolidation Milestone",
        horizontes: [
          {
            id: "H1",
            title: "Foundations & Culture",
            goal: (
              <>Preparing <strong className="text-white font-semibold">operational & mental ground</strong> for digital adoption.</>
            ),
            shortGoal: (
              <><strong className="text-white font-semibold">Unified identity</strong> and frictionless basic training.</>
            ),
            marca: (
              <>Unification of <strong className="text-white font-semibold">Group identity</strong> and perception audit.</>
            ),
            ia: (
              <>Team enablement and <strong className="text-white font-semibold">data structuring</strong>.</>
            ),
            trigger: (
              <>Team <strong className="text-amber-400 font-semibold">embraces identity</strong> and gains tech confidence.</>
            )
          },
          {
            id: "H2",
            title: "On-Demand Deployment",
            goal: (
              <><strong className="text-white font-semibold">Direct efficiency injections</strong> without interrupting retail flow.</>
            ),
            shortGoal: (
              <><strong className="text-white font-semibold">Modular tools</strong> directly serving the counter.</>
            ),
            marca: (
              <>Campaign rollout and <strong className="text-white font-semibold">unified PRO loyalty</strong>.</>
            ),
            ia: (
              <>Catalog solutions implemented targeting <strong className="text-white font-semibold">key bottlenecks</strong>.</>
            ),
            trigger: (
              <>Initial tools <strong className="text-amber-400 font-semibold">run smoothly</strong> and generate proven savings.</>
            )
          },
          {
            id: "H3",
            title: "Global Synergy",
            goal: (
              <>Full Group scalability <strong className="text-white font-semibold">(Son Garrit + Ca'n Ros)</strong>.</>
            ),
            shortGoal: (
              <><strong className="text-white font-semibold">Centralized purchasing</strong> & shared inventory.</>
            ),
            marca: (
              <>Dominant market positioning as a united <strong className="text-white font-semibold">Group</strong>.</>
            ),
            ia: (
              <>Cross-store automation (<strong className="text-white font-semibold">central purchases, live inventory</strong>).</>
            ),
            trigger: (
              <><strong className="text-amber-400 font-semibold">Full unified 360° vision</strong> accomplished.</>
            )
          }
        ]
      };
    }

    if (isDe) {
      return {
        badge: "Operative Positionierung",
        roleTitle: "Innovations-Facilitator",
        roleMobile: "Technisch versierte Vertrauensperson, die Unternehmensstrategie und Tagesgeschäft verbindet, Führungskräfte entlastet und modernisiert, ohne den Ladenbetrieb zu stoppen.",
        roleDesktopPrefix: "Um die Synchronisation zwischen Geschäftsführung und täglichem Betrieb sicherzustellen, wird ein ",
        roleDesktopHighlight1: "operativer Innovations-Facilitator",
        roleDesktopMiddle: " eingesetzt. Eine ",
        roleDesktopHighlight2: "bereichsübergreifende Vertrauensperson",
        roleDesktopEnd: " mit Branchen-Know-how, die strategische Visionen mit der Realität des Teams verbindet. Ziel ist es, die Geschäftsführung operativ zu entlasten und Modernisierung aus der eigenen DNA zu leiten.",
        sectionTitle: "Reifegrade & Horizonte",
        sectionSubtitle: "Wir schreiten durch Meilenstein-Validierung voran, nicht nach starren theoretischen Zeitplänen.",
        trackMarca: "Track: Marke",
        trackIa: "Track: KI & Systeme",
        hitoBadge: "Konsolidierungs-Meilenstein",
        horizontes: [
          {
            id: "H1",
            title: "Fundamente & Kultur",
            goal: (
              <><strong className="text-white font-semibold">Operatives und mentales Fundament</strong> für Digitalisierung schaffen.</>
            ),
            shortGoal: (
              <><strong className="text-white font-semibold">Einheitliche Identität</strong> und reibungslose Schulung.</>
            ),
            marca: (
              <>Vereinheitlichung der <strong className="text-white font-semibold">Gruppen-Identität</strong> und Audit.</>
            ),
            ia: (
              <>Grundlagenschulung des Teams und <strong className="text-white font-semibold">Datenstrukturierung</strong>.</>
            ),
            trigger: (
              <>Das Team <strong className="text-amber-400 font-semibold">verinnerlicht die Identität</strong> und gewinnt IT-Sicherheit.</>
            )
          },
          {
            id: "H2",
            title: "Bedarfsorientierte Bereitstellung",
            goal: (
              <><strong className="text-white font-semibold">Direkte Effizienzsprünge</strong> ohne Unterbrechung des Betriebs.</>
            ),
            shortGoal: (
              <><strong className="text-white font-semibold">Modulare Werkzeuge</strong> direkt für Theke & Lager.</>
            ),
            marca: (
              <>Kampagnenstart und <strong className="text-white font-semibold">einheitliche PRO-Kundenbindung</strong>.</>
            ),
            ia: (
              <>Gezielte Kataloglösungen zur Beseitigung von <strong className="text-white font-semibold">Engpässen</strong>.</>
            ),
            trigger: (
              <>Erste Tools <strong className="text-amber-400 font-semibold">laufen reibungslos</strong> und sparen messbar Zeit.</>
            )
          },
          {
            id: "H3",
            title: "Globale Synergie",
            goal: (
              <>Vollständige Gruppenskalierbarkeit <strong className="text-white font-semibold">(Son Garrit + Ca'n Ros)</strong>.</>
            ),
            shortGoal: (
              <><strong className="text-white font-semibold">Zentraleinkauf</strong> und geteilter Bestand.</>
            ),
            marca: (
              <>Marktbeherrschende Positionierung als vereinte <strong className="text-white font-semibold">Gruppe</strong>.</>
            ),
            ia: (
              <>Filialübergreifende Automatisierung (<strong className="text-white font-semibold">Zentrallager, Bestandsabgleich</strong>).</>
            ),
            trigger: (
              <><strong className="text-amber-400 font-semibold">Vollständige 360°-Vision</strong> erfolgreich etabliert.</>
            )
          }
        ]
      };
    }

    // Default: Español
    return {
      badge: "Posicionamiento Operativo",
      roleTitle: "Facilitador de Innovación",
      roleMobile: "Figura de confianza técnica y transversal para conectar la estrategia de dirección con la operativa diaria, liberando carga ejecutiva y modernizando la empresa sin detener la tienda.",
      roleDesktopPrefix: "Para orquestar la sincronización entre el área de negocio y la operativa diaria, se plantea la necesidad de un ",
      roleDesktopHighlight1: "facilitador de innovación operativa",
      roleDesktopMiddle: ". Una ",
      roleDesktopHighlight2: "figura de confianza transversal",
      roleDesktopEnd: " con capacidades técnicas en el sector que conecte la visión estratégica de la dirección con la realidad del equipo. El objetivo es descargar de carga ejecutiva a la propiedad, garantizando una modernización liderada desde el ADN de la empresa.",
      sectionTitle: "Horizontes de Madurez",
      sectionSubtitle: "Avanzamos por consolidación de hitos, no por calendarios teóricos inflexibles.",
      trackMarca: "Track: Marca",
      trackIa: "Track: IA & Sistemas",
      hitoBadge: "Hito de Consolidación",
      horizontes: [
        {
          id: "H1",
          title: "Cimientos & Cultura",
          goal: (
            <>Preparar el <strong className="text-white font-semibold">terreno operativo y mental</strong> para la digitalización.</>
          ),
          shortGoal: (
            <>Identidad <strong className="text-white font-semibold">unificada</strong> y capacitación sin fricción.</>
          ),
          marca: (
            <>Unificación de <strong className="text-white font-semibold">identidad de Grupo</strong> y auditoría de percepción.</>
          ),
          ia: (
            <>Capacitación del equipo y <strong className="text-white font-semibold">estructuración de datos</strong>.</>
          ),
          trigger: (
            <>El equipo <strong className="text-amber-400 font-semibold">asimila la identidad</strong> y pierde el miedo tecnológico.</>
          )
        },
        {
          id: "H2",
          title: "Despliegue bajo Demanda",
          goal: (
            <>Inyecciones de <strong className="text-white font-semibold">eficiencia directa</strong> sin detener la tienda.</>
          ),
          shortGoal: (
            <>Herramientas <strong className="text-white font-semibold">modulares</strong> directas al mostrador.</>
          ),
          marca: (
            <>Lanzamiento de campañas y <strong className="text-white font-semibold">fidelización PRO unificada</strong>.</>
          ),
          ia: (
            <>Implementación de soluciones según <strong className="text-white font-semibold">cuellos de botella</strong>.</>
          ),
          trigger: (
            <>Las herramientas <strong className="text-amber-400 font-semibold">fluyen solas</strong> y generan ahorro real.</>
          )
        },
        {
          id: "H3",
          title: "Sinergia Global",
          goal: (
            <>Escalabilidad total de Grupo <strong className="text-white font-semibold">(Son Garrit + Ca'n Ros)</strong>.</>
          ),
          shortGoal: (
            <><strong className="text-white font-semibold">Compras centralizadas</strong> y stock compartido.</>
          ),
          marca: (
            <>Posicionamiento dominando el mercado local como <strong className="text-white font-semibold">Grupo</strong>.</>
          ),
          ia: (
            <>Automatización cruzada (<strong className="text-white font-semibold">compras y stock compartido</strong>).</>
          ),
          trigger: (
            <><strong className="text-amber-400 font-semibold">Visión 360° unificada</strong> consolidada.</>
          )
        }
      ]
    };
  }, [isCa, isEn, isDe]);

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
                {t.badge}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-white mb-2 md:mb-4 leading-tight">
              {t.roleTitle}
            </h3>
            {/* Texto en móvil: Conciso y directo */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed md:hidden font-normal">
              {t.roleMobile}
            </p>
            {/* Texto completo en desktop */}
            <p className="hidden md:block text-slate-400 text-lg leading-relaxed font-normal">
              {t.roleDesktopPrefix}
              <strong className="text-blue-400 font-semibold">{t.roleDesktopHighlight1}</strong>
              {t.roleDesktopMiddle}
              <strong className="text-white font-semibold">{t.roleDesktopHighlight2}</strong>
              {t.roleDesktopEnd}
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
        <h3 className="text-lg md:text-2xl font-black text-white mb-1 md:mb-2">{t.sectionTitle}</h3>
        <p className="text-xs md:text-base text-slate-400">{t.sectionSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 relative">
        {t.horizontes.map((h, i) => (
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
                  <span className="text-slate-400 font-medium">IA:</span>
                  <span className="text-slate-200 truncate">{h.ia}</span>
                </div>
              </div>

              {/* Versión Desktop Completa */}
              <div className="hidden md:block space-y-6 flex-1">
                <div className="relative pl-4 border-l-2 border-violet-500/30">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-slate-900 rounded-full border-4 border-violet-500" />
                  <h5 className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-1">{t.trackMarca}</h5>
                  <p className="text-sm text-slate-300">{h.marca}</p>
                </div>
                <div className="relative pl-4 border-l-2 border-emerald-500/30">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-slate-900 rounded-full border-4 border-emerald-500" />
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">{t.trackIa}</h5>
                  <p className="text-sm text-slate-300">{h.ia}</p>
                </div>
              </div>
            </div>

            {/* Hito de Consolidación */}
            <div className="mt-3 md:mt-8 pt-2.5 md:pt-6 border-t border-slate-800/80">
              <div className="flex items-start gap-2 md:gap-3">
                <Unlock className="w-3.5 h-3.5 md:w-5 md:h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="block text-[10px] md:text-xs font-bold text-amber-500 uppercase tracking-wider mb-0.5 md:mb-1">{t.hitoBadge}</span>
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
