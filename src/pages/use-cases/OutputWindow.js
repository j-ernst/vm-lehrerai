import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function OutputWindow({ response, isLoading }) {
    // Helper function to strip code block wrapping
    const cleanResponse = (text) => {
        if (text.startsWith("```") && text.endsWith("```")) {
            return text.replace(/```.*?\n/, "").replace(/```$/, "");
        }
        return text;
    };

    return (
        <div className="flex flex-col mt-10 space-y-4 w-full">
            <p className="font-bold text-center text-lg">Ergebnis</p>
            <div className="p-4 border border-gray-300 bg-white rounded-lg shadow-md min-h-56 max-h-96 overflow-y-auto w-full">
                {isLoading ? (
                    <p className="text-sm text-gray-500 animate-pulse text-center">Lädt...</p>
                ) : response ? (
                    <ReactMarkdown 
                        className="prose prose-blue w-full" 
                        remarkPlugins={[remarkGfm]}
                    >
                        {cleanResponse(response)}
                    </ReactMarkdown>
                ) : (
                    <p className="text-sm text-gray-500 text-center">Noch kein Ergebnis verfügbar.</p>
                )}
            </div>
        </div>
    );
}
