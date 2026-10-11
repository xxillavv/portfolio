import { ContactsInfo } from "@/components/home/ContactsInfo/ContactsInfo";
import styles from "./ContactsContactsPage.module.scss";
import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";

const ContactsContactsPage = () => {
  return (
    <section className={styles.contacts}>
      <div className="container">
        <SectionTitle props={{ span: "/", text: "contacts", margin: 14 }} />
        <p className={styles.subHeader}>Get in touch</p>
        <div className={styles.wrapper}>
          <p className={`${styles.text} reveal`}>
            I’m actively looking for a full-time remote position as a Frontend
            or Fullstack Developer. I’m open to working with modern web
            technologies, building scalable and user-friendly applications, and
            collaborating in a team environment. If you have any opportunities
            or questions, feel free to reach out — I’d be happy to connect and
            discuss further.
          </p>
          <div className={styles.info}>
            <div className={`${styles.item} reveal`}>
              <p className={styles.title}>Support me here</p>
              <a
                href="https://send.monobank.ua/jar/4tjkdJpDa2"
                target="_blank"
                className={styles.subtitle}
              >
                monobank
              </a>
            </div>
            <ContactsInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsContactsPage;
