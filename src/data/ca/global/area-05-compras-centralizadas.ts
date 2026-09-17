import { Categoria } from '../../types';

export const categoriaAREA05Ca: Categoria = {
    "id": "area-05",
    "area": "global",
    "titulo": "Compres Centralitzades",
    "propuestas": [
        {
            "id": "global-compras-01",
            "codigo": "global-compras-01",
            "titulo": "Tarifa Única Grup",
            "descripcion": "**Informe consolidat de compres** a fabricants compartits per unificar condicions i exigir als proveïdors la millor tarifa de grup.",
            "descripcionLarga": "Detecta si un mateix fabricant (Stanley, Bellota, Sika, etc.) està venent a Palma i a Campos amb condicions o descomptes diferents. **Agrupa el volum conjunt de facturació de les dues ferreteries per exigir la tarifa màxima per volum de grup**, igualant els marges a l'alça a ambdues tendes.",
            "ejemplo": "En creuar compres anuals, el sistema detecta que **Son Garrit compra silicones amb un 38% de descompte i Ca'n Ros amb un 32%** del mateix distribuïdor. Genera un informe que la direcció empra a la reunió anual per **unificar el descompte al 40% per volum agrupat**.",
            "viabilidad": "Sí a partir del listado de compras anuales por proveedor y referencia de las dos tiendas. No toca sistemas transaccionales.",
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
            "area_id": "global",
            "cat_id": "05",
            "pasos": [
                "**Consolidació de compres:** Consolidar el volum anual de compres agrupades de Son Garrit i Ca'n Ros per als 15 principals proveïdors.",
                "**Reunió amb proveïdors:** Sol·licitar reunió conjunta amb els delegats comercials presentant la xifra global del grup.",
                "**Tarifa unificada:** Negociar un tram de descompte unificat i condicions de ports compartits aplicables a ambdós centres.",
                "**Actualització a caixes:** Actualitzar les fitxes de tarifes i condicions de compra als sistemes de totes dues ferreteries."
            ]
        },
        {
            "id": "global-compras-02",
            "codigo": "global-compras-02",
            "titulo": "Optimitzador de Ràpels",
            "descripcion": "**Seguiment en temps real de ràpels** a proveïdors clau per assegurar el cobrament de bonificacions anuals abans del tancament d'exercici.",
            "descripcionLarga": "Supervisa el volum acumulat de compres amb aquells proveïdors que ofereixen descomptes per trams anuals (ràpels). **Avisa amb setmanes d'antelació si el grup està a prop d'assolir el següent esglaó de bonificació** (ex. 3% extra a partir de 25.000 €), recomanant concentrar comandes per consolidar el bonus.",
            "ejemplo": "A mitjan novembre avisa que el grup suma 46.800 € en compres a un fabricant de fontaneria, **mancant només 3.200 € per assolir el ràpel del 4% anual (un retorn directe de 2.000 € nets)**. Proposa avançar comandes bàsiques de desembre per assegurar l'esglaó.",
            "viabilidad": "Sí introduciendo las condiciones de rappel de cada contrato marco y el volumen de compras acumulado en el año.",
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
            "area_id": "global",
            "cat_id": "05",
            "pasos": [
                "**Registre de contractes:** Recopilar els contractes i acords anuals de ràpel per volum signats amb els fabricants clau.",
                "**Seguiment mensual:** Muntar una fulla de seguiment de l'acumulat mensual de compres enfront del llindar necessari per cobrar.",
                "**Alerta a 45 dies:** Emetre una alerta 45 dies abans del tancament d'any si manquen poques compres per assolir l'esglaó de bonificació.",
                "**Liquidació i cobrament:** Gestionar la reclamació i cobrament puntual de les liquidacions de ràpel vençudes a principi d'any."
            ]
        },
        {
            "id": "global-compras-03",
            "codigo": "global-compras-03",
            "titulo": "Coordinador de Solt",
            "descripcion": "**Catàleg classificat de solt** que assegura economies d'escala en referències estàndard d'alta rotació sense perdre el producte local.",
            "descripcionLarga": "Evita la dispersió caòtica de marques entre tendes. Classifica les referències en dos blocs: **el 70% (cargoleria, adhesius, discs, eines) s'estandarditza amb les mateixes marques per aconseguir preus imbatibles**; el 30% restant es reserva per atendre la identitat local de cada comarca.",
            "ejemplo": "En donar d'alta una nova gamma de pintures, el protocol **estandarditza la línia bàsica de plàstica blanca amb el fabricant comú amb un 15% d'estalvi**, mentre **Ca'n Ros manté el seu esmalt rústic balear específic** de gran arrelament a la comarca.",
            "viabilidad": "Sí mediante auditoría del catálogo de productos y familias de ambas tiendas en hoja estructurada no-code.",
            "dificultad": "Mitjana",
            "riesgo": "Baix",
            "beneficio": "Mitjà",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Volcat segur des d'ERP/TPV (CSV/Excel)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Google Antigravity",
                "Claude",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "05",
            "pasos": [
                "**Auditoria de marques:** Identificar duplicitats de proveïdors per a productes idèntics a ambdues tendes.",
                "**Estandardització 70/30:** Acordar el catàleg de marques prioritàries de grup mantenint llibertat en producte local.",
                "**Comandes agrupades:** Establir una agenda compartida de comandes setmanals per assolir comandes mínimes sense ports.",
                "**Revisió periòdica:** Avaluar l'estalvi en costos de compra i el compliment de les famílies estandarditzades."
            ]
        }
    ]
};
