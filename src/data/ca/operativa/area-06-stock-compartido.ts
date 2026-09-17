import { Categoria } from '../../types';

export const categoriaAREA06Ca: Categoria = {
    "id": "area-06",
    "area": "operativa",
    "titulo": "Estoc Compartit",
    "propuestas": [
        {
            "id": "operativa-stock-01",
            "codigo": "operativa-stock-01",
            "titulo": "Estoc Creuat",
            "descripcion": "**Consulta àgil d'estoc creuat** entre Palma i Campos sobre una còpia sincronitzada, sense tocar ni alentir les bases de cobrament.",
            "descripcionLarga": "Permet consultar el catàleg i existències de l'altra tenda a través d'una còpia desacoblada (rèplica de només lectura o volcat periòdic). **Si la connexió externa o el visor fallen, els TPVs de Palma i Campos continuen cobrant amb total normalitat** i sense cap dependència tècnica.",
            "ejemplo": "Un client a Campos necessita una bomba submergible d'1,5 CV de 420 € esgotada a prestatge. El dependent consulta el visor al navegador, **comprova que al magatzem de Palma hi ha 2 unitats** i **confirma la venda oferint-la per al matí següent**.",
            "viabilidad": "Sí mediante volcado programado periódico (ej. al cierre o cada 3 horas) a una base de datos externa de consulta. Las cajas de las tiendas nunca reciben peticiones externas ni sufren bloqueos.",
            "dificultad": "Mitjana",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Next.js / Web",
                "Volcat segur des d'ERP/TPV (CSV)",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "WhatsApp Business"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "06",
            "pasos": [
                "**Exportació d'estoc:** Configurar l'exportació periòdica programada d'estoc a un repositori extern de consulta.",
                "**Visor web ràpid:** Muntar una interfície de cerca lleugera perquè el dependent consulti existències en 3 segons.",
                "**Aïllament garantit:** Comprovar que qualsevol caiguda del visor o de la xarxa no afecta en res l'operativa de cobrament de les caixes.",
                "**Capacitació d'equip:** Instruir el personal de mostrador per consultar el visor abans de comunicar una falta al client."
            ]
        },
        {
            "id": "operativa-stock-02",
            "codigo": "operativa-stock-02",
            "titulo": "Reserves entre Tendes",
            "descripcion": "**Sistema lleuger de reserves** entre tendes en un panell independent sense alterar l'inventari en calent de l'ERP.",
            "descripcionLarga": "Evita que el material compromès per a una tenda es vengui al mostrador de l'altra abans que el repartidor el carregui. Funciona com un tauler digital independent: **quan una tenda reserva estoc de l'altra, s'imprimeix una ordre física d'apartat per al mosso** sense bloquejar transaccions al TPV.",
            "ejemplo": "A les 17:00 Campos anota la reserva de 3 rotllos de malla electrofundida de Palma al panell web. Al magatzem de Son Garrit **s'imprimeix l'etiqueta: 'Reservat Ca'n Ros Campos — Ruta 9h'**. L'endemà **el client recull el seu material sense errors**.",
            "viabilidad": "Sí mediante panel web desacoplado. No requiere modificar las tablas del ERP central; el ajuste de stock se asienta como un traspaso habitual confirmado.",
            "dificultad": "Mitjana",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Next.js / Web",
                "Volcat segur des d'ERP/TPV"
            ],
            "softwareOpcional": [
                "Google Sheets",
                "Claude Code",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "06",
            "pasos": [
                "**Panell de reserves:** Crear un tauler web senzill accessible des del navegador de mostrador per sol·licitar material.",
                "**Etiqueta física:** Definir la rutina de magatzem amb impressió de l'etiqueta d'apartat per a la furgoneta d'enllaç.",
                "**Ruta de transport:** Fixar les freqüències de sortida de la ruta entre Palma i Campos (ex. dimarts i dijous a primera hora).",
                "**Assentament formal:** Registrar el traspàs a l'ERP de destinació únicament quan la mercaderia ha estat descarregada físicament."
            ]
        },
        {
            "id": "operativa-stock-03",
            "codigo": "operativa-stock-03",
            "titulo": "Traspassos Automàtics",
            "descripcion": "**Generador d'albarans de traspàs** entre societats per mantenir l'inventari i la comptabilitat impecables sense doble feina manual.",
            "descripcionLarga": "Assegura que cada moviment de mercaderia entre Palma i Campos quedi legalment i fiscalment registrat sense exigir temps extra a administració. **En confirmar un traspàs, genera automàticament el document de sortida en origen i d'entrada en destinació amb valoració a preu de cost intern**, evitant desquadraments.",
            "ejemplo": "En carregar 1.200 € en eines de Palma per reforçar la campanya de poda a Campos, **el sistema imprimeix l'albarà de traspàs valorat entre les dues raons socials**. L'inventari de Palma descompta unitats i Campos les suma **sense picar referències a mà**.",
            "viabilidad": "Sí mediante plantilla de traspaso interno estandarizada. Con especialista si se automatiza el asiento en ambos ERPs.",
            "dificultad": "Mitjana",
            "riesgo": "Mitjà",
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
                "Importació a ERP/TPV (CSV validat)"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "06",
            "pasos": [
                "**Detecció d'obsolets:** Generar el llistat de referències amb més de 180 dies sense moviment de venda a ambdós magatzems.",
                "**Valoració de cost:** Classificar el material per valor immobilitzat i marge per definir la valoració interna del traspàs.",
                "**Document legal:** Generar la plantilla d'albarà intersocietari que compleix tots els requisits fiscals de transport de mercaderies.",
                "**Regularització comptable:** Integrar els albarans de traspàs mensualment en les comptabilitats de totes dues mercantils."
            ]
        }
    ]
};
