import { makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { themeColors } from "../../App";
import { url } from "../../components/SpringBg";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
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
    console.log(e.target.name.value);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

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
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          style={{ marginTop: "4rem" }}
        >
          <input type="hidden" name="form-name" value="contact" />

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
