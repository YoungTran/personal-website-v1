import { Button } from "@material-ui/core";
import React from "react";
import { parallax } from "../App";

export default function CTAButton() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Button
        variant="contained"
        margin="dense"
        onClick={() => parallax.current.scrollTo(4)}
        color="primary"
        style={{ fontSize: 20 }}
      >
        Contact Me !
      </Button>
    </div>
  );
}
