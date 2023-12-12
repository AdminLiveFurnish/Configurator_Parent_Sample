import { useEffect } from "react";
import { Link } from "react-router-dom";
import StickNavBar from "../components/StickyNavBar";
import styles from "../styles/layout.module.sass";

const productConfigureLists = [
  {
    name: "ROCKERZ INVERTED",
    image: "/rockerzinverted.png",
    route: "/configurator/1",
  },
  {
    name: "ROCKERZ QUAD",
    image: "/rockerzquad.png",
    route: "/configurator/2",
  },
  {
    name: "ROCKERZ OCTO",
    image: "/rockerzocto.png",
    route: "/configurator/3",
  },
];
const productModalViewerLists = [
  {
    name: "ROCKERZ INVERTED",
    image: "/rockerzinverted.png",
    route: "/modelviewer/1",
  },
  {
    name: "ROCKERZ QUAD",
    image: "/rockerzquad.png",
    route: "/modelviewer/2",
  },
  {
    name: "ROCKERZ OCTO",
    image: "/rockerzocto.png",
    route: "/modelviewer/3",
  },
];

export default function HomePage() {
  
  useEffect(() => {
    window.history.replaceState(null, "", "/")
  }, [])
  
  return (
    <>
      <StickNavBar />
      <div className={styles.homeContentWrapper}>
        {productConfigureLists?.map((list, idx) => {
          return (
            <Link key={idx} to={list?.route} className={styles.navLink}>
              <h2>{list?.name}</h2>
              <p>Customizable Image Configurator</p>
              <div className={styles.imageBox}>
                <img src={list?.image} />
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.homeContentWrapper}>
        {productModalViewerLists?.map((list, idx) => {
          return (
            <Link key={idx} to={list?.route} className={styles.navLink}>
              <h2>{list?.name}</h2>
              <p>Customizable 3D Viewer</p>
              <div className={styles.imageBox}>
                <img src={list?.image} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
