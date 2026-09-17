import { Categoria } from '../../types';

export const categoriaAREA04De: Categoria = {
    "id": "area-04",
    "area": "global",
    "titulo": "Gruppenstrategie",
    "propuestas": [
        {
            "id": "global-direccion-01",
            "codigo": "global-direccion-01",
            "titulo": "Filial-Vergleich",
            "descripcion": "**Vergleichende Führungsübersicht** beider Filialen auf einer Seite zur parallelen Analyse von Verkäufen und Durchschnittsbon.",
            "descripcionLarga": "Verschafft der Geschäftsleitung einen Gesamtüberblick über die Gruppe mit einem Blick. **Führt die Verkaufsdaten von Palma und Campos** nach einheitlichen Wochen- und Kassenkriterien zusammen. Zeigt, welche Filiale in welchen Sortimenten führt und **ermöglicht den Transfer bewährter Verkaufspraktiken**.",
            "ejemplo": "Montags um 9:15 Uhr prüft die Leitung die Vergleichstabelle: **Palma erzielt höhere Profibons in Sicherheitstechnik**, während **Campos bei Agrarwerkzeugen und Rohbau führt**. Ein Fehlbestand in Campos wird aufgedeckt, den Palmas Zentrallager abdecken kann.",
            "viabilidad": "Sí con los dos CSV semanales exportados de cada tienda. Con apoyo puntual para estandarizar el formato de lectura entre ambos sistemas.",
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
                "Google Sheets",
                "Claude Code",
                "OpenCode Desktop"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "04",
            "pasos": [
                "**Einheitlicher Export:** Standardisierter Datenexport der wöchentlichen Umsätze und Bons aus beiden Kassensystemen.",
                "**Warengruppen-Harmonisierung:** Zuordnung der Hauptkategorien für einen einheitlichen Vergleich von Sanitär, Farben und Schrauben.",
                "**Vergleichsblatt:** Gestaltung der einseitigen Übersicht mit Umsatzentwicklung, Marge und Durchschnittsbon je Standort.",
                "**Synergie-Prüfung:** Monatliche Besprechung zur Identifizierung von Warentransfers und gegenseitiger Vertriebsunterstützung."
            ]
        },
        {
            "id": "global-direccion-02",
            "codigo": "global-direccion-02",
            "titulo": "Einkaufs-Regeln",
            "descripcion": "**Schriftliches Betriebsprotokoll**, das regelt, welche Einkäufe und Prozesse zentralisiert werden und welche vor Ort autonom bleiben.",
            "descripcionLarga": "Vermeidet Reibungsverluste und wiederkehrende Diskussionen zwischen den Filialleitern in Palma und Campos über Einkauf und Sortiment. **Legt klar fest, dass Rahmenabkommen mit Herstellern gemeinsam verhandelt werden**, während **regionale Landsortimente in Campos und die persönliche Kundenbindung vor Ort völlig frei gestaltet werden**.",
            "ejemplo": "Bei einer Lieferantenprüfung stellt das Protokoll klar, dass **Preise für Schrauben und Farben gruppenweit für bessere Boni verhandelt werden**, der Leiter von Ca'n Ros jedoch **völlig autonom entscheidet, welche lokalen Ersatzteile er für Landwirte führt**.",
            "viabilidad": "Sí. Trabajo documental y organizativo no-code con criterios consensuados por la dirección de ambas tiendas.",
            "dificultad": "Niedrig",
            "riesgo": "Niedrig",
            "beneficio": "Mittel",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "Google NotebookLM",
                "Google Workspace / Docs"
            ],
            "softwareOpcional": [
                "Google Gemini",
                "Claude",
                "Microsoft Word"
            ],
            "estado": "propuesta",
            "area_id": "global",
            "cat_id": "04",
            "pasos": [
                "**Kompetenzkatalog:** Auflistung aller Entscheidungen: Volumeneinkauf, regionale Lieferanten, VK-Preise und Öffnungszeiten.",
                "**Zuständigkeitsmatrix:** Schriftliche Festlegung, welche Bereiche gemeinsam und welche zu 100% lokal autonom entschieden werden.",
                "**Vereinbarungsdokument:** Erstellung eines klaren 2-seitigen Leitfadens, der von den Leitungen beider Filialen genehmigt ist.",
                "**Jährliche Überprüfung:** Evaluierung des Protokolls im jährlichen Leitungsgremium zur Bereinigung von Reibungspunkten."
            ]
        },
        {
            "id": "global-direccion-03",
            "codigo": "global-direccion-03",
            "titulo": "Nachfrage Palma-Campos",
            "descripcion": "**Vergleichende Nachfrageanalyse**, die Kaufunterschiede zwischen dem städtischen Palma und dem ländlichen Campos aufzeigt.",
            "descripcionLarga": "Vergleicht das Kaufverhalten in beiden geografischen Regionen. **Zeigt wochenlang im Voraus an, wann Garten-, Heizungs-, Schnitt- oder Bausaisons** auf dem Land im Vergleich zur Stadt beginnen, sichert rechtzeitige Belieferung von Ca'n Ros und **ermöglicht Überhangtransfers nach Palma**.",
            "ejemplo": "Mitte Februar zeigt der Vergleich, dass **die Nachfrage nach Schattiernetzen und Tropfschläuchen in Campos vier Wochen vor Palma einsetzt**. Dies ermöglicht **frühzeitige Großbestellungen beim Hersteller zu besten Staffelpreisen**.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
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
            "cat_id": "04",
            "pasos": [
                "**Saisonverlauf-Analyse:** Analyse der letzten 2 Jahre nach Kalenderwochen zur Erkennung zeitlicher Verschiebungen Stadt-Land.",
                "**Beschaffungskalender:** Festlegung optimaler Einkaufszeitpunkte je Standort entsprechend der tatsächlichen Saisonzyklen.",
                "**Koordinierte Bestellungen:** Bündelung der Lieferantenbestellungen mit gestaffelter Anlieferung an beide Standorte.",
                "**Saisonüberhang-Ausgleich:** Umlagerung verbleibender Saisonartikel zwischen Filialen zur Vermeidung von Altbeständen."
            ]
        }
    ]
};
