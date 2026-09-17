import { Categoria } from '../../types';

export const categoriaAREA05En: Categoria = {
    "id": "area-05",
    "area": "global",
    "titulo": "Centralized Purchasing",
    "propuestas": [
        {
            "id": "global-compras-01",
            "codigo": "global-compras-01",
            "titulo": "Group Unified Pricing",
            "descripcion": "**Consolidated purchasing report** for shared manufacturers to unify commercial terms and demand tier-1 group pricing.",
            "descripcionLarga": "Identifies whether a manufacturer (Stanley, Bellota, Sika, etc.) charges different prices or discounts to Palma and Campos. **Combines total group procurement volume to negotiate top-tier discounts**, boosting gross margins across both stores.",
            "ejemplo": "Analyzing annual invoices reveals that **Son Garrit purchases silicones at a 38% discount while Ca'n Ros receives 32%** from the same distributor. A consolidated report empowers management to **unify terms at 40% based on combined volume**.",
            "viabilidad": "Sí a partir del listado de compras anuales por proveedor y referencia de las dos tiendas. No toca sistemas transaccionales.",
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
            "area_id": "global",
            "cat_id": "05",
            "pasos": [
                "**Volume consolidation:** Aggregate annual purchasing spend across Son Garrit and Ca'n Ros for the top 15 shared brands.",
                "**Supplier meetings:** Convene vendor sales reps presenting combined group purchasing figures.",
                "**Unified tariff:** Negotiate unified discount tiers and shared freight-free thresholds applicable to both accounts.",
                "**System update:** Update purchasing price books and discount conditions across ERP software at both locations."
            ]
        },
        {
            "id": "global-compras-02",
            "codigo": "global-compras-02",
            "titulo": "Rebate Optimizer",
            "descripcion": "**Real-time rebate tracking** with key suppliers to ensure annual bonus volume tiers are achieved before financial year-end.",
            "descripcionLarga": "Monitors cumulative purchasing volume with suppliers offering annual turnover bonuses (rebates). **Warns weeks in advance if the group is close to unlocking the next rebate tier** (e.g. extra 3% at €25,000 threshold), recommending focused orders to secure the cash bonus.",
            "ejemplo": "In mid-November, the system reports group spend of €46,800 with a plumbing supplier, **only €3,200 short of a 4% annual rebate (€2,000 net cash bonus)**. It proposes stocking December consumables to lock in the bonus.",
            "viabilidad": "Sí introduciendo las condiciones de rappel de cada contrato marco y el volumen de compras acumulado en el año.",
            "dificultad": "Medium",
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
            "area_id": "global",
            "cat_id": "05",
            "pasos": [
                "**Contract registry:** Log volume rebate tiers and terms signed with primary manufacturers and distributors.",
                "**Monthly monitoring:** Maintain dashboard tracking cumulative spend vs. required tier thresholds.",
                "**45-Day alert:** Trigger automated notification 45 days before year-end if a bonus tier is within achievable reach.",
                "**Settlement verification:** Manage audit, collection, and timely crediting of annual vendor rebate payments."
            ]
        },
        {
            "id": "global-compras-03",
            "codigo": "global-compras-03",
            "titulo": "Assortment Coordinator",
            "descripcion": "**Standardized assortment catalog** securing scale economies in high-rotation items without losing local regional specialties.",
            "descripcionLarga": "Prevents chaotic brand proliferation. Categorizes assortment into two clear tiers: **70% (fasteners, adhesives, discs, tools) is standardized under common core brands for top volume discounts**; the remaining 30% preserves local specialties at each store.",
            "ejemplo": "When introducing a new paint range, the protocol **standardizes base white interior emulsions with the common group brand at a 15% saving**, while **Ca'n Ros retains its heritage Balearic rustic enamel** loved by local painters.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Medium",
            "riesgo": "Low",
            "beneficio": "Medium",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Safe ERP/POS export dump (CSV/Excel)",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Google Antigravity",
                "Claude",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "05",
            "pasos": [
                "**Brand audit:** Identify vendor redundancies for identical product categories across both store inventories.",
                "**70/30 standard:** Agree on group primary core brands while protecting autonomy for local regional stock.",
                "**Pooled ordering:** Establish shared weekly ordering days to meet freight-free minimum order values.",
                "**Periodic review:** Assess purchasing cost reductions and adherence to core standardized product lines."
            ]
        }
    ]
};
