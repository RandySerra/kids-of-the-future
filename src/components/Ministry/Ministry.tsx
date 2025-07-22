import styles from "./Ministry.module.css";

const Ministry = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        We are a
        <span className={styles.highlightContainer}>
          <span className={styles.highlight}>ministry</span>
        </span>
        with a calling to proclaim the
        <span className={styles.highlightContainer}>
          <span className={styles.highlight}>good news</span>
        </span>
        of salvation as our Lord and Savior
        <span className={styles.highlightContainer}>
          <span className={styles.highlight}>Jesus Christ</span>
        </span>{" "}
        commanded us to do
      </div>

      <div className={styles.weContainer}>
        <div className={styles.we}>
          We transmit to children, teenagers and their families the Word of God,
          so that this Word, which is the TRUTH (2 Timothy 3:16), becomes real
          in their lives, and we can see new generations transformed by the
          Power of God. (Proverbs 22:6)
        </div>
      </div>
    </div>
  );
};

export default Ministry;
