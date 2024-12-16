import Link from "next/link";

export default function LinkButton({type, text, link}) {
    return (
        <div>
            <Link href={link}>
                <p className="bg-black px-4 py-2 text-center items-center hover:bg-zinc-700 transition-transform duration-100 transform active:scale-95 text-white p-2 rounded-md">{text}</p>
            </Link>
        </div>
    );
}