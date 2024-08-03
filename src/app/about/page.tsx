import SectionCard from "@/components/Tags/SectionCard";
import CoreValues from "@/components/CoreValues";
import Services from "@/components/Services";
export default function About() {
  return (
    <>
      <SectionCard id="coreValues" addClasses="w-full md:w-[85dvw] gap-5">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">
          Our Core Values
        </h2>
        <CoreValues />
      </SectionCard>

      <SectionCard id="services" addClasses="w-full md:w-[85dvw] gap-5">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">
          Our Services
        </h2>
        <Services />
      </SectionCard>
    </>
  );
}
