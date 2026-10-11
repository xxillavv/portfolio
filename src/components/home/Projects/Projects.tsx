import { projects } from "@/data/data";
import styles from "./projects.module.scss";
import Link from "next/link";
import Project from "./Project/Project";
import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <SectionTitle props={{ span: "#", text: "projects", margin: 0 }} />
            <Link href="/works" className={styles.link}>
              {"View all ~~>"}
            </Link>
          </div>
          <div className={styles.bottom}>
            {projects.slice(0, 3).map((el) => {
              return <Project props={el} key={el.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
