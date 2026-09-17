import { Categoria } from '../../types';

export const categoriaAREA13De: Categoria = {
    "id": "area-13",
    "area": "operativa",
    "titulo": "Sicherheit & Prävention",
    "propuestas": [
        {
            "id": "operativa-seguridad-01",
            "codigo": "operativa-seguridad-01",
            "titulo": "Öffnung & Schließung",
            "descripcion": "**Tägliche Prüfliste bei Ladenöffnung und Feierabend** für Tore, Hof und Alarmanlage mit Fotobestätigung an die Inhaber.",
            "descripcionLarga": "Gibt den Eigentümern die Gewissheit, dass das Gebäude nachts 100% gesichert ist, ohne persönlich anwesend sein zu müssen. **Der Schließende absolviert einen 2-Minuten-Rundgang**: Kassenbestand im Tresor, Materialhof abgeschlossen, Maschinen gesichert und Alarm scharf.",
            "ejemplo": "Um 19:45 Uhr füllt der Schließende die Checkliste aus und **fotografiert das grüne Bedienfeld der Alarmanlage sowie das Hoftor**. Die Partner in Palma **erhalten sofort die Bestätigung, dass die Filiale sicher verschlossen ist**.",
            "viabilidad": "Ja, durch sichere entkoppelte Exporte und standardisierte Dokumentenverarbeitung.",
            "dificultad": "Niedrig",
            "riesgo": "Niedrig",
            "beneficio": "Mittel",
            "acceso": "lectura",
            "fase": "Phase 1 30 Tage",
            "stack": "entkoppelte Analyse",
            "softwareRecomendado": [
                "WhatsApp Business",
                "Google Forms",
                "Google Drive"
            ],
            "softwareOpcional": [
                "Telegram",
                "AppSheet"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "13",
            "pasos": [
                "**Schließ-Checkliste:** 4-Punkte-Prüfung: Bargeld im Safe, Hoftor verriegelt, Mietgeräte weggeschlossen, Alarm scharf.",
                "**Fotopflicht:** Beifügen von Fotos des scharf geschalteten Alarms und der verriegelten Haupttür beim Absenden.",
                "**Benachrichtigung:** Kurze Benachrichtigung auf das Smartphone der Geschäftsleitung mit Uhrzeit und Name des Mitarbeiters.",
                "**Zutrittsprotokoll:** Erfassung von Öffnungen außerhalb der Geschäftszeiten zur Nachvollziehbarkeit außergewöhnlicher Zugänge."
            ]
        },
        {
            "id": "operativa-seguridad-02",
            "codigo": "operativa-seguridad-02",
            "titulo": "Differenzen-Auditor",
            "descripcion": "**Nachvollziehbarkeit von Kassendifferenzen**, die erkennt, ob Abweichungen an einer Kasse oder beim Schichtwechsel entstehen.",
            "descripcionLarga": "Vermeidet Spannungen und Misstrauen im Team bei Kassenfehlbeträgen. **Erfasst das Kassenergebnis bei jedem Schichtwechsel individuell**. Treten wiederholt Differenzen auf, wird das Muster (Uhrzeit, Kasse oder Schicht) objektiv analysiert.",
            "ejemplo": "Über zwei Wochen fallen samstagmorgens **wiederkehrende Differenzen von 10-20 € in bar auf**. Die Analyse zeigt, dass **die Differenz auf einen Zählfehler beim Wechselgeld zurückzuführen ist**, nicht auf Entwendung.",
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
            "cat_id": "13",
            "pasos": [
                "**Schicht-Zählung:** Verbindlicher Blindabschluss jedes Mal, wenn ein Kassierer die Kasse an einen Kollegen übergibt.",
                "**Benutzer-Zuordnung:** Protokollierung aller Kassiervorgänge und Rabatte zum angemeldeten Benutzer am Terminal.",
                "**Abweichungs-Alarm:** Benachrichtigung der Leitung nur dann, wenn dieselbe Kasse an drei Tagen hintereinander abweicht.",
                "**Klärendes Gespräch:** Sachliche Besprechung von Abweichungen mit dem Personal zur Behebung von Rechenfehlern."
            ]
        },
        {
            "id": "operativa-seguridad-03",
            "codigo": "operativa-seguridad-03",
            "titulo": "Schwund-Kontrolle",
            "descripcion": "**Tägliche Zählung von 5 hochpreisigen Artikeln**, um Diebstahl und Schwund ohne Komplettinventur sofort zu erkennen.",
            "descripcionLarga": "Im Eisenwarenhandel schmälert der Diebstahl kleiner, hochpreisiger Artikel (Diamantscheiben, Bohrer, Schlösser) unbemerkt die Marge bis zur Jahresinventur. **Das Tool wählt täglich 5 Zufallsartikel aus, die der Leiter in 3 Minuten nachzählt**.",
            "ejemplo": "Am Mittwoch fordert das System auf, die Sicherheits-Vorhängeschlösser in der Vitrine zu zählen. **Sollbestand ist 12, gezählt werden 9**. Die Differenz fällt in der Woche auf, in der sie passierte, **sodass Kassenbons oder Vitrinenschlösser sofort geprüft werden**.",
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
                "WhatsApp Business"
            ],
            "estado": "propuesta",
            "area_id": "operativa",
            "cat_id": "13",
            "pasos": [
                "**Risikoartikel-Auswahl:** Festlegung der 100 diebstahlgefährdetsten Artikel nach Warenwert und Handlichkeit.",
                "**Täglicher Zufallsbericht:** Jeden Morgen Übermittlung von 5 Artikeln an das Terminal des Filialleiters zur Zählung.",
                "**3-Minuten-Erfassung:** Direkteingabe des tatsächlichen Bestands im System zum Soll-Ist-Abgleich.",
                "**Sicherungsmaßnahmen:** Einsortierung in Schauvitrinen oder Anbringung von Warensicherungen bei wiederkehrendem Schwund."
            ]
        }
    ]
};
