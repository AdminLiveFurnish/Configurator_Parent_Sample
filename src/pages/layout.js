import { signal } from "@preact/signals-react";
import cx from "classnames";

import styles from "../styles/layout.module.sass";

const currentSide = signal(0); //0 right, 1 left

function OptionsSection({ title, label }) {
  const optionsLabel1 = [
    { backgroundColor: "#C4019B", render_id: "515193", id: "6118" },
    { backgroundColor: "#C4019B", render_id: "515197", id: "6119" },
    { backgroundColor: "#A50101", render_id: "515199", id: "6120" },
    { backgroundColor: "#CA7A00", render_id: "515201", id: "6121" },
    { backgroundColor: "#F7F601", render_id: "515203", id: "6122" },
    { backgroundColor: "#BDEF00", render_id: "515205", id: "6123" },
    { backgroundColor: "#01C300", render_id: "515207", id: "6124" },
    { backgroundColor: "#044A00", render_id: "515209", id: "6125" },
    { backgroundColor: "#01A694", render_id: "515211", id: "6126" },
    { backgroundColor: "#0169D8", render_id: "515213", id: "6127" },
    { backgroundColor: "#151486", render_id: "515215", id: "6128" },
    { backgroundColor: "#BC82C3", render_id: "515217", id: "6129" },
    { backgroundColor: "#3C005F", render_id: "515219", id: "6130" },
    { backgroundColor: "#5F0C26", render_id: "515221", id: "6131" },
    { backgroundColor: "#310E26", render_id: "515223", id: "6132" },
    { backgroundColor: "#000101", render_id: "515225", id: "6133" },
    { backgroundColor: "#373637", render_id: "515227", id: "6134" },
    { backgroundColor: "#FFFFFF", render_id: "515229", id: "6135" },
    { backgroundColor: "#87747C", render_id: "515231", id: "6136" },
    { backgroundColor: "#F3F3C5", render_id: "515233", id: "6137" },
  ];
  const optionsLabel2 = [
    { backgroundColor: "#C4019B", render_id: "515194", id: "6139" },
    { backgroundColor: "#C4019B", render_id: "515198", id: "6140" },
    { backgroundColor: "#A50101", render_id: "515200", id: "6141" },
    { backgroundColor: "#CA7A00", render_id: "515202", id: "6142" },
    { backgroundColor: "#F7F601", render_id: "515204", id: "6143" },
    { backgroundColor: "#BDEF00", render_id: "515206", id: "6144" },
    { backgroundColor: "#01C300", render_id: "515208", id: "6145" },
    { backgroundColor: "#044A00", render_id: "515210", id: "6146" },
    { backgroundColor: "#01A694", render_id: "515212", id: "6147" },
    { backgroundColor: "#0169D8", render_id: "515214", id: "6148" },
    { backgroundColor: "#151486", render_id: "515216", id: "6149" },
    { backgroundColor: "#BC82C3", render_id: "515218", id: "6150" },
    { backgroundColor: "#3C005F", render_id: "515220", id: "6151" },
    { backgroundColor: "#5F0C26", render_id: "515222", id: "6152" },
    { backgroundColor: "#310E26", render_id: "515224", id: "6153" },
    { backgroundColor: "#000101", render_id: "515226", id: "6154" },
    { backgroundColor: "#373637", render_id: "515228", id: "6155" },
    { backgroundColor: "#FFFFFF", render_id: "515230", id: "6156" },
    { backgroundColor: "#87747C", render_id: "515232", id: "6157" },
    { backgroundColor: "#F3F3C5", render_id: "515234", id: "6158" },
  ];

const options = label === "1599"? optionsLabel1 : optionsLabel2;

  const sendMessageToParent = (data = null) => {
    const iframe = document.querySelector("#modelViewerFrame");
    if (iframe) {
      iframe.contentWindow.postMessage(data, "*");
      console.log("data sent to child: " + data);
    }
  };

  const sendData = (values) => {
    if (!values) return;
    console.log("values", values);
    sendMessageToParent(values);
  };
  return (
    <div className={styles.sectionWrapper}>
      <div>
        <p className={styles.sectionTitle}>{title}</p>
        <div className={styles.optionsWrapper}>
          {options.map((option, index) => (
            <div
              className={styles.optionButton}
              style={{ background: option.backgroundColor }}
              key={index}
              onClick={() =>
                sendData({
                  label: label,
                  option: {
                    id: option.id,
                    render_id: option.render_id,
                  },
                })
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OptionsSection2({ title, label }) {
  const options = [
    { backgroundColor: "#E1C16E", render_id: "515195", id: "6160" },
    { backgroundColor: "#C0C0C0", render_id: "515196", id: "6161" },
  ];

  const sendMessageToParent = (data = null) => {
    const iframe = document.querySelector("#modelViewerFrame");
    if (iframe) {
      iframe.contentWindow.postMessage(data, "*");
      console.log("data sent to child: " + data);
    }
  };

  const sendData = (values) => {
    if (!values) return;
    console.log("values", values);
    sendMessageToParent(values);
  };
  return (
    <div className={styles.sectionWrapper}>
      <div>
        <p className={styles.sectionTitle}>{title}</p>
        <div className={styles.optionsWrapper}>
          {options.map((option, index) => (
            <div
              className={styles.optionButton}
              style={{ background: option.backgroundColor }}
              key={index}
              onClick={() =>
                sendData({
                  label: label,
                  option: {
                    id: option.id,
                    render_id: option.render_id,
                  },
                })
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Layout() {
  function handleSideChange(side) {
    console.log("side changed to: ", side);
    currentSide.value = side;
  }

  return (
    <>
      <header className={styles.header}>
        <img src="/logo.png" alt="" className={styles.logo} />
        <div className={styles.navTabsWrapper}>
          <div className={cx(styles.navTabs, styles.selected)}>
            SKATE GUARDS
          </div>
          <div className={styles.navTabs}>SOAKERS</div>
          <div className={styles.navTabs}>SK8TAPE</div>
          <div className={styles.navTabs}>APPAREL</div>
          <div className={styles.navTabs}>DEALER</div>
        </div>
      </header>
      <div className={styles.contentWrapper}>
        <div className={styles.productName}>ROCKERS INVERTED SKATE GUARDS</div>
        <div className={styles.viewerWrapper}>
          <div className={styles.viewer}>
            <iframe
              id="modelViewerFrame"
              src="http://localhost:3003/configurator/1"
              // src="https://app.imagine.io/configurator-viewer/ffba4f6f-b3d0-5b19-9d05-dd932b265758"
              height="800"
              width="100%"
              title="Rockers Inverted Skate Guards"
              border="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.optionsPanel}>
            <div className={styles.price}>
              <p>$348.00</p>
            </div>
            {/* <div className={styles.sideSelection}>
              <p className={styles.sectionTitle}>- CUSTOMIZE</p>
              <div className={styles.sideSelectionButtonWrapper}>
                <button
                  className={cx(
                    styles.sideSelectionButton,
                    currentSide.value === 0 ? styles.active : ""
                  )}
                  onClick={() => handleSideChange(0)}
                >
                  Right Blade
                </button>
                <button
                  className={cx(
                    styles.sideSelectionButton,
                    currentSide.value === 1 ? styles.active : ""
                  )}
                  onClick={() => handleSideChange(1)}
                >
                  Left Blade
                </button>
              </div>
            </div> */}
            {currentSide.value === 0 && (
              <>
                <OptionsSection title="Zone 1" label="1599" />
                <OptionsSection title="Zone 2" label="1600" />
                {/* <OptionsSection title="Zone 3" label="Right Zone 1" /> */}
                {/* <OptionsSection title="Zone 4" label="Right Zone 1" /> */}
              </>
            )}
            {/* {currentSide.value === 1 && (
              <>
                <OptionsSection title="Zone 1" label="Left Zone 1" />
                <OptionsSection title="Zone 2" label="Left Zone 1" />
                <OptionsSection title="Zone 3" label="Left Zone 1" />
                <OptionsSection title="Zone 4" label="Left Zone 1" />
              </>
            )} */}
            <OptionsSection2 title="Spring" label="1601" />
            <button className={styles.addButton}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
}
