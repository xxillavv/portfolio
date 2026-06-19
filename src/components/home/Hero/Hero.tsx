import styles from './hero.module.scss'
import Image from "next/image";
import heroImage from "@/public/hero-image.png";
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Vladyslav is a <span className={styles.leftSpan}>front-end and back-end developer</span>
            </h2>
            <p className={styles.leftSubtitle}>
              He crafts responsive websites where technologies meet creativity
            </p>
            <Link href="/contacts" className={styles.link}>
              Contact me!!
            </Link>
          </div>
          <div className={styles.right}>
            <Image
              src={heroImage}
              width={457}
              height={386}
              alt="hero-section-image"
              className={styles.image}
            />
            <p className={styles.rightSubtitle}>
              Currently working on <span className={styles.rightSpan}>Portfolio</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
