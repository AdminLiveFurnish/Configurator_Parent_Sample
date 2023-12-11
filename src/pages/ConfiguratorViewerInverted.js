
import StickNavBar from "../components/StickyNavBar";
import styles from "../styles/layout.module.sass";

function OptionsSection({ title, label }) {
  const options = [
    { backgroundColor: "#C4019B", value: "1" },
    { backgroundColor: "#C4019B", value: "2" },
    { backgroundColor: "#A50101", value: "3" },
    { backgroundColor: "#CA7A00", value: "4" },
    { backgroundColor: "#F7F601", value: "5" },
    { backgroundColor: "#BDEF00", value: "6" },
    { backgroundColor: "#01C300", value: "7" },
    { backgroundColor: "#044A00", value: "8" },
    { backgroundColor: "#01A694", value: "9" },
    { backgroundColor: "#0169D8", value: "10" },
    { backgroundColor: "#151486", value: "11" },
    { backgroundColor: "#BC82C3", value: "12" },
    { backgroundColor: "#3C005F", value: "13" },
    { backgroundColor: "#5F0C26", value: "14" },
    { backgroundColor: "#310E26", value: "15" },
    { backgroundColor: "#000101", value: "16" },
    { backgroundColor: "#373637", value: "17" },
    { backgroundColor: "#FFFFFF", value: "18" },
    { backgroundColor: "#87747C", value: "19" },
    { backgroundColor: "#F3F3C5", value: "20" },
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

function OptionsSection2({ title, label }) {
  const options = [
    { backgroundColor: "#E1C16E", value: "Gold" },
    { backgroundColor: "#C0C0C0", value: "Silver" },
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

export default function ConfiguratorViewer() {
  return (
    <>
      <StickNavBar/>
      <div className={styles.contentWrapper}>
        <div className={styles.productName}>ROCKERZ INVERTED SKATE GUARDS</div>
        <p>Image Configurator</p>
        <div className={styles.viewerWrapper}>
          <div className={styles.viewer}>
            <iframe
              id="modelViewerFrame"
              src="https://rockers.imagine.io/configurator/1"
               // src="http://localhost:3000/configurator/1"
              height="800"
              width="100%"
              title="Rockerz Inverted Skate Guards"
              border="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.optionsPanel}>
            <div className={styles.price}>
              <p>$348.00</p>
            </div>
            <OptionsSection title="Zone 1" label="Zone 1" />
            <OptionsSection title="Zone 2" label="Zone 2" />
            <OptionsSection2 title="Spring" label="Spring" />
            <button className={styles.addButton}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
}
