import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import FaceIcon from "@material-ui/icons/Face";
import React from "react";
import { parallax } from "../../App";

export default function SpringTab({ textValue, TabIcon, pageNum }) {
  return (
    <ListItem
      button
      onClick={() => {
        parallax.current.scrollTo(pageNum);
      }}
    >
      <ListItemIcon>
        <TabIcon />
      </ListItemIcon>
      <ListItemText primary={textValue} />
    </ListItem>
  );
}

export const mainListItems = (
  <div>
    <SpringTab textValue={"About"} TabIcon={FaceIcon} pageNum={1} />
    <SpringTab textValue={"Experience"} TabIcon={AssignmentIcon} pageNum={2} />
    <SpringTab textValue={"Work"} TabIcon={BusinessCenterIcon} pageNum={3} />
    <SpringTab textValue={"Contact"} TabIcon={ContactMailIcon} pageNum={4} />
  </div>
);

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
