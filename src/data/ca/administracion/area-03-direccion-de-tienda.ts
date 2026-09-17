import { Categoria } from '../../types';

export const categoriaAREA03Ca: Categoria = {
    "id": "area-03",
    "area": "administracion",
    "titulo": "Direcció de Tenda",
    "propuestas": [
        {
            "id": "administracion-direccion-01",
            "codigo": "administracion-direccion-01",
            "titulo": "Quadre de Comandament",
            "descripcion": "**Quadre de comandament en una pàgina** cada dilluns a primera hora amb vendes, tiquet mitjà, esgotats crítics i caixa tancada de tenda.",
            "descripcionLarga": "Permet a la direcció arrencar la setmana amb els números clau del negoci **sense extreure informes dispersos ni creuar dades a mà**. En 10 minuts es detecten desviacions de facturació i referències amb demanda insatisfeta. El sistema no altera saldos; **lliura un resum analític clar per decidir amb criteri ferm**.",
            "ejemplo": "Cada dilluns a les 9:00 la direcció rep a la pantalla el resum de la setmana: evolució per dia, tiquet mitjà, **els 5 articles més venuts i els esgotats detectats**. Si després d'una setmana d'obra intensiva s'esgoten el ciment o tacs químics, **ressalta la necessitat de reposició amb la quantitat exacta**.",
            "viabilidad": "Sí mediante copia exportada semanal de ventas y caja que se exporta en tienda, sin especialista. Con apoyo puntual solo para automatizar la lectura recurrente del sistema.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcat segur des d'ERP/TPV (CSV/Excel)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Google Sheets"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "03",
            "pasos": [
                "**Selecció de KPIs:** Seleccionar els 5 indicadors vitals: facturació setmanal, marge mitjà estimat, caixa real, estoc total i deute vençut.",
                "**Extracció programada:** Connectar l'extracció de dades automatitzada cada diumenge a mitjanit sense interferir en l'horari comercial.",
                "**Plantilla executiva:** Dissenyar la plantilla executiva resum d'una sola pàgina orientada a la presa de 3 decisions clau.",
                "**Comitè setmanal:** Institucionalitzar la reunió setmanal de direcció de 20 minuts cada dilluns a les 9:00 sobre aquest panell."
            ]
        },
        {
            "id": "administracion-direccion-02",
            "codigo": "administracion-direccion-02",
            "titulo": "Caigudes de Venda",
            "descripcion": "**Detector d'anomalies de vendes** que avisa si la facturació setmanal cau respecte a l'any anterior i n'identifica el motiu probable.",
            "descripcionLarga": "Evita arribar a final de mes amb sorpreses desagradables a la facturació. El sistema compara el rendiment setmanal contra el mateix període de l'any passat només si la desviació negativa supera el llindar fixat. **Aïlla automàticament si la baixada es deu a un desfasament de festius o a una davallada en una categoria concreta**.",
            "ejemplo": "Si a la tercera setmana de setembre **la facturació cau un 14% interanual**, el sistema envia una alerta explicant que no és una crisi de mostrador: **les pluges continuades varen paralitzar la venda de pintura exterior** i va faltar un to habitual. L'encarregat revisa el motiu en 2 minuts.",
            "viabilidad": "Sí con el CSV de ventas por día y familia del año actual y anterior más calendario local. Proceso analítico en lectura.",
            "dificultad": "Mitjana",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcat segur des d'ERP/TPV (CSV/Excel)",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Outlook / Correu"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "03",
            "pasos": [
                "**Criteris de comparació:** Definir criteris homogenis de mesurament tenint en compte metres lineals, festius locals i equip.",
                "**Recollida de tiquets:** Automatitzar la recollida setmanal de tiquets emesos, tiquet mitjà, facturació per empleat i hores d'obertura.",
                "**Panell d'alertes:** Crear la visualització comparativa mensual ressaltant caigudes superiors al 10% per família de producte.",
                "**Acció comercial:** Compartir conclusions amb els encarregats de tenda per alinear operatives i activar promocions de xoc."
            ]
        },
        {
            "id": "administracion-direccion-03",
            "codigo": "administracion-direccion-03",
            "titulo": "Previsió de Tancament",
            "descripcion": "**Informe predictiu el dia 20** que projecta el tancament mensual i dóna 10 dies de marge per corregir el rumb abans d'acabar el mes.",
            "descripcionLarga": "Substitueix el costum d'esperar al dia 31 o a l'informe comptable del mes vençut per saber com ha anat el període. **A dia 20 projecta el rang de facturació final** combinant el ritme mitjà diari amb l'estacionalitat, **permetent avançar compres amb descompte o activar campanyes abans que sigui tard**.",
            "ejemplo": "El dia 20 a les 9:00 arriba una projecció amb tres escenaris. Si el ritme marca **un tancament un 8% per sota de l'objectiu pressupostari**, el responsable **compta amb 10 dies feiners per coordinar un reforç a mostradors clau** o tancar pressupostos pendents.",
            "viabilidad": "Sí con el CSV de ventas diarias acumuladas a día 20 más histórico mensual. Sin tocar contabilidad ni datos fiscales.",
            "dificultad": "Mitjana",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcat segur des d'ERP/TPV (CSV/Excel)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Google Sheets"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "03",
            "pasos": [
                "**Model predictiu:** Configurar la fórmula de projecció combinant la mitjana diària dels primers 20 dies amb l'estacionalitat històrica.",
                "**Escenaris de tancament:** Generar automàticament els 3 escenaris: conservador, esperat i òptim per a Palma i Campos.",
                "**Alerta de desviació:** Emetre informe executiu el dia 20 ressaltant les famílies que necessiten empenta comercial.",
                "**Pla de xoc:** Activar trucades a clients amb pressupostos vius i promocions de mostrador per assolir l'objectiu mensual."
            ]
        }
    ]
};
