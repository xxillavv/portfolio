import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";
import styles from "./SkillsAboutPage.module.scss";
import { SkillsItem } from "./SkillItem/SkillsItem";
import { skills } from "@/data/data";

const SkillsAboutPage = () => {
  return (
    <section className={styles.skills}>
      <div className="container">
        <SectionTitle props={{ span: "#", text: "skills", margin: 48 }} />
        <div className={styles.wrapper}>
          {skills.map((el) => {
            return <SkillsItem props={el} key={el.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsAboutPage;
