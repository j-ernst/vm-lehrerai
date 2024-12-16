import CaseTemplate from "../CaseTemplate";
import { useCasesPre } from "@/pages/api/case-data";
import StepInput from "../_StepInput";
import { useState } from "react";
import GenerateButton from "@/ui/GenerateButton";
import OutputWindow from "../OutputWindow";
import axios from "axios";

export default function MaterialErstellen() {
    const { title, detailDescription, imgSrc } = useCasesPre[2];

    const [inputs, setInputs] = useState({
        step1: "",
        step2: "",
        step3: "",
        step4: "",
        step5: "",
        step6: "",
        step7: "",
    });

    const [response, setResponse] = useState(""); // State to hold API response
    const [isLoading, setIsLoading] = useState(false); // State for loading
    const [refineInput, setRefineInput] = useState(""); // Input for refining the output

    const steps = [
        {
            title: "Informationen zur Klasse",
            description:
                "Schreibe kurz etwas zu der Klasse, an die sich die Einheit richten soll. Schulform, Fach, Klassenstufe, Vorwissen, etc.",
            placeholder:
                "Das Material richtet sich an eine 9. Klasse eines Gymnasiums im Fach Deutsch. Die Klasse besteht aus 28 Schüler:innen mit unterschiedlichen Vorkenntnissen im Umgang mit literarischen Texten. Grundlegende Analysefähigkeiten (z. B. Erzählperspektive, Stilmittel) wurden bereits behandelt.",
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
    ];

    const handleInputChange = (step, value) => {
        setInputs((prev) => ({ ...prev, [step]: value }));
    };

    const generatePrompt = (steps, inputs) => {
        const inputsWithContent = steps
            .map((step, index) => {
                const userInput = inputs[`step${index + 1}`];
                const content = userInput || step.placeholder;
                return `### ${step.title}\n${step.description}\n**Eingabe der Lehrkraft:** ${content}`;
            })
            .join("\n\n");

        return `
            Erstelle auf Grundlage der unten angegebenen Informationen eine vollständige, strukturierte und methodisch abwechslungsreiche Unterrichtseinheit. Verwende dabei den Input der Lehrkraft, um einen klaren, zielgerichteten Plan zu entwickeln, der auf die Zielgruppe und die angestrebten Lernziele abgestimmt ist. Achte darauf, dass die Unterrichtseinheit eine sinnvolle Struktur hat, die Inhalte zielgerichtet vermittelt und flexibel an unterschiedliche Unterrichtsverläufe angepasst werden kann.

            Fasse am Anfang deiner Ausgabe kurz die Inputs der Lehrkraft zusammen. Der Fokus soll jedoch auf dem erstellten Unterrichtsplan liegen.

            Nutze folgende Informationen als Basis für die Planung der Unterrichtseinheit:
            
            ${inputsWithContent}
            
            ### Anforderungen an die Planung:
            1. **Struktur**: Gliedere die Unterrichtseinheit in klare Phasen, z. B. Einführung, Erarbeitungsphase, Reflexion und Abschluss. Jede Phase sollte eine Zeitangabe und eine kurze Beschreibung der Aktivitäten enthalten.
            2. **Inhalte**: Stelle sicher, dass die Inhalte die Lernziele abdecken und didaktisch sinnvoll aufeinander aufbauen. Integriere praxisnahe Beispiele oder Verweise auf Materialien, die den Lernprozess unterstützen.
            3. **Methodenvielfalt**: Plane eine abwechslungsreiche Mischung aus Lehrervortrag, Einzelarbeit, Partnerarbeit, Gruppenarbeit, Diskussionen und praktischen Aktivitäten.
            4. **Differenzierung**: Biete Vorschläge zur Differenzierung an, um unterschiedliche Lernniveaus und Bedürfnisse der Schüler:innen zu berücksichtigen. Füge bei Bedarf Aufgaben für leistungsstärkere oder schwächere Schüler:innen hinzu.
            5. **Interaktivität und Reflexion**: Plane interaktive Elemente und integriere Reflexionsaufgaben, um das Verständnis der Schüler:innen zu überprüfen und zu festigen.
            6. **Evaluation**: Ergänze Methoden zur Überprüfung des Lernerfolgs, z. B. durch Quizfragen, Arbeitsblätter, Diskussionen oder kurze Feedbackrunden.

            ### Format:
            Erstelle die Unterrichtseinheit im **Markdown-Format** und liefere ausschließlich die vollständige Planung zurück. Achte auf eine klare und übersichtliche Darstellung, sodass die Lehrkraft den Plan direkt im Unterricht einsetzen kann.

            Beachte: Der Plan muss praxisnah, direkt umsetzbar und methodisch ansprechend für die Zielgruppe gestaltet sein.
        `;
    };

    const handleSubmit = async () => {
        try {
            setIsLoading(true); // Start loading            

            // Generate the prompt
            const prompt = generatePrompt(steps, inputs);            

            // Send the request to the local API
            const res = await axios.post(
                "/api/chat",
                { message: prompt },
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            // Set the API response
            setResponse(res.data.reply);
        } catch (error) {
            console.error("Error communicating with the API:", error);
            setResponse(
                "Fehler beim Abrufen der Daten. Bitte versuche es erneut."
            );
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    const handleRefine = async () => {
        if (!refineInput.trim()) {
            alert("Bitte geben Sie eine Verfeinerung ein.");
            return;
        }

        try {
            setIsLoading(true);            

            const refinePrompt = `
                Hier ist der vorherige Kontext und das generierte Ergebnis:

                ### Vorheriger Kontext:
                ${generatePrompt(steps, inputs)}

                ### Vorheriges Ergebnis:
                ${response}

                ### Neue Anweisung:
                ${refineInput}

                Bitte aktualisiere das vorherige Ergebnis basierend auf der neuen Anweisung. Gib das Ergebnis im Markdown-Format zurück.
            `;

            const res = await axios.post(
                "/api/chat",
                { message: refinePrompt },
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            setResponse(res.data.reply); // Update the response with the refined result
            setRefineInput(""); // Clear the refine input field
        } catch (error) {
            console.error("Error refining output:", error);
            setResponse(
                "Fehler beim Verfeinern der Daten. Bitte versuchen Sie es erneut."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <CaseTemplate
                imgSrc={imgSrc}
                title={title}
                detailDescription={detailDescription}
            >
                {steps.map((step, index) => (
                    <StepInput
                        title={`Schritt ${index + 1} - ${step.title}`}
                        description={step.description}
                        allowDocumentUpload={step.allowDocumentUpload}
                        placeholder={step.placeholder}
                        onInputChange={(value) =>
                            handleInputChange(`step${index + 1}`, value)
                        }
                        key={index}
                    />
                ))}
                <GenerateButton
                    text={"Materialidee erstellen"}
                    func={handleSubmit}
                />
                <OutputWindow response={response} isLoading={isLoading} />
                {/* Refine Section */}
                <div className="mt-6">
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-md"
                        rows="3"
                        placeholder="Geben Sie zusätzliche Anweisungen ein, um das Ergebnis zu verfeinern..."
                        value={refineInput}
                        onChange={(e) => setRefineInput(e.target.value)}
                    />
                    <button
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        onClick={handleRefine}
                    >
                        Verfeinern
                    </button>
                </div>
            </CaseTemplate>
        </div>
    );
}
