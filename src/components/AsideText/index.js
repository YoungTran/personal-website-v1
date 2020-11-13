import { Fade } from "@material-ui/core";
import React from "react";

export default function AsideText({ themeColors }) {
  return (
    <Fade in={true} timeout={{ enter: 2000 }}>
      <div className="side">
        <span style={{ color: themeColors.fifth.color, fontWeight: 600 }}>
          Made with{" "}
        </span>
        <span className="heart" role="img" aria-label="heart-emoji">
          ❤️
        </span>
        <span style={{ color: themeColors.fifth.color, fontWeight: 600 }}>
          {" "}
          by Young Tran
        </span>
      </div>
    </Fade>
  );
}
