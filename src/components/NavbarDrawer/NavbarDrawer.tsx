import Drawer from "@mui/material/Drawer";
import scrollToSection from "../../utils/scrollToSection";
import styles from "./NavbarDrawer.module.css";
import CloseIcon from "@mui/icons-material/Close";
import salvadorFlag from "../../assets/salvador-flag.png";
import colombiaFlag from "../../assets/colombia-flag.png";
import guatemalaFlag from "../../assets/guatemala-flag.png";
import venezuelaFlag from "../../assets/salvador-flag.png";

export default function NavbarDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  // const handleClick = (where: string) => {
  //   scrollToSection(where);
  //   setOpen(false);
  // };

  const List = () => (
    <ul className={styles.tabsContainer}>
      <div className={styles.head}>
        KIDS of the FUTURE
        <CloseIcon sx={{ fontSize: "2.5rem" }} onClick={() => setOpen(false)} />
      </div>
      <li className={styles.li}>
        <button className={styles.tab} onClick={() => scrollToSection("about")}>
          About Us
        </button>
      </li>
      <li className={styles.li}>
        <button
          className={styles.tab}
          onClick={() => scrollToSection("services")}
        >
          Mission Trips
        </button>
      </li>
      <li className={styles.li}>
        <button
          className={styles.tab}
          onClick={() => scrollToSection("services")}
        >
          Get Involved
        </button>
      </li>
      <li className={styles.li}>
        <button
          className={styles.tab}
          onClick={() => scrollToSection("services")}
        >
          Events
        </button>
      </li>
      <li className={styles.li}>
        <button
          className={styles.tab}
          onClick={() => scrollToSection("services")}
        >
          Contact Us
        </button>
      </li>
      <div className={styles.flags}>
        <img className={styles.flag} src={salvadorFlag} />
        <img className={styles.flag} src={colombiaFlag} />
        <img className={styles.flag} src={guatemalaFlag} />
        <img className={styles.flag} src={venezuelaFlag} />
      </div>
      <button
        className={`${styles.tab} ${styles.highlight}`}
        onClick={() => scrollToSection("contact")}
      >
        Give Now
      </button>
    </ul>
  );

  return (
    <div>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <List />
      </Drawer>
    </div>
  );
}
