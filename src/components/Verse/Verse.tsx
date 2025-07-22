import styles from "./Verse.module.css";

const Verse = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.leftSide}>
          <span className={styles.highlightContainer}>
            <span className={styles.highlight}>God</span>
          </span>
          is
          <span className={styles.highlightContainer}>
            <span className={styles.highlight}>good</span>
          </span>
        </div>

        <div className={styles.rightSide}>
          all the
          <span className={styles.highlightContainer}>
            <span className={styles.highlight}>Time!</span>
          </span>
        </div>
      </div>

      <div className={styles.weContainer}>
        <div className={styles.we}>
          “And so, dear brothers and sisters, I plead with you to give your
          bodies to God because of all he has done for you. Let them be a living
          and holy sacrifice—the kind he will find acceptable. This is truly the
          way to worship him. Don’t copy the behavior and customs of this world,
          but let God transform you into a new person by changing the way you
          think. Then you will learn to know God’s will for you, which is good
          and pleasing and perfect.”
        </div>
      </div>
      <div className={styles.verse}>- Romans 12 : 1-2</div>
    </div>
  );
};

export default Verse;
