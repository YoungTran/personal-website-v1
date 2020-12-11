import { Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import DoubleArrowDown from "../../utils/DoubleArrowDown";
import FadeInSection from "../../utils/FadeInScroll";
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

export default function About() {
  return (
    <ParallaxLayer offset={1} speed={1} factor={0.5}>
      <FadeInSection>
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item lg={6} md={8} sm={8} style={{ color: "#fff" }} xs={8}>
            {items.map((item, idx) => (
              <Typography variant={item.element} style={item.style} key={idx}>
                {item.text}
              </Typography>
            ))}
            <Tools />
            <Hidden smDown>
              <DoubleArrowDown nextPage={2} />
            </Hidden>
          </Grid>
        </Grid>
      </FadeInSection>
    </ParallaxLayer>
  );
}
