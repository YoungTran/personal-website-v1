import { Hidden, Typography } from "@material-ui/core";
import React from "react";
import { useSpring } from "react-spring";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./App.css";
import About from "./components/Dashboard/About";
import Appbar from "./components/Dashboard/Appbar";
import BottomNav from "./components/Dashboard/BottomNav";
import Contact from "./components/Dashboard/Contact";
import Experience from "./components/Dashboard/Experience";
import Header from "./components/Dashboard/Header";
import SpringBg from "./components/Dashboard/SpringBg";
import WorkTest from "./components/Dashboard/WorkTest";
export const parallax = React.createRef();

export const themeColors = {
  first: {
    color: "#637497",
  },
  second: {
    color: "#c4cad6",
  },
  third: {
    color: "#b8bbce",
  },
  fourth: {
    color: "#d2d8d1",
  },
  fifth: {
    color: "#faf9f7",
  },
};
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

function App() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "1fr auto",
        backgroundColor: themeColors.third.color,
        gridTemplateColumns: "100%",
      }}
    >
      <Appbar parallax={parallax} />
      <div className="side">
        <Typography>Designed and Built by Young</Typography>
      </div>

      <Parallax ref={(ref) => (parallax.current = ref)} pages={5}>
        <SpringBg />
        <Header />
        <About />
        <Experience />
        <WorkTest />

        <ParallaxLayer
          offset={4.7}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <img
            src={url("earth")}
            style={{ width: "60%" }}
            onClick={() => parallax.current.scrollTo(0)}
          />
        </ParallaxLayer>
        <Contact />
      </Parallax>

      <Hidden mdUp>
        <BottomNav />
      </Hidden>
    </div>
  );
}

export default App;
