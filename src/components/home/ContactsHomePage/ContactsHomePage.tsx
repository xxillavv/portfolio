import { ContactsInfo } from "@/components/home/ContactsInfo/ContactsInfo";
import styles from "./ContactsHomePage.module.scss";
import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";

const ContactsHomePage = () => {
  return (
    <section className={styles.contacts}>
      <div className="container">
        <SectionTitle props={{ span: "#", text: "contacts", margin: 45 }} />
        <div className={styles.wrapper}>
          <p className={styles.text}>
            I’m actively looking for a full-time remote position as a Frontend
            or Fullstack Developer. I’m open to working with modern web
            technologies, building scalable and user-friendly applications, and
            collaborating in a team environment. If you have any opportunities
            or questions, feel free to reach out — I’d be happy to connect and
            discuss further.
          </p>
          <ContactsInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactsHomePage;
