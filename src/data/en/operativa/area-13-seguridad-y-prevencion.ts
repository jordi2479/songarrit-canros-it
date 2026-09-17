import { Categoria } from '../../types';

export const categoriaAREA13En: Categoria = {
    "id": "area-13",
    "area": "operativa",
    "titulo": "Safety & Prevention",
    "propuestas": [
        {
            "id": "operativa-seguridad-01",
            "codigo": "operativa-seguridad-01",
            "titulo": "Opening & Closing",
            "descripcion": "**Daily opening and closing verification** checklist covering doors, yard gates, and alarm arming with photo sent to owners.",
            "descripcionLarga": "Gives owners peace of mind that premises are 100% secure every night without having to inspect in person. **Closing staff follows a 2-minute checklist**: cash locked in safe, materials yard padlocked, machinery stored, and alarm armed.",
            "ejemplo": "At 7:45 PM, the closing clerk submits the mobile checklist and **attaches photos of green armed alarm panel and padlocked yard gate**. Partners in Palma **receive immediate confirmation that the store is locked and safe**.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "Medium",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Forms",
                "Google Drive"
            ],
            "softwareOpcional": [
                "Telegram",
                "AppSheet"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "13",
            "pasos": [
                "**Closing checklist:** 4-point digital checklist: safe locked, yard padlocked, machinery secured, and alarm armed.",
                "**Photo verification:** Mandatory photo attachment of armed alarm keypad and locked main entrance upon submission.",
                "**Owner notification:** Instant push summary sent to management mobile showing exact time and closing staff name.",
                "**Access log:** Track after-hours openings to audit extraordinary premises access."
            ]
        },
        {
            "id": "operativa-seguridad-02",
            "codigo": "operativa-seguridad-02",
            "titulo": "Discrepancy Auditor",
            "descripcion": "**Cash drawer discrepancy tracking** isolating whether variances occur in a specific till or during shift handovers.",
            "descripcionLarga": "Prevents staff tension and unfounded suspicions over drawer shortages. **Tracks opening and closing balances individually per cashier shift**. If repeated shortages occur, it isolates patterns (time, drawer, or shift) objectively.",
            "ejemplo": "Over two weeks, recurring **€10-€20 cash discrepancies are spotted on Saturday mornings**. Analysis proves **the shortage stemmed from a systematic counting error in the opening change float**, not theft.",
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
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Google Sheets"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "13",
            "pasos": [
                "**Shift count:** Enforce mandatory blind cash counts whenever a clerk hands over a register till to a peer.",
                "**User tracking:** Log all transactions, discounts, and drawer openings directly to the authenticated till user.",
                "**Variance alerts:** Alert management only when the same till or user registers 3 consecutive unexplained variances.",
                "**Constructive coaching:** Review variances constructively with staff to eliminate change calculation errors."
            ]
        },
        {
            "id": "operativa-seguridad-03",
            "codigo": "operativa-seguridad-03",
            "titulo": "Shrinkage Control",
            "descripcion": "**Daily 5-item high-value cycle count** to catch theft or shrinkage immediately without closing the store for annual inventory.",
            "descripcionLarga": "In hardware retail, shrinkage of small high-value items (diamond discs, cobalt drill bits, insulated pliers, padlocks) erodes profits invisibly until year-end inventory. **This tool selects 5 random items daily for the supervisor to count in 3 minutes**.",
            "ejemplo": "On Wednesday, the system prompts counting premium security padlocks in display cabinets. **Expected stock is 12, but count shows 9**. Discrepancy is detected in the week it happened, **enabling immediate CCTV review or security display adjustments**.",
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
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "WhatsApp Business"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "13",
            "pasos": [
                "**High-risk classification:** Identify top 100 vulnerable items by unit value and theft susceptibility.",
                "**Daily random prompt:** Dispatch 5 random item prompts daily to store manager terminal for quick verification.",
                "**3-Minute count:** Enter physical count directly into tool to contrast against theoretical inventory figures.",
                "**Preventive action:** Move items showing recurring shrinkage into locked display cases or install electronic anti-theft tags."
            ]
        }
    ]
};
