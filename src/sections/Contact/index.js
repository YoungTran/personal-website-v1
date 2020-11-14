import { Button, makeStyles, TextField } from "@material-ui/core";
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
  input: {
    width: "300px",
    marginTop: theme.spacing(4),
  },
}));

export default function Contact({ winSize }) {
  const classes = useStyles();

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
          action="/contact"
          name="contact"
          method="post"
          data-netlify="true"
          style={{ marginTop: "6rem" }}
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className={classes.input}>
            <TextField variant="outlined" label="Name" name="name" fullWidth />
          </div>
          <div className={classes.input}>
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              fullWidth
            />
          </div>
          <div className={classes.input}>
            <TextField
              variant="outlined"
              label="Message"
              name="message"
              multiline
              rows={10}
              fullWidth
            />
          </div>
          <Button variant="outlined" type="submit" color="primary">
            Send
          </Button>
        </form>
      </div>
    </ParallaxLayer>
  );
}
