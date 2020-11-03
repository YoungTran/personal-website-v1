import { Button } from "@material-ui/core";
import React from "react";
import { parallax, themeColors } from "../App";

export default function CTAButton() {
  return (
    <Button
      variant="contained"
      margin="dense"
      onClick={() => parallax.current.scrollTo(4)}
      style={{
        marginTop: "2rem",
        color: themeColors.fifth.color,
        fontWeight: 600,
        backgroundColor: "#CC4F51",
      }}
    >
      Send Me a Message
    </Button>
  );
}
