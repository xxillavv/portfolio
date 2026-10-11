import Image, { StaticImageData } from "next/image";
import styles from "./project.module.scss";

type TProps = {
  props: {
    id: number;
    src?: StaticImageData;
    title: string;
    stack: string;
    description: string;
    link: string;
    demo?: string;
  };
};


const Project = ({ props }: TProps) => {
  return (
    <div className={styles.project}>
      <div className={styles.wrapper}>
        {props.src && <Image src={props.src} alt={props.title} width={330} height={201} sizes="(max-width: 779px) 90vw, 400px" quality={90} className={styles.image}/>}
        <p className={styles.stack}>{props.stack}</p>
        <div className={styles.info}>
          <h4 className={styles.title}>{props.title}</h4>
          <p className={styles.description}>{props.description}</p>
          <div className={styles.links}>
            {props.demo && (
              <a className={styles.link} href={props.demo} target="_blank" rel="noreferrer">
                {"Live <~>"}
              </a>
            )}
            <a className={`${styles.link} ${props.demo ? styles.secondary : ""}`} href={props.link} target="_blank" rel="noreferrer">
              {"Github >="}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
