import { Link } from "react-router-dom";
import styles from "../styles/layout.module.sass";
import cx from "classnames";

export default function StickNavBar() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/logo.png" alt="" className={styles.logo} />
      </Link>
      <div className={styles.navTabsWrapper}>
        <div className={cx(styles.navTabs, styles.selected)}>SKATE GUARDS</div>
        <div className={styles.navTabs}>SOAKERS</div>
        <div className={styles.navTabs}>SK8TAPE</div>
        <div className={styles.navTabs}>APPAREL</div>
        <div className={styles.navTabs}>DEALER</div>
      </div>
    </header>
  );
}
