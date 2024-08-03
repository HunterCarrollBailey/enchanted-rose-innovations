import Button from "./Tags/Button";
import Paragraph from "./Tags/Paragraph";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="*:my-[2.5%] p-5 w-full md:w-[85dvw]">
      <h1
        id="heroHeading"
        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center"
      >
        Enchanted Rose Innovations
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">
        Creating Innovative Solutions Together
      </h2>
      <Paragraph>
        Enchanted Rose Innovations (ERI) was founded in 2017 with a simple
        mission: to help businesses thrive in the digital age. Our journey began
        when a close friend asked for a custom website and a platform to deliver
        recorded videos to their users. Since then, ERI has grown into a trusted
        partner for clients both locally and nationwide, offering a wide range
        of digital solutions to mee your unique needs.
      </Paragraph>
      <Paragraph>
        At ERI, we believe technology has the power to transform a business. Our
        dedicated professionals work tirelessly to create unique innovative
        solutions to help drive success. Whether you{`'`}re a small business
        looking to establish your online presence or a large corporation seeking
        advanced digital tools, we have the expertise to help you achieve your
        goals.
      </Paragraph>
      <div className="w-full xl:w-[85%] mx-auto">
        <Button>
          <Link href={"/about"}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
}
