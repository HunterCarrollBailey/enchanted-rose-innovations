import CoreValues from "@/components/CoreValues";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SectionCard from "@/components/Tags/SectionCard";

export default function Home() {
  return (
    <SectionCard id="hero" addClasses="w-full md:w-[85dvw] h-full">
      <Hero />
    </SectionCard>
  );
}
