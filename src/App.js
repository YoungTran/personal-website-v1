import { Hidden } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./App.css";
import About from "./components/About";
import { getRepos } from "./components/api/getRepos";
import Appbar from "./components/Appbar";
import BottomNav from "./components/BottomNav";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import SpringBg from "./components/SpringBg";
import Work from "./components/Work";

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
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

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

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: themeColors.third.color,
      }}
    >
      <Appbar parallax={parallax} />
      <Hidden smDown>
        <div className="side">
          <span style={{ color: themeColors.fifth.color, fontWeight: 600 }}>
            Made with{" "}
          </span>
          <span className="heart" role="img" aria-label="heart-emoji">
            ❤️
          </span>
          <span style={{ color: themeColors.fifth.color, fontWeight: 600 }}>
            {" "}
            by Young Tran
          </span>
        </div>
      </Hidden>

      <Parallax ref={(ref) => (parallax.current = ref)} pages={5}>
        <SpringBg />

        <Header style={{ gridArea: "header" }} />

        <About style={{ gridArea: "about" }} />
        <Experience style={{ gridArea: "experience" }} />
        <Work repos={repos} style={{ gridArea: "work" }} />
        <Contact style={{ gridArea: "contact" }} />
        <ParallaxLayer
          offset={4.7}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={url("earth")}
            style={{
              width: "60%",
            }}
            className="keyblade"
            onClick={() => parallax.current.scrollTo(0)}
            alt="earth"
          />
        </ParallaxLayer>
      </Parallax>

      <Hidden mdUp>
        <BottomNav />
      </Hidden>
    </div>
  );
}

export default App;
