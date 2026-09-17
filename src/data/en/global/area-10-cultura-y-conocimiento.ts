import { Categoria } from '../../types';

export const categoriaAREA10En: Categoria = {
    "id": "area-10",
    "area": "global",
    "titulo": "Culture & Knowledge",
    "propuestas": [
        {
            "id": "global-personas-01",
            "codigo": "global-personas-01",
            "titulo": "Technical Product Assistant",
            "descripcion": "**Smart counter assistant** resolving complex customer technical questions on plumbing, locksmithing, or chemical compatibility in seconds.",
            "descripcionLarga": "Empowers newer counter clerks during difficult technical customer inquiries. **Instead of interrupting senior staff or saying 'I don't know', the clerk consults the tool**: fitting compatibilities, sealant coverage per m², or lock cylinder equivalences.",
            "ejemplo": "A customer asks which primer to apply over glazed tile before tile adhesive. The clerk consults the assistant in 15 seconds and **recommends the exact bonding primer in aisle 3 with technical confidence**.",
            "viabilidad": "Sí entrenando un asistente privado con las fichas técnicas de los principales fabricantes que vende la ferretería.",
            "dificultad": "Medium",
            "riesgo": "Low",
            "beneficio": "High",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
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
                "**Knowledge base:** Build clean digital technical repository containing data sheets, coverage rates, and installation tips.",
                "**Counter shortcuts:** Install quick-search browser shortcuts on counter terminals at both branches.",
                "**Top 20 FAQs:** Populate base with the 20 most frequent complex customer technical questions.",
                "**Team contributions:** Encourage senior hardware veterans to contribute their trade tricks and practical solutions."
            ]
        },
        {
            "id": "global-personas-02",
            "codigo": "global-personas-02",
            "titulo": "Specialist Directory",
            "descripcion": "**Internal specialist directory** identifying which team member specializes in which trade (pumps, welding, gate remotes, irrigation).",
            "descripcionLarga": "Leverages collective experience across Palma and Campos. When an obscure repair or rare fitting enters the store, **counter staff immediately knows which colleague in the sister store to call or message** for an expert answer on the spot.",
            "ejemplo": "In Campos, a customer brings an obsolete garage remote. The clerk checks the directory, sees **Tomeu in Palma specializes in remote duplication, sends a photo via chat, and confirms the duplicate in 3 minutes**.",
            "viabilidad": "Sí. Directorio digital de especialidades no-code accesible desde el móvil del personal.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "Medium",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Workspace / Contacts",
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
                "**Skills matrix:** Map individual technical specialties of team members across Palma and Campos.",
                "**Photo channel:** Establish secure internal messaging channel to share photos of rare fittings and nameplates.",
                "**Vendor clinics:** Coordinate 45-minute hands-on manufacturer clinic sessions to level up product knowledge.",
                "**3-Minute resolution:** Monitor response times for inter-store inquiries to avoid customer counter wait times."
            ]
        },
        {
            "id": "global-personas-03",
            "codigo": "global-personas-03",
            "titulo": "Seasonal Support",
            "descripcion": "**Cross-store staffing agreement** to cover vacations, sick leave, or local construction spikes smoothly between branches.",
            "descripcionLarga": "Avoids hiring inexperienced temporary workers during peak season. **Sets up agreed support shifts where employees with personal transport reinforce key days at the sister store** with clear mileage and meal allowances, keeping counters staffed.",
            "ejemplo": "During the annual Campos Fair week or the spring renovation spike in the south, **a Palma clerk reinforces Ca'n Ros for two mornings**, familiar with POS software and hardware lines without training curves.",
            "viabilidad": "Sí. Protocolo organizativo interno de recursos humanos acordado con el equipo.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "Medium",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
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
                "**Peak calendar:** Identify annual peak footfall weeks at each store (local fairs, renovation seasons).",
                "**Volunteer allowances:** Establish transparent travel reimbursement and meal allowances for cross-store support shifts.",
                "**Cross-training:** Ensure support staff are familiarized with the basic warehouse layout of the sister branch.",
                "**Shift balancing:** Coordinate rosters to ensure cross-store support shifts preserve weekly rest schedules."
            ]
        }
    ]
};
