import Image from "next/image";
import Link from "next/link";

export default function CaseTemplate ({ imgSrc, title, detailDescription, children}){
    console.log(imgSrc)
    return (
        <div className="w-screen flex justify-center">
            <div className="flex-col m-20 w-[90vw] lg:w-[70vw] max-w-[1200px]">
                <Link className="flex gap-2 my-2" href={'/use-cases'}>
                    <svg className="w-4 -rotate-90" data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/></svg>
                    <p>Zurück</p>
                </Link>
                <Image className="w-full rounded-lg" src={imgSrc} width={500} height={300} alt={'Photo'}/>
                <p className="text-2xl mt-8 font-bold">{title}</p>
                <p className="leading-8 text-md mt-4 text-gray-700 mb-4">{detailDescription}</p>
                {children}
            </div>
        </div>
    )
}