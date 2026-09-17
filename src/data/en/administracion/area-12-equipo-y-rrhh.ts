import { Categoria } from '../../types';

export const categoriaAREA12En: Categoria = {
    "id": "area-12",
    "area": "administracion",
    "titulo": "Team & HR",
    "propuestas": [
        {
            "id": "administracion-equipo-01",
            "codigo": "administracion-equipo-01",
            "titulo": "Shift Planner",
            "descripcion": "**Digital shift roster** balancing vacations, holidays, and Saturdays while ensuring experienced staff always present at the counter.",
            "descripcionLarga": "Ends spreadsheet chaos and shift disputes. **Organizes Saturday rotations fairly**, plans summer vacation coverages months ahead, and **ensures two specialists in the same category (e.g. paint or locks) are never off simultaneously**.",
            "ejemplo": "When planning August rosters, the system warns that **Saturday the 16th would leave only two junior clerks on duty with no authorized credit sign-off**, auto-suggesting a balanced shift swap.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "Medium",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google Calendar",
                "Google Workspace",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "WhatsApp Business",
                "Google Sheets",
                "Outlook"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "12",
            "pasos": [
                "**Staffing minimums:** Define minimum staffing levels for counter sales and warehouse by branch and hour.",
                "**Mobile roster:** Publish monthly roster 4 weeks in advance on a mobile-accessible staff schedule.",
                "**Shift swaps:** Centralize vacation requests and peer shift swaps through structured quick approval workflows.",
                "**Absence backup:** Establish immediate emergency staffing protocols to handle unplanned sick leaves."
            ]
        },
        {
            "id": "administracion-equipo-02",
            "codigo": "administracion-equipo-02",
            "titulo": "Onboarding Guide",
            "descripcion": "**Step-by-step onboarding guide** with micro-videos and checklist to make new hardware clerks operational in their first week.",
            "descripcionLarga": "Reduces time senior supervisors spend explaining basics from scratch. **Structures the first 7 days with clear daily missions**: aisle locations, POS charging, trade credit policies, and customer service standards.",
            "ejemplo": "A new hire on day two completes the module **'How to distinguish metric vs. self-tapping screws and chain cutting'**. By the end of the week, **serves trade customers competently without constantly relying on peers**.",
            "viabilidad": "Sí recopilando 10 vídeos breves grabados con el móvil en la propia tienda y una lista de verificación digital.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "Medium",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Google Drive / Videos",
                "Google Workspace"
            ],
            "softwareOpcional": [
                "Unlisted YouTube",
                "WhatsApp Business",
                "Notion"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "12",
            "pasos": [
                "**Welcome kit:** Prepare onboarding manual with store rules, safety guidelines, POS basics, and key phone numbers.",
                "**Assigned mentor:** Assign an experienced hardware clerk to mentor the new hire during the first two weeks.",
                "**Learning roadmap:** Define curriculum: aisle mapping, register operations, trade credit, and professional customer service.",
                "**Day 15 check-in:** Brief 20-minute review with store manager to answer questions and reinforce key areas."
            ]
        },
        {
            "id": "administracion-equipo-03",
            "codigo": "administracion-equipo-03",
            "titulo": "Maintenance Checklist",
            "descripcion": "**Mobile monthly inspection checklist** tracking fire extinguishers, forklifts, ladders, and warehouse safety compliance.",
            "descripcionLarga": "Prevents labor inspection fines and warehouse accidents. Instead of dusty binders, **the warehouse manager spends 5 minutes monthly checking safety items on mobile**: extinguisher inspection dates, forklift fork condition, and exit clearance.",
            "ejemplo": "On the first Monday of the month, the lead warehouseman checks the 8 safety items on mobile. He flags that **the paint warehouse extinguisher annual inspection expires in 15 days**, auto-triggering a maintenance call.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "Medium",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google Forms / AppSheet",
                "Google Drive",
                "Google Workspace"
            ],
            "softwareOpcional": [
                "WhatsApp Business",
                "Microsoft Excel"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "12",
            "pasos": [
                "**Equipment registry:** Catalog all warehouse machinery and safety equipment with purchase and mandatory inspection dates.",
                "**Mobile checklist:** Deploy digital mobile inspection form for extinguishers, emergency lights, ladders, and forklifts.",
                "**Monthly 5-minute review:** Assign first Tuesday monthly physical safety walk-through to site safety lead.",
                "**Digital audit log:** Archive certificates and inspection records to pass labor and insurance audits smoothly."
            ]
        }
    ]
};
