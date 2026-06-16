import { projects } from "@/data/data";
import styles from "./CompleteApps.module.scss";
import Project from "@/components/home/Projects/Project/Project";
import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";

export const CompleteApps = () => {
  return (
    <section className={styles.complete}>
      <div className="container">
        <SectionTitle
          props={{ span: "#", text: "complete-apps", margin: 48 }}
        />
        <div className={styles.wrapper}>
          {projects.map((el) => {
            return <Project props={el} key={el.id} />;
          })}
        </div>
      </div>
    </section>
  );
};
