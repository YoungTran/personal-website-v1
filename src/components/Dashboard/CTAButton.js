import { Button } from "@material-ui/core";
import React from "react";
import { themeColors } from "../../App";

export default function CTAButton() {
  return (
    <Button
      variant="contained"
      margin="dense"
      style={{
        marginTop: "2rem",
        color: "#fff",
        fontWeight: 600,
        backgroundColor: themeColors.first.color,
      }}
    >
      Reach Out
    </Button>
  );
}
