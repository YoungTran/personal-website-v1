import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { animated, useTrail } from "react-spring";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { css } from "styled-components";
import CTAButton from "./CTAButton";
import DoubleArrowDown from "./DoubleArrowDown";

const items = [
  {
    text: "Hi my name is,",
    element: "h6",
    style: {
      fontFamily: "Arial",
      fontStretch: "100%",
      fontWeight: 600,
      color: "#fff",
      marginBottom: "2rem",
    },
  },
  {
    text: "YOUNG TRAN",
    element: "h2",
    style: {
      fontFamily: "Arial",
      fontStretch: "100%",
      fontWeight: 600,
      color: "#fff",
      marginBottom: "1rem",
    },
  },
  {
    text: "I make software that helps people.",
    element: "h3",
    style: {
      fontFamily: "Arial",
      fontStretch: "100%",
      fontWeight: 600,
      color: "#283D50",
      textShadow: "1px 1px #000",
      marginBottom: ".5rem",
    },
  },
  {
    text:
      "I'm a software engineer based in Silicon Valley, I specializing in building efficient and scalable web applications.",
    element: "body1",
    style: {
      fontFamily: "Arial",
      fontStretch: "100%",
      fontWeight: 600,
      color: "#283D50",
      maxWidth: "30rem",
      marginTop: "1rem",
    },
  },
];
const config = { mass: 5, tension: 2000, friction: 200 };

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1000px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      // marginTop: "4rem",
      // marginLeft: "3rem",
      // textAlign: "left",
      // padding: "4rem",
      // maxWidth: "1000px",
    },
    [theme.breakpoints.up("lg")]: { marginTop: "10rem" },
  },
}));

export default function Header() {
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
    <ParallaxLayer
      offset={0}
      speed={1.2}
      css={css({
        padding: [3, 4, 4, 5],
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        zIndex: 50,
      })}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={classes.root}>
          <div>
            {trail.map(({ x, height, ...rest }, index) => (
              <animated.div
                key={items[index]}
                className="trails-text"
                style={{
                  ...rest,
                  transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
                }}
              >
                <Typography
                  variant={items[index].element}
                  style={items[index].style}
                >
                  {items[index].text}
                </Typography>
              </animated.div>
            ))}

            <CTAButton />
          </div>

          <DoubleArrowDown nextPage={1} />
        </div>
      </div>
    </ParallaxLayer>
  );
}
