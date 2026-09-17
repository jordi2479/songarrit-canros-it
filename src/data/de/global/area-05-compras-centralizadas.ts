import { Categoria } from '../../types';

export const categoriaAREA05De: Categoria = {
    "id": "area-05",
    "area": "global",
    "titulo": "Zentraleinkauf",
    "propuestas": [
        {
            "id": "global-compras-01",
            "codigo": "global-compras-01",
            "titulo": "Gruppen-Einheitstarif",
            "descripcion": "**Konsolidierter Einkaufsbericht** für gemeinsame Hersteller, um Konditionen zu vereinheitlichen und Bestkonditionen durchzusetzen.",
            "descripcionLarga": "Prüft, ob Hersteller (Stanley, Bellota, Sika usw.) Palma und Campos zu unterschiedlichen Preisen oder Rabatten beliefern. **Bündelt das gesamte Einkaufsvolumen beider Fachmärkte zur Durchsetzung höchster Rabattstaffeln**, was die Margen in beiden Filialen steigert.",
            "ejemplo": "Der Jahresabgleich zeigt, dass **Son Garrit Silikone mit 38% Rabatt bezieht, Ca'n Ros jedoch mit 32%** beim selben Händler. Ein Bericht ermöglicht es der Geschäftsleitung, **einen Gruppenrabatt von 40% über das Gesamtkontingent zu vereinbaren**.",
            "viabilidad": "Sí a partir del listado de compras anuales por proveedor y referencia de las dos tiendas. No toca sistemas transaccionales.",
            "dificultad": "Niedrig",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google Antigravity",
                "Sicherer ERP/Kasse Datenabzug (CSV/Excel)",
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
                "**Einkaufsbündelung:** Zusammenfassung des jährlichen Einkaufsvolumens beider Standorte für die 15 wichtigsten Kernlieferanten.",
                "**Lieferantengespräche:** Gemeinsame Verhandlung mit den Bezirksleitern der Hersteller unter Vorlage des Gesamtgruppenumsatzes.",
                "**Einheitliche Tarife:** Aushandlung einheitlicher Rabattstufen und frachtfreier Grenzen für beide Kundennummern.",
                "**Systempflege:** Aktualisierung der Einkaufskonditionen und Stammdaten in den Kassen- und ERP-Systemen beider Häuser."
            ]
        },
        {
            "id": "global-compras-02",
            "codigo": "global-compras-02",
            "titulo": "Rückvergütungs-Optimierer",
            "descripcion": "**Echtzeit-Überwachung von Lieferanten-Rückvergütungen**, um Staffelgrenzen vor Geschäftsjahresende sicher zu erreichen.",
            "descripcionLarga": "Überwacht das kumulierte Einkaufsvolumen bei Lieferanten mit jährlichen Umsatzboni (Rückvergütungen). **Warnt Wochen im Voraus, wenn die Gruppe kurz vor der nächsten Bonusstufe steht** (z. B. 3% Extra-Bonus ab 25.000 €), und empfiehlt gezielte Zukäufe zur Sicherung der Prämie.",
            "ejemplo": "Mitte November meldet das System einen Wareneinkauf von 46.800 € bei einem Sanitärhersteller; **es fehlen nur 3.200 € zur 4%-Jahresrückvergütung (ein direkter Ertrag von 2.000 € netto)**. Es wird vorgeschlagen, Lagerbestellungen für Dezember vorzuziehen.",
            "viabilidad": "Sí introduciendo las condiciones de rappel de cada contrato marco y el volumen de compras acumulado en el año.",
            "dificultad": "Mittel",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google Antigravity",
                "Sicherer ERP/Kasse Datenabzug (CSV/Excel)",
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
                "**Vertragserfassung:** Dokumentation aller Staffelvereinbarungen und Bonusverträge mit Herstellern und Großhändlern.",
                "**Monats-Controlling:** Übersicht des monatlichen Einkaufsfortschritts im Vergleich zu den erforderlichen Schwellenwerten.",
                "**45-Tage-Warnung:** Benachrichtigung 45 Tage vor Jahresende, falls das Erreichen der nächsten Bonusstufe greifbar ist.",
                "**Abrechnungsprüfung:** Fristgerechte Einforderung und rechnerische Prüfung der fälligen Jahresrückvergütungen."
            ]
        },
        {
            "id": "global-compras-03",
            "codigo": "global-compras-03",
            "titulo": "Sortiments-Koordinator",
            "descripcion": "**Klassifizierter Sortimentskatalog**, der Skaleneffekte bei Schnelldrehern sichert, ohne die lokale Identität zu gefährden.",
            "descripcionLarga": "Verhindert Wildwuchs bei Marken. Teilt das Sortiment in zwei Bereiche: **70% (Schrauben, Klebstoffe, Scheiben, Werkzeuge) wird einheitlich mit Kernmarken für Bestpreise geführt**; die restlichen 30% bleiben lokalen Besonderheiten vorbehalten.",
            "ejemplo": "Bei der Einführung einer neuen Farblinie **standardisiert das Protokoll Dispersions-Weißlacke mit der Konzernmarke bei 15% Ersparnis**, während **Ca'n Ros seinen traditionellen balearischen Rustikallack** für heimische Maler behält.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
            "dificultad": "Mittel",
            "riesgo": "Niedrig",
            "beneficio": "Mittel",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Sicherer ERP/Kasse Datenabzug (CSV/Excel)",
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
                "**Markenprüfung:** Identifizierung doppelter Lieferanten für identische Warengruppen in beiden Filialen.",
                "**70/30-Standardisierung:** Vereinbarung von Vorzugsmarken bei gleichzeitiger Wahrung regionaler Sortimentsfreiheit.",
                "**Bündelbestellungen:** Feste wöchentliche Bestelltage zur Erreichung frachtfreier Mindestbestellwerte.",
                "**Regelmäßige Prüfung:** Bewertung der Einkaufseinsparungen und Einhaltung der standardisierten Kernsortimente."
            ]
        }
    ]
};
