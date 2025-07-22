import styles from "./Achieved.module.css";
import image1 from "../../assets/sal-img1.jpg";
import image2 from "../../assets/gua-img1.jpg";
import image3 from "../../assets/ven-img1.jpg";

const Achieved = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        For 8 years KFM has been traveling and gifting BIBLES to our children
        and teenagers. Your gift will allow us to reach more children in many
        more countries. Change a child’s life today!
        <button className={styles.button}>Give Now</button>
      </div>
      <div className={styles.rightSide}>
        <img className={styles.img} src={image1} />
        <img className={styles.img} src={image2} />
        <img className={styles.img} src={image3} />
      </div>
    </div>
  );
};

export default Achieved;
