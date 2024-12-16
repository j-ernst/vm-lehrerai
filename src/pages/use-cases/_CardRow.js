import Card from "./_Card";

export default function CardRow({ cases, title }) {
    return (
        <div className="mt-10 2xl:px-20">
            <p className="text-nav my-2 text-xl font-bold">{title || "Titel nicht verfügbar"}</p>
            <div className="grid md:grid-cols-2 gap-4 w-full">
                {Array.isArray(cases) && cases.length > 0 ? (
                    cases.map((usecase, key) => {
                        return <Card key={key} content={usecase} />;
                    })
                ) : (
                    <p className="text-red-500 text-sm">Keine Daten verfügbar.</p>
                )}
            </div>
        </div>
    );
}
