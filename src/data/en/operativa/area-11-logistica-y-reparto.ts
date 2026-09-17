import { Categoria } from '../../types';

export const categoriaAREA11En: Categoria = {
    "id": "area-11",
    "area": "operativa",
    "titulo": "Logistics & Delivery",
    "propuestas": [
        {
            "id": "operativa-logistica-01",
            "codigo": "operativa-logistica-01",
            "titulo": "Delivery Routes",
            "descripcion": "**Efficient delivery van route planner** grouping jobsite drop-offs and inter-store transfers without empty mileage.",
            "descripcionLarga": "Drastically cuts fuel spend and driver driving hours. Instead of making unplanned ad-hoc trips, **establishes two fixed shuttle days (Tuesday and Thursday)**. Orders delivery waypoints along geographical corridors to maximize van fill rates.",
            "ejemplo": "On Tuesday morning, the delivery van leaves Palma with **12 jobsite orders across the southern district and 4 transfers for Ca'n Ros**. Route optimization **saves 45 km of driving and 40 minutes of transit**.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "High",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
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
                "**Digital route sheet:** Centralize confirmed delivery orders into a digital manifest by 6:00 PM the day prior.",
                "**Geographical corridors:** Group drop-offs by Mallorca geographical zones (Palma city, Migjorn, East coast).",
                "**Delivery window:** Assign morning or afternoon delivery slots and notify contractors via automated SMS/WhatsApp.",
                "**Fuel metrics:** Review weekly route efficiency and average delivery cost per completed drop-off."
            ]
        },
        {
            "id": "operativa-logistica-02",
            "codigo": "operativa-logistica-02",
            "titulo": "Jobsite Deliveries",
            "descripcion": "**Automated delivery confirmation with photos** sent via WhatsApp to contractors upon jobsite unloading as official proof.",
            "descripcionLarga": "Eliminates delivery disputes: 'Where did you drop my cement bags? I haven't seen anything.' **Upon unloading at the site, the driver captures 1 photo of the goods on the ground**. The system sends photo and timestamp to contractor WhatsApp as proof.",
            "ejemplo": "The driver unloads 2 pallets of mortar and rebar at a Ses Salines jobsite at 11:20 AM. **Takes a quick photo; contractor immediately receives timestamped photo on his phone**, preventing disputes.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "High",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
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
                "**Driver mobile app:** Install lightweight mobile web tool on driver corporate smartphone for delivery capture.",
                "**Mandatory photo:** Require timestamped site drop photo alongside electronic signature before marking complete.",
                "**Instant administration sync:** Sync signed delivery note to administration in real time upon driver completion.",
                "**Zero disputes:** Eliminate claims from customers alleging non-delivery of heavy construction materials."
            ]
        },
        {
            "id": "operativa-logistica-03",
            "codigo": "operativa-logistica-03",
            "titulo": "Freight Calculator",
            "descripcion": "**Automated counter freight calculator** determining when free jobsite delivery is profitable vs. when transport fees must be charged.",
            "descripcionLarga": "Prevents profit loss on small deliveries where transport expenses exceed item gross margins. **Calculates based on distance and order gross profit whether free delivery is justified** (e.g. orders >€300 or margin >€80) or if standard delivery charges apply.",
            "ejemplo": "A customer requests delivery of a wheelbarrow and two shovels 14 km away (total €65, gross margin €18). The screen alerts: **'Margin insufficient for free delivery; apply €15 transport charge or suggest store pickup'**.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "High",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google Antigravity",
                "Safe ERP/POS export dump (CSV/Excel)",
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
                "**Distance bands:** Define mileage delivery zones from Palma and Campos (Zone 1: 0-10km, Zone 2: 10-25km, Zone 3: >25km).",
                "**Margin thresholds:** Establish minimum gross profit required per zone to subsidize free delivery.",
                "**Counter prompt:** Display suggested freight fee calculation automatically before closing register ticket.",
                "**Transparent policy:** Publish clear delivery rate tables at counter displays for trade awareness."
            ]
        }
    ]
};
