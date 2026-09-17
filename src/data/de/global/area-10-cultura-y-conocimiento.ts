import { Categoria } from '../../types';

export const categoriaAREA10De: Categoria = {
    "id": "area-10",
    "area": "global",
    "titulo": "Kultur & Wissen",
    "propuestas": [
        {
            "id": "global-personas-01",
            "codigo": "global-personas-01",
            "titulo": "Technischer Assistent",
            "descripcion": "**Intelligenter Tresen-Assistent**, der komplexe Fachfragen zu Sanitär, Schlössern oder Baustoffen in Sekunden löst.",
            "descripcionLarga": "Unterstützt jüngere Mitarbeiter bei kniffligen Kundenfragen am Verkaufstresen. **Statt erfahrene Kollegen zu unterbrechen oder 'Weiß ich nicht' zu sagen, schlägt der Mitarbeiter im Terminal nach**: Fitting-Kompatibilität, Verbrauch je m² oder Zylinder-Entsprechungen.",
            "ejemplo": "Ein Kunde fragt, welche Grundierung vor Fliesenkleber auf alte Fliesen muss. Der Mitarbeiter fragt das System in 15 Sekunden ab und **benennt fachlich sicher die passende Haftbrücke in Gang 3**.",
            "viabilidad": "Sí entrenando un asistente privado con las fichas técnicas de los principales fabricantes que vende la ferretería.",
            "dificultad": "Mittel",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Google Antigravity",
                "Next.js / Web"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Google Drive"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "10",
            "pasos": [
                "**Wissensdatenbank:** Aufbau einer einfachen digitalen Wissensdatenbank mit technischen Datenblättern und Anwendungshinweisen.",
                "**Schnellzugriff:** Einrichtung von Direktsuch-Symbolen auf den Bildschirmen der Verkaufstresen beider Standorte.",
                "**Top 20 Fachfragen:** Befüllung der Datenbank mit den 20 häufigsten komplexen Kundenanfragen am Tresen.",
                "**Team-Praxistipps:** Einbindung langjähriger Fachberater, um praktische Montagetipps und Kniffe aufzunehmen."
            ]
        },
        {
            "id": "global-personas-02",
            "codigo": "global-personas-02",
            "titulo": "Experten-Verzeichnis",
            "descripcion": "**Internes Expertenverzeichnis**, das zeigt, welcher Mitarbeiter welches Fachgebiet (Pumpen, Schweißen, Funk, Bewässerung) meistert.",
            "descripcionLarga": "Nutzt das Fachwissen der Teams beider Standorte. Kommt eine sehr spezielle Anfrage oder Reparatur herein, **weiß das Personal sofort, welcher Kollege in der Partnerfiliale telefonisch oder per WhatsApp helfen kann**, um dem Kunden sofort eine Lösung zu bieten.",
            "ejemplo": "In Campos bringt ein Kunde einen alten Garagentoröffner. Der Mitarbeiter prüft das Verzeichnis, sieht, dass **Tomeu in Palma Spezialist für Handsender ist, sendet ein Foto und bestätigt den Ersatz in 3 Minuten**.",
            "viabilidad": "Sí. Directorio digital de especialidades no-code accesible desde el móvil del personal.",
            "dificultad": "Niedrig",
            "riesgo": "Niedrig",
            "beneficio": "Mittel",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Workspace / Kontakte",
                "Google NotebookLM"
            ],
            "softwareOpcional": [
                "Slack / Teams",
                "Google Sheets"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "10",
            "pasos": [
                "**Kompetenzmatrix:** Erfassung der Fachspezialisierungen aller Mitarbeiter in Palma und Campos in einer klaren Übersicht.",
                "**Foto-Kanal:** Einrichtung eines schnellen internen Chats zum Versand von Fotos seltener Teile oder Typenschilder.",
                "**Hersteller-Schulungen:** Organisation 45-minütiger Praxis-Schulungen mit Herstellern zum Wissensausgleich.",
                "**3-Minuten-Rückmeldung:** Sicherstellung schneller Rückmeldezeiten bei internen Anfragen zur Vermeidung von Wartezeiten."
            ]
        },
        {
            "id": "global-personas-03",
            "codigo": "global-personas-03",
            "titulo": "Saisonale Verstärkung",
            "descripcion": "**Betriebsvereinbarung für Aushilfseinsätze**, um Urlaube, Ausfälle oder Bauhochs flexibel zwischen Filialen abzudecken.",
            "descripcionLarga": "Vermeidet den Einsatz ungelernter Zeitarbeiter in Spitzenzeiten. **Regelt Aushilfstage, an denen Mitarbeiter mit eigenem Fahrzeug die andere Filiale unterstützen** – mit transparenter Fahrtkosten- und Spesenregelung, damit die Kassen voll besetzt bleiben.",
            "ejemplo": "Während der Festwoche in Campos oder bei Renovierungsspitzen im Frühjahr **verstärkt ein Mitarbeiter aus Palma den Tresen in Ca'n Ros für zwei Vormittage**, vertraut mit Kasse und Artikeln ohne Einarbeitungszeit.",
            "viabilidad": "Sí. Protocolo organizativo interno de recursos humanos acordado con el equipo.",
            "dificultad": "Niedrig",
            "riesgo": "Niedrig",
            "beneficio": "Mittel",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google Calendar",
                "WhatsApp Business",
                "Microsoft Excel"
            ],
            "softwareOpcional": [
                "Google Sheets",
                "Outlook"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "10",
            "pasos": [
                "**Saisonspitzen-Kalender:** Erfassung von Wochen mit hohem Kundenaufkommen je Filiale (Messen, Frühjahrsbau).",
                "**Fahrtkosten-Regelung:** Festlegung fairer Spesensätze und Fahrtkostenerstattungen für Unterstützungstage.",
                "**Standort-Kenntnis:** Sicherstellung, dass Aushilfskräfte die Lagerorganisation der Partnerfiliale grundlegend kennen.",
                "**Stundenausgleich:** Dienstplanung so gestalten, dass Aushilfstage die wöchentlichen Ruhezeiten nicht beeinträchtigen."
            ]
        }
    ]
};
