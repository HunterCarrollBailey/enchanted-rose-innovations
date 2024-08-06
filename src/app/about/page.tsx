"use client";
import React, { useState } from "react";
import { H1, H2, H3 } from "@/components/Typography/Headers/Headings";

const coreValues = [
  {title: "Education", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias quod commodi adipisci sit architecto, necessitatibus voluptatibus natus minima? Animi cupiditate ex officiis velit consequatur minima, deserunt libero omnis sint cum. Voluptates laborum, dolore ipsum magni quis inventore quasi, sunt nostrum eveniet obcaecati consequuntur qui minima."},
  {title: "Reliability", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias quod commodi adipisci sit architecto, necessitatibus voluptatibus natus minima? Animi cupiditate ex officiis velit consequatur minima, deserunt libero omnis sint cum. Voluptates laborum, dolore ipsum magni quis inventore quasi, sunt nostrum eveniet obcaecati consequuntur qui minima."},
  {title: "Innovation", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias quod commodi adipisci sit architecto, necessitatibus voluptatibus natus minima? Animi cupiditate ex officiis velit consequatur minima, deserunt libero omnis sint cum. Voluptates laborum, dolore ipsum magni quis inventore quasi, sunt nostrum eveniet obcaecati consequuntur qui minima."}
]

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const expandSection = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="p-5 flex flex-col md:flex-row justify-center content-center items-center h-72">
      <div className="h-full flex flex-col justify-around gap-5 md:gap-2 w-[75dvw] md:w-[20dvw] text-justify">
        {coreValues.map((coreValue, index) => (
          <h3
          key={index}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-5 py-3 bg-slate-900/70 border border-cyan-400 shadow-md shadow-cyan-400 rounded-2xl cursor-pointer font-bold hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400"
          onClick={() => expandSection(index)}
        >
          <span className="text-cyan-400">{coreValue.title.charAt(0)}</span>{coreValue.title.slice(1)}
        </h3>
        ))}
        
      </div>
      <div className="relative w-[80dvw] h-full mt-5 md:mt-0">
        {coreValues.map((coreValue, index) => (
          <div
          key={index}
          className={`h-fit md:h-full absolute bg-slate-900/70 border border-cyan-400 shadow-md shadow-cyan-400 p-5 mx-5 rounded-2xl transition-all ease-in-out duration-200 transform ${
            activeIndex === index ? "translate-x-0" : "invisible translate-x-full"
          }`}
        >
          {coreValue.title}
          <br />
          {coreValue.content}
        </div>
        ))}
      </div>
    </section>
  );
}
