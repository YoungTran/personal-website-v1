import { makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { themeColors } from "../../App";
import { url } from "../SpringBg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    position: "relative",

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

export default function Contact() {
  const classes = useStyles();
  return (
    <ParallaxLayer offset={4} speed={1.2}>
      <div className={classes.root}>
        <img
          src={url("cloud")}
          style={{
            position: "absolute",
            zIndex: -1,
            top: 2,
            left: 0,
            right: 0,
            width: "100%",
          }}
        />
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          style={{ marginTop: "4rem" }}
        >
          <p>
            <label>
              Your Name: <TextField type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <TextField type="email" name="email" />
            </label>
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Message: </label>
            <textarea
              name="message"
              style={{
                borderColor: themeColors.second.color,
                marginTop: "1rem",
              }}
            ></textarea>
          </div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </ParallaxLayer>
  );
}
