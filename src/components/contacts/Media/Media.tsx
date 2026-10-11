import Image from "next/image";
import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";
import styles from "./media.module.scss";
import { socials } from "@/data/data";
import githubIcon from "@/public/git.svg";
import linkedinIcon from "@/public/linkedin.svg";
import telegramIcon from "@/public/tg.svg";
import instagramIcon from "@/public/instagram.svg";
import emailIcon from "@/public/mail.svg";
import discordIcon from "@/public/discord.svg";

const media = [
  { icon: githubIcon, text: "xxillavv", href: socials.github },
  { icon: linkedinIcon, text: "Vladyslav Paniv", href: socials.linkedin },
  { icon: telegramIcon, text: "@xxillav", href: socials.telegram },
  { icon: instagramIcon, text: "@xxillav", href: socials.instagram },
  { icon: emailIcon, text: socials.email, href: `mailto:${socials.email}` },
  { icon: discordIcon, text: "@xxillav" },
];

const Media = () => {
  return (
    <section className={styles.media}>
      <div className="container">
        <SectionTitle props={{ span: "#", text: "all-media", margin: 32 }} />
        <ul className={styles.wrapper}>
          {media.map(({ icon, text, href }) => {
            const content = (
              <>
                <span className={styles.icon}>
                  <Image src={icon} alt="" width={24} height={24} />
                </span>
                {text}
              </>
            );
            return (
              <li key={href ?? text} className="reveal">
                {href ? (
                  <a
                    className={styles.link}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <span className={styles.link}>{content}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Media;
