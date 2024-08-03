import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full md:w-[85dvw] bg-slate-950/70 border border-cyan-500 shadow-md shadow-cyan-500 rounded-2xl flex flex-col p-5 mx-auto mt-[2%]">
      <ul className="flex flex-row gap-5 font-semibold w-full">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li><Link href={"/acolyte/v4"}>Acolyte v4</Link></li>
        <li><Link href={"/acolyte/v5"}>Acolyte v5</Link></li>
        <li>Project Alchemist</li>
        <li>Blog</li>
        <span className="ms-auto flex flex-row gap-5">
          <li>Contact</li>
          <li>Login</li>
        </span>
      </ul>
    </header>
  );
}
