import { Categoria } from '../../types';

export const categoriaAREA06De: Categoria = {
    "id": "area-06",
    "area": "operativa",
    "titulo": "Gemeinsames Lager",
    "propuestas": [
        {
            "id": "operativa-stock-01",
            "codigo": "operativa-stock-01",
            "titulo": "Filialübergreifender Bestand",
            "descripcion": "**Schnelle Bestandsabfrage zwischen Filialen** über eine synchronisierte Arbeitskopie ohne Kassenverlangsamung.",
            "descripcionLarga": "Ermöglicht dem Personal am Tresen, Bestände der Partnerfiliale über eine entkoppelte Abfragekopie einzusehen. **Fällt das Internet oder der Betrachter aus, kassieren die Terminals in Palma und Campos völlig ungestört weiter**, ohne technisches Risiko.",
            "ejemplo": "Ein Kunde in Campos benötigt eine Tauchpumpe für 420 €, die im Regal fehlt. Der Mitarbeiter prüft den Browser-Viewer, **sieht, dass Palma 2 Stück auf Lager hat**, und **sichert den Verkauf mit Zusage für den nächsten Morgen**.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
            "dificultad": "Mittel",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Next.js / Web",
                "Sicherer ERP/Kasse Datenabzug (CSV)",
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
                "**Bestandsexport:** Zeitgesteuerter periodischer Export der Lagerbestände in ein externes Abfragesystem.",
                "**Web-Viewer:** Schnelle Web-Suchmaske für das Verkaufspersonal zur Bestandsprüfung in 3 Sekunden.",
                "**Systemtrennung:** Sicherstellung, dass Störungen des Viewers keinerlei Auswirkungen auf den Kassiervorgang haben.",
                "**Mitarbeiterschulung:** Einweisung des Personals, bei Kundenanfragen vor einer Absage stets die Partnerfiliale zu prüfen."
            ]
        },
        {
            "id": "operativa-stock-02",
            "codigo": "operativa-stock-02",
            "titulo": "Filial-Reservierungen",
            "descripcion": "**Schlankes Reservierungssystem**, das Warenvormerkungen zwischen Filialen unabhängig vom Kassenbestand festhält.",
            "descripcionLarga": "Verhindert, dass zugesagte Ware vor dem Weitertransport in der anderen Filiale abverkauft wird. Funktioniert wie eine digitale Plantafel: **wird Bestand der Partnerfiliale reserviert, druckt das Lager einen Kommissionierschein**, ohne Kassenbuchungen zu sperren.",
            "ejemplo": "Um 17:00 Uhr reserviert Campos im Web-Panel 3 Rollen Estrichgitter aus Palma. Im Lager von Son Garrit **wird das Etikett gedruckt: 'Reserviert Ca'n Ros Campos — Tour 9 Uhr'**. Am nächsten Tag **holt der Kunde seine Ware fehlerfrei ab**.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
            "dificultad": "Mittel",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Next.js / Web",
                "Sicherer ERP/Kasse Datenabzug"
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
                "**Reservierungs-Panel:** Einfaches Web-Formular am Verkaufstresen zur formlosen Reservierungsanfrage.",
                "**Physisches Etikett:** Lagerprozess mit automatischem Ausdruck des Bereitstellungsscheins für den Shuttle-Transporter.",
                "**Tourenplan:** Feste Abfahrtstage des Pendelfahrzeugs zwischen Palma und Campos (z. B. Dienstag und Donnerstag früh).",
                "**Buchungserfassung:** Offizielle Umbuchung im ERP-System erst nach physischer Ankunft und Abladung der Ware."
            ]
        },
        {
            "id": "operativa-stock-03",
            "codigo": "operativa-stock-03",
            "titulo": "Automatische Umlagerungen",
            "descripcion": "**Generator für interne Umlagerungsscheine** für saubere Bestände und steuerliche Nachweise ohne doppelte Handarbeit.",
            "descripcionLarga": "Stellt sicher, dass jede Warenbewegung zwischen Palma und Campos rechtlich und buchhalterisch erfasst wird, ohne die Verwaltung zu belasten. **Erstellt bei Bestätigung automatisch Ausgangs- und Eingangsbelege zum internen Einstandspreis**.",
            "ejemplo": "Bei der Umlagerung von 1.200 € Schnittwerkzeugen aus Palma zur Saisonunterstützung nach Campos **druckt das System den internen Umlagerungslieferschein**. Palmas Bestand bucht ab, Campos bucht ein – **ohne Artikel von Hand abzutippen**.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
            "dificultad": "Mittel",
            "riesgo": "Mittel",
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
                "Import in ERP/Kasse (validiert)"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "06",
            "pasos": [
                "**Ladenhüter-Scan:** Ermittlung von Artikeln mit mehr als 180 Tagen ohne Verkauf in beiden Lagern.",
                "**Kostenbewertung:** Einstufung nach gebundenem Kapital und Marge zur Festlegung der internen Verrechnungspreise.",
                "**Rechtskonforme Belege:** Bereitstellung von Lieferscheinvorlagen, die alle Transport- und Steuervorschriften erfüllen.",
                "**Buchungsausgleich:** Monatliche automatische Einbindung der Umlagerungsbelege in die Finanzbuchhaltungen beider Firmen."
            ]
        }
    ]
};
