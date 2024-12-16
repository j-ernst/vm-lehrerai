import CaseTemplate from "../CaseTemplate";
import { useCasesPre } from "@/pages/api/case-data";
import StepInput from "../_StepInput";
import { useState } from "react";
import GenerateButton from "@/ui/GenerateButton";
import OutputWindow from "../OutputWindow";
import axios from "axios";

export default function ReihenplanungGestalten() {
    const { title, detailDescription, imgSrc } = useCasesPre[1];

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
            description: "Schreibe kurz etwas zu der Klasse, an die sich die Unterrichtsreihe richtet. Schulform, Fach, Klassenstufe, etc.",
            placeholder: "Die Unterrichtsreihe richtet sich an eine 10. Klasse einer Gesamtschule im Fach Biologie. Die Klasse besteht aus 25 Schülerinnen und Schülern, mit einer durchschnittlichen Leistungsspanne und unterschiedlichen Interessen an Naturwissenschaften.",
            allowDocumentUpload: false
        },
        {
            title: "Thema",
            description: "Schreibe kurz, um welches Thema es sich in der Unterrichtsreihe handeln soll.",
            placeholder: "Photosynthese und ihre Bedeutung für das Leben auf der Erde.",
            allowDocumentUpload: false
        },
        {
            title: "Zielsetzung",
            description: "Schreibe kurz, welche Ziele du mit der Unterrichtsreihe verfolgst und welche Kompetenzen und welches Wissen du vermitteln willst.",
            placeholder: "Die Schülerinnen und Schüler sollen den Prozess der Photosynthese verstehen, ihre Bedeutung für Pflanzen und die Umwelt erkennen sowie in der Lage sein, diesen Prozess in eigenen Worten zu erklären. Sie sollen außerdem Kompetenzen im Experimentieren und Analysieren wissenschaftlicher Daten entwickeln.",
            allowDocumentUpload: false
        },
        {
            title: "Lehrplan als Orientierung hochladen",
            description: "Lade den aktuellen Lehrplan hoch, um diesen als Referenzmaterial für die Erstellung des Plans zu nutzen. Schreibe alternativ auf, welche Themen Teil des Lehrplans sein sollen.",
            placeholder: "Die Themen sollen den Lehrplananforderungen für die 10. Klasse Biologie entsprechen, einschließlich: -Zelluläre Prozesse, insbesondere Photosynthese. -Ökologische Zusammenhänge. -Praktische Experimente zur Untersuchung von Licht und Kohlendioxid in der Photosynthese.",
            allowDocumentUpload: false
        },
        {
            title: "Vergangene Unterrichtsreihe als Referenz hochladen",
            description: "Lade den aktuellen Lehrplan hoch, um diesen als Referenzmaterial für die Erstellung des Plans zu nutzen. Schreibe alternativ auf, welche Themen teil des Lehrplans sein sollen.",
            placeholder: "In der letzten Unterrichtsreihe haben wir das Thema ‚Zellstruktur und -funktionen‘ behandelt. Die Klasse kennt bereits grundlegende Begriffe wie Chloroplasten, Zellatmung und chemische Reaktionen.",
            allowDocumentUpload: false
        },
        {
            title: "Zeitraum",
            description: "Schreibe die Dauer auf, die Unterrichtsreihe umfassen soll. Füge außerdem hinzu, auf wie viele Unterrichtsstunden pro Woche die Themen verteilt werden sollen.",
            placeholder: "Die Unterrichtsreihe soll über 4 Wochen laufen und in zwei 90-minütigen Unterrichtseinheiten pro Woche umgesetzt werden.",
            allowDocumentUpload: false
        },
        {
            title: "Spezifikationen",
            description: "Beschreibe, worauf die KI besonders bei der Erstellung der Reihenplanung achten soll und welche Wünsche es beinhalten soll.",
            placeholder: "Die Unterrichtsreihe sollte interaktive Elemente wie Gruppenarbeiten und praktische Experimente beinhalten. Es soll darauf geachtet werden, dass Inhalte für Schülerinnen und Schüler mit unterschiedlichen Leistungsniveaus zugänglich sind. Außerdem sollten Aufgaben für besonders interessierte Schülerinnen und Schüler angeboten werden. Eine exemplarische Klausurvorbereitung in der letzten Woche wäre wünschenswert.",
            allowDocumentUpload: false
        }
    ];

    const handleInputChange = (step, value) => {
        setInputs((prev) => ({ ...prev, [step]: value }));
    };

    const generatePrompt = (steps, inputs) => {
        const inputsWithContent = steps.map((step, index) => {
            const userInput = inputs[`step${index + 1}`];
            const content = userInput || step.placeholder;
            return `### ${step.title}\n${step.description}\n**Eingabe der Lehrkraft:** ${content}`;
        }).join("\n\n");
    
        return `
            Erstelle eine vollständige und detaillierte Unterrichtsreihe basierend auf den unten angegebenen Informationen.
            
            Verwende die Inputs der einzelnen Schritte, um eine umfassende und strukturierte Unterrichtsreihe zu entwickeln, die den Bedürfnissen der Lehrkraft und der Klasse entspricht. Beachte dabei die relevanten Lehrplananforderungen, die Zielsetzungen und spezifischen Wünsche.
            
            ${inputsWithContent}
            
            ### Anforderungen an die Planung
            
            1. Struktur: Die Unterrichtsreihe sollte in sinnvolle Einheiten (z. B. Unterrichtsstunden oder Themenblöcke) unterteilt sein, die aufeinander aufbauen.
            2. Inhalte und Methoden:
                - Inhalte müssen die angegebenen Zielsetzungen und Lehrplananforderungen abdecken.
                - Methoden sollten an die Klasse angepasst sein und eine Mischung aus Lehrervorträgen, Gruppenarbeiten, Diskussionen und praktischen Aktivitäten umfassen.
            3. Kompetenzorientierung: Die Unterrichtsreihe sollte die im Input beschriebenen Kompetenzen gezielt fördern.
            4. Flexibilität: Gib alternative Vorschläge oder Anpassungsmöglichkeiten an, falls bestimmte Stunden nicht wie geplant durchgeführt werden können.
            5. Evaluation: Schlag Möglichkeiten vor, um den Lernerfolg der Schülerinnen und Schüler zu evaluieren.
            
            ### Output Format
            
            Der Output soll in Markdown-Format bereitgestellt werden. **Bitte gebe ausschließlich den vollständigen Plan als Markdown zurück.**
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
                    text={'Unterrichtsreihe generieren'} 
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
