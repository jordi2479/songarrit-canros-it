import { Categoria } from '../../types';

export const categoriaAREA11Ca: Categoria = {
    "id": "area-11",
    "area": "operativa",
    "titulo": "Logística & Repartiment",
    "propuestas": [
        {
            "id": "operativa-logistica-01",
            "codigo": "operativa-logistica-01",
            "titulo": "Rutes de Repartiment",
            "descripcion": "**Organització eficient de furgoneta** per agrupar lliuraments a obres i traspassos entre tendes sense viatges en buit.",
            "descripcionLarga": "Redueix dràsticament la despesa en combustible i temps de xofer. En lloc de fer viatges improvisats cada vegada que algú demana una urgència, **fixa dos dies de ruta fixa (dimarts i dijous)**. El sistema ordena els paquets per punts de lliurament al mapa maximitzant la càrrega del vehicle.",
            "ejemplo": "El dimarts al matí la furgoneta surt de Palma amb **12 comandes de clients a obra a la zona sud i 4 traspassos per a Ca'n Ros**. El sistema optimitza el recorregut de parades **estalviant 45 km de trajecte i 40 minuts de conducció**.",
            "viabilidad": "Sí mediante herramienta de optimización de rutas gratuita conectada a las direcciones de los albaranes de entrega.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google Maps",
                "Google Antigravity",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Microsoft Excel"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "11",
            "pasos": [
                "**Full de ruta digital:** Centralitzar en un full de ruta digital les comandes confirmades per a repartiment abans de les 18:00 del dia previ.",
                "**Agrupació geogràfica:** Agrupar els lliuraments per zones de Mallorca (Palma ciutat, comarca Migjorn, llevant) optimitzant quilòmetres.",
                "**Franja de lliurament:** Assignar la franja estimada de lliurament (matí o tarda) i notificar al client mitjançant SMS o WhatsApp automàtic.",
                "**Control de consums:** Revisar setmanalment els temps de ruta i el cost mitjà de combustible per lliurament efectuat."
            ]
        },
        {
            "id": "operativa-logistica-02",
            "codigo": "operativa-logistica-02",
            "titulo": "Lliuraments a Obra",
            "descripcion": "**Notificació amb foto per WhatsApp** al constructor quan el material queda descarregat a peu d'obra com a justificant oficial.",
            "descripcionLarga": "Acaba amb els conflictes típics de repartiment: 'On m'has deixat els sacs de ciment? Jo no he vist res'. **En descarregar a la finca o obra, el xofer treu 1 foto del material a terra des del mòbil**. El sistema envia automàticament la foto i hora al WhatsApp del client com a justificant.",
            "ejemplo": "El repartidor descarrega 2 palets de morter i varetes a una obra a Ses Salines a les 11:20. **Fa una foto ràpida i el constructor rep un missatge al seu mòbil amb la imatge i hora exacta**, evitant discussions de lliurament.",
            "viabilidad": "Sí mediante bot de WhatsApp vinculado a foto de entrega del conductor. Cero papeleo y protección total contra reclamaciones falsas.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Antigravity",
                "Next.js / Web"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Google Drive"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "11",
            "pasos": [
                "**App a mòbil de repartiment:** Instal·lar una eina mòbil lleugera al telèfon corporatiu del repartidor per a captura d'albarans.",
                "**Foto de justificant:** Exigir la captura obligatòria de la foto del material descarregat a peu d'obra al costat de la signatura.",
                "**Sincronització en temps real:** Sincronitzar l'albarà signat amb administració en temps real així que el xofer prem 'Lliurat'.",
                "**Zero reclamacions:** Reduir a zero les reclamacions de clients que afirmen no haver rebut material pesant a obra."
            ]
        },
        {
            "id": "operativa-logistica-03",
            "codigo": "operativa-logistica-03",
            "titulo": "Calculador de Portes",
            "descripcion": "**Regla automàtica de portes** a mostrador que calcula quan compensa regalar el transport a obra i quan s'ha de cobrar tarifa.",
            "descripcionLarga": "Evita perdre diners en repartiments on el valor del marge de venda és inferior al cost real del camió i del xofer. **Calcula en funció de la distància i el marge de la comanda si el lliurament és viable gratis** (ex. comandes de més de 300 € o amb marge superior a 80 €) o si s'ha d'afegir un càrrec estàndard de transport.",
            "ejemplo": "Un client demana que li duguin a una finca a 14 km un carretó i dues pales (total 65 €, marge 18 €). El sistema avisa a pantalla: **'Marge insuficient per a port gratuït; aplicar tarifa de repartiment 15 € o convidar a recollida a tenda'**.",
            "viabilidad": "Sí mediante regla de cálculo en hoja o TPV con criterios claros de margen mínimo y kilometraje.",
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
            "area_id": "operativa",
            "cat_id": "11",
            "pasos": [
                "**Taula de distàncies:** Definir els radis quilomètrics des de Palma i Campos (Zona 1: 0-10 km, Zona 2: 10-25 km, Zona 3: >25 km).",
                "**Marge llindar:** Fixar l'import mínim de marge brut per atorgar port bonificat per tram de distància.",
                "**Avís a mostrador:** Mostrar al dependent a pantalla el cost suggerit de port abans de tancar la venda.",
                "**Tarifa transparent:** Publicar les tarifes de transport d'obra visibles a mostrador per a coneixement dels professionals."
            ]
        }
    ]
};
