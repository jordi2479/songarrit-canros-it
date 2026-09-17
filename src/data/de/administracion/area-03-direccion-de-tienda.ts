import { Categoria } from '../../types';

export const categoriaAREA03De: Categoria = {
    "id": "area-03",
    "area": "administracion",
    "titulo": "Filialleitung",
    "propuestas": [
        {
            "id": "administracion-direccion-01",
            "codigo": "administracion-direccion-01",
            "titulo": "Führungs-Dashboard",
            "descripcion": "**Einseitiges Führungs-Dashboard** jeden Montagmorgen mit Umsätzen, Durchschnittsbon, kritischen Fehlbeständen und Kassenständen.",
            "descripcionLarga": "Ermöglicht der Geschäftsleitung, die Woche mit den wichtigsten Kennzahlen zu starten, **ohne Berichte mühsam manuell zusammenzustellen**. In 10 Minuten werden Umsatzabweichungen und unerfüllte Nachfrage sichtbar. **Liefert eine klare Übersicht für sichere Entscheidungen**.",
            "ejemplo": "Montags um 9:00 Uhr erhält die Geschäftsleitung die Wochenübersicht: Umsatztrend, Bon-Durchschnitt, **die 5 meistverkauften Artikel und erkannte Fehlbestände**. Wenn nach einer Bauwoche Zement oder Mörtel knapp werden, **wird die Nachbestellmenge exakt vorgeschlagen**.",
            "viabilidad": "Ja, über wöchentlichen/täglichen sicheren Export aus ERP/Kasse. Entkoppelte Architektur mit null Betriebsrisiko; liefert strukturierte Entwürfe zur Freigabe.",
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
            "area_id": "administracion",
            "cat_id": "03",
            "pasos": [
                "**KPI-Auswahl:** Festlegung von 5 Kernkennzahlen: Wochenumsatz, Rohmarge, Kassenbestand, Gesamtlager und Fälligkeiten.",
                "**Automatische Extraktion:** Sonntäglicher Mitternachtsexport der Daten ohne Beeinträchtigung der Geschäftszeiten.",
                "**1-Seiten-Vorlage:** Gestaltung der kompakten Führungsübersicht mit Fokus auf 3 zentrale operative Entscheidungen.",
                "**Wöchentliche Besprechung:** Feste 20-minütige Leitungsrunde montags um 9:00 Uhr auf Basis dieses Dashboards."
            ]
        },
        {
            "id": "administracion-direccion-02",
            "codigo": "administracion-direccion-02",
            "titulo": "Umsatzrückgang-Radar",
            "descripcion": "**Umsatz-Frühwarnsystem**, das bei wöchentlichen Rückgängen gegenüber dem Vorjahr alarmiert und wahrscheinliche Ursachen benennt.",
            "descripcionLarga": "Verhindert böse Überraschungen am Monatsende. Vergleicht die Wochenleistung mit dem Vorjahreszeitraum bei Überschreiten definierter Schwellenwerte. **Erkennt automatisch, ob der Rückgang auf Feiertage, Unwetter oder einen Einbruch in einer Warengruppe zurückzuführen ist**.",
            "ejemplo": "Sinkt der Umsatz in der dritten Septemberwoche **im Jahresvergleich um 14%**, meldet das Warnsystem, dass keine allgemeine Krise vorliegt: **Dauerregen stoppte Fassadenarbeiten** und eine Grundierung fehlte im Regal. Der Leiter prüft dies in 2 Minuten.",
            "viabilidad": "Sí con el CSV de ventas por día y familia del año actual y anterior más calendario local. Proceso analítico en lectura.",
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
            "cat_id": "03",
            "pasos": [
                "**Vergleichsmaßstäbe:** Festlegung einheitlicher Vergleichswerte unter Berücksichtigung von Ladenfläche, Feiertagen und Teamgröße.",
                "**Beleg-Erfassung:** Automatisierte Erfassung von Bon-Zahl, Durchschnittsbon, Mitarbeiterumsatz und Öffnungszeiten.",
                "**Warnübersicht:** Dashboard zur Kennzeichnung von Warengruppen mit Umsatzrückgängen von über 10%.",
                "**Handlungsschritte:** Abstimmung mit den Filialleitern zur Neuausrichtung der Verkaufsflächen und Aktionsplanung."
            ]
        },
        {
            "id": "administracion-direccion-03",
            "codigo": "administracion-direccion-03",
            "titulo": "Monatsende-Prognose",
            "descripcion": "**Monatsabschluss-Prognose am 20. Tag** mit 10 Tagen Handlungsspielraum zur Zielerreichung vor Monatsende.",
            "descripcionLarga": "Ersetzt das Abwarten bis zum Monatsletzten oder auf den Monatsbericht der Buchhaltung. **Berechnet am 20. Tag den voraussichtlichen Abschlusskorridor** aus der täglichen Verkaufsgeschwindigkeit und Saisonalität, **um Rabattaktionen oder Angebotsnachfassaktionen rechtzeitig zu starten**.",
            "ejemplo": "Am 20. um 9:00 Uhr liegt eine Prognose mit drei Szenarien vor. Droht ein **Umsatzabschluss 8% unter Budget**, verbleiben der Filialleitung **10 Arbeitstage, um offene Handwerkerangebote gezielt nachzufassen**.",
            "viabilidad": "Sí con el CSV de ventas diarias acumuladas a día 20 más histórico mensual. Sin tocar contabilidad ni datos fiscales.",
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
            "cat_id": "03",
            "pasos": [
                "**Prognose-Modell:** Hochrechnung aus der durchschnittlichen Tagesleistung der ersten 20 Tage und historischen Saisontrends.",
                "**Szenarien:** Automatische Berechnung von drei Szenarien (konservativ, erwartet, optimal) für Palma und Campos.",
                "**Abweichungsmeldung:** Führungsbericht am 20. jedes Monats mit Hervorhebung förderungsbedürftiger Warengruppen.",
                "**Aktionsplan:** Telefonisches Nachfassen offener Handwerkerangebote und Aktionen am Verkaufstresen zur Zielerreichung."
            ]
        }
    ]
};
