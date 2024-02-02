import { useState } from "react";
import styles from "../styles/layout.module.sass";

function OptionsSection({ title, label }) {
  const seatFabricOption = [
    {
      id: 2912,
      display_name: "Charcoal Buckram",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/345/876/2912/1_backseat1_1%4014542.jpeg?Expires=1707027342&Signature=b~WKMtwiBEa-SEOUL3cP9qWJh2QH1AjHXb6t-wqFazHrs~DxAVOEPtsKcyktgKyQGbQq2F1tP9ADyCrn-JC18JU4mc5wv4YLlHGedfYAOAojjudjST~715Rzoc3Sd1j~NkVmacUa5TUxWZ108nDKgnuP3dT5WJjjPmdc95BJTnJuPRTlcl83Qtlk~~x5U7bk4RCe4s8EWJ0kOdW4XOirDjlBJpQ7FMrloiAI5I5KHpRYp797X8iogV-ixdFNs7hLrnsK-PWdYdSSNSteWHRTLwrfamdUv1h6iyZlBN~M6Ryp8E0Tm0hkZeuMHABNSZlAp~0CkKsXBCx-BNqKzjpGow__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 2919,
      display_name: "Diamond Quilt",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/345/876/2919/thumbnail_sofa_fabric_2_1.jpg?Expires=1707027342&Signature=QWm9mAElKWoDKKmST3fIMkPyaFwQNclFiMzwwaD2CzX7Hc6-e~p1Ad-UmBSO9ZSMyoOV5-Jpg68bas2ChivUwZ4eKBKjGFMYRhDtwkX3zEsyXVIS44rfR-BFUI-qpDb~YzzvNxel1a4uwV-nXhTH8kbXshRktLz4TEn0D~CNJ6gFn3kMEqPh5ven6ymhIZqr1GNyyUonjhG-HUtAybxqttSw5ueo1V-lZVB7AU4d38DiCCQ7ioGHen9a8Q45nzq5wH6CZu19z3TE24wpxILFZHSP~i-vuqWLDPK67TGYWosHOuk5JLGGqD9x91DwUfdUmSXRr05CI4wBmNSm1KWEZA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 2918,
      display_name: "Ice Blue",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/345/876/2918/thumbnail_1_throw_pillow_1310_tex_Ui1QwSS.jpg?Expires=1707027342&Signature=rN~EZIVyHXCiySNclGDljGJI-vuq3xTc4j0aJO4LSdrNFkaV2T5QdduK8ojKsqm3uQNtGpsKj6-7pCZbvmaz3LmP-KUdYA9h6SbBrzR~zViNBx9I1gdGmfVKBuQYYzb3k~6bK~MtvEyiY6BogBzGVPsfUVjxMTDDxp4aEz13KAxMXOg3VZCWz0HBGrvNWVnbCZhJjsalkPHH0nnzHggUxP1KTkhbvv2RVBgxPWRsW-4MKQIDZFjVokIxkPPK6Wwt9WRwWxNbfwBEZ5lLTFbSQwFwKN9ZIl2D7kyjHuO1dGc5d565sO-l6kNAgoh7ZC~D9e7THNeCaiBjQgxKph1dxw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 2917,
      display_name: "Boucle",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/345/876/2917/thumbnail_sofa_fabric_3_1.jpg?Expires=1707027342&Signature=f3c0ueSCUl3XnbeysuPEZX2ttUh-cpiEtLpjqlM3bdSlB64RzHDPx1VscFUM8XFpcJf9zIucxm7F1EUZ6Q1DfQzjuhKEuH5wsHNWRq2DTHl5wwby4ip30MMIigqyUipJUnxmxwJeWIrQ~QucpeHjPqIZ5WSGRZwwi56FzlmG~AYeQ~mPbePyw7Q18fo~ssmkiEF2zycEqlA2o7Nz0bVwvdx2LV1NIRd9~pRL9Pzv9AnJagSmS2g7X5-EPino-y3xzOdvVOkEvhPJnCOBR2-bEblNiE72CWghpHFVU~dy0I~dJ6FBftVO5UjUCpXiNXuHJQ-Y4Qz2c9fElfnMsZTM0g__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 2914,
      display_name: "Camel Leather",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/345/876/2914/thumbnail_leather037_1.jpg?Expires=1707027342&Signature=kLPk5sYg3oF9qloCj-99qXIspIKlh36Odza3doADgwmV~vXGtLT-pj0sCtvHTmU7nGa9zOw1ud7wNcCN7jLQBRT15WQpqO~1d~d5dn2TbTKifCrOiN0qjDZmDibaK8a-Q-jljYCrvjNlc2Dr5ddlChCoKnk6EmV~h~~rOvcwSrr4xXWl1Yr-oZC1huT5PeBz7Fm5CzNVupR63PufsFAhI4zYrsqc3Kr0MXz12LNB4O0MCu0Vf43XQGHR~2EahodhQ8LkOuv5HiwutIqGaXAiCJHH6EZZfbc1akjOygYgpzq298VM2kpoLmYR1X7XIZCZF0mGCwnbF-fCKpYwe2HIEA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 2915,
      display_name: "Distressed leather",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/345/876/2915/thumbnail_leather018.jpg?Expires=1707027342&Signature=Cii81tZdorJKLM~ofglg3OpaknSHShc1D2TVkDfMixjIdaIhk0EKDAcRspQAi8dPb54KTTaiymZGloyzrGSbr9JFZJk20TsYnuuRW9uCYIcwO4z7TPBlEjQvySMfOa88TArcsJfb9Qw5aZCAR8KbAU3V5O13LGFYMHZ15Um1lBBjrVNoQTUxpe0DXi2Rhnr0s3mN0EbNB1XS5du7sCtPQN0TL2eUOiNoiX2Mb0Hd6jkGYyaR4S2tZn~Yl4fA-Jg~-1UXwmVGVpFStLhftHOvcI9R8itzEWrVzkP4Y5q98LVOQguT3RBc1MVjVGiNeZTA6PhQ7LNIiXLRVv~B1wSnBQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 2916,
      display_name: "Faux Leather",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/345/876/2916/thumbnail_sofa_leather_3_1.jpg?Expires=1707027342&Signature=YmR0w2R7CzTEQJJGOO0um-OthWRidxV5Tqa0jKiAU6RqFlzJ-URyKhIdnFyWf8do~IvG0xHL-3eluLhObOGpvXjoAWUnhnWURbgTvNAgr8cLgYuIatqDQ9761vJl3xyIFQP7BfQG5ydQBTFi6HXiRT3wsCntphVatalg4Yt6~Lh-D9bo8lq9D-MQCfyqObZ3pK3RAVX0GzZK~XzkY3BNGPvOuE3EeBSFZjd6vDUj2KIavLi1nrrRnCW-HkDms21n1Vo0O2laQXVMgdbUSOVRAz3wF06Jn0vN3LmYoKMSnPq6U41YcV2dfvBsanFQLZEn6DOeAF7AjOd5vUvnppkqyw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
  ];

  const frameOptions = [
    {
      id: 2911,
      display_name: "Cherry Wood",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/345/877/2911/1_armrest_1%4014542.jpeg?Expires=1707027343&Signature=zrZfhugc-2Q98CvNDMsE6DGLdh7MHOCc0e9O2K7Pv80~uKW0sP4Z5xKhCp7XqPipO8wZd~-8LWzsjk6knoLtGUk~0BrCeZBgRom2oh6ufrg3Rktpa2oG8VwbVWxq2XUVkK3tt5sD-pkmtswgsYYMlhXCCD26h7tWy9C3TKV1hS82FxyG4D-lqVgX2c-wwdWzj~VO2eg1R3MjzJHCKscnMfAvV3juqx235WgBptNck9-B0v1bebOea4~KMZzS8ZGt0MqPARyy6fJspNhSYU85ewk9DlgHnr50K3IrBWtJIwZ1J6Jdrqqqmat~ayWuhcah7zE6xqrO2OdJVUXOZBgTZQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 2931,
      display_name: "Natural Wood",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/345/877/2931/thumbnail_wood032_1.jpg?Expires=1707027343&Signature=ymFsGDIlVsCVTSVqnWitT8Y-Ugrqq6RSSqcVggWUndKbvJ4HC~TPuOXFCdMvrN~Y9X7QEHusTNcpm93DmiEbOwNoap0Db82xRcISacs3PDsRTJ6QjXNbHIQ-aDV19ToCNo81zhWqEAeUxk3J2tlXkoyUfQXs~ExcXOG2V2aQ7OlZ64LbpJpiSQy0dOuhZFdkpHWXn5dWct-OGa-kKf4VDon7bd~l74mGhbMiNYmJNNiOHbLB6cRQx85xVXln~Ck9en1-QhzeKeKEpPdMZBkoUXM1k8YFeaV6bkWgI7Dpw1nSREOlK7kcLuxKGF1-taXqHKPh5MVotffba5-~NGsKxA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 2930,
      display_name: "Light Grunge Wood",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/345/877/2930/thumbnail_light_grunge_wood_1.jpg?Expires=1707027343&Signature=k~0CIZvZ7FGkFfGkmc3TQqc13Yy1zZy3xCQriM04Mqd-thuApa2ZJY1V6O2A6KdYd-BCx4BVc0eglbGBLnw9bLsG-YM9vMayTFAbpJP72oSgoohpbBp0xFMr9Bs~5S8FgHYhcUqPhN88JcIC47EnhOIwg~35O~6PaRcxEi1ccCH7l6U7Um3k0KgnWdLVWFeiU5OMr26HnA9U7o2OVHtY1X-ZTEvuQkPDN1pIK6DzAeacpBBYqxcVOOKZIW9zs7H3Gqwo96blchIu20zCFMOA-fM3pCnJr63yeWVdu6qobVSehUXaD0l-33Jhn6PvXmI2S1EDcSntCQ3ZtD8-0xjHAA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 2929,
      display_name: "Teak Wood",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/345/877/2929/thumbnail_teak_wood_1.jpg?Expires=1707027343&Signature=IizUaLtkCRYUpM0GU-xr7a1qFEQZ2WTOEA8FrJ16lkYuSjCO7JoyYfzsLH1YjeUtp5pWJXa-SkgMowbahLAXgFB3zvQtQ3ziqe9s7fXvYmaWAUOqH2zn6XI~bToCvRSvWqKWRymLeu6KOjf0j~VdYHZ-h~J88LKuE1u0jB5yecwlneG9X6c5yAS9bXlhngjbgziTCcx-OctkmDFQsvRdprTH2cB6i0eZqvTHmeAuMFZ1uW0prAAfZNMHxKDWsSBSlf1WI5DDqJ0t32EBqxQJCdjk4KmCRKjxlbHZI5KjyTlZdt5ClUlHI9MK3TslFNaCiYnvQlAFCf61fIcHf-2RBg__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 2932,
      display_name: "Mahogany",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/345/877/2932/thumbnail_wood028_1.jpg?Expires=1707027343&Signature=24aQ9GdxpYsgzxSE52YMm1ImCKurNVHk5YtZshmyADKNBVAaDzW2KGaxWAjdeBV-ZAROTjjbRH~jOjoS-IbB~UULSrwIOiq1LPczmBqsOtyGSmqP6zxIfpnFCBWyqmWNtJ6hQRdcP0QL2INNwsLGzlrXe07GoR5M7TT1D91i7M7mL5NmL08ynnzIJzh6klFVsH5I6rOfUlQOOLdyg7rnk65YbOSFEjpPuXDCwZnfVo9GTKEc07VujZb14YL-VJAEZmcPNu7Elpuh25HZaJAoBLLkE44RPPY961FDCD7z7ZRFkzpEKwNFKbi-Ph7i8nAWSaxtB6HWCM4blQIvGc5jaA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
  ];
  const options =
    label === "Seat Fabric"
      ? seatFabricOption
      : label === "Frame"
      ? frameOptions
      : [];
  const [selectedOption, setSelectedOption] = useState(options?.[0] || {});

  const sendMessageToParent = (data = null) => {
    console.log("data", data);
    const iframe = document.querySelector("#modelViewerFrame");
    if (iframe) {
      iframe.contentWindow.postMessage(data, "*");
      console.log("data sent to child: " + data);
    }
  };

  const sendData = (values) => {
    if (!values) return;
    sendMessageToParent(values);
  };
  if (!options?.length) {
    return null;
  }
  return (
    <div className={styles.sectionWrapper}>
      <p className={styles.sectionTitle}>{title}</p>
      <div className={styles.optionsWrapper}>
        {options.map((option, index) => (
          <div
            className={styles.optionButton}
            style={{ background: option.backgroundColor }}
            key={index}
            onClick={() => {
              setSelectedOption(option);
              sendData({
                label: label,
                option: option?.display_name || option?.name,
              });
            }}
          >
            {option?.thumb && <img src={option?.thumb} />}
            {option?.display_name && (
              <span
                className={
                  selectedOption?.id === option?.id ? styles.selectedMenu : ""
                }
                title={option?.display_name}
              >
                {option?.display_name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const zoneOptionLists = [
  {
    name: "Seat Fabric",
    label: "Seat Fabric",
  },
  {
    name: "default_label",
    label: "default_label",
  },
  {
    name: "Frame",
    label: "Frame",
  },
];

export default function ConfiguratorViewer() {
  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.productName}>South West Sofa</div>
        <p>Image Configurator</p>
        <div className={styles.viewerWrapper}>
          <div className={styles.viewer}>
            <iframe
              id="modelViewerFrame"
              src="https://demoviewer.imagine.io/configurator/1"
              // src="http://localhost:3001/configurator/1"
              height="800"
              width="100%"
              title="South West Sofa"
              border="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.optionsPanel}>
            {zoneOptionLists?.map((list, idx) => {
              return (
                <OptionsSection
                  key={idx}
                  title={list?.name}
                  label={list?.label}
                />
              );
            })}
            {/* <button className={styles.addButton}>ADD TO CART</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
