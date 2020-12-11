import { Fade } from "@material-ui/core";
import React from "react";
import { themeColors } from "../../App";

export default function AsideText() {
  return (
    <Fade in={true} timeout={{ enter: 2000 }}>
      <div className="side">
        <span style={{ color: themeColors.fifth.color, fontWeight: 600 }}>
          Created{" "}
        </span>
        <span style={{ color: themeColors.fifth.color, fontWeight: 600 }}>
          {" "}
          by Young Tran
        </span>
      </div>
    </Fade>
  );
}
