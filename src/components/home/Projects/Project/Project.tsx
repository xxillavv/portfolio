import Image, { StaticImageData } from "next/image";
import styles from "./project.module.scss";
import { title } from "process";

type TProps = {
  props: {
    id: number;
    src?: StaticImageData;
    title: string;
    stack: string;
    description: string;
    link: string;
  };
};

const Project = ({ props }: TProps) => {
  return (
    <div className={styles.project}>
      <div>
        {props.src && <Image src={props.src} alt={title} width={330} height={201}/>}
        <p className={styles.stack}>{props.stack}</p>
        <div className={styles.info}>
          <h4 className={styles.title}>{props.title}</h4>
          <p className={styles.description}>{props.description}</p>
          <a className={styles.link} href={props.link} target="_blank">
            {"Link <~>"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
