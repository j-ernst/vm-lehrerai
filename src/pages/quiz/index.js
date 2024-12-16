import QuizSection from "./_QuizSection"
import { useState } from "react";

export default function Quiz (){
    const quizContent = [
        {
            question: "Was bedeutet die Abkürzung KI in Bezug auf generative Technologien?",
            options: ["Komplexe Informationsverarbeitung", "Künstliche Intelligenz", "Kognitive Integration", "Kollektive Ideenfindung"],
            answer: 1,
            explanation: "KI steht für 'Künstliche Intelligenz', eine Technologie, die menschenähnliche Aufgaben wie Lernen, Problemlösung und Kreativität ausführt."
        },
        {
            question: "Wie könnte generative KI in Schulen verwendet werden, ohne die Rolle der Lehrkraft zu ersetzen?",
            options: [
                "Durch vollständige Automatisierung von Unterrichtsplänen",
                "Durch die Unterstützung bei der Erstellung individueller Lernaufgaben",
                "Durch das Ersetzen von Prüfungen durch KI-generierte Aufgaben",
                "Durch die Analyse von Lehrverhalten zur Effizienzsteigerung"
            ],
            answer: 1,
            explanation: "Generative KI kann Lehrkräfte unterstützen, indem sie individuelle Lernmaterialien erstellt, ohne den pädagogischen Einfluss der Lehrkraft zu verdrängen."
        },
        {
            question: "Welcher Nachteil generativer KI wird oft übersehen?",
            options: [
                "Hohe Rechenleistung verursacht höhere Kosten",
                "Generierte Inhalte können unbemerkt Vorurteile enthalten",
                "Die Technologie ist schwer zugänglich für Lehrer",
                "Es werden nur wissenschaftliche Inhalte generiert"
            ],
            answer: 1,
            explanation: "Generative KI kann Vorurteile aus den Trainingsdaten übernehmen, was zu problematischen Inhalten führen kann, die nicht leicht erkennbar sind."
        },
        {
            question: "Wie kann generative KI bei der Förderung von Sprachenlernen unterstützen?",
            options: [
                "Durch die Bereitstellung einheitlicher Grammatikregeln",
                "Durch die automatische Übersetzung und Kontextanpassung von Texten",
                "Durch die Erstellung von Prüfungen in mehreren Sprachen",
                "Durch die Verwaltung von Sprachlernprogrammen"
            ],
            answer: 1,
            explanation: "Generative KI kann durch automatische Übersetzung und kontextbasierte Anpassung den Lernprozess individualisieren und erleichtern."
        },
        {
            question: "Was könnte eine langfristige Folge der Integration generativer KI in den Bildungssektor sein?",
            options: [
                "Einheitliche Lernmethoden für alle Schulen",
                "Reduzierung der Bedeutung von Lehrkräften",
                "Verlust von Kreativität bei Schülern und Lehrern",
                "Erhöhte Abhängigkeit von algorithmisch erstelltem Wissen"
            ],
            answer: 3,
            explanation: "Die starke Nutzung generativer KI könnte eine Abhängigkeit von algorithmischen Lösungen schaffen, die kritisches Denken und Eigenständigkeit beeinträchtigen."
        },
        {
            question: "Welcher Aspekt generativer KI birgt das größte Potenzial, aber auch die größten Risiken für den Unterricht?",
            options: [
                "Das Generieren interaktiver Inhalte",
                "Die Fähigkeit, selbstständig Unterrichtskonzepte zu entwickeln",
                "Das Anbieten von vollständig angepassten Lösungen für Schüler",
                "Die Integration von KI-Feedback in Schülerbewertungen"
            ],
            answer: 2,
            explanation: "Angepasste Lösungen können die Lernerfahrung verbessern, bergen jedoch das Risiko, Schüler zu stark von der KI abhängig zu machen."
        },
        {
            question: "In welchem Fall könnte der Einsatz generativer KI unethisch sein?",
            options: [
                "Wenn Lernmaterialien ohne Prüfung der Quellen erstellt werden",
                "Wenn Schüler durch automatisierte Systeme bewertet werden",
                "Wenn Lehrer gezwungen werden, die KI zu verwenden",
                "Wenn die KI komplexe Inhalte einfacher darstellt"
            ],
            answer: 0,
            explanation: "Ohne eine sorgfältige Überprüfung der Quellen könnten generierte Inhalte Fehlinformationen enthalten oder unausgewogen sein."
        },
        {
            question: "Was ist eine subtile Gefahr beim Einsatz generativer KI im Bildungsbereich?",
            options: [
                "Lehrkräfte könnten ihre Rolle verlieren",
                "Schüler könnten Inhalte konsumieren, ohne sie kritisch zu hinterfragen",
                "Generierte Inhalte könnten alle Schulbücher ersetzen",
                "Die Integration der KI könnte zu langsamen Systemen führen"
            ],
            answer: 1,
            explanation: "Schüler könnten generierte Inhalte passiv übernehmen, ohne sie kritisch zu hinterfragen, was ihre Fähigkeit zum eigenständigen Denken beeinträchtigen könnte."
        },
        {
            question: "Welches Problem könnte auftreten, wenn generative KI personalisierte Lernpläne erstellt?",
            options: [
                "Die Pläne könnten zu komplex für Schüler sein",
                "Lehrkräfte könnten die Kontrolle über den Lernprozess verlieren",
                "Es könnten Lernlücken aufgrund ungenauer Daten entstehen",
                "Schüler könnten nicht von einheitlichen Inhalten profitieren"
            ],
            answer: 2,
            explanation: "Wenn die Datenbasis ungenau ist, können personalisierte Pläne fehlerhaft sein, was zu Lernlücken führen könnte."
        },
        {
            question: "Welche Rolle sollte generative KI in der Zukunft des Bildungswesens einnehmen?",
            options: [
                "Eine führende Rolle, die Lehrkräfte ersetzt",
                "Eine unterstützende Rolle zur Entlastung von Lehrkräften",
                "Eine zentrale Rolle bei der standardisierten Prüfungsentwicklung",
                "Eine experimentelle Rolle, nur in Pilotprojekten"
            ],
            answer: 1,
            explanation: "Generative KI sollte Lehrkräfte unterstützen, um Arbeitsbelastungen zu verringern und mehr Zeit für die individuelle Betreuung der Schüler zu schaffen."
        }
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
    };

    return (
        <div className="flex flex-col items-center w-screen mb-20">
            <div className="mt-20 w-[60vw] flex flex-col items-center">
                <p className="text-3xl text-black text-center">Quiz</p>
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