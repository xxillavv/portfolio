import { SectionTitle } from "@/components/home/SectionTitle/SectionTitle";
import { CodeWindow, type Token } from "@/components/common/CodeWindow/CodeWindow";
import styles from "./Facts.module.scss";
import { facts } from "@/data/data";

const lines: Token[][] = [
  [["keyword", "$ "], ["plain", "cat fun-facts.txt"]],
  ...facts.map((fact): Token[] => [["keyword", "> "], ["string", fact]]),
];

export const Facts = () => {
  return (
    <section className={styles.facts}>
      <div className="container">
        <SectionTitle props={{ span: "#", text: "my-fun-facts", margin: 32 }} />
        <CodeWindow fileName="~/fun-facts" lines={lines} wide className="reveal" />
        <ul className="sr-only">
          {facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
