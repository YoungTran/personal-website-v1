import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import FaceIcon from "@material-ui/icons/Face";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default function BottomNav({ parallax }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("about");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const winSize = useWindowSize();
  console.log({ winSize });
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
        onClick={() =>
          winSize.width < 959
            ? parallax.current.scrollTo(0.94)
            : parallax.current.scrollTo(0)
        }
      />
      <BottomNavigationAction
        label="Experience"
        value="experience"
        icon={<AssignmentIcon />}
        onClick={() =>
          winSize.width < 959
            ? parallax.current.scrollTo(2)
            : parallax.current.scrollTo(1)
        }
      />
      <BottomNavigationAction
        label="Work"
        value="work"
        icon={<BusinessCenterIcon />}
        onClick={() =>
          winSize.width < 959
            ? parallax.current.scrollTo(3)
            : parallax.current.scrollTo(2)
        }
      />
      <BottomNavigationAction
        label="Contact"
        value="contact"
        icon={<ContactMailIcon />}
        onClick={() =>
          winSize.width < 959
            ? parallax.current.scrollTo(4)
            : parallax.current.scrollTo(3)
        }
      />
    </BottomNavigation>
  );
}
