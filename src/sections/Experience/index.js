import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import DoubleArrowDown from "../../utils/DoubleArrowDown";
import FadeInSection from "../../utils/FadeInScroll";
import ExperienceSlider from "./ExperienceSlider";

export default function Experience({ winSize }) {
  return (
    <ParallaxLayer offset={winSize.width < 959 ? 2 : 2.05} speed={1.2}>
      <FadeInSection>
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ marginTop: "4rem" }}
        >
          <Grid item lg={6} md={8} sm={8} style={{ color: "#fff" }} xs={8}>
            <ExperienceSlider />
            <Hidden smDown>
              <DoubleArrowDown
                nextPage={3}
                marginTop={winSize.width < 959 ? "6px" : "3px"}
              />
            </Hidden>
          </Grid>
        </Grid>
      </FadeInSection>
    </ParallaxLayer>
  );
}
