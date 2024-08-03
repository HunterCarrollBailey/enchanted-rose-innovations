import Card from "./Tags/Card";
export default function CoreValues() {
  return (
    <div className="flex flex-row flex-wrap place-content-center gap-5 p-5">
      <Card addClasses="basis-4/4 md:basis-3/4 lg:basis-1/4">
        <h3 className="text-xl font-semibold text-center mb-[1%]">Education</h3>
        <p className="text-lg lg:leading-relaxed">
          The technological landscape is ever-changing, and so are we. We are
          commited to continuously learning and expanding our range of technical
          abilities to further development and provide cutting edge solutions to
          our clients.
        </p>
      </Card>
      <Card addClasses="basis-4/4 md:basis-3/4 lg:basis-1/4">
        <h3 className="text-xl font-semibold text-center mb-[1%]">
          Responsibility
        </h3>
        <p className="text-lg lg:leading-relaxed">
          Trust and Integrity are the foundations of our business, as such we
          strive to operate at the highest levels. Ensuring transparency,
          honesty, and ethical practices in all of our interactions.
        </p>
      </Card>
      <Card addClasses="basis-4/4 md:basis-3/4 lg:basis-1/4">
        <h3 className="text-xl font-semibold text-center mb-[1%]">
          Innovation
        </h3>
        <p className="text-lg lg:leading-relaxed">
          We believe in pushing the boundaries of what is possible. Our
          commitment to innovation is what drives us to continually improve our
          solutions and stay ahead of industry trends.
        </p>
      </Card>
    </div>
  );
}
