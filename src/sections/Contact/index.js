import { makeStyles } from "@material-ui/core";
import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { url } from "../../components/SpringBg";

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

export default function Contact({ winSize }) {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ParallaxLayer offset={winSize.width < 959 ? 4.2 : 4} speed={1.2}>
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
          alt="contact-cloud"
        />
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>

          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </ParallaxLayer>
  );
}
