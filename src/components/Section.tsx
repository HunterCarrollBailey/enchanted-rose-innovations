import { BaseProps } from "./BaseProps";
import React from "react";

interface Props extends BaseProps {}

export const Section: React.FC<Props> = ({ id, adlClasses, children }) => {
  return (
    <section
      id={id}
      className={`bg-slate-900/70 border border-cyan-300 shadow-md shadow-cyan-300 rounded-3xl p-5 ${adlClasses}`}
    >
      {children}
    </section>
  );
};
