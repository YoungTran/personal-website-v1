import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { themeColors } from "../../App";
import DoubleArrowDown from "../../utils/DoubleArrowDown";
import FadeInSection from "../../utils/FadeInScroll";
import Project from "./Project";

export default function Projects({ repos, winSize }) {
  const projects = repos.map((repo) => {
    const { html_url, name } = repos;
    return { name, html_url };
  });
  const firstEight = projects.slice(0, 8);
  const projectsToShow = firstEight;
  return (
    <ParallaxLayer offset={winSize.width < 959 ? 3.1 : 3.2} speed={1}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Typography variant="h4" style={{ color: "#fff" }}>
          Projects
        </Typography>
        <Grid container direction="row" alignItems="center" justify="center">
          {projectsToShow &&
            projectsToShow.map((props, i) => {
              const item = repos[i];
              const arr = item.name.split("-");

              return (
                <FadeInSection key={i}>
                  <Grid
                    item
                    lg={8}
                    style={{ color: "#fff", padding: "1rem" }}
                    xs={12}
                  >
                    <Project
                      arr={arr}
                      item={item}
                      themeColors={themeColors}
                      winSize={winSize}
                    />
                  </Grid>
                </FadeInSection>
              );
            })}
          <FadeInSection>
            <Grid
              item
              lg={8}
              style={{
                color: "#fff",
                padding: "1rem",
              }}
              xs={12}
            >
              <div
                style={{
                  height: winSize.width < 959 ? 150 : 300,
                  width: winSize.width < 959 ? 150 : 300,
                  padding: "2rem",
                  border: `.1px solid ${themeColors.fifth.color}`,
                  boxShadow: `0 10px 30px -15px ${themeColors.fifth.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="keyblade"
              >
                <a
                  href="https://github.com/youngtran"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant={winSize.width < 959 ? "h4" : "h2"}>
                    See More
                  </Typography>
                </a>
              </div>
            </Grid>
          </FadeInSection>
        </Grid>
        <DoubleArrowDown nextPage={4} />
      </Grid>
    </ParallaxLayer>
  );
}
