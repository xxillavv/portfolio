import type { Metadata } from "next";
import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";
import { CompleteApps } from "@/components/works/CompleteApps/CompleteApps";
import SmallProjects from "@/components/works/SmallProjects/SmallProjects";

export const metadata: Metadata = { title: "Projects" };

const page = () => {
  return (
    <>
      <section style={{marginBottom: 70}}>
        <div className="container">
          <SectionTitle props={{ text: "projects", span: "/", margin: 14 }} />
          <p>List of my projects</p>
        </div>
      </section>
      <CompleteApps />
      <SmallProjects />
    </>
  );
};

export default page;
