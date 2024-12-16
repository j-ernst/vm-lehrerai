import Link from "next/link"

export default function Footer (){
  return (
      <div className="border border-slate-100 border-t-2 bg-gray-50 text-center h-14 lg:text-left flex flex-row justify-center items-center gap-2">
          <Link className="text-black font-sans text-sm border-r-[1px] pr-2 border-slate-400" href="/">Impressum</Link>
          <Link className="text-black font-sans text-sm" href="/"> Datenschutz</Link>
      </div>
  )
}