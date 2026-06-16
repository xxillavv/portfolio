import styles from "./ContactsInfo.module.scss";

export const ContactsInfo = () => {
  return (
    <div className={styles.info}>
      <p className={styles.infoTitle}>Message me here</p>
      <a className={styles.link}>@xxillav</a>
      <a className={styles.link}>vladpaniv@gmail.com</a>
      <a target="_blank" href="https://t.me/xxillav" className={styles.link}>
        @xxillav
      </a>
    </div>
  );
};
