import { Hidden } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { getRepos } from "./api/getRepos";
import "./App.css";
import Appbar from "./components/Appbar";
import AsideText from "./components/AsideText";
import BottomNav, { useWindowSize } from "./components/BottomNav";
import SpringBg from "./components/SpringBg";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Header from "./sections/Header";
import Projects from "./sections/Projects";

export const parallax = React.createRef();

export const themeColors = {
  first: {
    color: "#2D3244",
  },
  second: {
    color: "#c4cad6",
  },
  third: {
    color: "#2D3244",
  },
  fourth: {
    color: "#d2d8d1",
  },
  fifth: {
    color: "#F9F9FA",
  },
};
// const url = (name, wrap = false) =>
//   `${
//     wrap ? "url(" : ""
//   }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
//     wrap ? ")" : ""
//   }`;

function App() {
  const fetchRepo = async () => {
    const repos = await getRepos();
    return repos;
  };
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const reposPromise = fetchRepo();
    reposPromise.then((res) => {
      setRepos(res);
    });
  }, []);
  const winSize = useWindowSize();
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: themeColors.third.color,
      }}
    >
      <Appbar parallax={parallax} />
      <Hidden smDown>
        <AsideText themeColors={themeColors} />
      </Hidden>

      <Parallax ref={(ref) => (parallax.current = ref)} pages={5}>
        <SpringBg />

        <Header />

        <About />
        <Experience winSize={winSize} />

        <Projects repos={repos} winSize={winSize} />
        <Contact winSize={winSize} />
        <ParallaxLayer
          offset={winSize.width < 959 ? 4.5 : 4.7}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <img
            src={url("earth")}
            style={{
              width: winSize.width < 959 ? "100%" : "60%",
            }}
            className="keyblade"
            onClick={() => parallax.current.scrollTo(0)}
            alt="earth"
          /> */}
        </ParallaxLayer>
      </Parallax>

      <Hidden mdUp>
        <BottomNav parallax={parallax} />
      </Hidden>
    </div>
  );
}

export default App;
