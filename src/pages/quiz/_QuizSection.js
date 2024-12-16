export default function QuizSection({ index, question, options, explanation, selectedOption, onOptionSelect, result }) {
    return (
        <div
            className={`bg-white shadow-md rounded-lg p-6 mb-4 ${
                result && (result.isCorrect ? "border-green-500" : "border-red-500")
            }`}
            style={{ borderWidth: result ? "2px" : "1px" }}
        >
            <h3 className="text-lg font-semibold mb-4">
                Frage {index}: {question || "Frage nicht verfügbar"}
            </h3>
            <form className="space-y-3">
                {Array.isArray(options) ? (
                    options.map((option, i) => (
                        <label key={i} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value={i}
                                checked={selectedOption === i}
                                onChange={() => onOptionSelect(i)}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-gray-700">{option}</span>
                        </label>
                    ))
                ) : (
                    <p className="text-red-500 text-sm">Optionen nicht verfügbar.</p>
                )}
            </form>
            {result && (
                <p className={`mt-4 text-sm ${result.isCorrect ? "text-green-600" : "text-red-600"}`}>
                    {result.isCorrect ? "Richtig!" : "Falsch!"} - {explanation || "Keine Erklärung verfügbar."}
                </p>
            )}
        </div>
    );
}
