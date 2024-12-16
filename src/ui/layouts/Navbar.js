import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="h-14 min-w-full bg-nav flex items-center justify-between">
      {/* Logo Link */}
      <Link className="flex items-center gap-2 px-4" href="/">
        <p className="text-xl font-bold text-white">KI-Kompass</p>
        <Image src="/compass.svg" width={30} height={30} alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-8">
        <Link
          href="/"
        >
          <img className="fill-white w-6" src="/home-2.png" />
        </Link>
        <Link
          className={`text-white text-md ${
            pathname === "/wiki" ? "font-bold border-b-2 border-white" : ""
          }`}
          href="/wiki"
        >
          Wiki
        </Link>
        <Link
          className={`text-white text-md ${
            pathname === "/quiz" ? "font-bold border-b-2 border-white" : ""
          }`}
          href="/quiz"
        >
          Quiz
        </Link>
        <Link
          className={`text-white text-md ${
            pathname.includes("/use-cases") ? "font-bold border-b-2 border-white" : ""
          }`}
          href="/use-cases"
        >
          Anwendungsfälle
        </Link>
      </div>

      {/* Invisible Logo for Layout */}
      <Image className="invisible" src="/logo.svg" width={150} height={150} alt="Placeholder Logo" />
    </div>
  );
}
