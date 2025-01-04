import Image from "next/image";

export default function GenerateButton({ text, func, isLoading }) {
    return (
        <div>
            <button
                onClick={() => !isLoading && func()}
                className={`flex gap-2 px-4 py-2 items-center transition-transform duration-100 transform active:scale-95 text-white rounded-md ${
                    isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-700 hover:bg-blue-600'
                }`}
                disabled={isLoading}
            >
                <p>{text}</p>
                <Image src={'/stars.svg'} width={20} height={20} alt={'Gen stars'} />
            </button>
        </div>
    );
}
