import {
  Grid,
  GridList,
  GridListTile,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import { config, useChain, useSpring, useTransition } from "react-spring";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { themeColors } from "../../App";
import DoubleArrowDown from "../DoubleArrowDown";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Work({ repos }) {
  const [open, set] = useState(true);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.gentle,
    from: { size: "40%", background: themeColors.second.color },
    to: {
      size: open ? "100%" : "40%",
      background: open ? themeColors.third.color : themeColors.second.color,
    },
  });

  const transRef = useRef();
  const transitions = useTransition(open ? repos : [], (item) => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / repos.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);
  const [showMore, setShowMore] = useState(false);
  const GRID_LIMIT = 6;
  const projects = repos;
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;
  return (
    <ParallaxLayer offset={3} speed={1}>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item lg={8} style={{ color: "#fff" }} xs={12}>
          <Typography variant="h4">Projects</Typography>
          <TransitionGroup className="projects-grid">
            <GridList cellHeight={160} cols={3}>
              {projectsToShow &&
                projectsToShow.map((props, i) => {
                  const { item } = transitions[i];
                  const arr = item.name.split("-");

                  return (
                    <CSSTransition
                      key={i}
                      classNames="fadeup"
                      exit={false}
                      timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                    >
                      <GridListTile
                        cols={1}
                        style={{
                          margin: "1rem 1rem 1rem 0",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            style={{ fontSize: "1rem", fontWeight: 600 }}
                          >
                            {arr.map(
                              (str) =>
                                str.charAt(0).toUpperCase() + str.slice(1) + " "
                            )}
                          </Typography>
                          <a href={item.html_url}>
                            <i
                              className="fa fa-github keyblade"
                              style={{ fontSize: "2rem", color: "#fff" }}
                            ></i>
                          </a>
                        </div>
                        <Typography style={{ fontSize: ".8rem" }}>
                          {item.description}
                        </Typography>
                      </GridListTile>
                    </CSSTransition>
                  );
                })}
            </GridList>
          </TransitionGroup>
          <button
            className="more-button"
            onClick={() => setShowMore(!showMore)}
          >
            Show {showMore ? "Less" : "More"}
          </button>
          <DoubleArrowDown nextPage={4} />
        </Grid>
      </Grid>
    </ParallaxLayer>
  );
}
