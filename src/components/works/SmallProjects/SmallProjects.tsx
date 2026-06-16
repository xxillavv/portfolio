import { smallProjects } from "@/data/data";
import styles from "./SmallProjects.module.scss";
import Project from "@/components/home/Projects/Project/Project";
import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";

const SmallProjects = () => {
  return (
    <section className={styles.small}>
      <div className="container">
        <SectionTitle
          props={{ span: "#", text: "small-projects", margin: 48 }}
        />
        <div className={styles.wrapper}>
          {smallProjects.map((el) => {
            return <Project props={el} key={el.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SmallProjects;
