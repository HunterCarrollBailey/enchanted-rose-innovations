import React from "react";
import Heading from "./HeadingBase";

export const H1: React.FC<{id?: string, className?: string | string[], children: React.ReactNode }> = ({ id, children, className }) => (
  <Heading id={id} level={1} adlClasses={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ${className}`}>
    {children}
  </Heading>
);
export const H2: React.FC<{ id?: string, className?: string | string[], children: React.ReactNode }> = ({ id, children, className }) => (
  <Heading id={id} level={2} adlClasses={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold ${className}`}>
    {children}
  </Heading>
);
export const H3: React.FC<{ id?: string, className?: string | string[], children: React.ReactNode }> = ({ id, children, className }) => (
  <Heading id={id} level={3} adlClasses={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${className}`}>
    {children}
  </Heading>
);