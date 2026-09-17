import { Categoria } from '../../types';

export const categoriaAREA07Ca: Categoria = {
    "id": "area-07",
    "area": "global",
    "titulo": "Finances de Grup",
    "propuestas": [
        {
            "id": "global-finanzas-01",
            "codigo": "global-finanzas-01",
            "titulo": "Previsió de Tresoreria",
            "descripcion": "**Visió unificada de tresoreria** a 30 i 60 dies vista amb comptes bancaris, pagaments a proveïdors i cobraments previstos d'ambdues tendes.",
            "descripcionLarga": "Evita tensions de liquiditat innecessàries en una tenda quan l'altra té excedent de tresoreria. **Agrupa en un informe setmanal els saldos disponibles, remeses de cobrament i venciments de rebuts**, projectant el flux de caixa global per **coordinar pagaments sense recórrer a pòlisses de crèdit costoses**.",
            "ejemplo": "A dia 25 l'informe projecta que **Ca'n Ros té venciments de compres per 18.000 € i Son Garrit disposa d'un romanent en compte de 24.000 €**. La direcció planifica la transferència interna amb antelació **sense pagar comissions per descobert bancari**.",
            "viabilidad": "Sí con los extractos de vencimientos de ambas sociedades. Requiere cautela por sensibilidad financiera; solo lectura informativa para los socios.",
            "dificultad": "Mitjana",
            "riesgo": "Mitjà",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcat segur des d'ERP/TPV (Palma + Campos)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Google Sheets",
                "Claude Code",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "07",
            "pasos": [
                "**Estructura consolidada:** Definir l'estructura de l'informe de caixa consolidat: entrades per mostrador, cobraments a crèdit i pagaments fixos.",
                "**Captura de saldos:** Connectar la captura de saldos bancaris i facturació diària per obtenir una foto financera integrada.",
                "**Calendari de venciments:** Modelar el calendari de venciments de proveïdors i impostos per anticipar possibles tensions.",
                "**Revisió quinzenal:** Revisar quinzenalment la previsió de caixa a 30 dies per coordinar transferències o línies de crèdit."
            ]
        },
        {
            "id": "global-finanzas-02",
            "codigo": "global-finanzas-02",
            "titulo": "Crèdit Unificat",
            "descripcion": "**Control del crèdit unificat** que vigila el risc acumulat de clients que retiren material a ambdues ferreteries.",
            "descripcionLarga": "Protegeix el grup contra el risc de clients que acumulen deute en una tenda mentre continuen demanant fiac a l'altra. **Estableix un límit de crèdit global per empresa constructora**. Si un client deu 4.000 € a Palma, el mostrador de Campos és informat a l'instant abans d'autoritzar-li més material a crèdit.",
            "ejemplo": "Una empresa de reformes de Palma obre obra a Santanyí i acudeix a Ca'n Ros Campos a treure material fiat. El sistema adverteix que **ja té vençuda una factura de 3.200 € a Son Garrit Palma**, evitant que el grup incrementi el risc financer sense garanties.",
            "viabilidad": "Sí mediante cruce periódico de saldos vivos por CIF de cliente. Proceso analítico de lectura y alerta preventiva.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcat segur des d'ERP/TPV (Palma + Campos)",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Outlook / Correu"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "07",
            "pasos": [
                "**Encreuament de comptes:** Creuar els llistats de clients a crèdit per identificar empreses que compren a ambdues ferreteries.",
                "**Límit consolidat:** Fixar un límit de crèdit global del grup per a cada compte compartit, evitant riscos encoberts.",
                "**Alerta simultània:** Establir avís immediat si el client supera el termini de pagament acordat a qualsevol dels dos centres.",
                "**Protocol de cobraments:** Notificar als equips d'administració i vendes d'ambdues tendes sobre la política unificada de crèdit."
            ]
        },
        {
            "id": "global-finanzas-03",
            "codigo": "global-finanzas-03",
            "titulo": "Rendibilitat per Família",
            "descripcion": "**Anàlisi de rendibilitat neta** per família que revela quines línies de producte deixen més benefici a cada localitat i on s'escapen marges.",
            "descripcionLarga": "Compara el marge net real que deixa cada categoria (eina elèctrica, fontaneria, cargoleria, serralleria) a Palma enfront de Campos. **Identifica si una tenda està venent amb marges innecessàriament baixos per costum** o si l'altra té marge per apujar preus en productes de poca elasticitat.",
            "ejemplo": "L'informe mostra que en fontaneria **Palma treballa amb un 34% de marge brut mentre Campos opera amb un 27%** en els mateixos accessoris de PVC i llautó. Permet **ajustar el PVP a Campos per recuperar 5 punts de marge** sense perdre quota de mercat.",
            "viabilidad": "Sí con los datos de ventas y costes de ambas tiendas. Proceso puramente analítico para toma de decisiones estratégicas.",
            "dificultad": "Mitjana",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcat segur des d'ERP/TPV (Palma + Campos)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Google Sheets"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "07",
            "pasos": [
                "**Recopilació de marges:** Extreure marges bruts i costos de servei per categoria de producte a ambdues societats.",
                "**Comparativa creuada:** Comparar el rendiment de les mateixes famílies entre Palma i Campos per aïllar discrepàncies.",
                "**Optimització de comissions:** Negociar en bloc amb bancs i passarel·les de pagament condicions avantatjoses per facturació conjunta.",
                "**Ajust de PVP:** Revisar trimestralment les tarifes de mostrador en famílies amb marge comprimit."
            ]
        }
    ]
};
