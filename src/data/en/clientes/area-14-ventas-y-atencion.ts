import { Categoria } from '../../types';

export const categoriaAREA14En: Categoria = {
    "id": "area-14",
    "area": "clientes",
    "titulo": "Sales & Service",
    "propuestas": [
        {
            "id": "clientes-ventas-01",
            "codigo": "clientes-ventas-01",
            "titulo": "WhatsApp Assistant",
            "descripcion": "**Automated WhatsApp customer service** answering opening hours, address, and stock availability 24/7 without jamming the counter phone.",
            "descripcionLarga": "Relieves counter telephone traffic during peak morning rush. **Answers common customer inquiries via WhatsApp Business**: Saturday afternoon opening hours, cement bag availability, or store directions. Complex technical inquiries are routed smoothly to a sales specialist.",
            "ejemplo": "A customer messages on Sunday at 6:00 PM: 'Are you open tomorrow at 7:30 AM and do you have mortar bags?'. **Assistant responds instantly confirming hours and stock**, ensuring the contractor arrives at opening time.",
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
                "Meta Business Suite"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "ChatGPT / Gemini"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "14",
            "pasos": [
                "**Bot setup:** Program automated instant replies for the 5 most frequent questions: hours, holidays, address, services.",
                "**Stock lookup:** Enable automated availability checks for top 20 basic bulk building supplies via stock replica.",
                "**Smart handover:** Route incoming quote requests and complex technical inquiries to on-duty sales specialists.",
                "**Business hours greeting:** Cordially inform customers of counter operating hours when inquiries arrive off-hours."
            ]
        },
        {
            "id": "clientes-ventas-02",
            "codigo": "clientes-ventas-02",
            "titulo": "Professional Pricing",
            "descripcion": "**Standardized trade discount matrices** modeled on exported catalogs, eliminating manual counter calculation errors.",
            "descripcionLarga": "Establishes clear gross margin floors and trade discount brackets by trade (plumbing, electrical, construction). **Simulates impact on an exported price book copy to confirm resulting margins** before importing clean pricing into registers.",
            "ejemplo": "A renovation contractor regularly buys pipe and fittings. **The system automatically applies his agreed trade discount tier (guaranteed 28% margin)**, avoiding manual calculations or verbal approvals.",
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
                "Microsoft Excel (.xlsx)"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Import to ERP/POS (validated)"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "14",
            "pasos": [
                "**Price book export:** Export current cost and retail price lists across both stores into a working workbook.",
                "**Trade tier modeling:** Establish 3 discount tiers by trade and volume ensuring baseline gross margin targets.",
                "**Impact simulation:** Model gross profit impact across previous year volume before publishing new price tiers.",
                "**Off-hours import:** Import validated pricing into POS registers outside business hours following standard procedures."
            ]
        },
        {
            "id": "clientes-ventas-03",
            "codigo": "clientes-ventas-03",
            "titulo": "Multilingual Support",
            "descripcion": "**Counter multilingual translation tool** to assist foreign residents and estate owners in Mallorca with complex technical terms.",
            "descripcionLarga": "In Southern Mallorca, significant renovation expenditure originates from German and British property owners. **Enables counter clerks to translate hardware technical terms in real time** (valves, drill bits, pool chemicals) or generate quotes in customer native language, **boosting high-ticket sales**.",
            "ejemplo": "A German homeowner in Ca'n Ros explains in German that he needs a fitting to connect drip irrigation to a 1,000L tank. **Clerk uses voice assistant, displaying the exact solution and price in German on screen**.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "High",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google Translate / DeepL",
                "Google NotebookLM",
                "Counter Tablet"
            ],
            "softwareOpcional": [
                "ChatGPT / Gemini",
                "Google Antigravity"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "14",
            "pasos": [
                "**Hardware glossary:** Build a specialized 100-term technical dictionary in German, English, and Catalan.",
                "**Counter assistant:** Configure voice translator tablet shortcuts on counter terminals for instant lookups.",
                "**Bilingual quotes:** Format quote and proposal templates with bilingual line descriptions for foreign projects.",
                "**Staff training:** Train counter staff on welcoming etiquette and core terminology in English and German."
            ]
        }
    ]
};
