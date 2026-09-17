import { Categoria } from '../../types';

export const categoriaAREA09En: Categoria = {
    "id": "area-09",
    "area": "clientes",
    "titulo": "Marketing & Loyalty",
    "propuestas": [
        {
            "id": "clientes-marketing-01",
            "codigo": "clientes-marketing-01",
            "titulo": "Review Manager",
            "descripcion": "**Assisted review response generator** crafting polite, personalized, and fast replies to online customer feedback in seconds.",
            "descripcionLarga": "Prevents public reviews from sitting unanswered due to counter rush. When a Google review arrives, **the assistant drafts a polite, professional reply for positive reviews, or a constructive, solution-focused message for complaints**, ready for 1-click validation.",
            "ejemplo": "A customer leaves 5 stars praising irrigation advice in Campos. The system drafts: 'Thank you Miquel! We are glad the pump works great on your farm.' **The store manager simply validates and sends**.",
            "viabilidad": "Sí con asistente no-code conectado a la bandeja de Google Business. El encargado siempre aprueba el texto antes de publicar.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "Medium",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "Google Antigravity",
                "Google Business Profile",
                "Google Gemini / ChatGPT"
            ],
            "softwareOpcional": [
                "Claude",
                "WhatsApp Business"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "09",
            "pasos": [
                "**Contractor segmentation:** Categorize commercial database by 5 core trades: plumbing, electrical, masonry, paint, woodworking.",
                "**Review inbox:** Monitor incoming Google Maps reviews for both locations every morning in a centralized view.",
                "**Multilingual drafts:** Auto-generate response drafts in the customer language (Catalan, Spanish, English, or German).",
                "**1-Click dispatch:** Store manager approves and publishes response from smartphone in under 10 seconds."
            ]
        },
        {
            "id": "clientes-marketing-02",
            "codigo": "clientes-marketing-02",
            "titulo": "Seasonal Campaigns",
            "descripcion": "**Timely seasonal marketing plans** ahead of critical buying moments (pruning, seeding, pool opening, winter heating, local fairs).",
            "descripcionLarga": "Plans annual seasonal promotions with proactive lead time. **Two weeks prior to peak moments in Mallorca** (wood stoves in November, pruning in January, pools in May, town fairs), **it prepares WhatsApp messages, window signage, and social posts** featuring high-margin items.",
            "ejemplo": "In early May, it generates the campaign 'Get your pool summer-ready': **audits stock of chlorine, pumps, and cleaners**, producing counter signage and broadcast messages for customer WhatsApp channels.",
            "viabilidad": "Yes, through safe decoupled exports and standardized document processing.",
            "dificultad": "Low",
            "riesgo": "Low",
            "beneficio": "Medium",
            "acceso": "lectura",
            "fase": "Phase 1 30 days",
            "stack": "decoupled analytics",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Canva / Design",
                "Google Antigravity"
            ],
            "softwareOpcional": [
                "Instagram / Meta",
                "Photoshop",
                "Outlook / Email"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "09",
            "pasos": [
                "**Seasonal calendar:** Schedule the 6 core annual promotional campaigns and key high-margin anchor products.",
                "**WhatsApp channels:** Configure official WhatsApp Business broadcast lists segmented by trade and customer type.",
                "**Signage alignment:** Generate counter posters and digital flyers 15 days ahead of campaign launch.",
                "**Sales tracking:** Measure turnover generated on promoted categories during the 14 days following broadcasts."
            ]
        },
        {
            "id": "clientes-marketing-03",
            "codigo": "clientes-marketing-03",
            "titulo": "Overstock Clearance",
            "descripcion": "**Dead stock identification tool** detecting items unsold for over 180 days to bundle them into quick-sale discount packs.",
            "descripcionLarga": "Unlocks working capital trapped in discontinued lines or off-season products. **Identifies items with zero sales in 6 months and designs bundle discounts** to place on the counter promotion table or offer directly to contractors.",
            "ejemplo": "Flags 14 halogen heaters and 6 winter dehumidifiers idle in April. **Proposes a 35% discount clearance bundle at checkout to liberate €1,100 of trapped stock** before summer.",
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
                "Canva / Signage"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "09",
            "pasos": [
                "**Dead stock filter:** Run monthly scans for active stock with zero sales in the preceding 180 days.",
                "**Promotion design:** Formulate clearance discounts or package contractor bulk deal bundles for fast turnaround.",
                "**Checkout display:** Position clearance bundles in high-traffic checkout zones with prominent pricing signage.",
                "**Cash recovery:** Track recovered liquidity and floor space freed up for profitable incoming inventory."
            ]
        }
    ]
};
