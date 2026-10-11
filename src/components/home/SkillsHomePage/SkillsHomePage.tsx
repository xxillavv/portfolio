import styles from "./SkillsHomePage.module.scss";
import Image from "next/image";
import skillsImage from "@/public/skills-background.png";
import { SkillsItem } from "@/components/about/SkillsAboutPage/SkillItem/SkillsItem";
import { skills } from "@/data/data";
import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";

const SkillsHomePage = () => {
  return (
    <section className={styles.skills}>
      <div className="container">
        <SectionTitle props={{ span: "#", text: "skills", margin: 20 }} />
        <div className={styles.wrapper}>
          <Image
            src={skillsImage}
            className={styles.image}
            alt="skills-section-background"
            width={349}
            height={282}
          />
          <div className={styles.skillsWrapper}>
            {skills.map((el) => {
              return <SkillsItem props={el} key={el.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsHomePage;
