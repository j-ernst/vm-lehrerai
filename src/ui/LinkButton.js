import Link from "next/link";

export default function LinkButton({ disable, text, link }) {
    return (
        <div>
            {disable ? (
                // Disabled state: Unclickable with "not-allowed" cursor
                <div
                    className="bg-gray-500 px-4 py-2 text-center text-white rounded-md cursor-not-allowed"
                    style={{ pointerEvents: "none" }} // Prevent clicks
                >
                    {text}
                </div>
            ) : (
                // Enabled state: Regular link behavior
                <Link href={link}>
                    <p
                        className="bg-nav hover:bg-zinc-700 transition-transform duration-100 transform active:scale-95 px-4 py-2 text-center text-white rounded-md cursor-pointer"
                    >
                        {text}
                    </p>
                </Link>
            )}
        </div>
    );
}
