import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>KIDS OF THE FUTURE MINISTRY</div>
      <div className={styles.bar}>Support our ministry and transform a child’s life today</div>
    </div>
  );
};

export default Banner;
