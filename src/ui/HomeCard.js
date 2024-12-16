import LinkButton from "./LinkButton"

export default function HomeCard ({title, text, description, link}){
    return (
        <div className="flex min-w-72 xl:w-1/2 w-full flex-col justify-between border-2 rounded-lg border-gray-700 h-44">
            <p className="text-xl font-semibold text-black p-2">{title}</p>
            <p className="px-2 pr-4 text-gray-800 grow">{description}</p>
            <LinkButton text={text} link={link} />
        </div>        
    )
}