import styles from "./sectionTitle.module.scss";

type TProps = {
  props: {
    text: string;
    span: string;
    margin: number
  };
};

export const SectionTitle = ({ props }: TProps) => {
  return (
    <>
      <h3 style={{marginBottom: props.margin}} className={styles.heading}>
        <span className={styles.span}>{props.span}</span>
        {props.text}
      </h3>
    </>
  );
};
