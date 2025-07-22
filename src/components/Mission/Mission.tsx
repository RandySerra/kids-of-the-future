import styles from "./Mission.module.css";
import mission1 from "../../assets/mission1.jpg";
import mission2 from "../../assets/mission2.jpg";
import mission3 from "../../assets/mission3.jpg";

const Mission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.visionTitle}>Our Vision</div>
      <div className={styles.leftText}>
        To see today's children grow up with the foundations and principles of
        the Word of God (Deuteronomy 6:7) and thus be transformed into men and
        women of God. We trust that these children, during their growth, will
        make wise decisions guided by the Word of God (Psalm 119:9) and will be
        able to be exemplary persons in the service of God and will transmit
        this knowledge to others.
      </div>
      <div className={styles.imagesContainer}>
        <img src={mission2} className={styles.img} />
        <img src={mission1} className={styles.img} />
        <img src={mission3} className={styles.img} />
      </div>
      <div className={styles.rightText}>
        To support underprivileged children and anyone who has spiritual needs,
        doing it through prayer, Christian counseling, the teaching of the Word
        of God; so that in this way they find their purpose in Christ and come
        to understand that our purpose is to serve God alone. (Ecclesiastes
        12:13-14)
      </div>
      <div className={styles.missionTitle}>Our Mission</div>
    </div>
  );
};

export default Mission;
