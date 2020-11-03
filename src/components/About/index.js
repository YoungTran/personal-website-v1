import { Fade, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { animated, useTrail } from "react-spring";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import DoubleArrowDown from "../DoubleArrowDown";
import Tools from "./Tools";
const items = [
  {
    text: "About .",
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
      "I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to build great things for this world. Whether it be pixel-perfect experiences or the handling of big data, I am always up for the challenge.",
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
      marginTop: "1rem",
    },
  },
];
const config = { mass: 5, tension: 2000, friction: 200 };

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function About() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  const isHome = window.location.pathname === "/";
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 150);
  }, []);

  return (
    <ParallaxLayer offset={1} speed={1} factor={0.5}>
      {isMounted && (
        <Fade in={true} timeout={{ enter: 2000 }}>
          <Grid
            container
            spacing={1}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item lg={6} md={8} sm={8} style={{ color: "#fff" }} xs={8}>
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
              <Tools />
              <DoubleArrowDown nextPage={2} />
            </Grid>
          </Grid>
        </Fade>
      )}
    </ParallaxLayer>
  );
}
function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
