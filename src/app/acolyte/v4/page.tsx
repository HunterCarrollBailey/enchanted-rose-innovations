import Paragraph from "@/components/Tags/Paragraph";
import SectionCard from "@/components/Tags/SectionCard";
import Link from "next/link";
import Button from "@/components/Tags/Button";
export default function v4() {
  return (
    <>
      <SectionCard id="aboutAcolyteV4" addClasses="w-full md:w-[85dvw] gap-5">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">
          Acolyte v4 : A New Kind of CMS
        </h2>
        <Paragraph>
          This version of Acolyte was the beta testing ground and by and large
          the most complex application we had developed at the time. This is the
          project that started it all, from a basic request of a new front end
          and a platform to deliver content we expanded to include so many new
          features. From In-App Payment processing via the Stripe API to block
          storage on the hosting provider, to role-based authentication.
        </Paragraph>
        <Paragraph>
          While version 5 is still in active development it has come a long way
          and is fundamentally different in almost every aspect. After much
          consideration we have decided to make version 4 Open Source. Please
          keep in mind that version 4 is not supported or maintained and is
          provided as is without any warranty and limited liability as defined
          in the licensing agreement.
        </Paragraph>
        <Paragraph>
          With the open source release of version 4 there are a couple of key
          changes to the application, which you can see below:
          <ul className="list-disc ms-10 my-[1%]">
            <li>Removal of the In-App Payment Processing.</li>
            <li>Dockerization of the Application.</li>
            <li>Removal of custom front-end route generation.</li>
          </ul>
          However, this application can still serve as a powerful CMS focusing
          on providing video content, with notes, quizzes, and exams to users.
        </Paragraph>
        <Paragraph>
          If you absolutely want to make a change to version 4 and have it be
          supported by the original developers please reach out to us and we can
          negotiate a contract and pricing model for that. As much as we love
          the application and where it has taken us, we are very much focused on
          version 5. If you have a suggestion of a feature you would like to see
          in version 5 please do let us know and we will evaluate it. It may
          already be in the roadmap which you can see on the{" "}
          <Link href={"/acolyte/v5"} className="text-cyan-500 font-semibold">Acolyte v5</Link> page.
        </Paragraph>
        <div className="flex flex-row gap-5 mx-auto justify-around">
          <Button>
            <Link href={'#'}>Get Version 4</Link>
          </Button>
          <Button>
            <Link href={'#'}>View Demo</Link>
          </Button>
          <Button>
            <Link href={'#'}>Documentation</Link>
          </Button>
        </div>
      </SectionCard>
    </>
  );
}
