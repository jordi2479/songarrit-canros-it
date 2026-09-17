import { Categoria } from '../../types';

export const categoriaAREA01En: Categoria = {
    "id": "area-01",
    "area": "operativa",
    "titulo": "Purchasing & Stock",
    "propuestas": [
        {
            "id": "operativa-compras-01",
            "codigo": "operativa-compras-01",
            "titulo": "Order Manager",
            "descripcion": "**Automated weekly order draft** calculating optimal reorder quantities based on recent sales and minimum stock, preventing stockouts without overstocking.",
            "descripcionLarga": "Calculates the weekly purchase proposal for habitual suppliers by cross-referencing sales velocity over the last 30 to 90 days against on-hand stock. **Eliminates manual shelf checks with paper notebooks** and guesswork orders. The store manager **reviews the list in 10 minutes**, adjusts quantities, and **validates the order with a single click**.",
            "ejemplo": "Every Monday at 8:30 AM, the purchasing manager receives a proposal with 18 required items (cement, cutting discs, wall plugs). The system highlights **two references with imminent stockout risk** in red and proposes the exact quantity to **cover two weeks without overloading warehouse space**.",
            "viabilidad": "Yes, via weekly/daily safe export from ERP/POS. Decoupled architecture with zero operational risk; delivers structured drafts for human review.",
            "dificultad": "Medium",
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
            "area_id": "operativa",
            "cat_id": "01",
            "pasos": [
                "**Sales extraction:** Export sales history (last 90 days) and current stock from ERP/POS to CSV/Excel format.",
                "**Coverage rules:** Define target coverage days (e.g. 15 days) and safety stock thresholds by supplier.",
                "**Pilot testing:** Configure calculation rules and pilot test with top 3 volume suppliers (fasteners, adhesives, abrasives).",
                "**Weekly routine:** Schedule Monday morning delivery of draft orders for 10-minute supervisor sign-off."
            ]
        },
        {
            "id": "operativa-compras-02",
            "codigo": "operativa-compras-02",
            "titulo": "Stockout Radar",
            "descripcion": "**Early morning stockout detection** from daily closing sales data, triggering shelf replenishment before the store opens.",
            "descripcionLarga": "Works on exported daily closing sales data, **without touching live checkout registers or POS databases**. Early in the morning, it analyzes top-selling items (Class A products) that hit zero stock and provides a **clean replenishment list and available cross-store alternatives** before customers arrive.",
            "ejemplo": "At 7:30 AM, the supervisor opens the morning report: **300ml chemical anchor cartridges sold out in Palma**, but Ca'n Ros Campos **has 8 units in stock**. Inter-store transfer is scheduled before opening the shutters.",
            "viabilidad": "Yes, reading exported closing batch files. Completely isolated from registers with zero point-of-sale friction.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "High",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google Antigravity",
                "Safe ERP/POS export dump (CSV)",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Outlook / Email"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "01",
            "pasos": [
                "**Daily closing export:** Configure automated or manual export of sales and stock file at store closing.",
                "**Zero-stock filtering:** Process batch data before opening hours to identify critical zero-stock references.",
                "**Cross-store matching:** Generate morning dispatch report with approved substitutes and sister-store inventory.",
                "**Fast validation:** 5-minute review by warehouse supervisor before opening doors to tradespeople."
            ]
        },
        {
            "id": "operativa-compras-03",
            "codigo": "operativa-compras-03",
            "titulo": "Delivery Note Auditor",
            "descripcion": "**Digital reconciliation of delivery notes** and supplier invoices to spot discrepancies in prices, quantities, and agreed discounts.",
            "descripcionLarga": "Systematically reconciles each monthly supplier invoice against signed delivery notes received in the store. Flags common hardware store discrepancies: **unauthorized freight charges**, **invoiced items that never arrived**, or **missing negotiated rebates**. Automatically **drafts a detailed claim email** upon detection.",
            "ejemplo": "When receiving the monthly fastener invoice, the system spots **5 boxes invoiced without a signed delivery note (€185 discrepancy)**. It generates a claim email with attached scanned slips for **1-click dispute submission**.",
            "viabilidad": "Yes, using scanned or digital PDFs of delivery notes and invoices. Document process with zero bank/core ERP access.",
            "dificultad": "Medium",
            "riesgo": "Low",
            "beneficio": "High",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Safe ERP/POS export dump (Excel/PDF)",
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
                "**Receiving digitization:** Standardize goods receipt with immediate smartphone photo or scanner capture of signed notes.",
                "**Field mapping:** Extract delivery note number, supplier code, delivered quantities, and unit purchase prices.",
                "**Biweekly matching:** Automated reconciliation comparing supplier invoices against archived receiving notes.",
                "**1-Click claims:** Pre-fill formal dispute templates with delivery evidence for quick administrative sending."
            ]
        }
    ]
};
