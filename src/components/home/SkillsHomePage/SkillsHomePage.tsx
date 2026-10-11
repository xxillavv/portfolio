import styles from "./SkillsHomePage.module.scss";
import { SkillsItem } from "@/components/about/SkillsAboutPage/SkillItem/SkillsItem";
import { skills } from "@/data/data";
import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";
import { SkillsOrbit } from "./SkillsOrbit/SkillsOrbit";

const SkillsHomePage = () => {
  return (
    <section className={styles.skills}>
      <div className="container">
        <SectionTitle props={{ span: "#", text: "skills", margin: 20 }} />
        <div className={styles.wrapper}>
          <div className={styles.orbit}>
            <SkillsOrbit />
          </div>
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
