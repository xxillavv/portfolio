import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";
import styles from "./Facts.module.scss";
import Image from "next/image";
import factsBackgroundImage from "@/public/facts-image.png";
import { facts } from "@/data/data";

export const Facts = () => {
  return (
    <section className={styles.facts}>
      <div className="container">
        <SectionTitle props={{ span: "#", text: "my-fun-facts", margin: 26 }} />
        <div className={styles.wrapper}>
          <div className={styles.factsWrapper}>
            {facts.map((el, index) => {
              return (
                <p className={styles.text} key={index}>
                  {el}
                </p>
              );
            })}
          </div>
          <Image
            src={factsBackgroundImage}
            alt="facts-section-background-image"
            width={178}
            height={169}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};
