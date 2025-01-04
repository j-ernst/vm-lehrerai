const useCasesPre = [
    {
        title: "Unterrichtsreihe gestalten",
        description:
            "Plane komplette Unterrichtsreihen effizient und flexibel mit strukturierten Vorschlägen und kreativen Ideen der KI.",
        detailDescription:
            "Die Planung einer Unterrichtsreihe kann zeitaufwendig und komplex sein. Mithilfe von KI lässt sich dieser Prozess jedoch effizient und kreativ gestalten. KI-gestützte Tools unterstützen dich bei der Strukturierung von Themen, der Auswahl passender Materialien und der Erstellung eines roten Fadens, der sich durch die gesamte Reihe zieht. Mit personalisierten Vorschlägen und intelligenten Empfehlungen kannst du sicherstellen, dass die Unterrichtsreihe sowohl die Lernziele erreicht als auch die Interessen der Schüler anspricht. Egal ob es um die Integration von Projekten, Gruppenarbeiten oder digitalen Medien geht – KI hilft dir, die Unterrichtsreihe abwechslungsreich, durchdacht und effektiv zu gestalten. Vertraue auf smarte Technologien, um mehr Zeit für die eigentliche Unterrichtsgestaltung zu gewinnen und dennoch einen klaren, strukturierten Plan für deine Schüler zu entwickeln.",
        imgSrc: "/prev-2.webp",
        caseName: "reihenplanung-gestalten",
        steps: [
            {
                title: "Klasse",
                description:
                    "Schreibe kurz etwas zu der Klasse, an die sich die Unterrichtsreihe richtet. Schulform, Fach, Klassenstufe, etc.",
                placeholder: "",
                allowDocumentUpload: false,
            },
            {
                title: "Thema",
                description:
                    "Schreibe kurz, um welches Thema es sich in der Unterrichtsreihe handeln soll.",
                placeholder:
                    "Photosynthese und ihre Bedeutung für das Leben auf der Erde.",
                allowDocumentUpload: false,
            },
            {
                title: "Zielsetzung",
                description:
                    "Schreibe kurz, welche Ziele du mit der Unterrichtsreihe verfolgst und welche Kompetenzen und welches Wissen du vermitteln willst.",
                placeholder:
                    "Die Schülerinnen und Schüler sollen den Prozess der Photosynthese verstehen, ihre Bedeutung für Pflanzen und die Umwelt erkennen sowie in der Lage sein, diesen Prozess in eigenen Worten zu erklären. Sie sollen außerdem Kompetenzen im Experimentieren und Analysieren wissenschaftlicher Daten entwickeln.",
                allowDocumentUpload: false,
            },
            {
                title: "Lehrplan als Orientierung hochladen",
                description:
                    "Lade den aktuellen Lehrplan hoch, um diesen als Referenzmaterial für die Erstellung des Plans zu nutzen. Schreibe alternativ auf, welche Themen Teil des Lehrplans sein sollen.",
                placeholder:
                    "Die Themen sollen den Lehrplananforderungen für die 10. Klasse Biologie entsprechen, einschließlich: -Zelluläre Prozesse, insbesondere Photosynthese. -Ökologische Zusammenhänge. -Praktische Experimente zur Untersuchung von Licht und Kohlendioxid in der Photosynthese.",
                allowDocumentUpload: false,
            },
            {
                title: "Vergangene Unterrichtsreihe als Referenz hochladen",
                description:
                    "Lade den aktuellen Lehrplan hoch, um diesen als Referenzmaterial für die Erstellung des Plans zu nutzen. Schreibe alternativ auf, welche Themen teil des Lehrplans sein sollen.",
                placeholder:
                    "In der letzten Unterrichtsreihe haben wir das Thema ‚Zellstruktur und -funktionen‘ behandelt. Die Klasse kennt bereits grundlegende Begriffe wie Chloroplasten, Zellatmung und chemische Reaktionen.",
                allowDocumentUpload: false,
            },
            {
                title: "Zeitraum",
                description:
                    "Schreibe die Dauer auf, die Unterrichtsreihe umfassen soll. Füge außerdem hinzu, auf wie viele Unterrichtsstunden pro Woche die Themen verteilt werden sollen.",
                placeholder:
                    "Die Unterrichtsreihe soll über 4 Wochen laufen und in zwei 90-minütigen Unterrichtseinheiten pro Woche umgesetzt werden.",
                allowDocumentUpload: false,
            },
            {
                title: "Spezifikationen",
                description:
                    "Beschreibe, worauf die KI besonders bei der Erstellung der Reihenplanung achten soll und welche Wünsche es beinhalten soll.",
                placeholder:
                    "Die Unterrichtsreihe sollte interaktive Elemente wie Gruppenarbeiten und praktische Experimente beinhalten. Es soll darauf geachtet werden, dass Inhalte für Schülerinnen und Schüler mit unterschiedlichen Leistungsniveaus zugänglich sind. Außerdem sollten Aufgaben für besonders interessierte Schülerinnen und Schüler angeboten werden. Eine exemplarische Klausurvorbereitung in der letzten Woche wäre wünschenswert.",
                allowDocumentUpload: false,
            },
        ],
        templates: [
            {
                "title": "Deutsch - Literatur des Expressionismus",
                "content": [
                    "Literatur des Expressionismus",
                    "Die Schüler:innen sollen ein vertieftes Verständnis der deutschen Literaturgeschichte entwickeln, insbesondere der Epoche des Expressionismus. Sie sollen lernen, zentrale Werke zu analysieren, die historischen und kulturellen Kontexte zu verstehen und eigene Interpretationen zu formulieren. Kognitive Ziele: Vertiefung des literarischen Wissens. Methodische Ziele: Entwicklung von Analyse- und Interpretationsfähigkeiten. Soziale Ziele: Förderung der Diskussions- und Teamfähigkeit.",
                    "Die Themen sollen den Lehrplananforderungen für die Oberstufe im Fach Deutsch entsprechen, einschließlich: - Analyse expressionistischer Lyrik. - Vergleich mit anderen literarischen Epochen. - Kreatives Schreiben im Stil des Expressionismus.",
                    "In der letzten Unterrichtsreihe haben wir die Literatur der Romantik behandelt. Die Klasse kennt bereits grundlegende Analyseverfahren und hat Erfahrung im Interpretieren von Gedichten.",
                    "Die Unterrichtsreihe umfasst 10 Unterrichtsstunden à 45 Minuten und erstreckt sich über fünf Wochen.",
                    "Die Unterrichtsreihe soll interaktive Methoden wie Gruppenarbeiten und Diskussionen beinhalten. Der Einsatz digitaler Medien, z. B. zur Analyse von Texten, ist erwünscht. Zudem sollen Bezüge zur aktuellen Lebenswelt der Schüler:innen hergestellt werden."
                ]
            },
            {
                "title": "Biologie - Ökosysteme und Biodiversität",
                "content": [
                    "Ökosysteme und Biodiversität",
                    "Die Schüler:innen sollen die Bedeutung von Ökosystemen und Biodiversität verstehen. Sie lernen, verschiedene Ökosysteme zu analysieren, die Wechselwirkungen zwischen Organismen zu erkennen und die Auswirkungen menschlichen Handelns auf die Umwelt zu beurteilen. Kognitive Ziele: Verständnis ökologischer Zusammenhänge. Methodische Ziele: Entwicklung von Beobachtungs- und Analysefähigkeiten. Soziale Ziele: Förderung des Umweltbewusstseins und verantwortungsvollen Handelns.",
                    "Die Themen sollen den Lehrplananforderungen für die 11. Klasse Biologie entsprechen, einschließlich: - Einführung in die Ökologie. - Untersuchung verschiedener Ökosysteme (z. B. Wald, See). - Bedeutung der Biodiversität.",
                    "In der letzten Unterrichtsreihe haben wir das Thema 'Zellbiologie' behandelt. Die Klasse kennt bereits grundlegende Konzepte wie Zellstrukturen und Stoffwechselprozesse.",
                    "Die Unterrichtsreihe umfasst 12 Unterrichtsstunden à 45 Minuten und erstreckt sich über sechs Wochen.",
                    "Die Unterrichtsreihe soll Exkursionen in nahegelegene Ökosysteme und praktische Experimente beinhalten. Der Einsatz von Modellen und Simulationen zur Veranschaulichung ökologischer Prozesse ist erwünscht."
                ]
            },
            {
                "title": "Politik - Demokratie und Partizipation",
                "content": [
                    "Demokratie und Partizipation",
                    "Die Schüler:innen sollen die Grundlagen der Demokratie und die Bedeutung politischer Partizipation verstehen. Sie lernen, politische Strukturen zu analysieren, verschiedene Formen der Beteiligung kennen und die Rolle von Bürger:innen in einer Demokratie zu reflektieren. Kognitive Ziele: Verständnis politischer Systeme. Methodische Ziele: Entwicklung von Analyse- und Argumentationsfähigkeiten. Soziale Ziele: Förderung des politischen Bewusstseins und der Bereitschaft zur Partizipation.",
                    "Die Themen sollen den Lehrplananforderungen für die 10. Klasse Politik entsprechen, einschließlich: - Grundlagen der Demokratie. - Politische Institutionen und ihre Funktionen. - Formen der politischen Partizipation.",
                    "In der letzten Unterrichtsreihe haben wir das Thema 'Grundrechte und Verfassung' behandelt. Die Klasse verfügt bereits über ein Basiswissen zu staatlichen Strukturen und Bürgerrechten.",
                    "Die Unterrichtsreihe umfasst 8 Unterrichtsstunden à 45 Minuten und erstreckt sich über vier Wochen.",
                    "Die Unterrichtsreihe soll Diskussionen, Debatten und Rollenspiele beinhalten. Der Einsatz digitaler Medien zur Recherche aktueller politischer Ereignisse ist erwünscht. Externe Expert:innen oder Politiker:innen können für Gespräche eingeladen werden."
                ]
            },
            {
                "title": "Wirtschaft - Grundlagen der Marktwirtschaft",
                "content": [
                    "Grundlagen der Marktwirtschaft",
                    "Die Schüler:innen sollen die Prinzipien der Marktwirtschaft verstehen. Sie lernen, wirtschaftliche Zusammenhänge zu analysieren, Angebot und Nachfrage zu erklären und die Rolle des Staates in der Wirtschaft zu beurteilen. Kognitive Ziele: Verständnis wirtschaftlicher Prozesse. Methodische Ziele: Entwicklung von Analyse- und Problemlösungsfähigkeiten. Soziale Ziele: Förderung des Verständnisses für wirtschaftliche Entscheidungen und deren gesellschaftliche Auswirkungen.",
                    "Die Themen sollen den Lehrplananforderungen für die Sekundarstufe II im Fach Wirtschaft entsprechen, einschließlich: - Prinzipien von Angebot und Nachfrage. - Preisbildung auf Märkten. - Rolle des Staates in der Marktwirtschaft.",
                    "In der letzten Unterrichtsreihe haben wir das Thema 'Grundlagen der Volkswirtschaftslehre' behandelt. Die Klasse kennt bereits grundlegende wirtschaftliche Begriffe und Konzepte.",
                    "Die Unterrichtsreihe umfasst 10 Unterrichtsstunden à 45 Minuten und erstreckt sich über fünf Wochen.",
                    "Die Unterrichtsreihe soll Planspiele zur Simulation von Marktprozessen und Diskussionen über aktuelle wirtschaftliche Themen beinhalten. Der Einsatz von Fallstudien und Praxisbeispielen ist erwünscht."
                ]
            },
            {
                "title": "Englisch - Shakespeare und seine Zeit",
                "content": [
                    "Shakespeare und seine Zeit",
                    "Die Schüler:innen sollen einen Einblick in das Leben und Werk von William Shakespeare erhalten. Sie lernen, ausgewählte Werke zu analysieren, den historischen und kulturellen Kontext zu verstehen und die Bedeutung Shakespeares für die englische Literatur zu erkennen. Kognitive Ziele: Verständnis literarischer Werke. Methodische Ziele: Entwicklung von Analyse- und Interpretationsfähigkeiten. Soziale Ziele: Förderung der Teamarbeit und Präsentationsfähigkeiten.",
                    "Die Themen sollen den Lehrplananforderungen für die Oberstufe im Fach Englisch entsprechen, einschließlich: - Analyse ausgewählter Sonette. - Einführung in ein Drama (z. B. 'Romeo und Julia'). - Vergleich moderner Adaptionen.",
                    "In der letzten Unterrichtsreihe haben wir die englische Renaissance-Literatur behandelt. Die Klasse verfügt bereits über Kenntnisse der historischen Epoche und literarischer Grundbegriffe.",
                    "Die Unterrichtsreihe umfasst 12 Unterrichtsstunden à 45 Minuten und erstreckt sich über sechs Wochen.",
                    "Die Unterrichtsreihe soll kreative Aktivitäten wie das Theaterspielen und die Erstellung von Postern beinhalten. Der Einsatz von Filmausschnitten moderner Adaptionen zur Veranschaulichung ist erwünscht."
                ]
            }
        ]        
    },
    {
        title: "Unterrichtseinheit planen",
        description:
            "Entwickle gezielte Unterrichtseinheiten mit klar definierten Lernzielen und passenden Materialien.",
        detailDescription:
            "Mit ChatGPT kannst du die Planung einer einzelnen Unterrichtsstunde schnell und effizient gestalten. Das Tool unterstützt dich dabei, eine klar strukturierte Stunde zu entwickeln, die genau auf die Bedürfnisse deiner Klasse und die angestrebten Lernziele abgestimmt ist. Du gibst einfach die wichtigsten Informationen ein – wie Klassenstufe, Fach, Thema, Lernziele und gewünschte Methoden – und ChatGPT erstellt für dich einen detaillierten Stundenplan. Dieser umfasst: Einführung: Ein motivierender Einstieg ins Thema, z. B. durch Fragen, kurze Lesetexte oder praktische Beispiele. Hauptteil: Klar strukturierte Aktivitäten wie Lehrervorträge, Gruppenarbeiten, Diskussionen oder interaktive Aufgaben, um das Thema zu vertiefen und die Zielkompetenzen zu fördern. Abschluss und Reflexion: Vorschläge für eine kurze Zusammenfassung oder Reflexionsaufgaben, um das Gelernte zu festigen und den Lernerfolg deiner Schüler:innen zu überprüfen. Zusätzlich bekommst du Ideen zur Differenzierung, um auf unterschiedliche Leistungsniveaus in deiner Klasse einzugehen. So kannst du beispielsweise erweiterte Aufgaben für leistungsstarke Schüler:innen oder vereinfachte Inhalte für Lernende mit Unterstützungsbedarf einbauen. ChatGPT bietet dir nicht nur wertvolle Zeitersparnis bei der Planung, sondern liefert auch kreative Impulse und neue Ansätze, die du direkt einsetzen oder weiter anpassen kannst. Nutze es als deinen digitalen Assistenten, um abwechslungsreiche, zielgerichtete und kompetenzorientierte Unterrichtsstunden zu gestalten, die deine Schüler:innen begeistern!",
        imgSrc: "/prev-3.webp",
        caseName: "einheit-planen",
        steps: [
            {
                title: "Informationen zur Klasse",
                description:
                    "Schreibe kurz etwas zu der Klasse, an die sich die Einheit richten soll. Schulform, Fach, Klassenstufe, Vorwissen, etc.",
                placeholder: "",
                allowDocumentUpload: false,
            },
            {
                title: "Zielsetzung der Stunde",
                description:
                    "Schreibe kurz, welche konkreten Kompetenzen und welches Wissen die SuS erwerben sollen. Unterscheide dabei auch gerne zwischen kognitiven, methodischen und sozialen Zielen. Füge auch einen Bezug zu Blooms Taxonomie hinzu.",
                placeholder:
                    "Die Schüler:innen sollen die Kurzgeschichte „Nachts schlafen die Ratten doch“ von Wolfgang Borchert lesen und verstehen. Sie sollen die Erzählperspektive erkennen, zentrale Stilmittel benennen und die inhaltlichen Motive (z. B. Krieg und Verlust) in eigenen Worten beschreiben. Kompetenzen: Kognitiv: Verständnis von Stilmitteln und Erzählstruktur. Methodisch: Entwicklung der Fähigkeit zur Textanalyse. Sozial: Diskussion von ethischen Fragen und Empathie für literarische Figuren.",
                allowDocumentUpload: false,
            },
            {
                title: "Thema",
                description:
                    "Notiere, um welches Thema es sich in der Einheit handeln soll.",
                placeholder:
                    "Analyse der Kurzgeschichte „Nachts schlafen die Ratten doch“ von Wolfgang Borchert.",
                allowDocumentUpload: false,
            },
            {
                title: "Bearbeitungszeit",
                description: "Schreibe kurz die Gesamtdauer der Einheit.",
                placeholder:
                    "Die Unterrichtseinheit dauert 45 Minuten. Die Bearbeitung des Arbeitsmaterials (Lesen und Analyse der Geschichte) nimmt 20 Minuten in Anspruch, gefolgt von einer 15-minütigen Diskussion im Plenum und einem 10-minütigen Abschluss, in dem die Schüler:innen ihre Erkenntnisse zusammenfassen.",
                allowDocumentUpload: false,
            },
            {
                title: "Differenzierung und Anpassung",
                description:
                    "Schreibe kurz, inwiefern unterschiedliche Lernniveaus in der Einheit berücksichtigt werden sollen.",
                placeholder:
                    "Für Schüler:innen mit schwächeren Lesefähigkeiten wird ein vereinfachter Lesetext bereitgestellt. Für leistungsstarke Schüler:innen gibt es eine Zusatzaufgabe, in der sie die Beziehung zwischen den Figuren kritisch analysieren und alternative Titel für die Geschichte vorschlagen. Zusätzlich können visuelle Hilfsmittel wie eine Mindmap zur Strukturierung der Gedanken eingesetzt werden.",
                allowDocumentUpload: false,
            },
            {
                title: "Spezifikationen",
                description:
                    "Beschreibe, worauf die KI besonders bei der Erstellung der Einheit achten soll und welche Wünsche es beinhalten soll. Spezifiziere hier z.B. falls du Präferenzen bei Materialtypen und Methoden hast, die verwendet werden sollen.",
                placeholder:
                    "Die Einheit soll interaktive Elemente enthalten, z. B. eine Gruppenarbeit zur Stilmittelanalyse und eine abschließende Diskussion zur ethischen Botschaft der Geschichte. Das Material sollte für alle Schüler:innen zugänglich sein, mit klar strukturierten Aufgaben und einer Reflexionsfrage zum Schluss. Diagramme oder eine visuelle Übersicht zur Erzählstruktur wären wünschenswert.",
                allowDocumentUpload: false,
            },
        ],
        templates: [
            {
                title: "Deutsch - Gedichtsanalyse",
                content: [
                    "Die Schüler:innen sollen die Kurzgeschichte „Nachts schlafen die Ratten doch“ von Wolfgang Borchert lesen und verstehen. Sie sollen die Erzählperspektive erkennen, zentrale Stilmittel benennen und die inhaltlichen Motive (z. B. Krieg und Verlust) in eigenen Worten beschreiben. Kompetenzen: Kognitiv: Verständnis von Stilmitteln und Erzählstruktur. Methodisch: Entwicklung der Fähigkeit zur Textanalyse. Sozial: Diskussion von ethischen Fragen und Empathie für literarische Figuren.",
                    "Analyse der Kurzgeschichte „Nachts schlafen die Ratten doch“ von Wolfgang Borchert.",
                    "Die Unterrichtseinheit dauert 45 Minuten. Die Bearbeitung des Arbeitsmaterials (Lesen und Analyse der Geschichte) nimmt 20 Minuten in Anspruch, gefolgt von einer 15-minütigen Diskussion im Plenum und einem 10-minütigen Abschluss, in dem die Schüler:innen ihre Erkenntnisse zusammenfassen.",
                    "Für Schüler:innen mit schwächeren Lesefähigkeiten wird ein vereinfachter Lesetext bereitgestellt. Für leistungsstarke Schüler:innen gibt es eine Zusatzaufgabe, in der sie die Beziehung zwischen den Figuren kritisch analysieren und alternative Titel für die Geschichte vorschlagen. Zusätzlich können visuelle Hilfsmittel wie eine Mindmap zur Strukturierung der Gedanken eingesetzt werden.",
                    "Die Einheit soll interaktive Elemente enthalten, z. B. eine Gruppenarbeit zur Stilmittelanalyse und eine abschließende Diskussion zur ethischen Botschaft der Geschichte. Das Material sollte für alle Schüler:innen zugänglich sein, mit klar strukturierten Aufgaben und einer Reflexionsfrage zum Schluss. Diagramme oder eine visuelle Übersicht zur Erzählstruktur wären wünschenswert.",
                ],
            },
            {
                title: "Biologie - Photosynthese",
                content: [
                    "Die Schüler:innen sollen den Prozess der Photosynthese verstehen, die beteiligten Organellen identifizieren und die chemische Gleichung der Photosynthese erläutern können. Kompetenzen: Kognitiv: Verständnis der biochemischen Prozesse. Methodisch: Durchführung einfacher Experimente zur Sauerstoffproduktion. Sozial: Teamarbeit bei Experimenten.",
                    "Untersuchung der Photosynthese bei Pflanzen.",
                    "Die Unterrichtseinheit dauert 90 Minuten. Ein 30-minütiger theoretischer Teil wird durch ein 40-minütiges Experiment ergänzt, gefolgt von einer 20-minütigen Diskussion und Zusammenfassung.",
                    "Schüler:innen mit unterschiedlichem Vorwissen erhalten angepasste Informationsblätter. Für leistungsstarke Schüler:innen gibt es vertiefende Aufgaben zur Licht- und Dunkelreaktion.",
                    "Die Einheit soll ein Experiment zur Sauerstoffproduktion bei Wasserpflanzen enthalten. Visuelle Hilfsmittel wie Diagramme und Videos sollen den Prozess veranschaulichen.",
                ],
            },
            {
                title: "Politik - Gewaltenteilung",
                content: [
                    "Die Schüler:innen sollen die drei Gewalten Legislative, Exekutive und Judikative des deutschen politischen Systems benennen und deren Funktionen erläutern können. Kompetenzen: Kognitiv: Verständnis des Prinzips der Gewaltenteilung. Methodisch: Analyse politischer Strukturen. Sozial: Diskussion über die Bedeutung der Gewaltenteilung für die Demokratie.",
                    "Einführung in die Gewaltenteilung in Deutschland.",
                    "Die Unterrichtseinheit dauert 60 Minuten, bestehend aus einem 20-minütigen Vortrag, einer 25-minütigen Gruppenarbeit und einer 15-minütigen Präsentation der Ergebnisse.",
                    "Für Schüler:innen mit geringerem Verständnis werden vereinfachte Texte bereitgestellt. Leistungsstarke Schüler:innen bearbeiten Fallstudien zur Anwendung der Gewaltenteilung.",
                    "Die Einheit soll interaktive Elemente wie Rollenspiele enthalten, um die Funktionen der einzelnen Gewalten nachzustellen. Diagramme zur Veranschaulichung der Gewaltenteilung sind erwünscht.",
                ],
            },
            {
                title: "Wirtschaft - Angebot und Nachfrage",
                content: [
                    "Die Schüler:innen sollen die Konzepte von Angebot und Nachfrage verstehen und die Auswirkungen auf Preisbildung erläutern können. Kompetenzen: Kognitiv: Verständnis wirtschaftlicher Grundprinzipien. Methodisch: Analyse von Marktmodellen. Sozial: Diskussion wirtschaftlicher Entscheidungen.",
                    "Grundlagen von Angebot und Nachfrage in der Marktwirtschaft.",
                    "Die Unterrichtseinheit dauert 90 Minuten, mit einem 30-minütigen Theorieteil, einer 30-minütigen Simulation eines Marktes und einer 30-minütigen Reflexion.",
                    "Schüler:innen mit unterschiedlichen Lernniveaus erhalten angepasste Aufgabenstellungen. Für leistungsstarke Schüler:innen gibt es komplexere Marktanalysen.",
                    "Die Einheit soll eine Simulation eines Marktes enthalten, bei der Schüler:innen Rollen als Käufer und Verkäufer einnehmen. Grafische Darstellungen von Angebots- und Nachfragekurven sind wünschenswert.",
                ],
            },
            {
                title: "Englisch - Analyse einer Kurzgeschichte",
                content: [
                    "Die Schüler:innen sollen die Struktur und die Merkmale einer englischen Kurzgeschichte identifizieren und analysieren können. Sie sollen literarische Techniken wie Metaphern, Symbole und Ironie erkennen und interpretieren. Kompetenzen: Kognitiv: Verständnis literarischer Techniken. Methodisch: Anwendung von Analysemethoden auf englische Texte. Sozial: Austausch von Interpretationen in Partnerarbeit.",
                    "Analyse der Kurzgeschichte 'The Tell-Tale Heart' von Edgar Allan Poe.",
                    "Die Unterrichtseinheit dauert 90 Minuten. 30 Minuten gemeinsames Lesen und Besprechen der Kurzgeschichte, 40 Minuten Analyse in Partnerarbeit, 20 Minuten Präsentation der Ergebnisse und Diskussion.",
                    "Schüler:innen mit höherem Analysevermögen bearbeiten tiefere Interpretationsfragen, während andere sich auf grundlegende Elemente konzentrieren. Audiovisuelle Medien wie Hörbücher oder Verfilmungen werden eingesetzt, um das Verständnis zu fördern.",
                    "Die Einheit soll kreative Aufgaben wie das Schreiben eines alternativen Endes enthalten. Es sollen Diskussionen über die psychologische Tiefe der Charaktere geführt werden, um das kritische Denken zu fördern.",
                ],
            },
        ],
    },
    {
        title: "Material erstellen",
        description:
            "Erstelle Arbeitsblätter, Lesetexte und Quizfragen mit KI-Unterstützung, die auf individuelle Bedürfnisse zugeschnitten sind.",
        detailDescription:
            "Die Erstellung von Arbeitsmaterialien ist für Lehrkräfte oft zeitaufwendig, doch Künstliche Intelligenz (KI) kann diesen Prozess erheblich erleichtern. Auf dieser Seite kannst du KI nutzen, um Textinhalte für Arbeitsblätter, Quizfragen, Lesetexte oder Unterrichtsreihen zu erstellen. Diese Inhalte sind auf die individuellen Bedürfnisse und das Niveau der Schüler:innen zugeschnitten und können personalisierte Lernprofile berücksichtigen. Der Fokus liegt auf der automatisierten Generierung von klar strukturierten Texten, die als Grundlage für Materialien dienen. Zwar können derzeit keine fertigen Dateien wie PDFs oder interaktive Dokumente erstellt werden, jedoch bietet der Text-Output eine solide Basis, die du flexibel weiterverarbeiten kannst. KI unterstützt dich dabei, schnell hochwertige Inhalte zu erstellen, Lernziele zu definieren und Unterrichtsthemen zu strukturieren. So lassen sich kreative Elemente wie Quizfragen, Lesetexte oder Reflexionsaufgaben effizient generieren. Lehrkräfte profitieren von einer erheblichen Zeitersparnis und können sich stärker auf die pädagogische Umsetzung konzentrieren. Die hier erstellten Inhalte machen deine Unterrichtsmaterialien moderner, individueller und zielgerichteter – eine ideale Grundlage, die du nach Bedarf weiter anpassen kannst.",
        imgSrc: "/prev-1.webp",
        caseName: "material-erstellen",
        steps: [
            {
                title: "Klasse",
                description:
                    "Schreibe kurz etwas zu der Klasse, an die sich das Material richten soll. Schulform, Fach, Klassenstufe, Vorwissen, etc.",
                placeholder: "",
                allowDocumentUpload: false,
            },
            {
                title: "Zielsetzung",
                description:
                    "Schreibe kurz, welche Ziele du mit dem Material verfolgst und welche Kompetenzen und welches Wissen du vermitteln willst.",
                placeholder:
                    "Die Schülerinnen und Schüler sollen den Prozess der Photosynthese verstehen, ihre Bedeutung für Pflanzen und die Umwelt erkennen sowie in der Lage sein, diesen Prozess in eigenen Worten zu erklären. Sie sollen außerdem Kompetenzen im Experimentieren und Analysieren wissenschaftlicher Daten entwickeln.",
                allowDocumentUpload: false,
            },
            {
                title: "Thema",
                description:
                    "Notiere, um welches Thema es sich in dem Material handeln soll.",
                placeholder:
                    "Photosynthese und ihre Bedeutung für das Leben auf der Erde.",
                allowDocumentUpload: false,
            },
            {
                title: "Bearbeitungszeit",
                description:
                    "Schreibe kurz, wie lange die SuS für die Bearbeitung des Materials brauchen sollten.",
                placeholder:
                    "Die Schülerinnen und Schüler sollten für Bearbeitung des Arbeitsblatt 10min benötigen.",
                allowDocumentUpload: false,
            },
            {
                title: "Materialtyp",
                description:
                    "Schreibe kurz, welche Art von Material erstellt werden soll. Füge optional auch hinzu, welche Stufe von Blooms Taxonomie das Material erfüllen soll (Erinnern, Verstehen, Anwenden, Analysieren, Beurteilen, Schaffen)",
                placeholder:
                    "Erstelle einen Lückentext zum Thema Photosynthese, der auf folgendem Artikel beruht:",
                allowDocumentUpload: false,
            },
            {
                title: "Spezifikationen",
                description:
                    "Beschreibe, worauf die KI besonders bei der Erstellung des Materials achten soll und welche Wünsche es beinhalten soll.",
                placeholder: "",
                allowDocumentUpload: false,
            },
        ],
        templates: [
            {
                title: "Deutsch – Lückentext zur Kurzgeschichte",
                content: [
                    "Die Schüler:innen sollen ihr Verständnis der Kurzgeschichte 'Nachts schlafen die Ratten doch' von Wolfgang Borchert vertiefen, indem sie zentrale Themen und Motive identifizieren und sprachliche Mittel erkennen. Kompetenzen: Kognitiv: Verständnis literarischer Texte. Methodisch: Anwendung von Textanalysefähigkeiten. Sozial: Förderung der Interpretationsfähigkeit.",
                    "Lückentext zur Analyse der Kurzgeschichte 'Nachts schlafen die Ratten doch' von Wolfgang Borchert.",
                    "Die Bearbeitungszeit für den Lückentext beträgt ca. 20 Minuten.",
                    "Erstelle einen Lückentext, der zentrale Aussagen der Kurzgeschichte enthält und die Schüler:innen dazu anregt, Schlüsselbegriffe und -themen zu identifizieren.",
                    "Das Material sollte klare Anweisungen enthalten und den Schüler:innen ermöglichen, ihr Textverständnis zu überprüfen. Eine kurze Einführung zur Thematik der Kurzgeschichte wäre hilfreich.",
                ],
            },
            {
                title: "Biologie – Multiple-Choice-Quiz zur Photosynthese",
                content: [
                    "Die Schüler:innen sollen ihr Wissen über den Prozess der Photosynthese überprüfen und festigen. Kompetenzen: Kognitiv: Verständnis biologischer Prozesse. Methodisch: Anwendung von Wissen in Testsituationen.",
                    "Multiple-Choice-Quiz zum Thema Photosynthese.",
                    "Die Bearbeitungszeit für das Quiz beträgt ca. 15 Minuten.",
                    "Erstelle ein Multiple-Choice-Quiz mit 10 Fragen, die verschiedene Aspekte der Photosynthese abdecken, um das Verständnis der Schüler:innen zu überprüfen.",
                    "Das Material sollte Fragen mit jeweils vier Antwortmöglichkeiten enthalten, wobei nur eine korrekt ist. Eine Lösungsschlüssel zur Selbstkontrolle sollte beigefügt sein.",
                ],
            },
            {
                title: "Politik – Infotext mit Verständnisfragen zur Demokratie",
                content: [
                    "Die Schüler:innen sollen ein tieferes Verständnis für die Prinzipien der Demokratie entwickeln. Kompetenzen: Kognitiv: Verständnis politischer Grundbegriffe. Methodisch: Förderung des Leseverständnisses.",
                    "Infotext zur Demokratie mit anschließenden Verständnisfragen.",
                    "Die Bearbeitungszeit für den Infotext und die Fragen beträgt ca. 25 Minuten.",
                    "Erstelle einen zweiseitigen Infotext, der die Grundprinzipien der Demokratie erklärt, gefolgt von fünf offenen Verständnisfragen.",
                    "Das Material sollte den Infotext in klarer und verständlicher Sprache präsentieren und Fragen enthalten, die das Textverständnis und kritisches Denken fördern.",
                ],
            },
            {
                title: "Wirtschaft – Fallstudie mit Aufgaben zur Marktwirtschaft",
                content: [
                    "Die Schüler:innen sollen die Funktionsweise der Marktwirtschaft anhand einer praxisnahen Fallstudie verstehen. Kompetenzen: Kognitiv: Anwendung wirtschaftlicher Konzepte. Methodisch: Analyse von Fallbeispielen.",
                    "Fallstudie zur Marktwirtschaft mit anschließenden Aufgaben.",
                    "Die Bearbeitungszeit für die Fallstudie und die Aufgaben beträgt ca. 30 Minuten.",
                    "Erstelle eine kurze Fallstudie über ein Unternehmen im marktwirtschaftlichen Umfeld, gefolgt von drei Aufgaben, die die Schüler:innen zur Analyse und Anwendung ihres Wissens anregen.",
                    "Das Material sollte eine realistische Fallstudie präsentieren und Aufgaben enthalten, die kritisches Denken und die Anwendung wirtschaftlicher Konzepte fördern.",
                ],
            },
            {
                title: "Englisch – Wortschatzübung zum Thema 'Environment'",
                content: [
                    "Die Schüler:innen sollen ihren Wortschatz zum Thema 'Environment' erweitern und festigen. Kompetenzen: Kognitiv: Erweiterung des Wortschatzes. Methodisch: Anwendung neuer Vokabeln in Kontexten.",
                    "Wortschatzübung mit Matching-Aufgaben zum Thema 'Environment'.",
                    "Die Bearbeitungszeit für die Übung beträgt ca. 20 Minuten.",
                    "Erstelle ein Arbeitsblatt mit 15 neuen Vokabeln zum Thema 'Environment' und passenden Definitionen, die die Schüler:innen zuordnen sollen.",
                    "Das Material sollte eine Liste von Vokabeln und Definitionen enthalten, die gemischt präsentiert werden, sowie Platz für Notizen der Schüler:innen.",
                ],
            },
        ],
    },
];

const useCasesLive = [
    {
        title: "Echzeitassistent bei Fragen",
        description:
            "Beantwortet in Echtzeit Fragen von Schülern und unterstützt die Lehrkraft direkt im Unterricht.",
        imgSrc: "/prev-4.webp",
        caseName: "material-erstellen",
        disable: true,
    },
];

const useCasesPost = [
    {
        title: "Abgaben auswerten",
        description:
            "Analysiere und bewerte Schülerabgaben effizient mit der Unterstützung von KI-gestützten Feedback-Tools.",
        imgSrc: "/preview.jpg",
        caseName: "material-erstellen",
        disable: true,
    },
    {
        title: "Unterrichtseinheit evaluieren",
        description:
            "Reflektiere den Erfolg deiner Unterrichtseinheit mit KI-gestützten Analysen und Verbesserungsvorschlägen",
        imgSrc: "/preview.jpg",
        caseName: "material-erstellen",
        disable: true,
    },
];

export { useCasesPre, useCasesLive, useCasesPost };
