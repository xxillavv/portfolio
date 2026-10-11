import styles from "./AboutAboutPage.module.scss";
import { CodeWindow } from "@/components/common/CodeWindow/CodeWindow";
import { aboutCode } from "@/data/data";
import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";

const AboutAboutPage = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <SectionTitle props={{span: '/', text: 'about-me', margin: 14}}/>
        <p className={styles.subHeader}>Who am i?</p>
        <div className={styles.wrapper}>
          <p className={styles.text}>
            Hello, i’m Vladyslav!
            <br />
            <br />
            I’m a self-taught front-end and back-end developer based in Lviv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
            <br />
            <br />
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <CodeWindow fileName="~/about" lines={aboutCode} className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default AboutAboutPage;
