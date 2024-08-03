import { ReactNode } from 'react';

interface ParagraphProps {
    id?: string;
    children: ReactNode;
    addClasses?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
    id,
    children,
    addClasses,
}) => {
    return (
        <p id={id} className={`text-justify w-full xl:w-[65%] text-xl mx-auto lg:leading-relaxed ${addClasses}`}>
            {children}
        </p>
    )
};

export default Paragraph;