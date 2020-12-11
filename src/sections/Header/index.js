import { Grid, Hidden, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { animated, useTrail } from "react-spring";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { themeColors } from "../../App";
import CTAButton from "../../components/CTAButton";
import DoubleArrowDown from "../../utils/DoubleArrowDown";

const config = { mass: 5, tension: 2000, friction: 200 };

export default function Header() {
  const items = [
    {
      text: "Hi my name is,",
      element: "h6",
      style: {
        fontFamily: "Arial",
        fontStretch: "100%",
        fontWeight: 600,
        color: "#fff",
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
        color: "#fff",
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
        color: themeColors.fifth.color,
        maxWidth: "30rem",
        marginTop: "1rem",
      },
    },
  ];
  const [toggle] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <ParallaxLayer offset={0} speed={1.2}>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ marginTop: "6rem", padding: "2rem" }}
      >
        {trail.map(({ x, height, ...rest }, index) => (
          <Grid key={index} item xs={12} style={{ textAlign: "center" }}>
            <animated.div
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
          </Grid>
        ))}

        <CTAButton />
        <Hidden smDown>
          <DoubleArrowDown nextPage={0.9} />
        </Hidden>
      </Grid>
    </ParallaxLayer>
  );
}
