import { H1, H2 } from "@/components/Typography/Headers/Headings";
import { P } from "@/components/Typography/Paragraphs/Paragraph";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col place-items-center mt-[17%]">
      <H1 className="animate-fade-down animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in-out animate-normal text-center">
        Enchanted Rose Innovations
      </H1>
      <H2 className="animate-fade-right animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in-out text-center">
        Creating Innovative Solutions Together
      </H2>
      <P adlClasses="mt-5 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[45%] bg-slate-900/70 rounded-3xl p-5 border border-cyan-400 shadow-md shadow-cyan-400 animate-fade-left animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in-out">
        <span className="font-semibold">
          <span className="text-cyan-400">E</span>nchanted{" "}
          <span className="text-cyan-400">R</span>ose{" "}
          <span className="text-cyan-400">I</span>nnovations
        </span>{" "}
        was founded in 2017 with a simple mission: to help businesses thrive in
        the digital age. Our journey began when a close friend asked for a
        custom website and a platform to deliver recorded videos to their users.
        Since then, <span className="text-cyan-400 font-semibold">ERI</span> has grown into a trusted partner for clients both
        locally and nationwide, offering a wide range of digital solutions to
        mee your unique needs.
        <button className="bg-slate-800 border border-cyan-400 shadow-md shadow-cyan-400 px-3 py-1 rounded-full float-end mt-[5%] hover:-translate-y-1">
          <Link href={"/about"}>About Us</Link>
        </button>
      </P>
    </section>
  );
}
