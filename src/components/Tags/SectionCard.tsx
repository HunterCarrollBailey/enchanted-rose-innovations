import { ReactNode } from "react";
interface SectionCardProps {
  id?: string;
  addClasses?: string;
  children: ReactNode;
}
const SectionCard: React.FC<SectionCardProps> = ({
  id,
  addClasses,
  children,
}) => {
  return (
    <section
      id={id}
      className={`bg-slate-950/70 border border-cyan-500 shadow-md shadow-cyan-500 rounded-2xl flex flex-col p-5 mx-auto mt-[2%]  ${addClasses}`}
    >
      {children}
    </section>
  );
};

export default SectionCard;
