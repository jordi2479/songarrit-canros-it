import { Categoria } from '../../types';

export const categoriaAREA11De: Categoria = {
    "id": "area-11",
    "area": "operativa",
    "titulo": "Logistik & Lieferung",
    "propuestas": [
        {
            "id": "operativa-logistica-01",
            "codigo": "operativa-logistica-01",
            "titulo": "Liefer-Touren",
            "descripcion": "**Effiziente Tourenplanung für Lieferfahrzeuge**, die Baustellenbelieferung und Warentransfers ohne Leerfahrten bündelt.",
            "descripcionLarga": "Senkt Kraftstoffkosten und Fahrzeiten drastisch. Statt unkoordinierter Einzelfahrten **werden feste Liefertouren (Dienstag und Donnerstag) etabliert**. Das System ordnet Lieferstopps nach geografischen Zonen, um die Ladekapazität optimal zu nutzen.",
            "ejemplo": "Dienstagmorgen startet der Transporter in Palma mit **12 Baustellenbestellungen für den Süden und 4 Umlagerungen für Ca'n Ros**. Die optimierte Route **spart 45 km Fahrstrecke und 40 Minuten Fahrzeit**.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
            "dificultad": "Niedrig",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google Maps",
                "Google Antigravity",
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Microsoft Excel"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "11",
            "pasos": [
                "**Digitaler Tourenzettel:** Bündelung aller bestätigten Baustellen-Lieferungen in einer digitalen Liste bis 18:00 Uhr am Vortag.",
                "**Geografische Korridore:** Zusammenfassung der Lieferungen nach Zonen (Palma, Migjorn, Ostküste) zur Kilometerreduzierung.",
                "**Lieferzeitfenster:** Zuordnung von Zeitfenstern (vormittags/nachmittags) mit automatischer SMS/WhatsApp-Kundenbenachrichtigung.",
                "**Verbrauchs-Controlling:** Wöchentliche Prüfung der Tourzeiten und der durchschnittlichen Kraftstoffkosten je Stopp."
            ]
        },
        {
            "id": "operativa-logistica-02",
            "codigo": "operativa-logistica-02",
            "titulo": "Baustellen-Lieferung",
            "descripcion": "**Automatische WhatsApp-Lieferbestätigung mit Foto** an den Bauleiter bei Abladung an der Baustelle als offizieller Nachweis.",
            "descripcionLarga": "Beendet Streitigkeiten: 'Wo liegt der Zement? Wir haben nichts gesehen.' **Beim Abladen auf der Baustelle fotografiert der Fahrer das Material am Boden**. Das System sendet Foto und Uhrzeit automatisch als Beleg an den Bauleiter.",
            "ejemplo": "Der Fahrer lädt um 11:20 Uhr 2 Paletten Mörtel und Baustahl in Ses Salines ab. **Er macht ein Foto; der Bauleiter erhält sofort das Bild mit Zeitstempel**, wodurch Reklamationen vermieden werden.",
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
                "Next.js / Web"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Google Drive"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "11",
            "pasos": [
                "**Fahrer-App:** Installation einer schlanken mobilen Webanwendung auf dem Diensthandy des Fahrers zur Belegquittierung.",
                "**Fotopflicht:** Vorgabe, bei Abladung an der Baustelle neben der Unterschrift stets ein Kontrollfoto anzufertigen.",
                "**Echtzeit-Synchronisierung:** Direkte Übermittlung des quittierten Lieferscheins an die Verwaltung bei Tourabschluss.",
                "**Konfliktvermeidung:** Vollständige Beseitigung von Reklamationen über angeblich nicht angeliefertes Schwergut."
            ]
        },
        {
            "id": "operativa-logistica-03",
            "codigo": "operativa-logistica-03",
            "titulo": "Fracht-Rechner",
            "descripcion": "**Automatische Frachtkosten-Regel am Tresen**, die anzeigt, wann Baustellenlieferung gratis rentabel ist und wann Fracht anfällt.",
            "descripcionLarga": "Verhindert Verlustgeschäfte bei Kleinlieferungen, bei denen die Transportkosten die Handelsmarge übersteigen. **Prüft anhand von Entfernung und Deckungsbeitrag, ob freie Anlieferung rentabel ist** (z. B. Auftrag >300 € oder Marge >80 €) oder Fracht berechnet werden muss.",
            "ejemplo": "Ein Kunde möchte eine Schubkarre und Schaufeln 14 km weit geliefert haben (Wert 65 €, Marge 18 €). Das System meldet: **'Marge unzureichend für Gratis-Lieferung; 15 € Fracht ansetzen oder Filialabholung vorschlagen'**.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
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
            "area_id": "operativa",
            "cat_id": "11",
            "pasos": [
                "**Entfernungszonen:** Definition von Kilometerradien ab Palma und Campos (Zone 1: 0-10 km, Zone 2: 10-25 km, Zone 3: >25 km).",
                "**Margen-Schwellen:** Festlegung der Mindestmarge je Lieferzone für die Gewährung frachtfreier Anlieferung.",
                "**Kassen-Hinweis:** Automatische Anzeige der Frachtkosten-Empfehlung am Kassenbildschirm vor Bon-Abschluss.",
                "**Transparente Tarife:** Gut sichtbare Platzierung der Transportkostentabelle am Verkaufstresen für Handwerker."
            ]
        }
    ]
};
