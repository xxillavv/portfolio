import Image from "next/image";
import styles from "./ContactsInfo.module.scss";
import { socials } from "@/data/data";
import emailIcon from "@/public/mail.svg";
import telegramIcon from "@/public/tg.svg";
import linkedinIcon from "@/public/linkedin.svg";
import discordIcon from "@/public/discord.svg";

const contacts = [
  { icon: emailIcon, text: socials.email, href: `mailto:${socials.email}` },
  { icon: telegramIcon, text: "@xxillav", href: socials.telegram },
  { icon: linkedinIcon, text: "Vladyslav Paniv", href: socials.linkedin },
  { icon: discordIcon, text: "@xxillav" },
];

export const ContactsInfo = () => {
  return (
    <div className={`${styles.info} reveal`}>
      <p className={styles.infoTitle}>Message me here</p>
      <ul className={styles.list}>
        {contacts.map(({ icon, text, href }) => {
          const content = (
            <>
              <span className={styles.icon}>
                <Image src={icon} alt="" width={24} height={24} />
              </span>
              {text}
            </>
          );
          return (
            <li key={href ?? text}>
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
  );
};
