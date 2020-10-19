import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useTrail } from "react-spring";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import ExperienceSlider from "../../ExperienceSlider";
import DoubleArrowDown from "../DoubleArrowDown";

const items = [
  {
    text: "Experience .",
    element: "h4",
    style: {
      fontFamily: "Arial",
    },
  },
  {
    text:
      "Hello there. I'm Young, a software engineer based in Silicon Valley.",
    element: "h6",
    style: {
      fontFamily: "Arial",
    },
  },
  {
    text:
      "I enjoy creating things that live on the internet, whether that be\
          websites, applications, or anything in between. My goal is to build\
          great things for this world. Whether it be pixel-perfect experiences\
          or the handling of big data, I am always up for the challenge.",
    element: "h6",
    style: {
      fontFamily: "Arial",
      fontStretch: "100%",
    },
  },
  {
    text:
      "Being a 42 Silicon Valley Alumni, I have a cultivated a plethora of tools:",
    element: "h6",
    style: {
      fontFamily: "Arial",
      fontStretch: "100%",
      fontWeight: 600,
    },
  },
];
const config = { mass: 5, tension: 2000, friction: 200 };

const useStyles = makeStyles((theme) => ({
  root: {
    // textAlign: "left",
    maxWidth: "1000px",
    [theme.breakpoints.up("sm")]: {
      // marginTop: "4rem",
      marginLeft: "3rem",
      textAlign: "left",
      padding: "4rem",
      maxWidth: "1000px",
    },
    [theme.breakpoints.up("lg")]: { marginLeft: "5rem", marginTop: "5rem" },
  },
}));

export default function Experience() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  const classes = useStyles();
  return (
    <ParallaxLayer offset={2} speed={1.2}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={classes.root}>
          <ExperienceSlider />
          <DoubleArrowDown nextPage={3} />
        </div>
      </div>
    </ParallaxLayer>
  );
}
