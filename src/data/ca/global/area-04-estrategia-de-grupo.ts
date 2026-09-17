import { Categoria } from '../../types';

export const categoriaAREA04Ca: Categoria = {
    "id": "area-04",
    "area": "global",
    "titulo": "Estratègia de Grup",
    "propuestas": [
        {
            "id": "global-direccion-01",
            "codigo": "global-direccion-01",
            "titulo": "Comparador de Tendes",
            "descripcion": "**Foto executiva comparada** de les dues tendes en una sola pàgina per analitzar vendes, tiquet mitjà i famílies en paral·lel sense telefonades.",
            "descripcionLarga": "Resol la necessitat de la direcció de veure el grup complet d'un cop d'ull. **Consolida les dades de venda de Palma i Campos** sota els mateixos criteris de setmana i caixa. Permet identificar quina tenda lidera cada família de producte, on es produeixen caigudes de tiquet i **quines bones pràctiques d'una tenda es poden traslladar a l'altra**.",
            "ejemplo": "Cada dilluns a les 9:15 la direcció revisa una taula comparada: **Palma manté el tiquet professional en serralleria** mentre **Campos lidera en eina agrícola i obra exterior**. Es detecta un esgotat a Campos que Palma té cobert al seu magatzem central.",
            "viabilidad": "Sí con los dos CSV semanales exportados de cada tienda. Con apoyo puntual para estandarizar el formato de lectura entre ambos sistemas.",
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
                "Google Sheets",
                "Claude Code",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "04",
            "pasos": [
                "**Extracció unificada:** Exportar els volcats de vendes i tiquets setmanals de tots dos sistemes TPV en format estandarditzat.",
                "**Homologació de famílies:** Mapejar les categories principals perquè fontaneria, pintura i cargoleria es comparin sota els mateixos criteris.",
                "**Fitxa comparativa:** Dissenyar la vista executiva d'una pàgina amb evolució de vendes, marge i tiquet mitjà per tenda.",
                "**Revisió de sinergies:** Sessió mensual per identificar oportunitats de traspàs de producte i reforç comercial mutu."
            ]
        },
        {
            "id": "global-direccion-02",
            "codigo": "global-direccion-02",
            "titulo": "Regles de Compra",
            "descripcion": "**Protocol operatiu per escrit** que defineix quines compres i processos es centralitzen a nivell de grup i quins conserven total autonomia local.",
            "descripcionLarga": "Evita friccions i discussions recurrents entre els encarregats de Palma i Campos sobre compres i decisions de mostrador. **Estableix amb nitidesa quins acords de volum amb fabricants líders es negocien conjuntament**, mentre que **el solt rural de Campos i el tracte proper es gestionen amb total llibertat local**.",
            "ejemplo": "En una revisió de proveïdors, la matriu deixa clar que **la tarifa de cargoleria i pintures es pacta a nivell grup per obtenir millor ràpel**, però l'encarregat de Ca'n Ros **decideix autònomament quines marques locals de recanvis agrícoles incorporar** per als seus clients pagesos.",
            "viabilidad": "Sí. Trabajo documental y organizativo no-code con criterios consensuados por la dirección de ambas tiendas.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Mitjà",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Google Workspace / Documents"
            ],
            "softwareOpcional": [
                "Google Gemini",
                "Claude",
                "Microsoft Word"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "04",
            "pasos": [
                "**Mapa de competències:** Llistar totes les decisions operatives: compres de volum, proveïdors locals, fixació de PVP i horaris.",
                "**Matriu de responsabilitats:** Definir per escrit quines decisions són de consens de grup i quines són 100% autònomes de cada tenda.",
                "**Document consensuat:** Redactar una guia clara de 2 pàgines aprovada per la direcció de Son Garrit i Ca'n Ros.",
                "**Revisió anual:** Avaluar el funcionament del protocol al comitè de direcció anual per ajustar friccions."
            ]
        },
        {
            "id": "global-direccion-03",
            "codigo": "global-direccion-03",
            "titulo": "Demanda Palma-Campos",
            "descripcion": "**Analítica creuada de demanda** que identifica diferències de compra entre el perfil urbà de Palma i l'entorn rural de Campos.",
            "descripcionLarga": "Compara el comportament del consumidor en tots dos entorns geogràfics. **Revela amb setmanes d'antelació quan arrenca la temporada de jardí, climatització, podes o reformes** al camp enfront de la ciutat, permetent abastir Ca'n Ros en el moment just i **traslladar excedents a Palma quan la temporada canvia**.",
            "ejemplo": "A mitjan febrer, el comparador mostra que **la demanda de malles d'ombra i canonades de degoteig a Campos s'avança quatre setmanes** a la demanda urbana de Palma. Permet **avançar la comanda conjunta a fabricant i assegurar estoc al millor preu**.",
            "viabilidad": "Sí mediante cruce de históricos de venta mensual por familias de ambas tiendas. Proceso analítico puro.",
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
            "cat_id": "04",
            "pasos": [
                "**Històric estacional:** Analitzar les vendes dels darrers 2 anys per setmanes per identificar el desfasament de demanda camp-ciutat.",
                "**Calendari d'anticipació:** Fixar les dates òptimes d'aprovisionament per a cada tenda segons el seu calendari real de temporada.",
                "**Comandes coordinades:** Agrupar les comandes a fabricants anticipant l'entrada escalonada de mercaderia entre ambdues seus.",
                "**Balanç de temporada:** Traspassar el sobrant d'estoc estacional entre tendes per evitar immobilitzats al tancament de campanya."
            ]
        }
    ]
};
