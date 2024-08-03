"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState<string>("");

  const clickLink = (link: string) => {
    setActiveLink(link);
  };
  return (
    <header className="w-full md:w-[85dvw] bg-slate-950/70 border border-cyan-500 shadow-md shadow-cyan-500 rounded-2xl flex flex-col p-5 mx-auto mt-[2%]">
      <ul className="flex flex-col md:flex-row gap-5 font-semibold w-full hover:*:text-cyan-400">
        <li>
          <Link
            href={"/"}
            className={
              activeLink === "/"
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : ""
            }
            onClick={() => clickLink("/")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className={
              activeLink === "/about"
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : ""
            }
            onClick={() => clickLink("/about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={"/acolyte/v4"}
            className={
              activeLink === "/acolyte/v4"
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : ""
            }
            onClick={() => clickLink("/acolyte/v4")}
          >
            Acolyte v4
          </Link>
        </li>
        <li>
          <Link
            href={"/acolyte/v5"}
            className={
              activeLink === "/acolyte/v5"
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : ""
            }
            onClick={() => clickLink("/acolyte/v5")}
          >
            Acolyte v5
          </Link>
        </li>
        <li><Link
            href={"/alchemist"}
            className={
              activeLink === "/alchemist"
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : ""
            }
            onClick={() => clickLink("/alchemist")}
          >
            Project Alchemist
          </Link></li>
        <li>Blog</li>
        <li className="md:ms-auto">Contact</li>
        <li>Login</li>
      </ul>
    </header>
  );
}
