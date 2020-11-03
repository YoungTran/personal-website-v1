import { Typography } from "@material-ui/core";
import React, { memo, useState } from "react";
import { a, useSpring } from "react-spring";
import { useMeasure, usePrevious } from "./helpers";
import * as Icons from "./icons";
import infi from "./infi.png";
import proterra from "./proterra.png";
import { Content, Frame, Title, toggle } from "./styles";
import ynl from "./ynl.png";

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  });
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  );
});

const ExperienceSlider = () => (
  <Tree name="Experience" defaultOpen>
    <Tree name="2018" defaultOpen>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="caption" style={{ margin: ".5rem" }}>
          CoFounder and Software Engineer at
        </Typography>
        <img
          src={ynl}
          style={{ maxWidth: "30%", maxHeight: "30%" }}
          alt="ynl"
        />
      </div>
    </Tree>
    <Tree name="2019" defaultOpen>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="caption" style={{ margin: ".5rem" }}>
          Full Stack Developer at
        </Typography>
        <img
          src={infi}
          style={{ maxWidth: "30%", maxHeight: "30%" }}
          alt="infiswift1"
        />
      </div>
    </Tree>
    <Tree name="2020" defaultOpen>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="caption" style={{ margin: ".5rem" }}>
          Full Stack Developer at
        </Typography>
        <img
          src={infi}
          style={{
            maxWidth: "30%",
            maxHeight: "30%",
          }}
          alt="infiswift2"
        />

        <Typography variant="caption" style={{ margin: ".5rem" }}>
          Programmer Analyst and Software Engineer at
        </Typography>
        <img
          src={proterra}
          style={{
            maxWidth: "30%",
            maxHeight: "30%",
          }}
          alt="proterra"
        />
      </div>
    </Tree>
  </Tree>
);

export default ExperienceSlider;
