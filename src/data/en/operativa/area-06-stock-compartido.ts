import { Categoria } from '../../types';

export const categoriaAREA06En: Categoria = {
    "id": "area-06",
    "area": "operativa",
    "titulo": "Shared Stock",
    "propuestas": [
        {
            "id": "operativa-stock-01",
            "codigo": "operativa-stock-01",
            "titulo": "Cross-Store Stock",
            "descripcion": "**Fast cross-store stock lookup** between Palma and Campos using a synchronized replica without slowing live POS registers.",
            "descripcionLarga": "Enables counter staff to check sister-store stock via a decoupled read replica or scheduled cloud export. **If network connections or viewers drop, local checkout registers continue charging normally** with zero technical risk or latency.",
            "ejemplo": "A contractor in Campos needs an out-of-stock €420 submersible pump. The clerk checks the browser viewer, **confirms Palma holds 2 units in warehouse**, and **secures the sale by offering morning delivery**.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Medium",
            "riesgo": "Low",
            "beneficio": "High",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Next.js / Web",
                "Safe ERP/POS export dump (CSV)",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "WhatsApp Business"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "06",
            "pasos": [
                "**Stock export:** Configure scheduled periodic stock exports to an external decoupled query repository.",
                "**Web viewer:** Deploy a lightweight search interface allowing clerks to check sister inventory in 3 seconds.",
                "**Zero-risk isolation:** Verify that viewer or network outages have zero impact on live store checkout operations.",
                "**Staff training:** Train counter sales staff to check sister-store stock before declaring items out of stock."
            ]
        },
        {
            "id": "operativa-stock-02",
            "codigo": "operativa-stock-02",
            "titulo": "Inter-Store Holds",
            "descripcion": "**Lightweight hold management** logging reserved stock between stores on an independent board without locking live inventory.",
            "descripcionLarga": "Prevents committed inventory from being sold over the counter at the sister store before dispatch. Works like a digital board: **when a store reserves sister inventory, it prints a physical hold slip for the warehouse picker** without locking register transactions.",
            "ejemplo": "At 5:00 PM, Campos logs a reservation for 3 rolls of wire mesh from Palma on the web board. The Palma warehouse **prints the label: 'Held for Ca'n Ros Campos — 9 AM Van'**. The customer picks it up next morning without error.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Medium",
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
            "cat_id": "06",
            "pasos": [
                "**Hold board:** Create simple browser-accessible board for counter staff to request and hold sister inventory.",
                "**Physical tag:** Establish warehouse procedure printing physical hold labels for the inter-store transfer van.",
                "**Route schedule:** Fix van shuttle departure days between Palma and Campos (e.g. Tuesday and Thursday mornings).",
                "**Formal settlement:** Record inventory transfer in receiving ERP only upon physical goods receipt and unloading."
            ]
        },
        {
            "id": "operativa-stock-03",
            "codigo": "operativa-stock-03",
            "titulo": "Automatic Transfers",
            "descripcion": "**Intercompany transfer generator** keeping stock records and tax invoices clean without duplicate manual paperwork.",
            "descripcionLarga": "Ensures every product movement between Palma and Campos is legally and fiscally recorded without burdening administration. **Upon transfer confirmation, it auto-generates dispatch and receiving delivery notes at internal transfer cost**, preventing inventory drift.",
            "ejemplo": "Transferring €1,200 of pruning tools from Palma to support a Campos seasonal drive, **the system automatically generates intercompany transfer invoices**. Palma stock is debited and Campos credited **without manual line-item typing**.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Medium",
            "riesgo": "Medium",
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
                "Import to ERP/POS (validated)"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "06",
            "pasos": [
                "**Dead stock report:** Generate listings of items with zero sales in over 180 days across both store locations.",
                "**Cost valuation:** Classify items by tied-up capital and margin to establish formal intercompany transfer pricing.",
                "**Legal documents:** Create transfer note templates satisfying Spanish transportation and tax regulations.",
                "**Accounting sync:** Import monthly intercompany transfer notes into company accounting books."
            ]
        }
    ]
};
