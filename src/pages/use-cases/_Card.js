import LinkButton from "../../ui/LinkButton";
import Image from "next/image";

export default function Card({ content }) {
    // Safe destructuring with fallbacks
    const {
        title = "Kein Titel verfügbar",
        description = "Keine Beschreibung verfügbar.",
        caseName,
        imgSrc = "/fallback-image.jpg", // Default fallback image path
        disable = false,
    } = content || {};

    // Error log in case content is null/undefined
    if (!content) {
        console.error("Card component received invalid content:", content);
        return (
            <div className="shadow-lg rounded-lg border border-red-300 p-5 bg-red-100">
                <h1 className="text-red-600 font-bold">Fehler beim Laden der Karte</h1>
                <p className="text-red-500 text-sm">
                    Es gab ein Problem beim Anzeigen der Inhalte. Bitte überprüfen Sie die Daten.
                </p>
            </div>
        );
    }

    return (
        <div className="shadow-lg rounded-lg overflow-hidden h-[45vh] max-h-[400px] border border-gray-300 relative">
            {/* Bild */}
            <div className="relative w-full h-40 bg-gray-200">
                {imgSrc ? (
                    <Image
                        src={imgSrc}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                        onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop
                            e.target.src = "/fallback-image.jpg"; // Fallback image on error
                        }}
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        Bild nicht verfügbar
                    </div>
                )}
            </div>

            {/* Inhalt */}
            <div className="p-5 h-32 flex flex-col justify-between">
                <div>
                    <h1 className="font-bold text-lg text-black">{title}</h1>
                    <p className="text-gray-500 text-sm">{description}</p>
                </div>
            </div>

            {/* Button */}
            {caseName ? (
                <div className="absolute bottom-4 right-4">
                    <LinkButton
                        disable={disable}
                        link={`/use-cases/${caseName}`}
                        text={disable ? "In Arbeit" : "Mehr erfahren"}
                    />
                </div>
            ) : (
                <p className="absolute bottom-4 right-4 text-gray-400 text-sm">
                    Kein Link verfügbar.
                </p>
            )}
        </div>
    );
}
