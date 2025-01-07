import { useCasesPre, useCasesLive, useCasesPost } from "@/pages/api/case-data";
import CardRow from "./_CardRow";
import { useState, useEffect } from "react";

export default function UseCases() {
    const [isSaved, setIsSaved] = useState(true); // Tracks if editing is disabled
    const [classInfo, setClassInfo] = useState(""); // Tracks the class information text

    // Load the saved description from localStorage when the component mounts
    useEffect(() => {
        const savedDescription = localStorage.getItem("classDescription");
        if (savedDescription) {
            setClassInfo(savedDescription); // Restore state from storage
        }
    }, []);

    // Handle saving the input to localStorage
    const handleSave = () => {
        localStorage.setItem("classDescription", classInfo); // Save to localStorage
        setIsSaved(true); // Lock the input
    };

    // Handle editing the input
    const handleEdit = () => {
        setIsSaved(false); // Unlock the input
    };

    return (
        <div className="flex flex-col items-center w-screen mb-20">
            <div className="mt-20 w-[60vw] max-w-[1200px] flex flex-col gap-8">
                <p className="text-3xl text-black text-center">Anwendungsfälle</p>
                <div className="w-full border-2 border-gray-600 flex flex-col gap-4 items-start p-4 rounded-lg">
                    <h1 className="text-xl font-semibold text-black">Schulklasse definieren</h1>
                    <p className="text-gray-600">
                        Schreibe kurz etwas zu der Klasse (Schulform, Fach, Klassenstufe, etc.), für die du die Unterrichtsplanung vornimmst. Diese Informationen fließen dann in jeden Prompt als Kontext mit ein. Fahre dann mit den Anwendungsfällen fort.
                    </p>
                    <textarea
                        className={`w-full p-3 border border-gray-300 rounded-md ${
                            isSaved ? "bg-gray-100 focus:outline-none cursor-default" : ""
                        }`}
                        readOnly={isSaved} // Lock input when saved
                        rows="3"
                        placeholder="Beispiel: 9. Klasse eines Gymnasiums im Fach Deutsch. Die Klasse besteht aus 28 Schüler:innen mit unterschiedlichen Vorkenntnissen im Umgang mit literarischen Texten. Grundlegende Analysefähigkeiten (z. B. Erzählperspektive, Stilmittel) wurden bereits behandelt."
                        value={classInfo} // Bind value to state
                        onChange={(e) => setClassInfo(e.target.value)} // Update state on input
                    />
                    {!isSaved ? (
                        <button
                            onClick={handleSave}
                            className="bg-black text-white p-2 px-5 rounded-md"
                        >
                            Speichern
                        </button>
                    ) : (
                        <button
                            onClick={handleEdit}
                            className="bg-white text-black p-2 px-4 border-2 border-black rounded-md"
                        >
                            Bearbeiten
                        </button>
                    )}
                </div>
                <div className="flex flex-col grow gap-4">
                    <CardRow cases={useCasesPre} title={"Unterrichtsvorbereitung"} />
                    <CardRow cases={useCasesLive} title={"Unterrichtsdurchführung"} />
                    <CardRow cases={useCasesPost} title={"Unterrichtsnachbereitung"} />
                </div>
            </div>
        </div>
    );
}
