import { Categoria } from '../../types';

export const categoriaAREA02Ca: Categoria = {
    "id": "area-02",
    "area": "administracion",
    "titulo": "Finances Locals",
    "propuestas": [
        {
            "id": "administracion-finanzas-01",
            "codigo": "administracion-finanzas-01",
            "titulo": "Control de Fiacs",
            "descripcion": "**Supervisió del crèdit comercial** que alerta a mostrador si un client supera el seu límit de fiac o té factures vençudes.",
            "descripcionLarga": "Protegeix la tresoreria de la tenda evitant que clients industrials continuïn retirant material a crèdit quan **superen el saldo autoritzat** o acumulen més de 30 dies de retard en pagaments. **Avisa discretament a mostrador** abans de confirmar la sortida de l'albarà i **genera setmanalment la llista de cobraments a gestionar** amb to cortès.",
            "ejemplo": "Un paleta habitual acudeix un dijous a retirar material per 600 €. El sistema avisa en pantalla que el seu límit de crèdit és de 2.000 € i **ja acumula 2.350 € amb factura pendent** de final de mes anterior. L'encarregat pot **sol·licitar-li regularitzar part del saldo abans de carregar** el camió.",
            "viabilidad": "Sí mediante copia exportada semanal de saldos vivos de clientes desde el ERP local. No ejecuta bloqueos bancarios ni llamadas automáticas; asiste al mostrador.",
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
            "cat_id": "02",
            "pasos": [
                "**Exportació de deute:** Extreure de l'ERP el llistat de factures emeses pendents amb data d'emissió, venciment i NIF del client.",
                "**Semàfor de mora:** Configurar el semàfor de trams de mora (0-30 dies, 31-60 dies, +60 dies) i fixar imports mínims d'actuació.",
                "**Models d'avís:** Dissenyar els 3 models de notificació escalonada (recordatori amistós, segon avís comercial i reclamació formal).",
                "**Revisió setmanal:** Capacitar administració per a la revisió setmanal cada dimarts i enviament directe per correu o WhatsApp corporatiu."
            ]
        },
        {
            "id": "administracion-finanzas-02",
            "codigo": "administracion-finanzas-02",
            "titulo": "Control de Marges",
            "descripcion": "**Auditoria contínua de tiquets** que identifica productes venuts per sota del cost de reposició o amb descomptes excessius a mostrador.",
            "descripcionLarga": "Revisa les vendes diàries per caçar operacions ruïnoses generades per tarifes desactualitzades de proveïdors, errors en teclejar descomptes manuals a caixa o vendes d'estoc antic a preus desfasats. **Emet un informe setmanal amb les referències on s'ha perdut marge** per corregir el PVP immediatament.",
            "ejemplo": "Després d'una actualització de tarifa en coure i canonada, el sistema detecta que **es varen vendre 4 rotllos a un instal·lador amb un marge real del -4%** perquè no s'havia actualitzat el cost base al TPV. L'informe **avisa el gerent per actualitzar el preu al catàleg** aquella mateixa tarda.",
            "viabilidad": "Sí mediante cruce entre coste de compra y precio cobrado en tickets. Proceso 100% analítico sin impacto en la operativa del mostrador.",
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
            "cat_id": "02",
            "pasos": [
                "**Descàrrega de tarifes:** Configurar la descàrrega periòdica d'extractes normalitzats i vendes diàries de l'ERP de tenda.",
                "**Diccionari de costos:** Creuar els preus de cost real actualitzats amb els preus nets cobrats a cada tiquet.",
                "**Panell de marges:** Establir el panell de desquadraments per aïllar productes venuts amb marge inferior al llindar mínim fixat.",
                "**Correcció de PVP:** Procediment de 15 minuts setmanals per ajustar preus a mostrador i evitar vendes a pèrdua."
            ]
        },
        {
            "id": "administracion-finanzas-03",
            "codigo": "administracion-finanzas-03",
            "titulo": "Quadrat de Caixa",
            "descripcion": "**Assistent de quadrat al tancament** que compara els diners reals comptats amb les tires de TPV i vendes en efectiu, localitzant desquadraments en 5 minuts.",
            "descripcionLarga": "Automatitza la comprovació de caixa al tancament de jornada. El caixer introdueix el recompte de monedes, bitllets i justificants de datàfon, i el sistema acara amb el registre del TPV. **Si hi ha desquadrament, identifica en quin tram horari va ocórrer la discrepància** per revisar el tiquet corresponent sense demorar la sortida del personal.",
            "ejemplo": "En tancar el divendres a les 19:30, **la caixa no quadra per 50 €**. L'assistent analitza els cobraments i assenyala que entre les 11:15 i les 11:30 **es va cobrar una venda amb targeta que es va registrar erròniament al botó d'efectiu al TPV**, resolent l'error sense cercar rebuts a cegues.",
            "viabilidad": "Sí mediante plantilla de recuento rápido conectada al resumen de caja diario. No toca dinero ni realiza movimientos contables.",
            "dificultad": "Baixa",
            "riesgo": "Baix",
            "beneficio": "Mitjà",
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
            "cat_id": "02",
            "pasos": [
                "**Registre de recompte:** Plantilla digital senzilla per introduir el desglossament físic de monedes, bitllets i tiquets de targeta.",
                "**Encreuament amb TPV:** Comparar automàticament el recompte físic contra el tancament Z generat pel programari de caixa.",
                "**Aïllament de franja:** Localitzar els intervals de temps amb cobraments anòmals quan la diferència superi la tolerància de 5 €.",
                "**Tancament documentat:** Generar el justificant diari de quadrat per a administració amb signatura del responsable de torn."
            ]
        }
    ]
};
