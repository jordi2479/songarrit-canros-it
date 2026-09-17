import { Categoria } from '../../types';

export const categoriaAREA01De: Categoria = {
    "id": "area-01",
    "area": "operativa",
    "titulo": "Einkauf & Lager",
    "propuestas": [
        {
            "id": "operativa-compras-01",
            "codigo": "operativa-compras-01",
            "titulo": "Bestellungs-Manager",
            "descripcion": "**Automatischer wöchentlicher Bestellvorschlag**, der optimale Mengen basierend auf Verkäufen und Mindestbestand ermittelt.",
            "descripcionLarga": "Berechnet wöchentlich den Beschaffungsvorschlag für Stammlieferanten durch Abgleich der Abverkäufe der letzten 30 bis 90 Tage mit den Ist-Beständen. **Beendet zeitaufwendige Regalprüfungen mit Notizblock** und Schätzbestellungen. Der Filialleiter **prüft die Liste in 10 Minuten**, passt Mengen an und **bestätigt die Bestellung mit einem Klick**.",
            "ejemplo": "Jeden Montagmorgen um 8:30 Uhr erhält der Einkaufsleiter einen Vorschlag für 18 Artikel (Zement, Trennscheiben, Dübel). Das System markiert **zwei Artikel mit drohendem Fehlbestandsrisiko rot** und schlägt die exakte Menge für **zwei Wochen Bedarfsdeckung ohne Überlagerung** vor.",
            "viabilidad": "Ja, über wöchentlichen/täglichen sicheren Export aus ERP/Kasse. Entkoppelte Architektur mit null Betriebsrisiko; liefert strukturierte Entwürfe zur Freigabe.",
            "dificultad": "Mittel",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google Antigravity",
                "Sicherer ERP/Kasse Datenabzug (CSV/Excel)",
                "Microsoft Excel (.xlsx)"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Import in ERP/Kasse (validiert)"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "01",
            "pasos": [
                "**Umsatzdaten-Export:** Export der Verkaufshistorie (letzte 90 Tage) und Bestände aus dem ERP/Kassensystem als CSV/Excel.",
                "**Reichweiten-Parameter:** Festlegung der Ziel-Reichweitentage (z. B. 15 Tage) und Sicherheitsbestände je Lieferant.",
                "**Pilot-Testlauf:** Einrichtung der Rechenlogik und Testlauf mit den 3 volumenstärksten Lieferanten (Befestigung, Klebstoffe).",
                "**Wöchentliche Routine:** Feste Bereitstellung des Bestellvorschlags montags zur 10-Minuten-Freigabe durch die Filialleitung."
            ]
        },
        {
            "id": "operativa-compras-02",
            "codigo": "operativa-compras-02",
            "titulo": "Engpass-Radar",
            "descripcion": "**Frühmorgendliche Erkennung von Ausverkäufen** aus dem täglichen Kassenabschluss zur Nachbestückung vor Ladenöffnung.",
            "descripcionLarga": "Arbeitet auf dem exportierten täglichen Kassenabschluss, **ohne aktive Kassen oder Datenbanken im laufenden Betrieb zu belasten**. Ermittelt vor Ladenöffnung umsatzstarke A-Artikel mit Nullbestand und liefert eine **saubere Nachfüll-Liste sowie verfügbare Alternativen der Partnerfiliale**, bevor Kunden eintreffen.",
            "ejemplo": "Um 7:30 Uhr öffnet der Filialleiter den Morgenbericht: **300ml Verbundmörtel-Kartuschen in Palma ausverkauft**, aber in Ca'n Ros Campos **sind 8 Kartuschen im Lagerabzug verfügbar**. Der Transfer wird vor Öffnung der Rollgitter koordiniert.",
            "viabilidad": "Ja, durch Auslesen exportierter Abschlussdateien. Vollständig von den Kassen isoliert, ohne Störung des Kassenbetriebs.",
            "dificultad": "Niedrig",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google Antigravity",
                "Sicherer ERP/Kasse Datenabzug (CSV)",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Outlook / E-Mail"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "01",
            "pasos": [
                "**Tagesabschluss-Export:** Einrichtung des täglichen automatischen oder manuellen Exports der Verkaufsdaten bei Feierabend.",
                "**Fehlbestands-Filterung:** Verarbeitung der Kopie außerhalb der Geschäftszeiten zur Identifizierung von Nullbeständen.",
                "**Filialabgleich:** Erstellung des Morgenberichts mit freigegebenen Alternativen und Beständen der Partnerfiliale.",
                "**Schnellfreigabe:** 5-Minuten-Prüfung durch den Lagerleiter vor dem Aufschließen für Handwerkerkunden."
            ]
        },
        {
            "id": "operativa-compras-03",
            "codigo": "operativa-compras-03",
            "titulo": "Lieferschein-Auditor",
            "descripcion": "**Digitaler Abgleich zwischen Lieferscheinen** und Lieferantenrechnungen zur Erkennung von Abweichungen bei Preisen und Mengen.",
            "descripcionLarga": "Gleicht systematisch jede Monatsrechnung der Lieferanten mit den im Geschäft abgezeichneten Lieferscheinen ab. Erkennt typische Fehler im Eisenwarenhandel: **unberechtigte Frachtzuschläge**, **berechnete aber nicht gelieferte Artikel** oder **fehlende vereinbarte Rabatte**. Erstellt bei Abweichungen **automatisch einen Reklamationsentwurf**.",
            "ejemplo": "Bei der Monatsrechnung für Schrauben meldet das System **5 berechnete Kartons ohne unterschriebenen Lieferschein (Differenz 185 €)**. Es bereitet eine E-Mail mit Lieferscheinkopien zur **1-Klick-Reklamation beim Lieferanten** vor.",
            "viabilidad": "Ja, unter Verwendung gescannter oder digitaler PDFs von Lieferscheinen und Rechnungen. Dokumentenprozess ohne Zugriff auf Kernsysteme.",
            "dificultad": "Mittel",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Sicherer ERP/Kasse Datenabzug (Excel/PDF)",
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
                "**Wareneingangs-Digitalisierung:** Standardisierung des Wareneingangs per Smartphone-Foto oder Scan des unterschriebenen Scheins.",
                "**Prüffeld-Erfassung:** Erfassung von Lieferscheinnummer, Lieferantencode, gelieferter Menge und vereinbartem Einzelpreis.",
                "**Halbmonatlicher Abgleich:** Regelmäßiger automatischer Abgleich zwischen Eingangsrechnungen und archivierten Belegen.",
                "**1-Klick-Reklamation:** Automatische Erstellung formaler Reklamationsvorlagen mit Belegnachweisen für die Verwaltung."
            ]
        }
    ]
};
