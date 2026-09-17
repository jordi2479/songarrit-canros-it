import { Categoria } from '../../types';

export const categoriaAREA15En: Categoria = {
    "id": "area-15",
    "area": "operativa",
    "titulo": "Store Operations",
    "propuestas": [
        {
            "id": "operativa-operaciones-01",
            "codigo": "operativa-operaciones-01",
            "titulo": "Store Pickup",
            "descripcion": "**Express store pickup service** for contractors ordering materials via WhatsApp early morning, ready packaged without counter lines.",
            "descripcionLarga": "Builds loyalty with contractors who cannot afford to waste 20 minutes waiting in line at 8:00 AM. **Contractor messages materials early; warehouse packages the pallet**, notifying the customer for express drive-through pickup.",
            "ejemplo": "An electrician messages at 7:15 AM requesting conduit and junction boxes. At 7:45 AM, receives order-ready confirmation. **Arrives at 8:00 AM, shows barcode at loading bay, loads van in 3 minutes, and heads to jobsite**.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "High",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Next.js / Web",
                "Safe ERP/POS export dump"
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
                "**WhatsApp order line:** Establish priority WhatsApp channel for same-day express pickup orders.",
                "**Warehouse fulfillment:** Set 45-minute staging protocol: order picked, boxed, and tagged in express holding area.",
                "**Express bay:** Signpost dedicated express collection bay next to loading dock to bypass retail counter queues.",
                "**Throughput tracking:** Track contractor counter turnaround time from arrival to vehicle departure."
            ]
        },
        {
            "id": "operativa-operaciones-02",
            "codigo": "operativa-operaciones-02",
            "titulo": "Special Orders",
            "descripcion": "**Digital special order management** replacing paper notebooks, notifying customers via WhatsApp the moment supplier arrives.",
            "descripcionLarga": "Eliminates disorganized sticky notes and lost paper order slips for rare spare parts. **Customer orders are logged with phone number**. When the supplier delivery arrives and goods are checked in, **the system sends an automated notification for customer pickup**.",
            "ejemplo": "A farmer orders a rare tiller blade not kept in store stock. Logged digitally in 30 seconds. **When the distributor delivers it three days later, the customer receives an automated WhatsApp alert immediately**.",
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
                "Safe ERP/POS export dump"
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
                "**Digital order slip:** Fast terminal form capturing customer name, phone, item code, supplier, and down payment.",
                "**Box tagging:** Tag incoming parcel with special order reference upon arrival and place in reserved hold bin.",
                "**Automated pickup alert:** Dispatch automated pickup notice with store hours and remaining balance due.",
                "**Aging audit:** Biweekly audit of special orders uncollected after 15 days to follow up with customers."
            ]
        },
        {
            "id": "operativa-operaciones-03",
            "codigo": "operativa-operaciones-03",
            "titulo": "Equipment Rentals",
            "descripcion": "**Fast digital tablet contract** for tool and machinery rentals, managing deposits, safety guidelines, and return reminders.",
            "descripcionLarga": "Professionalizes tool rentals and machinery loans (demolition hammers, cement mixers, brush cutters, extension ladders). **Generates rental agreement on tablet with ID photo, security deposit pre-authorization, and return date**, with automated return reminders.",
            "ejemplo": "A DIY customer rents a demolition hammer for the weekend (€150 deposit, €35/day). **Signs on counter tablet in 45 seconds and receives agreement by email**. On Monday at 8:00 AM, receives reminder to return by 1:00 PM.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "Medium",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Counter Tablet",
                "Google Workspace",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "DocuSign / Digital Signature",
                "Google Drive",
                "Microsoft Excel"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "15",
            "pasos": [
                "**Digital rental template:** Configure standard digital contract with terms of use, insurance, and daily rate matrix.",
                "**Signature & deposit:** Capture customer digital signature on tablet and log deposit pre-authorization.",
                "**Return reminder:** Schedule automated SMS/WhatsApp reminder 4 hours prior to rental expiration.",
                "**Check-in checklist:** Inspect machine operational condition upon return before releasing customer security deposit."
            ]
        }
    ]
};
