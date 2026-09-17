import { Categoria } from '../../types';

export const categoriaAREA14De: Categoria = {
    "id": "area-14",
    "area": "clientes",
    "titulo": "Verkauf & Service",
    "propuestas": [
        {
            "id": "clientes-ventas-01",
            "codigo": "clientes-ventas-01",
            "titulo": "WhatsApp-Assistent",
            "descripcion": "**Automatisierter WhatsApp-Service**, über den Kunden Öffnungszeiten und Warenverfügbarkeit rund um die Uhr abfragen können.",
            "descripcionLarga": "Entlastet die Telefonleitungen zu den Stoßzeiten am Tresen. **Beantwortet wiederkehrende Kundenfragen per WhatsApp Business**: Samstag-Öffnungszeiten, Zementverfügbarkeit oder Anfahrt. Technische Fachfragen werden nahtlos an Fachberater weitergeleitet.",
            "ejemplo": "Ein Kunde schreibt sonntags um 18:00 Uhr per WhatsApp: 'Habt ihr morgen um 7:30 Uhr offen und habt ihr Mörtel auf Lager?'. **Der Assistent antwortet sofort und bestätigt Zeiten und Bestand**, sodass der Kunde montags pünktlich erscheint.",
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
                "Meta Business Suite"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "ChatGPT / Gemini"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "14",
            "pasos": [
                "**Bot-Einrichtung:** Standard-Antworten für die 5 häufigsten Kundenfragen: Öffnungszeiten, Feiertage, Anfahrt, Service.",
                "**Bestandsabfrage:** Automatische Auskunft über Lagerbestände der 20 gefragtesten Baustoffe über die Lesekopie.",
                "**Intelligente Weiterleitung:** Weitergabe von Angebotsanfragen oder Fachfragen an den zuständigen Verkaufsberater.",
                "**Höfliche Hinweise:** Freundliche Information über persönliche Beratungszeiten bei Anfragen außerhalb der Öffnungszeiten."
            ]
        },
        {
            "id": "clientes-ventas-02",
            "codigo": "clientes-ventas-02",
            "titulo": "Handwerker-Tarif",
            "descripcion": "**Einheitliche Rabattstaffeln für Handwerker** auf Basis exportierter Kataloge zur Vermeidung von Fehleingaben an der Kasse.",
            "descripcionLarga": "Definiert feste Margen- und Rabattgrenzen je Handwerksgewerk (Sanitär, Elektro, Bau). **Wird vorab auf einer Exportkopie kalkuliert und simuliert**, bevor die sauberen Tarife in die Kassensysteme beider Filialen eingespielt werden.",
            "ejemplo": "Ein Sanierungsbetrieb kauft regelmäßig Rohre und Armaturen. **Das System wendet automatisch seine vereinbarte Rabattstufe an (garantierte Marge 28%)**, ohne dass der Verkäufer Rabatte im Kopf berechnen muss.",
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
                "Microsoft Excel (.xlsx)"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Import in ERP/Kasse (validiert)"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "14",
            "pasos": [
                "**Preislisten-Export:** Export der aktuellen Einkaufs- und Verkaufspreislisten beider Häuser in eine Arbeitsdatei.",
                "**Staffelmodellierung:** Definition von 3 Rabattstufen nach Gewerken unter Einhaltung der geforderten Mindestmargen.",
                "**Margen-Simulation:** Überprüfung der Gesamtauswirkung auf die Marge vor endgültiger Freigabe der neuen Konditionen.",
                "**Kasseneinspielung:** Import der freigegebenen Tarife in die Kassensoftware außerhalb der Geschäftszeiten."
            ]
        },
        {
            "id": "clientes-ventas-03",
            "codigo": "clientes-ventas-03",
            "titulo": "Mehrsprachiger Service",
            "descripcion": "**Übersetzungshilfe am Verkaufstresen** zur fachlich sicheren Betreuung internationaler Residenten und Fincabesitzer auf Mallorca.",
            "descripcionLarga": "Im Süden Mallorcas stammt ein erheblicher Teil der Bau- und Renovierungsausgaben von deutschen und britischen Eigentümern. **Hilft Verkäufern, Fachbegriffe in Echtzeit zu übersetzen** (Ventile, Bohrer, Poolpflege) oder Angebote in der Landessprache zu erstellen, **was wertvolle Verkäufe sichert**.",
            "ejemplo": "Ein deutscher Hauseigentümer in Ca'n Ros erklärt auf Deutsch, dass er ein Übergangsstück für einen 1.000L-Wassertank sucht. **Der Verkäufer nutzt den Sprachassistenten und zeigt die passende Lösung mit Preis auf Deutsch am Bildschirm**.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
            "dificultad": "Niedrig",
            "riesgo": "Niedrig",
            "beneficio": "Hoch",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google Translate / DeepL",
                "Google NotebookLM",
                "Tresen-Tablet"
            ],
            "softwareOpcional": [
                "ChatGPT / Gemini",
                "Google Antigravity"
            ],
            "estado": "propuesta",
            "area_id": "clientes",
            "cat_id": "14",
            "pasos": [
                "**Eisenwaren-Glossar:** Erstellung eines Fachwörterbuchs der 100 gefragtesten Bauteile und Werkzeuge auf Deutsch, Englisch und Katalanisch.",
                "**Tresen-Assistent:** Einrichtung von Schnellwahltasten für Sprachübersetzer auf dem Dienst-Tablet am Verkaufstresen.",
                "**Zweisprachige Vorlagen:** Bereitstellung zweisprachiger Angebotsvorlagen für internationale Großkunden.",
                "**Grundschulung:** Vermittlung wichtiger Begrüßungsformeln und Fachbegriffe an das Verkaufsteam."
            ]
        }
    ]
};
