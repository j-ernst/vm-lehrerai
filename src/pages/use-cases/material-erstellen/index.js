import CaseTemplate from "../CaseTemplate";
import { useCasesPre } from "@/pages/api/case-data";

export default function MaterialErstellen (){
    const { title, detailDescription, imgSrc} = useCasesPre[0]

    return (
        <div>
            <CaseTemplate 
                imgSrc={imgSrc} 
                title={title} 
                detailDescription={detailDescription} 
            />
        </div>
    )
}