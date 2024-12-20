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
        step7: ""
    });

    const [response, setResponse] = useState(""); // State to hold API response
    const [isLoading, setIsLoading] = useState(false); // State for loading
    const [refineInput, setRefineInput] = useState(""); // Input for refining the output

    const steps = [
        {
            title: "Klasse",
            description: "Schreibe kurz etwas zu der Klasse, an die sich das Material richten soll. Schulform, Fach, Klassenstufe, Vorwissen, etc.",
            placeholder: "Das Material richtet sich an eine 10. Klasse einer Gesamtschule im Fach Biologie. Die Klasse besteht aus 25 Schülerinnen und Schülern, mit einer durchschnittlichen Leistungsspanne und unterschiedlichen Interessen an Naturwissenschaften.",
            allowDocumentUpload: false
        },
        {
            title: "Zielsetzung",
            description: "Schreibe kurz, welche Ziele du mit dem Material verfolgst und welche Kompetenzen und welches Wissen du vermitteln willst.",
            placeholder: "Die Schülerinnen und Schüler sollen den Prozess der Photosynthese verstehen, ihre Bedeutung für Pflanzen und die Umwelt erkennen sowie in der Lage sein, diesen Prozess in eigenen Worten zu erklären. Sie sollen außerdem Kompetenzen im Experimentieren und Analysieren wissenschaftlicher Daten entwickeln.",
            allowDocumentUpload: false
        },
        {
            title: "Thema",
            description: "Notiere, um welches Thema es sich in dem Material handeln soll.",
            placeholder: "Photosynthese und ihre Bedeutung für das Leben auf der Erde.",
            allowDocumentUpload: false
        },
        {
            title: "Bearbeitungszeit",
            description: "Schreibe kurz, wie lange die SuS für die Bearbeitung des Materials brauchen sollten.",
            placeholder: "Die Schülerinnen und Schüler sollten für Bearbeitung des Arbeitsblatt 10min benötigen.",
            allowDocumentUpload: false
        },
        {
            title: "Materialtyp",
            description: "Schreibe kurz, welche Art von Material erstellt werden soll. Füge optional auch hinzu, welche Stufe von Blooms Taxonomie das Material erfüllen soll (Erinnern, Verstehen, Anwenden, Analysieren, Beurteilen, Schaffen)",
            placeholder: "Erstelle einen Lückentext zum Thema Photosynthese, der auf folgendem Artikel beruht:",
            allowDocumentUpload: false
        },
        {
            title: "Spezifikationen",
            description: "Beschreibe, worauf die KI besonders bei der Erstellung des Materials achten soll und welche Wünsche es beinhalten soll.",
            placeholder: "",
            allowDocumentUpload: false
        }
    ];

    const handleInputChange = (step, value) => {
        setInputs((prev) => ({ ...prev, [step]: value }));
    };

    const generatePrompt = (steps, inputs) => {
        // Check if all inputs are empty
        const allInputsEmpty = Object.values(inputs).every(input => input === "");
        console.log("All empty: ", allInputsEmpty)

        const inputsWithContent = steps.map((step, index) => {
            const userInput = inputs[`step${index + 1}`];
            const content = allInputsEmpty ? step.placeholder : userInput || "";
            return `### ${step.title}\n${step.description}\n**Eingabe der Lehrkraft:** ${content}`;
        }).join("\n\n");
    
        return `
            Erstelle auf Grundlage der unten angegebenen Informationen ein vollständiges, strukturiertes und kompetenzorientiertes Unterrichtsmaterial. Verwende dabei den Input der Lehrkraft, um ein an die Zielgruppe angepasstes Material zu entwickeln, das methodisch abwechslungsreich und flexibel ist. Achte darauf, dass das Material die gewünschten Lernziele erfüllt, verschiedene Leistungsniveaus berücksichtigt und praktisch umsetzbar ist.
            Fasse am Anfang deiner Ausgabe kurz die Inputs der Lehrkraft zusammen. Der Fokus soll aber auf dem erstellten Material liegen.
            Nutze folgende Informationen als Basis für deine Erstellung:
            
            ${inputsWithContent}
            
            ### Anforderungen an das Material:
            1. Struktur: Das Material sollte klar strukturiert sein und eine nachvollziehbare Abfolge von Schritten beinhalten (z. B. Einführung, Hauptteil, Abschluss).
            2. Inhalte: Stelle sicher, dass die Inhalte vollständig die Ziele und das Thema abdecken. Integriere relevante Fakten, Aufgaben und praktische Beispiele.
            3. Methoden: Biete verschiedene Arbeitsformen wie Einzelarbeit, Partnerarbeit, Gruppenarbeit oder Diskussionsimpulse an, die zur Zielgruppe passen.
            4. Differenzierung: Baue differenzierte Aufgaben oder Anpassungsmöglichkeiten für Schülerinnen und Schüler mit unterschiedlichen Leistungsniveaus ein.
            5. Reflexion und Evaluation: Ergänze Vorschläge zur Überprüfung des Lernerfolgs, z. B. durch Quizfragen, Lückentexte, Reflexionsaufgaben oder Diskussionsanregungen.
            
            ### Format:
            Erstelle das Material im **Markdown-Format** und liefere ausschließlich das vollständige Unterrichtsmaterial zurück. Achte auf eine flüssige und lesbare Darstellung ohne zusätzliche Kommentare oder Erklärungen.
            
            Beachte: Das Material muss sofort einsatzbereit sein, klar verständlich für die Zielgruppe und methodisch ansprechend für die Lehrkraft.
        `;        
    };

    const handleSubmit = async () => {
        try {
            setIsLoading(true); // Start loading            

            // Generate the prompt
            const prompt = generatePrompt(steps, inputs);            

            // Send the request to the local API
            const res = await axios.post('/api/chat', { message: prompt }, {
                headers: { 'Content-Type': 'application/json' },
            });

            // Set the API response
            setResponse(res.data.reply);
        } catch (error) {
            console.error('Error communicating with the API:', error);
            setResponse('Fehler beim Abrufen der Daten. Bitte versuche es erneut.');
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

            const res = await axios.post('/api/chat', { message: refinePrompt }, {
                headers: { 'Content-Type': 'application/json' },
            });

            setResponse(res.data.reply); // Update the response with the refined result
            setRefineInput(""); // Clear the refine input field
        } catch (error) {
            console.error("Error refining output:", error);
            setResponse("Fehler beim Verfeinern der Daten. Bitte versuchen Sie es erneut.");
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
                        onInputChange={(value) => handleInputChange(`step${index + 1}`, value)}
                        key={index}
                    />
                ))}
                <GenerateButton 
                    text={'Materialidee erstellen'} 
                    func={handleSubmit} 
                />
                <OutputWindow 
                    response={response} 
                    isLoading={isLoading} 
                />
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
