import CaseTemplate from "../CaseTemplate";
import { useCasesPre } from "@/pages/api/case-data";
import StepInput from "../_StepInput";
import { useState, useEffect } from "react";
import GenerateButton from "@/ui/GenerateButton";
import OutputWindow from "../OutputWindow";
import axios from "axios";

export default function EinheitPlanen() {
    const { title, detailDescription, imgSrc, steps, templates } =
        useCasesPre[1];

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
                        <select
                            onChange={handleSelect}
                            class="appearance-none w-full p-2 pr-10 border border-gray-300 rounded-md"
                        >
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
                    text={"Einheit planen"} 
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
