import { Categoria } from '../../types';

export const categoriaAREA01Ca: Categoria = {
    "id": "area-01",
    "area": "operativa",
    "titulo": "Compres & Estoc",
    "propuestas": [
        {
            "id": "operativa-compras-01",
            "codigo": "operativa-compras-01",
            "titulo": "Gestor de Comandes",
            "descripcion": "**Esborrany automàtic setmanal** que calcula quantitats òptimes segons vendes recents i estoc mínim, evitant esgotats sense sobrecarregar magatzem.",
            "descripcionLarga": "Calcula setmanalment la proposta de compra per a proveïdors habituals creuant la rotació dels darrers 30 a 90 dies amb les existències reals. **Elimina el temps dedicat a revisar prestatgeries amb llibreta** i comandes de memòria. El responsable de tenda **revisa la llista en 10 minuts**, ajusta si ho considera i **valida la comanda amb un sol clic**.",
            "ejemplo": "Cada dilluns a les 8:30 l'encarregat de compres rep una proposta amb 18 referències necessàries (ciment, discs de tall, tacs del 6). Es marquen en vermell **dues referències amb risc imminent d'esgotat** i es proposa la quantitat exacta per **cobrir dues setmanes sense sobredimensionar el magatzem**.",
            "viabilidad": "Sí mediante copia exportada semanal de ventas y stock actual desde el TPV/ERP. No requiere conexión directa de escritura; el sistema entrega el borrador ordenado para confirmación humana.",
            "dificultad": "Mitjana",
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
            "area_id": "operativa",
            "cat_id": "01",
            "pasos": [
                "**Extracció de vendes:** Exportar l'històric de vendes (darrers 90 dies) i existències actuals des de l'ERP/TPV a format CSV/Excel.",
                "**Paràmetres de cobertura:** Definir els dies de cobertura objectiu (ex. 15 dies) i estoc de seguretat per proveïdor habitual.",
                "**Prova en pilot:** Configurar el càlcul i provar-lo amb els 3 proveïdors de major volum (adhesius, fixació, cargoleria).",
                "**Rutina setmanal:** Establir el lliurament de l'esborrany els dilluns a primera hora per a validació en 10 minuts per l'encarregat."
            ]
        },
        {
            "id": "operativa-compras-02",
            "codigo": "operativa-compras-02",
            "titulo": "Radar d'Esgotats",
            "descripcion": "**Detecció matinal d'esgotats** a partir de la còpia del tancament diari, activant reposició abans d'obrir la tenda.",
            "descripcionLarga": "Treballa sobre la còpia exportada del tancament diari del TPV, **sense tocar les caixes ni els sistemes en calent**. Analitza a primera hora les referències clau (tipus A de vendes) que han quedat a zero existències i lliura una **llista neta de reposició o alternatives disponibles** a l'altra tenda abans que entrin els primers clients.",
            "ejemplo": "A les 7:30 del matí, l'encarregat obre l'informe generat: detecta que **s'ha esgotat l'ancoratge químic de 300ml a Palma**, però a Ca'n Ros Campos **queden 8 pots al volcat de magatzem**. Es coordina el traspàs abans d'aixecar la persiana.",
            "viabilidad": "Sí mediante lectura de la exportación del cierre diario de ventas. Cero riesgo para las cajas: la herramienta opera de forma 100% desacoplada del sistema de cobro en tienda.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google Antigravity",
                "Volcat segur des d'ERP/TPV (CSV)",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Outlook / Correu"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "01",
            "pasos": [
                "**Exportació de tancament:** Configurar l'exportació automàtica o manual del fitxer de vendes/tancament en finalitzar la jornada.",
                "**Filtrat de trencaments:** Processar la còpia de dades fora de l'horari comercial per identificar referències amb estoc zero.",
                "**Encreuament entre tendes:** Generar l'informe matinal amb substituts homologats i existències a la tenda veïna.",
                "**Validació ràpida:** Revisió en 5 minuts per l'encarregat de magatzem abans de l'obertura de persiana."
            ]
        },
        {
            "id": "operativa-compras-03",
            "codigo": "operativa-compras-03",
            "titulo": "Auditor d'Albarans",
            "descripcion": "**Acarament digital d'albarans** signats i factures rebudes de proveïdors per detectar discrepàncies en preus, quantitats o descomptes pactats.",
            "descripcionLarga": "Creua sistemàticament cada factura mensual del proveïdor amb els albarans de lliurament recepcionats a la tenda. Identifica discrepàncies habituals a ferreteria: **ports cobrats indegudament**, **referències no lliurades però facturades** o **tarifes sense el descompte acordat**. Si hi ha error, **redacta automàticament l'esborrany de reclamació** detallat.",
            "ejemplo": "En rebre la factura mensual d'un proveïdor de cargoleria, el sistema detecta que **s'han facturat 5 caixes no signades a cap albarà (diferència de 185 €)**. Prepara un correu amb còpia dels albarans i el detall del desquadrament per **reclamar al proveïdor en 1 clic**.",
            "viabilidad": "Sí con los PDF o escaneos de facturas y albaranes. Proceso documental que no toca bancos ni contabilidad; ahorra horas de punteo manual a administración.",
            "dificultad": "Mitjana",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Volcat segur des d'ERP/TPV (Excel/PDF)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Google Antigravity",
                "Claude",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "01",
            "pasos": [
                "**Digitalització en recepció:** Estandarditzar la recepció a tenda amb escaneig o foto immediata de l'albarà de lliurament signat.",
                "**Camps de comprovació:** Mapejar els camps essencials: número d'albarà, codi proveïdor, quantitat servida i preu unitari.",
                "**Encreuament quinzenal:** Implementar la rutina quinzenal d'encreuament de dades entre factures rebudes i albarans arxivats.",
                "**Reclamació en 1 clic:** Crear la plantilla de reclamació formal automàtica per remetre incidències de facturació en 1 clic."
            ]
        }
    ]
};
