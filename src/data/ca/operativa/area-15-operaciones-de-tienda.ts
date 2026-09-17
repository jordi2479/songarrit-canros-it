import { Categoria } from '../../types';

export const categoriaAREA15Ca: Categoria = {
    "id": "area-15",
    "area": "operativa",
    "titulo": "Operacions de Tenda",
    "propuestas": [
        {
            "id": "operativa-operaciones-01",
            "codigo": "operativa-operaciones-01",
            "titulo": "Recollida a Tenda",
            "descripcion": "**Servei de recollida ràpida** per a professionals que encarreguen material per WhatsApp a primera hora i el recullen sense fer coa.",
            "descripcionLarga": "Fidelitza els contractistes i gremis que no es poden permetre perdre 20 minuts esperant torn a mostrador a les 8:00 del matí. **El client envia la seva llista de materials d'hora; el mosso prepara la caixa o palet a magatzem** i quan està llest, el sistema el notifica per a recollida exprés.",
            "ejemplo": "Un electricista envia a les 7:15 la llista de tub corrugat i caixes d'empalmament. A les 7:45 rep l'avís de comanda preparada. **Arriba a les 8:00, mostra el codi al moll de càrrega, carrega la furgoneta en 3 minuts i se'n va a l'obra**.",
            "viabilidad": "Sí mediante protocolo organizativo de preparación de pedidos y aviso por mensaje estándar.",
            "dificultad": "Baixa",
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
            "cat_id": "15",
            "pasos": [
                "**Canal de recepció:** Habilitar un canal prioritari de WhatsApp per a comandes amb recollida a tenda el mateix dia.",
                "**Preparació a magatzem:** Fixar el protocol de preparació exprés: paquets revisats i etiquetats en menys de 45 minuts.",
                "**Zona de lliurament ràpid:** Habilitar un espai senyalitzat al costat del moll perquè el professional reculli sense esperar a caixa.",
                "**Comprovació de temps:** Mesurar el temps mitjà de permanència del client des de la seva arribada fins a la seva sortida amb el material."
            ]
        },
        {
            "id": "operativa-operaciones-02",
            "codigo": "operativa-operaciones-02",
            "titulo": "Encarrecs Especials",
            "descripcion": "**Gestor digital d'encàrrecs especials** que substitueix la llibreta de paper i avisa el client per WhatsApp així que el proveïdor lliura el paquet.",
            "descripcionLarga": "Acaba amb el desordre de notes adhesives i llibretes on s'anoten peces rares que demana la gent. **Quan un client encarrega un recanvi especial, es registra amb el seu telèfon**. Quan el paquet arriba al repartiment del proveïdor i es recepciona, **el sistema envia un missatge automàtic al client perquè passi a recollir-lo**.",
            "ejemplo": "Un pagès encarrega una fulla especial per a motocultor que no es té habitualment a tenda. S'anota al sistema digital. **Quan el distribuïdor la lliura tres dies després, el client rep un WhatsApp automàtic a l'instant**.",
            "viabilidad": "Sí mediante lista digital compartida entre dependientes y almacén.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Alt",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Antigravity",
                "Volcat segur des d'ERP/TPV"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Google Forms"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "15",
            "pasos": [
                "**Fitxa digital d'encàrrec:** Formulari ràpid a terminal de mostrador amb nom, telèfon, referència, proveïdor i bestreta.",
                "**Identificació de paquet:** Etiquetar la caixa en arribar del proveïdor amb el codi de l'encàrrec i ubicar a caseller de reserves.",
                "**Avís automàtic:** Enviar missatge instantani d'avís al client amb horari de tenda i saldo pendent d'abonar.",
                "**Control de no retirats:** Revisar quinzenalment els encàrrecs que duguin més de 15 dies sense recollir per contactar amb el client."
            ]
        },
        {
            "id": "operativa-operaciones-03",
            "codigo": "operativa-operaciones-03",
            "titulo": "Control de Lloguers",
            "descripcion": "**Contracte digital ràpid a tauleta** per a préstecs d'eines, lloguer de maquinària i control de fiances en un minut.",
            "descripcionLarga": "Professionalitza el servei de lloguer o préstec de maquinària pesant (martells demoledors, formigoneres, desbrossadores o escales extensibles). **Genera a la tauleta de mostrador el contracte amb foto del DNI del client, import de fiança retinguda i data pactada de devolució**, enviant recordatori el dia de lliurament.",
            "ejemplo": "Un particular lloga un martell demoledor per a un cap de setmana (fiança de 150 €, 35 €/dia). **Signa a la tauleta en 45 segons i rep el contracte al seu correu**. El dilluns a les 8:00 rep un recordatori per retornar la màquina abans de les 13:00.",
            "viabilidad": "Sí mediante plantilla digital de alquiler de maquinaria con firma táctil en móvil o tablet.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Mitjà",
            "acceso": "lectura",
            "fase": "Fase 1 30 dies",
            "stack": "anàlisi desacoblada",
            "softwareRecomendado": [
                "Tauleta Mostrador",
                "Google Workspace",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "DocuSign / Signatura Digital",
                "Google Drive",
                "Microsoft Excel"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "15",
            "pasos": [
                "**Plantilla legal de contracte:** Configurar el model digital amb condicions d'ús, cobertures d'assegurança i taula de tarifes diàries.",
                "**Captura de signatura i fiança:** Recollir la signatura digital a la tauleta i registrar el dipòsit de fiança en efectiu o retenció de targeta.",
                "**Recordatori de devolució:** Programar missatge automàtic 4 hores abans del venciment del període de lloguer acordat.",
                "**Checklist de revisió:** Comprovar l'estat tècnic de la màquina al seu retorn abans d'alliberar la fiança al client."
            ]
        }
    ]
};
