import { Categoria } from '../../types';

export const categoriaAREA10Ca: Categoria = {
    "id": "area-10",
    "area": "global",
    "titulo": "Cultura & Coneixement",
    "propuestas": [
        {
            "id": "global-personas-01",
            "codigo": "global-personas-01",
            "titulo": "Assistent Tècnic Producte",
            "descripcion": "**Cercador intel·ligent per a mostrador** que resol en segons dubtes tècnics complexos de fontaneria, serralleria o químics.",
            "descripcionLarga": "Dóna suport als dependents més joves o amb menys experiència quan un client fa una consulta tècnica difícil a mostrador. **En lloc d'interrompre el veterà o dir 'no ho sé', el dependent consulta al terminal**: compatibilitat de ràcords, rendiment d'impermeabilitzants o equivalència de bombins.",
            "ejemplo": "Un client demana quina imprimació aplicar sobre rajola vella abans de posar morter cola especial. El dependent consulta l'assistent en 15 segons i **respon amb seguretat tècnica la referència exacta disponible al passadís 3**.",
            "viabilidad": "Sí entrenando un asistente privado con las fichas técnicas de los principales fabricantes que vende la ferretería.",
            "dificultad": "Mitjana",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Google Antigravity",
                "Next.js / Web"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Google Drive"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "10",
            "pasos": [
                "**Base de consultes:** Crear una base de dades digital senzilla amb fitxes tècniques, dosificacions i guies d'aplicació.",
                "**Accessos ràpids:** Instal·lar accessos directes de cerca ràpida als terminals de mostrador d'ambdues tendes.",
                "**Top 20 dubtes:** Alimentar la base amb els 20 dubtes tècnics més complexos que solen plantejar els clients.",
                "**Aportacions de l'equip:** Incentivar els empleats més veterans perquè incorporin trucs d'ofici i solucions pràctiques."
            ]
        },
        {
            "id": "global-personas-02",
            "codigo": "global-personas-02",
            "titulo": "Directori d'Especialistes",
            "descripcion": "**Guia ràpida d'especialistes interns** que identifica quin empleat domina cada ofici (bombes, soldadura, comandaments de garatge o reg).",
            "descripcionLarga": "Aprofita la saviesa acumulada als mostradors de Palma i Campos. Permet que quan entra un encàrrec o avaria molt especialitzada, **el mostrador sàpiga a l'instant a quin company de l'altra tenda consultar per telèfon o WhatsApp** per donar una solució impecable al client en l'acte.",
            "ejemplo": "A Campos entra un client amb un comandament de garatge antic descatalogat. El dependent mira el directori, veu que **Tomeu a Palma és l'expert en comandaments rars, li envia una foto per xat i confirma el duplicat en 3 minuts**.",
            "viabilidad": "Sí. Directorio digital de especialidades no-code accesible desde el móvil del personal.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Mitjà",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Workspace / Contactes",
                "Google NotebookLM"
            ],
            "softwareOpcional": [
                "Slack / Teams",
                "Google Sheets"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "10",
            "pasos": [
                "**Mapa d'oficis:** Registrar les especialitats tècniques de cada empleat de Palma i Campos en un quadre visible.",
                "**Canal de fotos:** Establir un canal intern àgil per enviar fotos de peces rares, plaques o etiquetes dubtoses.",
                "**Jornades de marques:** Coordinar amb fabricants sessions tècniques pràctiques de 45 minuts per anivellar coneixements.",
                "**Resolució en 3 min:** Mesurar la rapidesa en la resolució de consultes creuades entre tendes per no fer esperar el client."
            ]
        },
        {
            "id": "global-personas-03",
            "codigo": "global-personas-03",
            "titulo": "Reforços de Temporada",
            "descripcion": "**Acord operatiu de reforços** per cobrir substitucions, vacances o pics d'obra entre les plantilles de forma fluida.",
            "descripcionLarga": "Evita contractar personal temporal sense formació en moments punta. **Organitza un sistema pactat de suports en què empleats amb vehicle propi poden reforçar dies clau a l'altra tenda** amb compensació clara de quilometratge i dietes, mantenint sempre cobert el mostrador.",
            "ejemplo": "Durant la setmana de la Fira de Campos o el pic de reformes de primavera al sud, **un dependent de Palma reforça el mostrador de Ca'n Ros dos matins**, coneixent ja el sistema de cobrament i producte sense corbes d'aprenentatge.",
            "viabilidad": "Sí. Protocolo organizativo interno de recursos humanos acordado con el equipo.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Mitjà",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google Calendar",
                "WhatsApp Business",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Google Sheets",
                "Outlook"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "10",
            "pasos": [
                "**Calendari de pics:** Identificar les setmanes de l'any amb pics d'afluència a cada tenda (fires locals, inici d'obres).",
                "**Voluntarietat i dietes:** Establir un barem clar de compensació per desplaçament i dietes per als dies de reforç.",
                "**Formació creuada:** Assegurar que els empleats de suport coneixen la distribució bàsica del magatzem de l'altra tenda.",
                "**Balanç d'hores:** Coordinar el quadrant perquè les jornades de suport no descompensin el descans setmanal."
            ]
        }
    ]
};
