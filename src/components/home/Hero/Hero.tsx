import styles from './hero.module.scss'
import { CodeWindow } from "@/components/common/CodeWindow/CodeWindow";
import { heroCode } from "@/data/data";
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Vladyslav is a <span className={styles.leftSpan}><span className={styles.nowrap}>front-end</span> and <span className={styles.nowrap}>back-end</span> developer</span>
            </h2>
            <p className={styles.leftSubtitle}>
              He crafts responsive websites where technologies meet creativity
            </p>
            <Link href="/contacts" className={styles.link}>
              Contact me!!
            </Link>
          </div>
          <div className={styles.right}>
            <CodeWindow fileName="vladyslav.ts" lines={heroCode} className={styles.image} />
            <p className={styles.rightSubtitle}>
              Currently working on <span className={styles.rightSpan}>NEXUS.gg</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
