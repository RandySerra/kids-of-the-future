import styles from "./Vision.module.css";
import goalImg from "../../assets/goal.jpg";

import salvadorFlag from "../../assets/salvador-flag.png";
import colombiaFlag from "../../assets/colombia-flag.png";
import guatemalaFlag from "../../assets/guatemala-flag.png";
import venezuelaFlag from "../../assets/salvador-flag.png";

const Vision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.goal}>
          We have gifted more than
          <span className={styles.highlight}> 30,000 BIBLES</span> to our youth
          worldwide. Help us react more children.
        </div>
        <img className={styles.goalImg} src={goalImg} />
      </div>
      <div className={styles.flags}>
        <img className={styles.flag} src={salvadorFlag} />
        <img className={styles.flag} src={colombiaFlag} />
        <img className={styles.flag} src={guatemalaFlag} />
        <img className={styles.flag} src={venezuelaFlag} />
      </div>
    </div>
  );
};

export default Vision;
