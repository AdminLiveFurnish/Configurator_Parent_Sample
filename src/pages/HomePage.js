import { Link } from "react-router-dom";
import StickNavBar from "../components/StickyNavBar";
import styles from "../styles/layout.module.sass";

export default function HomePage() {
  return (
    <>
      <StickNavBar />
      <div className={styles.homeContentWrapper}>
        <Link to="/configurator/1" className={styles.navLink}><h2>ROCKERZ INVERTED</h2><p>Customizable Image Configurator</p><img src="/rockerzinverted.png" /></Link>
        <Link to="/modelviewer/1" className={styles.navLink}><h2>ROCKERZ INVERTED</h2><p>Customizable 3D Viewer</p><img src="/rockerzinverted.png" /></Link>
      </div>
    </>
  );
}
