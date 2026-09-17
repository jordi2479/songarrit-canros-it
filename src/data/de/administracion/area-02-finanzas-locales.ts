import { Categoria } from '../../types';

export const categoriaAREA02De: Categoria = {
    "id": "area-02",
    "area": "administracion",
    "titulo": "Lokale Finanzen",
    "propuestas": [
        {
            "id": "administracion-finanzas-01",
            "codigo": "administracion-finanzas-01",
            "titulo": "Kreditlimit-Kontrolle",
            "descripcion": "**Warenkredit-Überwachung**, die am Tresen warnt, wenn ein Handwerkskunde sein Kreditlimit überschreitet oder offene Rechnungen hat.",
            "descripcionLarga": "Schützt die Liquidität der Filiale, indem verhindert wird, dass Firmenkunden weiter auf Ziel einkaufen, wenn sie **ihr Kreditlimit überschreiten** oder über 30 Tage Zahlungsverzug aufweisen. **Warnt diskret am Verkaufstresen** vor Erstellung des Lieferscheins und **erstellt eine wöchentliche Mahnliste**.",
            "ejemplo": "Ein Handwerker will donnerstags Material für 600 € auf Lieferschein abholen. Das System meldet am Bildschirm, dass sein Limit 2.000 € beträgt und **bereits 2.350 € mit überfälliger Rechnung offen sind**. Der Mitarbeiter **bittet um Teilzahlung vor LKW-Beladung**.",
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
                "WhatsApp Business"
            ],
            "softwareOpcional": [
                "Claude Code",
                "OpenCode Desktop",
                "Outlook / E-Mail"
            ],
            "estado": "propuesta",
            "area_id": "administracion",
            "cat_id": "02",
            "pasos": [
                "**Forderungs-Export:** Wöchentlicher Export der offenen Posten aus dem ERP mit Rechnungsdatum, Fälligkeit und Steuernummer.",
                "**Mahn-Ampel:** Einrichtung von Fälligkeitsstufen (0-30, 31-60, +60 Tage) und Festlegung von Mindest-Auslösebeträgen.",
                "**Mahnvorlagen:** Erstellung von 3 Eskalationsstufen: freundliche Zahlungserinnerung, kaufmännische Mahnung, formeller Brief.",
                "**Wöchentliche Routine:** 15-minütige Dienstags-Prüfung zur direkten Versendung per E-Mail oder Firmen-WhatsApp."
            ]
        },
        {
            "id": "administracion-finanzas-02",
            "codigo": "administracion-finanzas-02",
            "titulo": "Margen-Kontrolle",
            "descripcion": "**Kontinuierliche Kassenbeleg-Prüfung**, die Verkäufe unter Einstandspreis oder mit überhöhten Tresenrabatten aufdeckt.",
            "descripcionLarga": "Prüft tägliche Verkäufe auf Verlustgeschäfte durch veraltete Einkaufspreise, manuelle Rabattfehler an der Kasse oder Altlagerverkäufe. **Gibt einen wöchentlichen Bericht mit Artikeln aus, bei denen Marge verloren ging**, um VK-Preise sofort anzupassen.",
            "ejemplo": "Nach einer Kupferpreiserhöhung meldet das System, dass **4 Rollen Rohr mit einer realen Marge von -4% verkauft wurden**, da der Basispreis im Kassensystem nicht aktualisiert war. Der Filialleiter **korrigiert den Preis noch am selben Nachmittag**.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
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
            "area_id": "administracion",
            "cat_id": "02",
            "pasos": [
                "**Preislisten-Abgleich:** Regelmäßiger Export aktualisierter Einkaufs- und Tagesverkaufsdaten aus der Kassensoftware.",
                "**Kostendatei:** Gegenüberstellung der aktuellen Einkaufspreise mit den tatsächlich an der Kasse berechneten Nettopreisen.",
                "**Margen-Übersicht:** Isolierung von Artikeln, die unterhalb der definierten Mindestmarge (z. B. <25%) verkauft wurden.",
                "**Preiskorrektur:** Wöchentliche 15-minütige Routine zur Anpassung der Regaletiketten und Kassenpreise zur Verlustvermeidung."
            ]
        },
        {
            "id": "administracion-finanzas-03",
            "codigo": "administracion-finanzas-03",
            "titulo": "Kassenabschluss-Helfer",
            "descripcion": "**Assistent für den Kassenabschluss**, der gezähltes Bargeld mit Kassenberichten vergleicht und Differenzen in 5 Minuten lokalisiert.",
            "descripcionLarga": "Automatisiert die Kassenprüfung bei Feierabend. Der Kassierer erfasst gezählte Münzen, Scheine und Kartenzettel; das System gleicht dies mit den Kassenbuchungen ab. **Bei Abweichungen isoliert es das Zeitfenster**, um den Fehler ohne zeitaufwendige Belegsuche zu klären.",
            "ejemplo": "Beim Freitagsabschluss um 19:30 Uhr **fehlen 50 € in der Kasse**. Der Assistent prüft die Vorgänge und zeigt, dass zwischen 11:15 und 11:30 Uhr **eine Kartenzahlung versehentlich auf die Bar-Taste gebucht wurde**, womit der Fehler sofort gelöst ist.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
            "dificultad": "Niedrig",
            "riesgo": "Niedrig",
            "beneficio": "Mittel",
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
            "area_id": "administracion",
            "cat_id": "02",
            "pasos": [
                "**Zählformular:** Einfache digitale Maske zur Erfassung von Münz-, Schein- und Kartenzahlungs-Belegen.",
                "**Kassenabgleich:** Automatischer Soll-Ist-Abgleich mit dem Z-Abschluss der Kassensoftware.",
                "**Zeitfenster-Analyse:** Eingrenzung auffälliger Zeiträume bei Kassendifferenzen über der Toleranzgrenze von 5 €.",
                "**Dokumentierter Abschluss:** Erstellung des täglichen Kassenberichts für die Buchhaltung mit Unterschrift des Verantwortlichen."
            ]
        }
    ]
};
