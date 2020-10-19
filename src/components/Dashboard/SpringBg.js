import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
export default function SpringBg() {
  return (
    <div>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      />

      <ParallaxLayer offset={3} speed={-0.1} style={{ opacity: 0.4 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "60%" }}
        />
        <img
          src={url("cloud")}
          style={{
            display: "block",
            width: "25%",
            marginLeft: "30%",
            marginTop: "25%",
          }}
        />
        <img
          src={url("cloud")}
          style={{
            display: "block",
            width: "10%",
            marginLeft: "80%",
            marginTop: "60%",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={0.2} style={{ opacity: 0.2 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "10%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "75%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      />

      <ParallaxLayer
        offset={1.5}
        speed={-0.3}
        style={{ pointerEvents: "none" }}
      >
        <img
          src={url("satellite4")}
          style={{ width: "15%", marginLeft: "80%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "55%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "15%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "70%" }}
        />
        {/* <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          /> */}
      </ParallaxLayer>
    </div>
  );
}
