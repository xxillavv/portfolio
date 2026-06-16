import AboutMe from "@/components/home/AboutMe/AboutMe";
import Contacts from "@/components/home/ContactsHomePage/ContactsHomePage";
import Hero from "@/components/home/Hero/Hero";
import Projects from "@/components/home/Projects/Projects";
import Quote from "@/components/home/Quote/Quote";
import Skills from "@/components/home/SkillsHomePage/SkillsHomePage";

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
    </>
  );
}
