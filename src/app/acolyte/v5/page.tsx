import Paragraph from "@/components/Tags/Paragraph";
import SectionCard from "@/components/Tags/SectionCard";
import H2 from "@/components/Tags/H2";
export default function v5() {
  return (
    <>
      <SectionCard id="aboutAcolyteV5" addClasses="w-full md:w-[85dvw] gap-5">
        <H2>Acolyte v5 : R.E.A.L.M.S.</H2>
        <Paragraph>
          Acolyte v5 better known as Acolyte R.E.A.L.M.S. is a{" "}
          <span className="text-cyan-500 font-semibold">
            Remote Enagement And Learning Management Systems
          </span>{" "}
          built from the ground up. Instead of focusing on making the instructor
          experience the priority Acolyte breaks the mold and actually listened
          to the largest user group. <strong>The Students</strong>, in every
          learning platform we have used in the past, in personal and
          professional life we experienced a number of issues across all of
          them. So, we made Acolyte to fix those issues while still providing a
          unique, professional, and seamless experience for instructors and
          students alike.
          <h3 className="text-lg font-semibold text-start my-[1%]">
            Some Issues We Found
          </h3>
          <ul className="list-disc ml-5 mb-[1%]">
            <li>
              Inability to Log In - especially during finals / project
              submission days.
            </li>
            <li>Issues Turning In Assignments (Especially on the due date).</li>
            <li>Quizzes marking questions wrong because of a whitespace.</li>
            <li>
              Exams ending early because of a UI bug, leading students having to
              re-take them.
            </li>
            <li>
              Old outdated UI designs that are confusing and hard to navigate.
            </li>
          </ul>
          While most of these seem very student centric (that is the point after
          all) lets remind ourselves that whenever a student has an issue they
          end up emailing the instructor for a variety of reasons. Instructors
          then need to dedicate time away from teaching and creating content, to
          troubleshoot a system they have no control over. Often leading to
          support tickets being created, or even worse students having to accept
          the instructor will not make the effort and the student should have{" "}
          {`"`}planned{`"`} better. For as many issues as we fix for students,
          we also fix them for instructors.
        </Paragraph>
      </SectionCard>
      <SectionCard id="whatDoWeMean" addClasses="w-full md:w-[85dvw] gap-5">
        <H2>Product Roadmap</H2>
        <Paragraph>
          Okay let{`'`}s talk about whats coming and where we plan to go with
          Acolyte. We love our platform and want to make it a feature rich as
          possible, however we need to be realistic. We{`'`}ve broken down all
          the features we currently have planned into Needs vs Wants.
        </Paragraph>
        <div className="flex flex-col md:flex-row flex-wrap gap-5 w-full justify-center md:justify-evenly">
          <div className="bg-slate-950/70 border border-cyan-500 shadow-md shadow-cyan-500 rounded-2xl basis-4/4 md:basis-5/12 p-5">
            <h3 className="text-xl font-semibold my-[1%] text-center">Needs</h3>
            <ul className="ml-5 list-disc">
              <li>SCORM 1.4 and xAPI Support</li>
              <li>Role Based Authentication (v2)</li>
              <li>Additional Content Type Support: PDF, PPTX, MP4, MP3, GSlides</li>
              <li>Custom Quiz/Exam Creation</li>
              <li>Course Scheduling</li>
              <li>Learning Paths</li>
              <li>Transcripts</li>
              <li>Certificates / Certifications</li>
              <li>Social Media Integrations</li>
            </ul>
          </div>
          <div className="bg-slate-950/70 border border-cyan-500 shadow-md shadow-cyan-500 rounded-2xl basis-12/12 md:basis-5/12 p-5">
            <h3 className="text-xl font-semibold my-[1%] text-center">Wants</h3>
            <ul className="ml-5 list-disc">
              <li>Analytics & Reporting</li>
              <li>Zoom & Google Meet Integrations</li>
              <li>Tree of Knowledge</li>
              <li>AI Content Generation Detection</li>
              <li>Project Alchemist</li>
              <li>InApp Payment Processing</li>
              <li>Full Instance Style Customization</li>
            </ul>
          </div>
        </div>
      </SectionCard>
    </>
  );
}
