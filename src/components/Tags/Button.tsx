import { ReactNode } from "react";

interface ButtonProps {
  id?: string;
  addClasses?: string;
  children: ReactNode;
}
const Button: React.FC<ButtonProps> = ({ id, addClasses, children }) => (
  <button
    id={id}
    className={`bg-cyan-100/10 px-3 py-1 rounded-full text-cyan-200 shadow shadow-cyan-200 hover:shadow-lg hover:shadow-cyan-500 hover:-translate-y-1 mt-auto float-end ${addClasses}`}
  >
    {children}
  </button>
);

export default Button;
