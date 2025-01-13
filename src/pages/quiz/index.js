import QuizSection from "./_QuizSection"
import { useState } from "react";

export default function Quiz (){
    const quizContent = [
        {
            question: "Was ist das Hauptziel von Maschinellem Lernen (ML)?",
            options: [
                "Die manuelle Programmierung jedes Prozesses durch Entwickler",
                "Das eigenständige Lernen und Verbessern von Modellen basierend auf Daten",
                "Das Trainieren neuronaler Netze, um Bilder zu analysieren",
                "Die Eliminierung menschlicher Fehler in Algorithmen"
            ],
            answer: 1,
            explanation: "Maschinelles Lernen ermöglicht Maschinen, eigenständig aus Daten zu lernen und sich ohne explizite Programmierung zu verbessern."
        },
        {
            question: "Welche Art von Modellen wird speziell zur Erzeugung von Inhalten wie Texten oder Bildern eingesetzt?",
            options: [
                "Supervised Learning Modelle, die aus gelabelten Daten lernen",
                "Neuronale Netze, die Daten in Schichten analysieren",
                "Unsupervised Learning Modelle, die Muster ohne Labels erkennen",
                "Generative Modelle, die auf Basis von Trainingsdaten Inhalte erzeugen"
            ],
            answer: 3,
            explanation: "Generative Modelle wie GPT sind darauf ausgelegt, basierend auf Trainingsdaten neue Inhalte wie Texte oder Bilder zu erstellen."
        },
        {
            question: "Wie verbessert man die Qualität der Ausgabe eines KI-Modells durch Prompting?",
            options: [
                "Indem man komplexe und detaillierte Anweisungen kombiniert",
                "Indem man präzise Anweisungen mit relevantem Kontext bereitstellt",
                "Indem man dem Modell möglichst viele Eingaben auf einmal gibt",
                "Indem man dem Modell zeigt, wie es Daten selbst analysieren kann"
            ],
            answer: 1,
            explanation: "Eine präzise und klare Formulierung mit ausreichendem Kontext führt zu besseren Ergebnissen beim Prompting."
        },
        {
            question: "Welche Kompetenz ist für Lehrkräfte besonders wichtig, um KI verantwortungsvoll im Unterricht einzusetzen?",
            options: [
                "Kenntnisse in der Entwicklung neuer Algorithmen",
                "Verständnis für ethische Fragestellungen wie Bias und Datenschutz",
                "Die Fähigkeit, große Datenmengen effizient zu analysieren",
                "Erfahrung in der Programmierung neuronaler Netze"
            ],
            answer: 1,
            explanation: "Ethisches Bewusstsein hilft Lehrkräften, die Nutzung von KI kritisch zu hinterfragen und potenzielle Risiken zu minimieren."
        },
        {
            question: "Welcher Ansatz hilft, systematische Verzerrungen (Bias) in KI-Modellen zu reduzieren?",
            options: [
                "Das Training der Modelle mit zufällig ausgewählten Daten",
                "Die Sicherstellung von Diversität und Repräsentativität in den Trainingsdaten",
                "Die Verwendung kleinerer Datensätze zur besseren Kontrolle",
                "Die Anwendung nur auf vordefinierte Aufgaben mit geringer Komplexität"
            ],
            answer: 1,
            explanation: "Diversität in den Trainingsdaten stellt sicher, dass Modelle eine breitere und repräsentativere Basis haben, wodurch Bias reduziert wird."
        },
        {
            question: "Welche Nutzung von KI im Bildungswesen wäre ethisch sehr problematisch?",
            options: [
                "Automatisierte Bewertungen ohne menschliche Überprüfung",
                "Personalisierte Lernpläne, die Schülerbedürfnisse berücksichtigen",
                "Die Erstellung von Quizfragen basierend auf Lehrplänen",
                "Die Analyse von Schülerleistungen zur Förderung des Lernens"
            ],
            answer: 0,
            explanation: "Automatisierte Bewertungen ohne menschliche Kontrolle können zu unfairen Ergebnissen führen und mangelnde Transparenz aufweisen."
        },
        /*{
            question: "Wie kann KI Lehrkräfte effizient bei der Erstellung von Lehrmaterialien unterstützen?",
            options: [
                "Durch die Erstellung von vorgefertigten Bewertungen",
                "Durch die automatisierte Generierung von Quizfragen und Übungen",
                "Durch die Überwachung von Schülerverhalten im Klassenzimmer",
                "Durch die Integration von Algorithmen zur Vorhersage von Lernergebnissen"
            ],
            answer: 1,
            explanation: "KI kann Lehrkräfte entlasten, indem sie Aufgaben wie die Erstellung von Quizfragen automatisiert übernimmt."
        },
        {
            question: "Warum ist Datenschutz bei der Nutzung von KI im Schulumfeld besonders wichtig?",
            options: [
                "Weil sensible Schülerdaten geschützt werden müssen",
                "Weil KI gesetzliche Anforderungen zur Datensicherheit nicht erfüllt",
                "Weil KI auf große Datenmengen angewiesen ist",
                "Weil die Kosten für Datenschutzmaßnahmen hoch sind"
            ],
            answer: 0,
            explanation: "Der Schutz sensibler Schülerdaten ist entscheidend, um das Vertrauen von Schülern und Eltern zu gewährleisten."
        },
        {
            question: "Welcher zukünftige Einsatz von KI hat das größte Potenzial, das Bildungswesen zu prägen?",
            options: [
                "Die vollständige Automatisierung von Schulabläufen",
                "Die KI-gestützte Erstellung individueller Lehrmaterialien",
                "Die Übernahme der Lehrerrolle durch generative KI",
                "Die Schaffung standardisierter Lehrpläne für alle Schulen"
            ],
            answer: 1,
            explanation: "Die Erstellung personalisierter Lehrmaterialien ermöglicht einen individuelleren und effizienteren Unterricht."
        },
        {
            question: "Was ist die größte technische Herausforderung bei der Erstellung personalisierter Lernpläne durch KI?",
            options: [
                "Die KI benötigt sehr viel Rechenleistung, um personalisierte Inhalte zu erstellen",
                "Ungenaue oder unvollständige Daten könnten zu fehlerhaften Lernempfehlungen führen",
                "Die KI könnte Inhalte erstellen, die für Schüler schwer umzusetzen sind",
                "Die Pläne könnten zu generisch sein und keine Personalisierung bieten"
            ],
            answer: 1,
            explanation: "Die Qualität der personalisierten Lernpläne hängt direkt von der Genauigkeit und Vollständigkeit der zugrunde liegenden Daten ab. Fehlerhafte oder unvollständige Daten führen zu ungenauen Empfehlungen und sind die größte technische Herausforderung."
        }*/
    ];
    
    const [userAnswers, setUserAnswers] = useState({});
    const [results, setResults] = useState(null);

    const handleInputChange = (questionIndex, optionIndex) => {
        setUserAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
    };

    const evaluateQuiz = () => {
        const evaluatedResults = quizContent.map((q, index) => ({
            isCorrect: userAnswers[index] === q.answer,
            explanation: q.explanation
        }));
        setResults(evaluatedResults);
        window.scrollTo(0,0)
    };

    return (
        <div className="flex flex-col items-center w-screen mb-20">
            <div className="mt-20 w-[60vw] flex flex-col items-center gap-4">
                <p className="text-3xl text-black text-center">Quiz</p>
                <p className="w-[40vw] text-center">Das Quiz testet dein Wissen über die Grundlagen generativer KI. Bei einem guten Ergebnis kannst du direkt mit den Anwendungsfällen fortfahren. Solltest du weniger gut abschneiden, bietet dir das Wiki die Möglichkeit, die Grundlagen zu vertiefen.</p>
                <div className="mt-4">
                    {quizContent.map((q, index) => (
                        <QuizSection
                            key={index}
                            index={index + 1}
                            question={q.question}
                            options={q.options}
                            explanation={q.explanation}
                            selectedOption={userAnswers[index]}
                            onOptionSelect={(optionIndex) => handleInputChange(index, optionIndex)}
                            result={results ? results[index] : null}
                        />
                    ))}
                </div>
                <button
                    onClick={evaluateQuiz}
                    className="mt-6 px-8 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                >
                    Auswerten
                </button>
            </div>
        </div>
    );
}