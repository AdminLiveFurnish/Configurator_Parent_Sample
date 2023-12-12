import { useState } from "react";
import StickNavBar from "../components/StickyNavBar";
import styles from "../styles/layout.module.sass";
import cx from "classnames";

const BLADE_TYPE = {
  RIGHT: 0,
  LEFT: 1,
};

function OptionsSection({ title, labels }) {
  const options = [
    { backgroundColor: "#C4019B", value: "0" },
    { backgroundColor: "#C4019B", value: "1" },
    { backgroundColor: "#A50101", value: "2" },
    { backgroundColor: "#CA7A00", value: "3" },
    { backgroundColor: "#F7F601", value: "4" },
    { backgroundColor: "#BDEF00", value: "5" },
    { backgroundColor: "#01C300", value: "6" },
    { backgroundColor: "#044A00", value: "7" },
    { backgroundColor: "#01A694", value: "8" },
    { backgroundColor: "#0169D8", value: "9" },
    { backgroundColor: "#151486", value: "10" },
    { backgroundColor: "#BC82C3", value: "11" },
    { backgroundColor: "#3C005F", value: "12" },
    { backgroundColor: "#5F0C26", value: "13" },
    { backgroundColor: "#310E26", value: "14" },
    { backgroundColor: "#000101", value: "15" },
    { backgroundColor: "#373637", value: "16" },
    { backgroundColor: "#FFFFFF", value: "17" },
    { backgroundColor: "#87747C", value: "18" },
    { backgroundColor: "#F3F3C5", value: "19" },
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
                  labels: labels,
                  option: option.value,
                })
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OptionsSection2({ title, labels }) {
  const options = [
    { backgroundColor: "#E1C16E", value: "0" },
    { backgroundColor: "#C0C0C0", value: "1" },
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
                  labels: labels,
                  option: option.value,
                })
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

const rightZoneOptionLists = [
  {
    name: "Zone 1",
    labels: ["rZone3", "rZone4"],
    type: "zone",
  },
  {
    name: "Zone 2",
    labels: ["rZone1", "rZone2"],
    type: "zone",
  },
];

const leftZoneOptionLists = [
  {
    name: "Zone 1",
    labels: ["lZone3", "lZone4"],
    type: "zone",
  },
  {
    name: "Zone 2",
    labels: ["lZone1", "lZone2"],
    type: "zone",
  },
];

export default function ConfiguratorViewer() {
  const [currentSide, setCurrentSide] = useState(BLADE_TYPE.RIGHT);

  const handleSideChange = (value) => {
    setCurrentSide(value);
  };

  return (
    <>
      <StickNavBar />
      <div className={styles.contentWrapper}>
        <div className={styles.productName}>ROCKERZ QUAD SKATE GUARDS</div>
        <p>Model viewer</p>
        <div className={styles.viewerWrapper}>
          <div className={styles.viewer}>
            <iframe
              id="modelViewerFrame"
              src="https://rockers.imagine.io/modelviewer"
              height="800"
              width="100%"
              title="Rockerz Quad Skate Guards"
              border="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.optionsPanel}>
            <div className={styles.price}>
              <p>$348.00</p>
            </div>
            <div className={styles.sideSelection}>
              {/* <p className={styles.sectionTitle}> CUSTOMIZE</p> */}
              <div className={styles.sideSelectionButtonWrapper}>
                <button
                  className={cx(
                    styles.sideSelectionButton,
                    currentSide === BLADE_TYPE.RIGHT ? styles.active : ""
                  )}
                  onClick={() => handleSideChange(BLADE_TYPE.RIGHT)}
                >
                  Right Blade
                </button>
                <button
                  className={cx(
                    styles.sideSelectionButton,
                    currentSide === BLADE_TYPE.LEFT ? styles.active : ""
                  )}
                  onClick={() => handleSideChange(BLADE_TYPE.LEFT)}
                >
                  Left Blade
                </button>
              </div>
            </div>
            {currentSide === BLADE_TYPE.RIGHT ? (
              <>
                {rightZoneOptionLists?.map((list, idx) => {
                  return (
                    <OptionsSection
                      key={idx}
                      title={list?.name}
                      labels={list?.labels}
                    />
                  );
                })}
              </>
            ) : (
              <>
                {leftZoneOptionLists?.map((list, idx) => {
                  return (
                    <OptionsSection
                      key={idx}
                      title={list?.name}
                      labels={list?.labels}
                    />
                  );
                })}
              </>
            )}
            <OptionsSection2
              title="Spring"
              labels={["rZoneSpring", "lZoneSpring"]}
            />
            <button className={styles.addButton}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
}
