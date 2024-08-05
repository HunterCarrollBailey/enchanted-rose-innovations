import { BaseProps } from "@/components/BaseProps";
import React from "react";

interface Props extends BaseProps {
  level: 1 | 2 | 3;
}
const Heading: React.FC<Props> = ({ id, adlClasses, children, level }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag id={id} className={`${adlClasses}`}>{children}</Tag>;
};

export default Heading;
