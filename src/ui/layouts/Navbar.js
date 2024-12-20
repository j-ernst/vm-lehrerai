import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    {
      text: "Quiz",
      href: "/quiz",
      current: pathname === "/quiz" ? true : false
    },
    {
      text: "Wiki",
      href: "/wiki",
      current: pathname === "/wiki" ? true : false
    },
    {
      text: "Anwendungsfälle",
      href: "/use-cases",
      current: pathname === "/use-cases" ? true : false
    }
  ]

  return (
    <div className="h-16 min-w-full bg-nav flex items-center justify-between">
      {/* Logo Link */}
      <Link className="flex items-center gap-2 px-4" href="/">
        <p className="text-xl font-bold text-white">KI-Kompass</p>
        <Image src="/compass.svg" width={30} height={30} alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-16 items-center">
        <Link
          href="/"
        >
          <img className="fill-white w-6" src="/home-2.png" />
        </Link>
        {
          links.map((item, index) => {
            return (
              <Link
                key={index}
                className={`whitespace-nowrap rounded-md p-2 px-3 text-white text-lg font-medium
                  ${item.current ? "underline underline-offset-8 decoration-2" : "hover:bg-hover-nav"}  
                `}
                href={item.href}
              >
                {item.text}
              </Link>
            )
          })
        }
      </div>

      {/* Invisible Logo for Layout */}
      <Image className="invisible" src="/logo.svg" width={150} height={150} alt="Placeholder Logo" />
    </div>
  );
}
