import { Categoria } from '../../types';

export const categoriaAREA02En: Categoria = {
    "id": "area-02",
    "area": "administracion",
    "titulo": "Local Finance",
    "propuestas": [
        {
            "id": "administracion-finanzas-01",
            "codigo": "administracion-finanzas-01",
            "titulo": "Credit Control",
            "descripcion": "**Trade credit monitoring system** that alerts checkout staff if a contractor exceeds their credit limit or has overdue invoices.",
            "descripcionLarga": "Protects store cash flow by preventing commercial accounts from taking more materials when **exceeding credit ceilings** or carrying overdue balances over 30 days. **Discreetly notifies counter staff** before issuing delivery notes and **produces a weekly courteous collection list**.",
            "ejemplo": "A regular contractor requests €600 worth of masonry supplies on Thursday. The screen alerts that his credit limit is €2,000 and **he already holds €2,350 with an overdue invoice**. The manager **politely requests partial settlement before truck loading**.",
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
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Outlook / Email"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "02",
            "pasos": [
                "**Receivables export:** Extract weekly aging list from ERP with due dates, customer Tax ID, and outstanding balances.",
                "**Aging rules:** Configure overdue brackets (0-30, 31-60, +60 days) and set minimum threshold triggers.",
                "**Template escalation:** Set up 3 communication tiers: friendly reminder, commercial follow-up, and formal notice.",
                "**Weekly collection routine:** 15-minute Tuesday review to dispatch reminders via email or WhatsApp Business."
            ]
        },
        {
            "id": "administracion-finanzas-02",
            "codigo": "administracion-finanzas-02",
            "titulo": "Margin Control",
            "descripcion": "**Continuous ticket audit** identifying products sold below replacement cost or with excessive counter discounts.",
            "descripcionLarga": "Audits daily register transactions to catch loss-making sales caused by outdated supplier price sheets, clerical discount errors, or old stock sales. **Issues a weekly report highlighting negative or degraded margin lines** to adjust retail prices immediately.",
            "ejemplo": "Following a copper price update, the system detects that **4 coils of pipe were sold to a plumber at a -4% margin** because replacement costs were not updated in the POS. An alert prompts **immediate price correction that afternoon**.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
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
            "area_id": "administracion",
            "cat_id": "02",
            "pasos": [
                "**Price sheet sync:** Download normalized bank and daily sales reports from store ERP.",
                "**Cost dictionary:** Cross-reference current replacement costs against net billed prices on every ticket.",
                "**Margin dashboard:** Filter items sold below target margin floors (e.g. <25%) for manager review.",
                "**Price correction:** Weekly 15-minute routine to update shelf tags and POS prices, preventing ongoing losses."
            ]
        },
        {
            "id": "administracion-finanzas-03",
            "codigo": "administracion-finanzas-03",
            "titulo": "Cash Register Balancing",
            "descripcion": "**Automated cash balancing assistant** comparing physical cash counts against register tapes to pinpoint discrepancies in 5 minutes.",
            "descripcionLarga": "Streamlines shift-end cash register reconciliation. The cashier inputs counted coins, bills, and card slips; the system verifies against POS registers. **If a discrepancy occurs, it isolates the exact time window** to review specific receipts without holding up closing staff.",
            "ejemplo": "At Friday 7:30 PM closing, **the register is short by €50**. The assistant reviews transactions and reveals that between 11:15 and 11:30 AM **a card payment was mistakenly rung up as cash**, solving the mystery without manual slip counting.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "Medium",
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
            "area_id": "administracion",
            "cat_id": "02",
            "pasos": [
                "**Count template:** Simple digital form to log physical breakdown of coins, banknotes, and credit card vouchers.",
                "**POS cross-check:** Compare physical count automatically against POS Z-report totals.",
                "**Window isolation:** Highlight suspicious transaction timeframes when variance exceeds €5 tolerance.",
                "**Signed reconciliation:** Generate clean daily balance report for administration with shift supervisor sign-off."
            ]
        }
    ]
};
