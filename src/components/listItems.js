import { Fade } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import FaceIcon from "@material-ui/icons/Face";
import React, { useEffect, useState } from "react";
import { parallax } from "../App";

export default function SpringTab({ textValue, TabIcon, pageNum }) {
  return (
    <ListItem
      button
      onClick={() => {
        parallax.current.scrollTo(pageNum);
      }}
    >
      <TabIcon style={{ color: "#fff", padding: 0, margin: 0 }} />

      <ListItemText primary={textValue} />
    </ListItem>
  );
}

export const MainListItems = (props) => {
  const isHome = window.location.pathname === "/";
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 150);
  }, []);
  const navItems = [
    { navText: "About", TabIcon: FaceIcon, pageNum: 0.9 },
    { navText: "Experience", TabIcon: AssignmentIcon, pageNum: 2 },
    { navText: "Work", TabIcon: BusinessCenterIcon, pageNum: 3 },
    { navText: "Contact", TabIcon: ContactMailIcon, pageNum: 4 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {isMounted &&
        navItems.map((navItem, i) => {
          const { navText, TabIcon, pageNum } = navItem;
          return (
            <Fade in={true} timeout={{ enter: i * 1000 }}>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <SpringTab
                  textValue={navText}
                  TabIcon={TabIcon}
                  pageNum={pageNum}
                />
              </li>
            </Fade>
          );
        })}
    </div>
  );
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
