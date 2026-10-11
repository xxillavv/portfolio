import Image, { StaticImageData } from "next/image";
import styles from "./project.module.scss";

type TProps = {
  props: {
    id: number;
    src?: StaticImageData;
    title: string;
    stack: string[];
    description: string;
    link: string;
    demo?: string;
  };
};


const Project = ({ props }: TProps) => {
  return (
    <article className={`${styles.project} reveal`}>
      {props.src && (
        <div className={styles.imageWrapper}>
          <Image
            src={props.src}
            alt={props.title}
            width={330}
            height={201}
            sizes="(max-width: 779px) 90vw, 420px"
            quality={90}
            className={styles.image}
          />
        </div>
      )}
      <ul className={styles.stack}>
        {props.stack.map((tech) => (
          <li className={styles.tag} key={tech}>
            {tech}
          </li>
        ))}
      </ul>
      <div className={styles.info}>
        <h4 className={styles.title}>{props.title}</h4>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.links}>
          {props.demo && (
            <a className="btn" href={props.demo} target="_blank" rel="noreferrer">
              {"Live <~>"}
            </a>
          )}
          <a
            className={props.demo ? "btn btn-secondary" : "btn"}
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            {"Github >="}
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
