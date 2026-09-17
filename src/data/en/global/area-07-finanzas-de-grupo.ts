import { Categoria } from '../../types';

export const categoriaAREA07En: Categoria = {
    "id": "area-07",
    "area": "global",
    "titulo": "Group Finance",
    "propuestas": [
        {
            "id": "global-finanzas-01",
            "codigo": "global-finanzas-01",
            "titulo": "Cashflow Forecast",
            "descripcion": "**Unified 30-to-60 day cashflow forecast** combining bank balances, supplier payables, and projected customer receivables.",
            "descripcionLarga": "Prevents cash crunches in one store while the other holds idle cash reserves. **Aggregates weekly liquid balances, trade receivables, and scheduled vendor drafts**, projecting group cash flow to **coordinate intercompany transfers without costly bank credit facilities**.",
            "ejemplo": "On the 25th, the forecast shows **Ca'n Ros has €18,000 in upcoming supplier drafts while Son Garrit holds €24,000 in surplus cash**. Management coordinates an internal transfer in advance, **avoiding bank overdraft fees**.",
            "viabilidad": "Sí con los extractos de vencimientos de ambas sociedades. Requiere cautela por sensibilidad financiera; solo lectura informativa para los socios.",
            "dificultad": "Medium",
            "riesgo": "Medium",
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
            "cat_id": "07",
            "pasos": [
                "**Consolidated model:** Define cashflow report structure: counter cash sales, trade collections, and fixed disbursements.",
                "**Balance feeds:** Connect daily bank balance and revenue logs to generate integrated rolling weekly forecasts.",
                "**Disbursement calendar:** Model supplier invoice maturities, tax calendar, and payroll to anticipate liquidity gaps.",
                "**Biweekly review:** Biweekly 30-day cash review to manage intercompany transfers or credit facility requirements."
            ]
        },
        {
            "id": "global-finanzas-02",
            "codigo": "global-finanzas-02",
            "titulo": "Unified Credit",
            "descripcion": "**Consolidated credit risk monitoring** tracking cumulative outstanding balances for contractors purchasing across both stores.",
            "descripcionLarga": "Protects group solvency against contractors accumulating credit debt in one store while continuing to draw materials on credit at the other. **Enforces a unified credit ceiling per construction firm**. If a client owes €4,000 in Palma, the Campos counter is alerted before authorizing further credit.",
            "ejemplo": "A Palma contractor starts a project in Santanyí and visits Ca'n Ros Campos requesting credit materials. The system flags that **he holds an overdue €3,200 invoice in Son Garrit Palma**, preventing the group from taking unhedged credit risk.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "High",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google Antigravity",
                "Safe ERP/POS export dump (Palma + Campos)",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Outlook / Email"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "07",
            "pasos": [
                "**Customer cross-matching:** Reconcile credit account databases to identify trade customers purchasing at both stores.",
                "**Group credit ceiling:** Establish maximum consolidated credit limits per account to prevent hidden debt accumulation.",
                "**Simultaneous alerts:** Implement immediate counter notifications if a customer exceeds credit periods at either location.",
                "**Credit policy:** Distribute standardized group credit and collection policies to counter and admin teams."
            ]
        },
        {
            "id": "global-finanzas-03",
            "codigo": "global-finanzas-03",
            "titulo": "Category Profitability",
            "descripcion": "**Net profitability analysis** revealing which product categories generate true margin in each location and where profits leak.",
            "descripcionLarga": "Compares net margin generated by each category (power tools, plumbing, fasteners, locks) across Palma vs. Campos. **Identifies if a store is selling at needlessly low margins out of habit** or where pricing can be safely optimized on inelastic lines.",
            "ejemplo": "Analysis shows **Palma operates at 34% gross margin on plumbing while Campos achieves only 27%** on identical PVC and brass fittings. Adjusting Campos retail pricing **recovers 5 margin points without sales drop**.",
            "viabilidad": "Sí con los datos de ventas y costes de ambas tiendas. Proceso puramente analítico para toma de decisiones estratégicas.",
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
            "cat_id": "07",
            "pasos": [
                "**Margin audit:** Extract gross margins and handling costs per category across both corporate entities.",
                "**Cross-store comparison:** Compare margin performance for identical product lines between Palma and Campos.",
                "**Fee optimization:** Negotiate unified merchant acquiring fees with payment processors based on combined turnover.",
                "**Price book adjustments:** Quarterly retail pricing adjustments on categories experiencing compressed margins."
            ]
        }
    ]
};
