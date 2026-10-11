import type { Metadata } from "next";
import AboutSection from "@/components/about/AboutAboutPage/AboutAboutPage";
import { Facts } from "@/components/about/Facts/Facts";
import SkillsAboutPage from "@/components/about/SkillsAboutPage/SkillsAboutPage";

export const metadata: Metadata = { title: "About me" };

const page = () => {
  return (
    <>
      <AboutSection />
      <SkillsAboutPage />
      <Facts />
    </>
  );
};

export default page;
