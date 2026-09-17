import { Categoria } from '../../types';

export const categoriaAREA03En: Categoria = {
    "id": "area-03",
    "area": "administracion",
    "titulo": "Store Management",
    "propuestas": [
        {
            "id": "administracion-direccion-01",
            "codigo": "administracion-direccion-01",
            "titulo": "Dashboard",
            "descripcion": "**One-page executive dashboard** delivered every Monday morning with sales, average ticket, critical stockouts, and closed cash.",
            "descripcionLarga": "Allows management to start the week with key business metrics **without digging through scattered reports or compiling spreadsheets manually**. In 10 minutes, leadership spots revenue trends and unmet demand. **Delivers clear analytical insight to make confident operational decisions**.",
            "ejemplo": "Every Monday at 9:00 AM, leadership reviews the weekly dashboard: daily revenue trend, average ticket, **top 5 selling products, and identified stockouts**. If cement or chemical anchors ran dry during a busy construction week, **it suggests exact reorder quantities**.",
            "viabilidad": "Yes, via weekly/daily safe export from ERP/POS. Decoupled architecture with zero operational risk; delivers structured drafts for human review.",
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
            "area_id": "administracion",
            "cat_id": "03",
            "pasos": [
                "**KPI selection:** Select 5 core business indicators: weekly turnover, estimated gross margin, cash, total stock, and overdue debt.",
                "**Automated extraction:** Schedule Sunday midnight data extraction without interfering with business hours.",
                "**1-Page template:** Design clean executive briefing page focused on 3 actionable decisions.",
                "**Weekly review:** Institutionalize Monday 9:00 AM 20-minute leadership alignment meeting based on the panel."
            ]
        },
        {
            "id": "administracion-direccion-02",
            "codigo": "administracion-direccion-02",
            "titulo": "Sales Drops",
            "descripcion": "**Sales anomaly detector** that flags unexpected turnover drops compared to the previous year and identifies probable causes.",
            "descripcionLarga": "Prevents month-end revenue surprises. The system monitors weekly sales against prior-year benchmarks when drops exceed predetermined thresholds. **Automatically isolates whether the dip is due to calendar shifts, adverse weather, or slump in a specific category**.",
            "ejemplo": "If week 3 of September **shows a 14% year-over-year revenue drop**, the alert clarifies it is not a general footfall slump: **continuous rain halted exterior painting projects** and a core primer tone ran out. The manager evaluates this in 2 minutes.",
            "viabilidad": "Sí con el CSV de ventas por día y familia del año actual y anterior más calendario local. Proceso analítico en lectura.",
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
            "cat_id": "03",
            "pasos": [
                "**Benchmark criteria:** Define homogeneous comparison baselines accounting for store square meters, holidays, and staffing.",
                "**Sales feed:** Automate weekly collection of tickets issued, average spend, sales per employee, and opening hours.",
                "**Anomaly alerts:** Build comparative dashboard highlighting category drops exceeding 10%.",
                "**Commercial action:** Share findings with store managers to adjust floor merchandising and launch promotional actions."
            ]
        },
        {
            "id": "administracion-direccion-03",
            "codigo": "administracion-direccion-03",
            "titulo": "Month-End Forecast",
            "descripcion": "**Predictive report on day 20** projecting month-end turnover with a 10-day window to adjust course before the month closes.",
            "descripcionLarga": "Replaces the reactive habit of waiting until day 31 or next month's accounting report to know financial performance. **On day 20, it projects final turnover ranges** by combining daily sales run-rate with historical seasonality, **allowing timely promotional pushes or trade quote follow-ups**.",
            "ejemplo": "On the 20th at 9:00 AM, a projection presents three scenarios. If current pace shows **revenue 8% below target**, the manager **has 10 working days to coordinate trade quote closing and frontline pushes**.",
            "viabilidad": "Sí con el CSV de ventas diarias acumuladas a día 20 más histórico mensual. Sin tocar contabilidad ni datos fiscales.",
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
            "cat_id": "03",
            "pasos": [
                "**Predictive modeling:** Configure projection formulas blending first 20 days run-rate with historical seasonal trends.",
                "**Scenario building:** Generate conservative, expected, and optimal scenarios for both Palma and Campos stores.",
                "**Variance alerts:** Issue executive memo on the 20th highlighting categories needing commercial momentum.",
                "**Closing campaign:** Mobilize contractor quote follow-ups and register promotions to secure monthly targets."
            ]
        }
    ]
};
