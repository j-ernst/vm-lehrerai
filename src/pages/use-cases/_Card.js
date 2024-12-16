import LinkButton from "../../ui/LinkButton";
import Image from "next/image";

export default function Card({ content }) {
    const { title, description, caseName } = content || {}; // Safe destructuring with fallback

    return (
        <div className="shadow-lg rounded-lg overflow-hidden h-[45vh] border border-gray-300 relative">
            {/* Bild */}
            <div className="relative w-full h-40">
                <Image
                    src={'/preview.jpg'}
                    alt={title || "Kein Titel"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            
            {/* Inhalt */}
            <div className="p-5 h-32 flex flex-col justify-between">
                <div>
                    <h1 className="font-bold text-lg">{title || "Kein Titel verfügbar"}</h1>
                    <p className="text-gray-500 text-sm">{description || "Keine Beschreibung verfügbar."}</p>
                </div>
            </div>

            {/* Button */}
            {caseName ? (
                <div className="absolute bottom-4 right-4">
                    <LinkButton link={`/use-cases/${caseName}`} text={"Mehr erfahren"} />
                </div>
            ) : (
                <p className="absolute bottom-4 right-4 text-gray-400 text-sm">Kein Link verfügbar.</p>
            )}
        </div>
    );
}