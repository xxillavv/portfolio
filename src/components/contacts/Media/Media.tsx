import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";
import styles from "./media.module.scss";

const Media = () => {
  return (
    <section className={styles.media}>
      <div className="container">
        <SectionTitle props={{ span: "#", text: "all-media", margin: 22 }} />
        <div className={styles.wrapper}>
          <a className={styles.link} href="https://www.instagram.com/xxillav/">
            @xxillav
          </a>
          <p className={styles.link}>vladpaniv@gmail.com</p>
          <a className={styles.link} href="https://t.me/xxillav">
            @xxillav
          </a>
          <p className={styles.link}>@xxillav</p>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/vladyslav-paniv-041674391/"
          >
            Vladyslav Paniv
          </a>
        </div>
      </div>
    </section>
  );
};

export default Media;
