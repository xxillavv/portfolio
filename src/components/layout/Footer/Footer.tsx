import styles from "./Footer.module.scss";
import gitIcon from "@/public/git.svg";
import linkedinIcon from "@/public/linkedin.svg";
import telegramIcon from "@/public/tg.svg";
import Image from "next/image";
import { socials } from "@/data/data";

const icons = {
  github: gitIcon,
  linkedin: linkedinIcon,
  telegram: telegramIcon,
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div>
            <div className={styles.info}>
              <h3 className={styles.name}>Vladyslav</h3>
              <a className={styles.email} href={`mailto:${socials.email}`}>
                {socials.email}
              </a>
            </div>
            <p className={styles.subtitle}>Frontend and Backend developer</p>
          </div>
          <div>
            <p className={styles.mediaTitle}>Media</p>
            <div className={styles.mediaWrapper}>
              {(Object.keys(icons) as (keyof typeof icons)[]).map((name) => (
                <a
                  key={name}
                  className={styles.mediaLink}
                  href={socials[name]}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                >
                  <Image src={icons[name]} alt="" width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className={styles.license}>© Copyright 2026. Made by xxillav</p>
      </div>
    </footer>
  );
};

export default Footer;
