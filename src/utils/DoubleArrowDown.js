import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { parallax, themeColors } from "../App";

export default function DoubleArrowDown({ nextPage, marginTop }) {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    <div
      onClick={() => toggle(!state)}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: marginTop ? marginTop : "20%",
      }}
    >
      <animated.div
        onClick={() => parallax.current.scrollTo(nextPage)}
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .interpolate((x) => `scale(${x})`),
        }}
      >
        <ArrowDownwardIcon
          style={{
            fontSize: "5rem",
            opacity: 0.5,

            color: themeColors.fifth.color,
          }}
          className="down-arrow keyblade"
        />
      </animated.div>
    </div>
  );
}
