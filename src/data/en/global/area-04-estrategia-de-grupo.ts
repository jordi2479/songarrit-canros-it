import { Categoria } from '../../types';

export const categoriaAREA04En: Categoria = {
    "id": "area-04",
    "area": "global",
    "titulo": "Group Strategy",
    "propuestas": [
        {
            "id": "global-direccion-01",
            "codigo": "global-direccion-01",
            "titulo": "Store Benchmarking",
            "descripcion": "**Side-by-side executive view** comparing both stores on one page to benchmark sales, average tickets, and categories without phone calls.",
            "descripcionLarga": "Provides leadership with a unified group overview at a glance. **Consolidates sales data from Palma and Campos** under uniform weekly and register metrics. Highlights which store leads each product category and **allows cross-pollinating best sales practices between locations**.",
            "ejemplo": "Every Monday at 9:15 AM, leadership reviews the comparative table: **Palma leads trade locksmithing tickets** while **Campos leads in agricultural machinery and exterior masonry**. A stockout in Campos is identified that Palma holds excess stock of.",
            "viabilidad": "Sí con los dos CSV semanales exportados de cada tienda. Con apoyo puntual para estandarizar el formato de lectura entre ambos sistemas.",
            "dificultad": "Medium",
            "riesgo": "Low",
            "beneficio": "High",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google Antigravity",
                "Safe ERP/POS export dump (Palma + Campos)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Google Sheets",
                "Claude Code",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "04",
            "pasos": [
                "**Unified extraction:** Export weekly sales and ticket logs from both POS systems in standardized format.",
                "**Category alignment:** Map families so plumbing, paint, and hardware categories align under identical criteria.",
                "**Comparison card:** Design 1-page executive scorecard tracking revenue growth, gross margin, and basket size.",
                "**Synergy review:** Monthly review to spot product transfer opportunities and mutual commercial support."
            ]
        },
        {
            "id": "global-direccion-02",
            "codigo": "global-direccion-02",
            "titulo": "Purchasing Rules",
            "descripcion": "**Written operational protocol** defining which purchases and processes are centralized group-wide and which retain full local autonomy.",
            "descripcionLarga": "Eliminates friction between Palma and Campos store managers regarding procurement and floor merchandising. **Clearly specifies that volume manufacturer deals are negotiated jointly**, while **rural specialty stock in Campos and personal counter relationships remain 100% locally managed**.",
            "ejemplo": "In a vendor review, the matrix defines that **fasteners and paint volume terms are negotiated centrally for top rebates**, while the Ca'n Ros manager **autonomously selects local agricultural spare parts** for farming clients.",
            "viabilidad": "Sí. Trabajo documental y organizativo no-code con criterios consensuados por la dirección de ambas tiendas.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "Medium",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Google Workspace / Docs"
            ],
            "softwareOpcional": [
                "Google Gemini",
                "Claude",
                "Microsoft Word"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "04",
            "pasos": [
                "**Decision mapping:** Catalog operational decisions: volume purchases, local vendors, retail pricing, and store hours.",
                "**Responsibility matrix:** Document in writing which decisions require group consensus vs. complete store autonomy.",
                "**Signed protocol:** Draft a clear 2-page operational guide approved by leadership of Son Garrit and Ca'n Ros.",
                "**Annual audit:** Evaluate protocol effectiveness during annual leadership retreat to iron out operational friction."
            ]
        },
        {
            "id": "global-direccion-03",
            "codigo": "global-direccion-03",
            "titulo": "Palma-Campos Demand",
            "descripcion": "**Cross-demand analytics** identifying purchasing pattern differences between urban Palma and rural Campos to optimize seasonal buying.",
            "descripcionLarga": "Compares consumer behavior across both geographical environments. **Reveals weeks in advance when garden, heating, pruning, or remodeling seasons kick off** in rural settings vs. urban areas, stocking Ca'n Ros on time and **transferring seasonal surplus to Palma as demand shifts**.",
            "ejemplo": "In mid-February, analytics reveal that **demand for shade netting and drip irrigation in Campos starts four weeks earlier** than in urban Palma. This allows **advancing bulk manufacturer orders to secure best tier pricing**.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Medium",
            "riesgo": "Low",
            "beneficio": "High",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google Antigravity",
                "Safe ERP/POS export dump (Palma + Campos)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Google Sheets"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "04",
            "pasos": [
                "**Seasonal history:** Analyze past 2 years weekly sales to pinpoint rural vs. urban seasonal lead times.",
                "**Lead-time calendar:** Establish optimal procurement calendars per location according to actual local timing.",
                "**Coordinated orders:** Pool manufacturer purchase orders with phased delivery schedules across both stores.",
                "**Season rebalancing:** Transfer remaining seasonal stock between stores before campaign end to avoid dead capital."
            ]
        }
    ]
};
