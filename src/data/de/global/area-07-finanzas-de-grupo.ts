import { Categoria } from '../../types';

export const categoriaAREA07De: Categoria = {
    "id": "area-07",
    "area": "global",
    "titulo": "Konzernfinanzen",
    "propuestas": [
        {
            "id": "global-finanzas-01",
            "codigo": "global-finanzas-01",
            "titulo": "Liquiditäts-Prognose",
            "descripcion": "**Integrierte Liquiditätsprognose auf 30 und 60 Tage** mit Bankkonten, Lieferantenverbindlichkeiten und Kundenzahlungen beider Häuser.",
            "descripcionLarga": "Vermeidet Liquiditätsengpässe in einer Filiale, während die andere über liquide Mittel verfügt. **Fasst wöchentlich Guthaben, Forderungen und Fälligkeiten zusammen**, um **Zahlungen ohne teure Kontokorrentkredite intern abzustimmen**.",
            "ejemplo": "Am 25. zeigt die Prognose, dass **Ca'n Ros Lieferantenfälligkeiten von 18.000 € hat, während Son Garrit 24.000 € Guthaben aufweist**. Die Leitung plant die interne Überweisung frühzeitig **ohne teure Überziehungszinsen**.",
            "viabilidad": "Sí con los extractos de vencimientos de ambas sociedades. Requiere cautela por sensibilidad financiera; solo lectura informativa para los socios.",
            "dificultad": "Mittel",
            "riesgo": "Mittel",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google Antigravity",
                "Sicherer ERP/Kasse Datenabzug (Palma + Campos)",
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
                "**Finanzstruktur:** Definition des Berichtsrasters: Bareinnahmen am Tresen, Rechnungskunden und Fixkosten.",
                "**Kontenabruf:** Tägliche Verknüpfung von Kontoständen und Umsätzen für ein konsolidiertes Finanzbild auf Wochenbasis.",
                "**Fälligkeitskalender:** Modellierung von Lieferantenrechnungen, Steuern und Löhnen zur Vorwegnahme von Engpässen.",
                "**Zweiwöchentliche Prüfung:** Prüfung der 30-Tage-Vorschau zur Koordination interner Transfers oder Kreditlinien."
            ]
        },
        {
            "id": "global-finanzas-02",
            "codigo": "global-finanzas-02",
            "titulo": "Einheitliches Kreditlimit",
            "descripcion": "**Konzernweite Kreditüberwachung** für Handwerkskunden, die in beiden Fachmärkten auf Lieferschein einkaufen.",
            "descripcionLarga": "Schützt die Gruppe vor Baufirmen, die in einer Filiale Schulden anhäufen, während sie in der anderen weiter auf Rechnung einkaufen. **Setzt ein globales Gesamtkreditlimit je Kunde durch**. Schöpft ein Kunde in Palma 4.000 € aus, wird der Tresen in Campos sofort gewarnt.",
            "ejemplo": "Ein Bauunternehmer aus Palma beginnt ein Projekt in Santanyí und will bei Ca'n Ros Campos Material auf Rechnung mitnehmen. Das System warnt, dass **er in Palma bereits eine fällige Rechnung von 3.200 € hat**, wodurch ungesicherte Ausfälle verhindert werden.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
            "dificultad": "Niedrig",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google Antigravity",
                "Sicherer ERP/Kasse Datenabzug (Palma + Campos)",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Outlook / E-Mail"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "07",
            "pasos": [
                "**Kundenabgleich:** Abgleich der Kundenstämme zur Identifizierung von Handwerkern, die an beiden Standorten einkaufen.",
                "**Gesamt-Kreditlimit:** Festlegung eines gruppenweiten Gesamtkreditlimits je Firmenkunde zur Vermeidung verdeckter Risiken.",
                "**Simultane Warnung:** Sofortige Sperrmeldung an den Kassen beider Filialen bei Zahlungsverzug an einem Standort.",
                "**Kreditrichtlinie:** Bekanntgabe einheitlicher Kredit- und Zahlungsrichtlinien an Kassen- und Verwaltungsteams."
            ]
        },
        {
            "id": "global-finanzas-03",
            "codigo": "global-finanzas-03",
            "titulo": "Kategorie-Rentabilität",
            "descripcion": "**Nettomargen-Analyse je Warengruppe**, die aufdeckt, welche Sortimente am meisten Ertrag bringen und wo Margen verloren gehen.",
            "descripcionLarga": "Vergleicht die erzielte Nettomarge jeder Kategorie (Elektrowerkzeuge, Sanitär, Schrauben, Beschläge) zwischen Palma und Campos. **Zeigt, ob eine Filiale aus Gewohnheit zu günstig verkauft** oder wo Preise bei wenig preissensiblen Artikeln angehoben werden können.",
            "ejemplo": "Der Bericht belegt, dass **Palma im Bereich Sanitär 34% Marge erzielt, während Campos bei identischen Fittingen nur 27% erreicht**. Die Anpassung der Preise in Campos **bringt 5 Prozentpunkte mehr Marge ohne Nachfrageverlust**.",
            "viabilidad": "Sí con los datos de ventas y costes de ambas tiendas. Proceso puramente analítico para toma de decisiones estratégicas.",
            "dificultad": "Mittel",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google Antigravity",
                "Sicherer ERP/Kasse Datenabzug (Palma + Campos)",
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
                "**Margenerfassung:** Auswertung der Bruttomargen und Nebenkosten je Warengruppe in beiden Gesellschaften.",
                "**Standortvergleich:** Gegenüberstellung identischer Sortimente zwischen Palma und Campos zur Aufdeckung von Lücken.",
                "**Kartengebühren-Optimierung:** Gemeinsame Nachverhandlung der Kartenterminal-Disagios über den Gesamtumsatz der Gruppe.",
                "**Preisanpassung:** Vierteljährliche gezielte Überarbeitung der Verkaufspreise in Margenschwachen Sortimenten."
            ]
        }
    ]
};
