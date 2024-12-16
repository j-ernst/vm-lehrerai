import Link from "next/link"

export default function Custom404 (){
    return (
        <div className="w-screen h-[calc(100vh_-_1rem)] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <h1>Diese Seite existiert nicht...</h1>
                <Link className="font-bold bg-slate-200 rounded-lg p-2 lg:hover:bg-slate-300" href="/">Zurück zum Start</Link>
            </div>
        </div>
    )
}