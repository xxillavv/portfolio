import styles from "./Footer.module.scss";
import discordIcon from "@/public/discord.svg";
import figmaIcon from "@/public/figma.svg";
import gitIcon from "@/public/git.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div>
            <div className={styles.info}>
              <h3 className={styles.name}>Elias</h3>
              <p className={styles.email}>vladpaniv@gmail.com</p>
            </div>
            <p className={styles.subtitle}>Frontend and Backend developer</p>
          </div>
          <div>
            <p className={styles.mediaTitle}>Media</p>
            <div className={styles.mediaWrapper}>
              <a target="_blank" href="https://github.com/xxillavv">
                <Image src={gitIcon} alt="github-icon" width={32} height={32} />
              </a>
              <a target="_blank" href="https://www.figma.com/files/team/1524088719133673333/user/1490289064803425588?fuid=1490289064803425588">
                <Image
                  src={figmaIcon}
                  alt="figma-icon"
                  width={32}
                  height={32}
                />
              </a>
              <a>
                <Image
                  src={discordIcon}
                  alt="discord-icon"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
        <p className={styles.license}>© Copyright 2026. Made by xxillav</p>
      </div>
    </footer>
  );
};

export default Footer;
