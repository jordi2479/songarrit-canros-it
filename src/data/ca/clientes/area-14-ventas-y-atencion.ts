import { Categoria } from '../../types';

export const categoriaAREA14Ca: Categoria = {
    "id": "area-14",
    "area": "clientes",
    "titulo": "Vendes & Atenció",
    "propuestas": [
        {
            "id": "clientes-ventas-01",
            "codigo": "clientes-ventas-01",
            "titulo": "Assistent de WhatsApp",
            "descripcion": "**Canal automatitzat de WhatsApp** perquè els clients consultin disponibilitat i obertura fora d'horari sense saturar el mostrador.",
            "descripcionLarga": "Descongestiona les línies telefòniques en hores punta de mostrador. **Atén preguntes recurrents de clients mitjançant WhatsApp Business**: si la tenda està oberta un dissabte a la tarda, si hi ha ciment disponible o l'adreça exacta. Si la consulta és tècnica, la deriva netament a un dependent.",
            "ejemplo": "Un client escriu un diumenge a les 18:00 per WhatsApp: 'Obriríeu demà a les 7:30 i teniu sacs de morter?'. **L'assistent contesta al segon confirmant horari i existències**, assegurant que el client acudeixi a primera hora.",
            "viabilidad": "Sí mediante bot oficial de WhatsApp Business configurado con respuestas predeterminadas. Cero coste de programación compleja.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Antigravity",
                "Meta Business Suite"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "ChatGPT / Gemini"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "14",
            "pasos": [
                "**Configuració de bot:** Programar respostes automàtiques per a les 5 preguntes més repetides: horaris, festius, ubicació i serveis.",
                "**Consulta d'existències:** Habilitar resposta sobre disponibilitat de les 20 famílies bàsiques consultant la rèplica d'estoc.",
                "**Desviament intel·ligent:** Traspassar automàticament els missatges que requereixin pressupost o consulta complexa al venedor de guàrdia.",
                "**Horaris d'atenció:** Informar amb amabilitat de l'horari d'atenció personal quan s'escrigui fora de la jornada comercial."
            ]
        },
        {
            "id": "clientes-ventas-02",
            "codigo": "clientes-ventas-02",
            "titulo": "Tarifa Professional",
            "descripcion": "**Estructuració homogènia de descomptes** per a professionals sobre catàleg exportat, evitant errors manuals al mostrador.",
            "descripcionLarga": "Defineix regles clares de marge i descomptes per gremi (fontaneria, electricitat, construcció). **Es treballa i simula sobre una còpia de tarifes exportada per verificar el marge resultant** abans de validar el fitxer final per a la seva càrrega a les caixes de totes dues tendes.",
            "ejemplo": "Un autònom de reformes compra habitualment canonada i aixetes. **El sistema aplica automàticament el seu tram de tarifa professional pactat (marge garantit del 28%)**, evitant que el dependent hagi de calcular descomptes de cap.",
            "viabilidad": "Sí mediante elaboración de tabla de tarifas validada sobre copia Excel/CSV antes de cargar el fichero maestro en el TPV.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcat segur des d'ERP/TPV (CSV/Excel)",
                "Microsoft Excel (.xlsx)"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Importació a ERP/TPV (CSV validat)"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "14",
            "pasos": [
                "**Exportació de tarifes:** Exportar la llista actual de preus de cost i venda d'ambdues tendes a una còpia de treball.",
                "**Modelatge per gremi:** Definir els 3 trams de descompte per volum i gremi garantint el marge brut mínim fixat.",
                "**Simulació d'impacte:** Verificar el marge resultant abans d'aplicar les noves condicions de forma definitiva.",
                "**Càrrega programada:** Importar la tarifa validada als TPVs fora d'horari comercial mitjançant el procediment oficial."
            ]
        },
        {
            "id": "clientes-ventas-03",
            "codigo": "clientes-ventas-03",
            "titulo": "Atenció Multilingüe",
            "descripcion": "**Eina de traducció a mostrador** per atendre amb fluïdesa consultes tècniques de residents i propietaris de finques a Mallorca.",
            "descripcionLarga": "Al sud de Mallorca gran part de la despesa en reformes prové de residents alemanys i britànics. **Aquest assistent permet al dependent traduir termes tècnics ferreters en temps real** (vàlvules, tipus de broca, tractament de piscines) o generar pressupostos en el seu idioma nadiu, **multiplicant les vendes d'alt tiquet**.",
            "ejemplo": "Un propietari alemany a Ca'n Ros explica en el seu idioma que cerca un ràcord per connectar un sistema de reg a un dipòsit de 1.000 litres. **El dependent empra l'assistent de veu i li mostra a pantalla la solució exacta amb el preu en alemany**.",
            "viabilidad": "Sí mediante terminal o tablet de mostrador con traducción técnica especializada en suministros de construcción.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google Translate / DeepL",
                "Google NotebookLM",
                "Tauleta Mostrador"
            ],
            "softwareOpcional": [
                "ChatGPT / Gemini",
                "Google Antigravity"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "14",
            "pasos": [
                "**Glossari ferreter:** Crear un diccionari tècnic amb les 100 peces i eines més consultades en alemany, anglès i català.",
                "**Assistent a mostrador:** Configurar accés directe a traductor de veu a tauleta o telèfon corporatiu de mostrador.",
                "**Plantilles bilingües:** Disposar de fitxes i pressupostos en format bilingüe per a clients estrangers d'alt import.",
                "**Formació bàsica:** Ensenyar a l'equip de tenda les frases de cortesia i vocabulari clau per atendre amb amabilitat i soltesa."
            ]
        }
    ]
};
