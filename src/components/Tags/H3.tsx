interface H3Props {
    id?: string;
    children: string | string[];
    addClasses?: string;
}

const H3: React.FC<H3Props> = ({id, children, addClasses}) => {
    return(
        <h3 className="text-xl font-semibold text-center mb-[1%]">{children}</h3>
    )
}

export default H3;