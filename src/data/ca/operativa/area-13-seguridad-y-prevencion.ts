import { Categoria } from '../../types';

export const categoriaAREA13Ca: Categoria = {
    "id": "area-13",
    "area": "operativa",
    "titulo": "Seguretat & Prevenció",
    "propuestas": [
        {
            "id": "operativa-seguridad-01",
            "codigo": "operativa-seguridad-01",
            "titulo": "Obertura i Tancament",
            "descripcion": "**Verificació diària d'obertura i tancament** de portes, pati i alarma connectada en acabar la jornada amb foto enviada a direcció.",
            "descripcionLarga": "Garanteix la tranquil·litat dels amos que el local queda 100% segur cada nit sense haver d'acudir-hi en persona. **L'empleat que tanca fa un recorregut de 2 minuts comprovant**: diners desats a caixa forta, pati de materials cadenat, maquinària desada i panell d'alarma activat.",
            "ejemplo": "A les 19:45 l'encarregat de tancament completa el checklist al mòbil i **treu foto del panell de l'alarma en verd i la cancel·la del pati bloquejada**. Els socis a Palma **reben la confirmació immediata de tenda tancada i segura**.",
            "viabilidad": "Sí mediante bot simple de mensajería o formulario móvil sin coste de equipamiento adicional.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Mitjà",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Forms",
                "Google Drive"
            ],
            "softwareOpcional": [
                "Telegram",
                "AppSheet"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "13",
            "pasos": [
                "**Checklist de tancament:** Dissenyar el formulari de 4 punts clau: diners a caixa forta, pati cadenat, maquinària sota clau i alarma activa.",
                "**Foto obligatòria:** Adjuntar fotografia del teclat de l'alarma armada i porta principal bloquejada en enviar el checklist.",
                "**Notificació a socis:** Recepció d'un avís breu al mòbil de gerència amb hora exacta i nom del responsable de tancament.",
                "**Històric d'obertures:** Registrar obertures fora d'horari per auditar accessos extraordinaris al local."
            ]
        },
        {
            "id": "operativa-seguridad-02",
            "codigo": "operativa-seguridad-02",
            "titulo": "Auditor de Desquadraments",
            "descripcion": "**Traçabilitat de desquadraments en efectiu** que aïlla si les diferències ocorren en un calaix concret o en canvis de torn.",
            "descripcionLarga": "Evita tensions i sospites infundades dins la plantilla davant faltes de diners al calaix. **Registra de forma individualitzada el quadrat a l'inici i final de cada torn**. Si es produeix un desquadrament reiterat, identifica el patró (horari, lloc o torn) de forma objectiva amb dades contrastables.",
            "ejemplo": "Durant dues setmanes es detecten **petites diferències de 10-20 € en efectiu els dissabtes al matí**. L'informe creua les dades i conclou que **el desquadrament es deu a un error sistemàtic en una moneda de canvi a l'inici del torn**, no a sostracció.",
            "viabilidad": "Sí mediante registro de turnos en la hoja de cierre de caja diaria.",
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
            "cat_id": "13",
            "pasos": [
                "**Arqueig per torn:** Implantar l'arqueig cec obligatori cada vegada que un dependent cedeix la caixa a un company.",
                "**Registre individual:** Associar cada moviment i cobrament a l'usuari identificat al TPV.",
                "**Semàfor de desviacions:** Alertar a gerència únicament quan un mateix lloc acumuli 3 diferències consecutives.",
                "**Revisió pedagògica:** Comentar les desviacions amb l'empleat per corregir errors de canvi sense crear mal clima laboral."
            ]
        },
        {
            "id": "operativa-seguridad-03",
            "codigo": "operativa-seguridad-03",
            "titulo": "Control de Mermes",
            "descripcion": "**Pla de recompte de 5 articles al dia** d'alt valor per detectar furts o pèrdues sense paralitzar la tenda per fer inventaris.",
            "descripcionLarga": "A ferreteria el furt de referències petites però cares (broques de cobalt, discs de diamant, alicates aïllades, cadenats) dessagna el marge sense que ningú se n'adoni fins a l'inventari anual. **Aquest sistema selecciona cada matí 5 referències aleatòries perquè l'encarregat compti les unitats en 3 minuts**.",
            "ejemplo": "El dimecres el sistema demana comptar els cadenats de seguretat d'alta gamma a vitrina. **Teòricament n'hi hauria d'haver 12 i n'hi ha 9**. La discrepància es detecta en la mateixa setmana en què va ocórrer, **permetent revisar tiquets o ajustar la seguretat de l'expositor**.",
            "viabilidad": "Sí mediante generador de listas de muestreo diario sobre artículos tipo A y B de riesgo.",
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
                "WhatsApp Business"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "13",
            "pasos": [
                "**Selecció d'articles sensibles:** Identificar les 100 referències de major valor o susceptibilitat de furt a sala de vendes.",
                "**Avís matinal aleatori:** Enviar cada matí una llista de 5 articles aleatoris al terminal de l'encarregat per al seu recompte.",
                "**Registre en 3 minuts:** Introduir l'estoc físic real comptat al sistema per contrastar amb l'inventari teòric.",
                "**Acció preventiva:** Reubicar a vitrines amb clau o instal·lar alarmes físiques en les referències que presentin merma repetida."
            ]
        }
    ]
};
