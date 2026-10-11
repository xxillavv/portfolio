import styles from "./sectionTitle.module.scss";

type TProps = {
  props: {
    text: string;
    span: string;
    margin: number;
    line?: boolean;
  };
};

export const SectionTitle = ({ props }: TProps) => {
  const line = props.line ?? props.span === "#";

  return (
    <h3
      style={{ marginBottom: props.margin }}
      className={`${styles.heading} ${line ? styles.withLine : ""}`}
    >
      <span className={styles.span}>{props.span}</span>
      {props.text}
    </h3>
  );
};
