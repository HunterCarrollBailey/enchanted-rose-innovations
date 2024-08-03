import { ReactNode } from "react";

interface CardProps {
  id?: string;
  addClasses?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ id, addClasses, children }) => {
  return (
    <div
      id={id}
      className={`bg-slate-950/10 border border-cyan-500 shadow-md shadow-cyan-500 rounded-2xl p-5 ${addClasses}`}
    >
      {children}
    </div>
  );
};

export default Card;
