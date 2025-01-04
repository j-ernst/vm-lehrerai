import CaseTemplate from "../CaseTemplate";
import { useCasesPre } from "@/pages/api/case-data";
import StepInput from "../_StepInput";
import { useState, useEffect } from "react";
import GenerateButton from "@/ui/GenerateButton";
import OutputWindow from "../OutputWindow";
import axios from "axios";

export default function ReihenplanungGestalten() {
    const { title, detailDescription, imgSrc, steps, templates } =
        useCasesPre[0];

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

    // Load saved class description into step1 on component mount
    useEffect(() => {
        const savedClassDescription = localStorage.getItem("classDescription");
        console.log("Saved class description: ", savedClassDescription);
        if (savedClassDescription) {
            console.log("Setting saved class description");
            handleInputChange("step1", savedClassDescription);
        }
    }, []);

    const handleInputChange = (step, value) => {
        setInputs((prev) => ({ ...prev, [step]: value }));
    };

    const generatePrompt = (steps, inputs) => {
        // Check if all inputs are empty
        const allInputsEmpty = Object.values(inputs).every(
            (input) => input === ""
        );
        console.log("All empty: ", allInputsEmpty);

        const inputsWithContent = steps
            .map((step, index) => {
                const userInput = inputs[`step${index + 1}`];
                const content = allInputsEmpty
                    ? step.placeholder
                    : userInput || "";
                return `### ${step.title}\n${step.description}\n**Eingabe der Lehrkraft:** ${content}`;
            })
            .join("\n\n");

        return `
            Erstelle eine vollständige und detaillierte Unterrichtsreihe basierend auf den unten angegebenen Informationen.
            
            Verwende die Inputs der einzelnen Schritte, um eine umfassende und strukturierte Unterrichtsreihe zu entwickeln, die den Bedürfnissen der Lehrkraft und der Klasse entspricht. Beachte dabei die relevanten Lehrplananforderungen, die Zielsetzungen und spezifischen Wünsche. Verteile die Inhalte über die Anzahl angegebener Stunden oder Einheiten. Die erstellten Inhalte sollen sehr umfassend sein.
            
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
            alert("Bitte eine Verfeinerung eingeben.");
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

    const handleSelect = (event) => {
        const selectedTitle = event.target.value;

        if (selectedTitle === "") {
            // User selected the default option; reset all inputs except step1
            setInputs((prevInputs) => {
                const newInputs = { step1: prevInputs.step1 };
                Object.keys(prevInputs).forEach((key) => {
                    // Reset all steps except step1
                    if (key !== "step1") {
                        newInputs[key] = "";
                    }
                });
                return newInputs;
            });
        } else {
            // Find the selected template based on the title
            const selectedTemplate = templates.find(
                (template) => template.title === selectedTitle
            );

            if (selectedTemplate) {
                // Create a new inputs object with the existing step1 value
                const newInputs = { step1: inputs.step1 };

                // Populate step2 to step6 with the template content
                selectedTemplate.content.forEach((content, index) => {
                    newInputs[`step${index + 2}`] = content;
                });

                // Update the state with the new inputs
                setInputs(newInputs);
            }
        }
    };

    return (
        <div>
            <CaseTemplate
                imgSrc={imgSrc}
                title={title}
                detailDescription={detailDescription}
            >
                <div className="mb-10 flex flex-col">
                    <h2 className="text-lg font-medium text-gray-700">
                        Vorlage vewenden (optional)
                    </h2>
                    <p className="text-gray-500">
                        Nutze eine der Vorlagen, um Zeit bei der Eingabe zu
                        sparen. Du kannst aber auch deinen eigenen Inhalt
                        verwenden.
                    </p>
                    <div class="relative w-1/3 mt-2">
                        <select onChange={handleSelect} class="appearance-none w-full p-2 pr-10 border border-gray-300 rounded-md">
                            <option value="">-- Vorlage auswählen --</option>
                            {templates.map((template, index) => {
                                return (
                                    <option value={template.title} key={index}>
                                        {template.title}
                                    </option>
                                );
                            })}
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                class="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {steps.map((step, index) => (
                    <StepInput
                        title={`Schritt ${index + 1} - ${step.title}`}
                        description={step.description}
                        allowDocumentUpload={step.allowDocumentUpload}
                        value={inputs[`step${index + 1}`]}
                        placeholder={step.placeholder}
                        onInputChange={(value) =>
                            handleInputChange(`step${index + 1}`, value)
                        }
                        key={index}
                    />
                ))}
                <GenerateButton
                    text={"Unterrichtsreihe generieren"}
                    func={handleSubmit}
                    isLoading={isLoading}
                />
                <OutputWindow response={response} isLoading={isLoading} />
                {/* Refine Section */}
                <div className="mt-6">
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-md"
                        rows="3"
                        placeholder="Gib zusätzliche Anweisungen ein, um das Ergebnis zu verfeinern..."
                        value={refineInput}
                        onChange={(e) => setRefineInput(e.target.value)}
                    />
                    <GenerateButton
                        text={"Ergebnis verfeinern"}
                        func={handleRefine}
                        isLoading={isLoading}
                    />
                </div>
            </CaseTemplate>
        </div>
    );
}
