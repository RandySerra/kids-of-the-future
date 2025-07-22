import styles from "./NavBar.module.css";
import logo from "../../assets/logo.jpg";
import scrollToSection from "../../utils/scrollToSection";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavbarDrawer from "../NavbarDrawer/NavbarDrawer";
import salvadorFlag from "../../assets/salvador-flag.png";
import colombiaFlag from "../../assets/colombia-flag.png";
import guatemalaFlag from "../../assets/guatemala-flag.png";
import venezuelaFlag from "../../assets/salvador-flag.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <ul className={styles.tabsContainer}>
          <li className={styles.li}>
            <button
              className={styles.tab}
              onClick={() => scrollToSection("about")}
            >
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
        </ul>
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
        <div className={styles.burger}>
          <MenuIcon sx={{ fontSize: "3rem" }} onClick={() => setOpen(true)} />
        </div>
      </div>
      <NavbarDrawer open={open} setOpen={setOpen} />
    </nav>
  );
};

export default NavBar;
