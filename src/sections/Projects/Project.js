import { Hidden, Typography } from "@material-ui/core";
import React from "react";
import { themeColors } from "../../App";

export default function Project({ arr, item, winSize }) {
  return (
    <div
      style={{
        height: winSize.width < 959 ? 150 : 300,
        width: winSize.width < 959 ? 150 : 300,
        padding: "2rem",
        border: `.1px solid ${themeColors.fifth.color}`,
        boxShadow: `0 10px 30px -15px ${themeColors.fifth.color}`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography style={{ fontSize: "1rem", fontWeight: 600 }}>
          {arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1) + " ")}
        </Typography>

        <a href={item.html_url}>
          <i
            className="fa fa-github keyblade"
            style={{ fontSize: "2rem", color: "#fff" }}
          ></i>
        </a>
      </div>
      <Hidden smDown>
        <Typography style={{ fontSize: ".8rem" }}>
          {item.description}
        </Typography>
      </Hidden>
    </div>
  );
}
