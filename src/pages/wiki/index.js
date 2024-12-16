import Section from "./Section";

export default function Wiki() {
    const sections = [
        {
            id: "ki-und-ml",
            title: "Grundlagen von Künstlicher Intelligenz (KI) und Maschinellem Lernen (ML)",
            content: (
                <>
                    <p>
                        Künstliche Intelligenz (KI) bezeichnet Maschinen oder Systeme, die Aufgaben ausführen können, die typischerweise menschliche Intelligenz erfordern. Maschinelles Lernen (ML) ist ein Teilgebiet der KI, das Maschinen ermöglicht, aus Daten zu lernen und sich zu verbessern, ohne explizit programmiert zu werden.
                    </p>
                    <br></br>
                    <p>
                        <strong>Wesentliche Konzepte:</strong>
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Neuronale Netze: Inspiriert vom menschlichen Gehirn, analysieren sie Daten wie Texte oder Bilder.</li>
                        <li>Supervised Learning: Modelle lernen aus gelabelten Daten, um Muster zu erkennen.</li>
                        <li>Unsupervised Learning: Das Modell lernt Muster aus nicht gelabelten Daten, z. B. durch Clustering.</li>
                        <li>Generative Modelle: Modelle wie GPT erzeugen Inhalte wie Texte oder Bilder basierend auf Trainingsdaten.</li>
                    </ul>
                    <p>
                        Diese Grundlagen helfen Lehrkräften, KI-Anwendungen zu bewerten und im Unterricht sinnvoll einzusetzen.
                    </p>
                </>
            ),
        },
        {
            id: "prompting",
            title: "Prompting: Effektive Kommunikation mit KI-Modellen",
            content: (
                <>
                    <p>
                        Prompting ist die Gestaltung von Eingaben, die KI-Modelle dazu bringen, gewünschte Ergebnisse zu liefern. Die Qualität des Prompts beeinflusst direkt die Ausgabe.
                    </p>
                    <p>
                        <strong>Tipps für effektives Prompting:</strong>
                    </p>
                    <br></br>
                    <ul className="list-disc ml-6">
                        <li>Klarheit: Präzise und verständlich formulieren, um Mehrdeutigkeiten zu vermeiden.</li>
                        <li>Kontext: Relevante Informationen bereitstellen, um bessere Antworten zu erzielen.</li>
                        <li>Schrittweise Anweisungen: Komplexe Aufgaben in einfache Schritte unterteilen.</li>
                        <li>Beispiele: Der KI zeigen, welche Art von Antwort erwartet wird.</li>
                    </ul>
                    <br />
                    <p>
                        Effektives Prompting ermöglicht es Lehrkräften, die Fähigkeiten von KI-Modellen besser zu nutzen.
                    </p>
                </>
            ),
        },
        {
            id: "kompetenzen-lehrkraefte",
            title: "Kompetenzen für Lehrkräfte im Umgang mit KI",
            content: (
                <>
                    <p>
                        Lehrkräfte benötigen spezifische Kompetenzen, um KI sinnvoll im Unterricht einzusetzen:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Technische Grundlagen: Verständnis von KI, Datenverarbeitung und Algorithmen.</li>
                        <li>Ethisches Bewusstsein: Umgang mit Bias und Datenschutz.</li>
                        <li>Pädagogische Integration: KI zur Personalisierung von Lernen und Bewertungen einsetzen.</li>
                    </ul>
                    <br />
                    <p>
                        Diese Kompetenzen helfen, KI effektiv und verantwortungsbewusst zu nutzen.
                    </p>
                </>
            ),
        },
        {
            id: "ethik-und-bias",
            title: "Ethik und Bias in KI-Anwendungen",
            content: (
                <>
                    <p>
                        KI-Modelle können systematische Verzerrungen (Bias) enthalten, die zu unfairen Ergebnissen führen. Dies ist besonders kritisch in der Schülerbewertung.
                    </p>
                    <br />
                    <p>
                        <strong>Herausforderungen:</strong>
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Bias in Daten: Daten können Vorurteile widerspiegeln, z. B. Geschlecht oder ethnische Gruppen.</li>
                        <li>Nachvollziehbarkeit: Entscheidungen von KI-Modellen sind oft schwer verständlich.</li>
                    </ul>
                    <br />
                    <p>
                        <strong>Ansätze:</strong>
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Diversität in Trainingsdaten sicherstellen.</li>
                        <li>Lehrkräfte für ethische Fragen sensibilisieren.</li>
                        <li>Transparente Algorithmen fördern.</li>
                    </ul>
                </>
            ),
        },
        {
            id: "anwendungsbeispiele",
            title: "Anwendungsbeispiele von KI im Bildungswesen",
            content: (
                <>
                    <p>
                        KI kann Lehrkräfte unterstützen und den Unterricht verbessern:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Automatisierte Bewertungen: KI-Tools wie Grammarly oder Turnitin.</li>
                        <li>Personalisierte Lernplattformen: Systeme wie Khan Academy oder Duolingo.</li>
                        <li>Erstellung von Lehrmaterialien: KI generiert Quizfragen oder Übungen.</li>
                    </ul>
                    <br />
                    <p>
                        Diese Anwendungen sparen Zeit und ermöglichen mehr individuelle Betreuung der Schüler.
                    </p>
                </>
            ),
        },
        {
            id: "datenschutz",
            title: "Datenschutz und Sicherheit in der KI-Nutzung",
            content: (
                <>
                    <p>
                        Datenschutz ist zentral, wenn KI in Schulen eingesetzt wird. Schülerdaten müssen geschützt werden.
                    </p>
                    <br />
                    <p>
                        <strong>Best Practices:</strong>
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Plattformen nutzen, die Datenschutzstandards einhalten.</li>
                        <li>Nur notwendige Daten erfassen.</li>
                        <li>Lehrkräfte im Umgang mit Daten schulen.</li>
                    </ul>
                    <br />
                    <p>
                        Ein verantwortungsvoller Umgang mit Daten stärkt das Vertrauen von Schülern und Eltern.
                    </p>
                </>
            ),
        },
        {
            id: "zukunft",
            title: "Zukunft der KI im Bildungswesen",
            content: (
                <>
                    <p>
                        Die Nutzung von KI im Bildungswesen wird weiter wachsen.
                    </p>
                    <br />
                    <strong>Trends umfassen:</strong>
                    <ul className="list-disc ml-6">
                        <li>Generative KI für die Erstellung von Lehrmaterialien.</li>
                        <li>Inklusive Lernplattformen mit KI-Unterstützung.</li>
                        <li>Erkennung von Emotionen und Lernfortschritten durch KI.</li>
                    </ul>
                    <br />
                    <p>
                        Lehrkräfte sollten sich kontinuierlich weiterbilden, um diese Technologien sinnvoll zu nutzen.
                    </p>
                </>
            ),
        },
    ];
    
    return (
        <div className="flex flex-col items-center p-6">
            <div className="w-full max-w-5xl">
                {/* Inhaltsverzeichnis */}
                <div className="bg-blue-100 shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl text-black font-semibold mb-4">Inhaltsverzeichnis</h2>
                    <ul className="space-y-2">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    {section.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Dynamische Inhalte */}
                <div className="space-y-8">
                    {sections.map((section) => (
                        <Section key={section.id} id={section.id} title={section.title}>
                            {section.content}
                        </Section>
                    ))}
                </div>
            </div>
        </div>
    );
}
