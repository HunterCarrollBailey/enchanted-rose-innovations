import { BaseProps } from "@/components/BaseProps";
import React from "react";

interface Props extends BaseProps {};

export const P: React.FC<Props> = ({ id, adlClasses, children }) => {
  return (
    <p id={id} className={`text-md md:text-lg lg:text-xl ${adlClasses}`}>
      {children}
    </p>
  );
};
