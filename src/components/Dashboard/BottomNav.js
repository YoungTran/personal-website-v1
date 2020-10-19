import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import FaceIcon from "@material-ui/icons/Face";
import React from "react";
import { parallax } from "../../App";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState("about");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      position
      className={classes.root}
    >
      <BottomNavigationAction
        label="About"
        value="about"
        icon={<FaceIcon />}
        onClick={() => parallax.current.scrollTo(0)}
      />
      <BottomNavigationAction
        label="Experience"
        value="experience"
        icon={<AssignmentIcon />}
        onClick={() => parallax.current.scrollTo(1)}
      />
      <BottomNavigationAction
        label="Work"
        value="work"
        icon={<BusinessCenterIcon />}
        onClick={() => parallax.current.scrollTo(2)}
      />
      <BottomNavigationAction
        label="Contact"
        value="contact"
        icon={<ContactMailIcon />}
        onClick={() => parallax.current.scrollTo(3)}
      />
    </BottomNavigation>
  );
}
