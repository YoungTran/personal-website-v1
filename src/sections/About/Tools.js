import { Grid, Typography } from "@material-ui/core";
import React from "react";
const skills = [
  {
    language: "JavaScript (ES6+)",
    iconClass: "devicon-javascript-plain colored",
  },
  { language: "HTML/CSS", iconClass: "devicon-html5-plain colored" },
  { language: "React", iconClass: "devicon-react-original colored" },
  { language: "Node.js", iconClass: "devicon-nodejs-plain colored" },
  { language: "Python/Flask", iconClass: "devicon-python-plain colored" },
  { language: "Java/Spring Boot", iconClass: "devicon-java-plain colored" },
  { language: "Docker", iconClass: "devicon-docker-plain colored" },
  { language: "MySQL", iconClass: "devicon-mysql-plain colored" },

  // "HTML/CSS",
  // "React",
  // "Node.js",
  // "Wordpress",
  // "Python/Flask",
  // "Java/Spring Boot",
  // "Docker",
  // "MySQL",
];

export default function Tools() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: "860px",
        marginTop: "2rem",
      }}
    >
      {skills.map((text, idx) => {
        return (
          <Grid
            key={idx}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem",
            }}
          >
            <Typography
              style={{
                marginRight: "3px",
                fontWeight: 600,
                fontStretch: "100%",
              }}
            >
              {text.language}
            </Typography>
            <i className={text.iconClass} style={{ fontSize: "2rem" }} />
          </Grid>
        );
      })}
    </div>
  );
}
