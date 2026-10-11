import styles from './quote.module.scss'

const Quote = () => {
  return (
    <section className={styles.quote}>
      <div className="container">
        <div className={`${styles.wrapper} reveal`}>
          <h2 className={styles.text}>
            With great power comes great electricity bill
          </h2>
          <p className={styles.subtext}> - Dr. Who</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
