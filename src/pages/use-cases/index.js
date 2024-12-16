import { useCasesPre, useCasesLive, useCasesPost } from "@/pages/api/case-data"
import CardRow from "./_CardRow"

export default function UseCases (){
    return (
        <div className="flex flex-col items-center w-screen mb-20">
            <div className="mt-20 w-[60vw] max-w-[1200px]">
                <p className="text-3xl text-black text-center">Anwendungsfälle</p>
                <div className="flex flex-col grow gap-4">
                    <CardRow cases={useCasesPre} title={"Unterrichtsvorbereitung"} />
                    <CardRow cases={useCasesLive} title={"Unterrichtsdurchführung"} />
                    <CardRow cases={useCasesPost} title={"Unterrichtsnachbereitung"} />
                </div>
            </div>            
        </div>
    )
}