'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Header() {
  const pathName = usePathname();
  return (
    <header className="sticky z-10 top-5">
      <nav>
        <ul className="list-none flex flex-row border bg-slate-900/95 border-cyan-300 shadow-md shadow-cyan-300 gap-5 w-fit px-5 py-2 rounded-full">
          <li>
            <Link href={"/"} className={`[&.active]:border-b-2 [&.active]:border-cyan-300 [&.active]:text-cyan-300 ${pathName === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className={`[&.active]:border-b-2 [&.active]:border-cyan-300 [&.active]:text-cyan-300 ${pathName === '/about' ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li>
            <Link href={"/acolyte"} className={`[&.active]:border-b-2 [&.active]:border-cyan-300 [&.active]:text-cyan-300 ${pathName === '/acolyte' ? 'active' : ''}`}>
              Acolyte
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
