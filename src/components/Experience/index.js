import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import DoubleArrowDown from "../DoubleArrowDown";
import ExperienceSlider from "../ExperienceSlider";

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
    [theme.breakpoints.up("lg")]: { marginLeft: "15rem", marginTop: "5rem" },
  },
}));

export default function Experience() {
  const classes = useStyles();
  return (
    <ParallaxLayer offset={2} speed={1.2}>
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
        </Grid>
        <DoubleArrowDown nextPage={3} />
      </Grid>
    </ParallaxLayer>
  );
}
