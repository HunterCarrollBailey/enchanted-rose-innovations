import Card from "./Tags/Card";
import H3 from "./Tags/H3";
export default function Services() {
  return (
    <div className="flex flex-row flex-wrap place-content-center gap-5 p-5">
      <Card addClasses="basis-4/4 md:basis-3/4 lg:basis-2/4">
        <H3>Web Development</H3>
        <p className="text-lg lg:leading-relaxed">
          From initial concept designs to launch, we design and develop websites
          that are visually stunning, user-friendly, and optimized for
          performance.
        </p>
      </Card>
      <Card addClasses="basis-4/4 md:basis-3/4 lg:basis-1/3">
        <H3>Software Solutions</H3>
        <p className="text-lg lg:leading-relaxed">
          We provide tailored software solutions to help streamline your
          operations and improve efficiency.
        </p>
      </Card>
      <Card addClasses="basis-4/4 md:basis-3/4 lg:basis-1/3">
        <H3>E-Learning Platforms</H3>
        <p className="text-lg lg:leading-relaxed">
          Deliver your content seamlessly with our e-Learning platform
          Acolyte, designed for students and instructors alike to enhance the
          learning experience end to end.
        </p>
      </Card>
      <Card addClasses="basis-4/4 md:basis-3/4 lg:basis-2/4">
        <H3>Application Development</H3>
        <p className="text-lg lg:leading-relaxed">
          Whether you need a simple CLI tool or a custom mobile app, we are
          happy to use our technological capabilities to develop custom
          applications for all platforms.
        </p>
      </Card>
    </div>
  );
}
