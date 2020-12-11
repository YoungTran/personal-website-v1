import { Button, makeStyles, TextField } from "@material-ui/core";
import { SendOutlined } from "@material-ui/icons";
import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { url } from "../../components/SpringBg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // maxWidth: "1000px",
    [theme.breakpoints.up("sm")]: {
      // marginTop: "4rem",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  input: {
    width: "300px",
    marginTop: theme.spacing(4),
    borderBottom: "1px solid #fff",
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  inputRoot: {
    fontSize: 20,
  },
  labelRoot: {
    fontSize: 20,
    color: "#fff",
    "&$labelFocused": {
      color: "#fff",
      borderBottom: "1px solid #fff",
    },
  },
  labelFocused: {},
}));

function isSmall(width) {
  return width < 959;
}

export default function Contact({ winSize }) {
  const classes = useStyles();

  return (
    <ParallaxLayer offset={isSmall(winSize.width) ? 4.1 : 4} speed={1.2}>
      <div className={classes.root}>
        <form
          action="/contact"
          name="contact"
          method="post"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <TextField
              label="Name"
              name="name"
              InputProps={{ classes: { root: classes.inputRoot } }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  focused: classes.labelFocused,
                },
              }}
              className={classes.input}
              fullWidth={!isSmall(winSize.width) ? true : false}
            />
          </div>
          <div className={classes.input}>
            <TextField
              label="Email"
              name="email"
              InputProps={{ classes: { root: classes.inputRoot } }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  focused: classes.labelFocused,
                },
              }}
              fullWidth={!isSmall(winSize.width) ? true : false}
            />
          </div>
          <div className={classes.input}>
            <TextField
              label="Message"
              name="message"
              InputProps={{ classes: { root: classes.inputRoot } }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  focused: classes.labelFocused,
                },
              }}
              multiline
              fullWidth={!isSmall(winSize.width) ? true : false}
            />
          </div>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.submitButton}
            endIcon={<SendOutlined />}
          >
            Send
          </Button>
        </form>
      </div>
      <img
        src={url("earth")}
        style={{
          position: "absolute",
          zIndex: -1,
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
          height: "50%",
        }}
        alt="contact-cloud"
      />
    </ParallaxLayer>
  );
}
