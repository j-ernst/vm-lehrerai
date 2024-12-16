export default function GenerateButton({text, func}) {
    return (
        <div>
            <button onClick={() => func()} className="bg-blue-700 px-4 py-2 items-center hover:bg-blue-600 transition-transform duration-100 transform active:scale-95 text-white p-2 rounded-md">{text}</button>
        </div>
    );
}