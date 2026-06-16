import AboutSection from "@/components/about/AboutAboutPage/AboutAboutPage";
import { Facts } from "@/components/about/Facts/Facts";
import SkillsAboutPage from "@/components/about/SkillsAboutPage/SkillsAboutPage";

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
