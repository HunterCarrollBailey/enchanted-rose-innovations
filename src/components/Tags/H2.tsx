interface H2Props {
  id?: string;
  children: string | string[];
  addClasses?: string;
}

const H2: React.FC<H2Props> = ({id, children, addClasses}) => {
  return (
    <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">{children}</h2>
  )
}

export default H2;