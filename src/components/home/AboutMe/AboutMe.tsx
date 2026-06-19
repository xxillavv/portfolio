import Link from "next/link";
import styles from "./aboutme.module.scss";
import Image from "next/image";
import aboutImage from "@/public/about-image.png";

const AboutMe = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <h3 className={styles.title}>
          <span className={styles.span}>#</span>about-me
        </h3>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p className={styles.text}>
              Hello, i’m Vladyslav!
              <br />
              <br />
              I’m a self-taught front-end and back-end developer based in Lviv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <Link className={styles.link} href="/about">
              {"Read More ->"}
            </Link>
          </div>
          <Image
            src={aboutImage}
            alt="about-me-image"
            width={343}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
