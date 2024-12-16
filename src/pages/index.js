import HomeCard from "@/ui/HomeCard";

export default function Home() {
    return (
        <div className="flex-grow flex h-[calc(100vh-112px)] justify-center items-center">
            <div className="flex flex-col gap-8 max-w-[1200px] w-[60vw] h-[60vh] rounded-lg items-center justify-center">
                <div className="flex flex-col gap-4 text-center items-center w-full">
                    <p className="text-2xl font-semibold">Willkommen auf KI-Kompass</p>
                    <p className="text-center text-lg text-gray-600">
                        Auf dieser Website kannst du dein Wissen über KI überprüfen, gezielt vorhandene
                        Wissenslücken schließen und praxisnahe Anwendungsfälle
                        kennenlernen. Schritt für Schritt zeigen wir dir, wie du
                        KI-gestützte Tools effektiv einsetzen kannst, um deine
                        Unterrichtsvorbereitung zu erleichtern und zu
                        verbessern.
                    </p>
                </div>
                <div className="flex xl:flex-row flex-col gap-4 grow mt-8">
                    <HomeCard
                        title={"Wissenstest"}
                        description={
                            "Teste dein Wissen zu den Grundlagen der KI und finde heraus, wo du noch dazulernen kannst."
                        }
                        text={"Quiz starten"}
                        link={"/quiz"}
                    />
                    <HomeCard
                        title={"Anwendungsfälle"}
                        description={
                            "Entdecke praxisnahe Einsatzmöglichkeiten von KI zur Unterrichtsplanung und wie du sie Schritt für Schritt umsetzen kannst."
                        }
                        text={"Anwendungsfälle kennenlernen"}
                        link={"/use-cases"}
                    />
                </div>
            </div>
        </div>
    );
}
