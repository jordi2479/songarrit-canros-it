import { Categoria } from '../../types';

export const categoriaAREA15De: Categoria = {
    "id": "area-15",
    "area": "operativa",
    "titulo": "Filialbetrieb",
    "propuestas": [
        {
            "id": "operativa-operaciones-01",
            "codigo": "operativa-operaciones-01",
            "titulo": "Filial-Abholung",
            "descripcion": "**Express-Abholservice für Handwerker**, die Material morgens per WhatsApp vorbestellen und ohne Anstehen fertig gepackt abholen.",
            "descripcionLarga": "Bindet Handwerksbetriebe, die es sich morgens um 8:00 Uhr nicht leisten können, 20 Minuten in der Warteschlange zu stehen. **Der Handwerker schickt seine Materialliste früh; das Lager packt Palette oder Kiste** und meldet die Abholbereitschaft.",
            "ejemplo": "Ein Elektriker sendet um 7:15 Uhr eine Liste mit Wellrohr und Abzweigdosen. Um 7:45 Uhr kommt die Fertigmeldung. **Um 8:00 Uhr zeigt er den Abholcode an der Laderampe, lädt in 3 Minuten ein und fährt zur Baustelle**.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
            "dificultad": "Niedrig",
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
            "cat_id": "15",
            "pasos": [
                "**WhatsApp-Bestellkanal:** Einrichtung eines prioritären WhatsApp-Kanals für taggleiche Express-Bestellungen.",
                "**Lager-Bereitstellung:** 45-Minuten-Standard: Material vorkommissioniert und etikettiert im Express-Abholfach bereitstellen.",
                "**Express-Zone:** Ausschilderung eines separaten Abholbereichs an der Rampe ohne Wartezeit an der Kasse.",
                "**Durchlaufzeit-Messung:** Messung der Kundenverweildauer von der Ankunft bis zur Abfahrt mit der Ware."
            ]
        },
        {
            "id": "operativa-operaciones-02",
            "codigo": "operativa-operaciones-02",
            "titulo": "Sonder-Bestellungen",
            "descripcion": "**Digitale Verwaltung von Sonderbestellungen**, die Notizzettel ersetzt und Kunden per WhatsApp benachrichtigt, sobald die Ware da ist.",
            "descripcionLarga": "Beendet das Zettelchaos mit verlorenen handschriftlichen Bestellungen für seltene Ersatzteile. **Kundenaufträge werden digital mit Telefonnummer erfasst**. Trifft die Lieferung des Herstellers ein, **sendet das System automatisch eine Benachrichtigung zur Abholung**.",
            "ejemplo": "Ein Landwirt bestellt ein seltenes Fräsmesser, das nicht auf Lager ist. Digital in 30 Sekunden erfasst. **Als der Großhändler drei Tage später liefert, erhält der Kunde sofort eine automatische WhatsApp-Meldung**.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
            "dificultad": "Niedrig",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Antigravity",
                "Sicherer ERP/Kasse Datenabzug"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Google Forms"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "15",
            "pasos": [
                "**Digitales Auftragsformular:** Schnelleingabe am Tresen mit Name, Telefon, Artikelnummer, Lieferant und Anzahlung.",
                "**Paket-Kennzeichnung:** Etikettierung des Pakets bei Wareneingang mit Auftragsnummer und Einlagerung im Abholfach.",
                "**Automatische Abholnachricht:** Versand der Abholnachricht mit Angabe der Ladenöffnungszeiten und des Restbetrags.",
                "**Überfälligen-Prüfung:** Zweiwöchentliche Prüfung nicht abgeholter Bestellungen zur telefonischen Nachverfolgung."
            ]
        },
        {
            "id": "operativa-operaciones-03",
            "codigo": "operativa-operaciones-03",
            "titulo": "Mietgeräte-Verwaltung",
            "descripcion": "**Digitaler Mietvertrag auf dem Tablet** für Werkzeug- und Maschinenverleih mit Kautionsprüfung und Rückgabeerinnerung.",
            "descripcionLarga": "Professionalisiert den Verleih schwerer Maschinen (Abbruchhämmer, Betonmischer, Motorsensen oder Leitern). **Erstellt auf dem Tresen-Tablet den Mietvertrag mit Ausweisfoto, Kaution und Rückgabetermin**, inklusive automatischer Erinnerung am Rückgabetag.",
            "ejemplo": "Ein Heimwerker mietet einen Abbruchhammer fürs Wochenende (150 € Kaution, 35 €/Tag). **Unterschreibt auf dem Tablet in 45 Sekunden und erhält den Vertrag per Mail**. Montags um 8:00 Uhr erinnert eine Nachricht an die Rückgabe bis 13:00 Uhr.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
            "dificultad": "Niedrig",
            "riesgo": "Niedrig",
            "beneficio": "Mittel",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Tresen-Tablet",
                "Google Workspace",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "DocuSign / Digitale Signatur",
                "Google Drive",
                "Microsoft Excel"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "15",
            "pasos": [
                "**Digitaler Vertrag:** Erstellung einer rechtssicheren Standardvorlage mit Nutzungsregeln, Versicherung und Tarifstaffel.",
                "**Unterschrift & Kaution:** Erfassung der digitalen Unterschrift auf dem Tablet und Kautionshinterlegung (bar oder Karte).",
                "**Rückgabe-Erinnerung:** Automatischer Versand einer Erinnerungsnachricht 4 Stunden vor Ablauf der vereinbarten Mietzeit.",
                "**Rücknahme-Prüfung:** Funktionsprüfung des Geräts bei Rückgabe vor Auszahlung oder Freigabe der Kaution."
            ]
        }
    ]
};
