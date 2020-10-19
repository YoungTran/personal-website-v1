import { Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { config, useChain, useSpring, useTransition } from "react-spring";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import DoubleArrowDown from "../DoubleArrowDown";
import data from "./data";
import { Container, Item } from "./styles";

export default function WorkTest() {
  const [open, set] = useState(false);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: { size: open ? "100%" : "20%", background: open ? "white" : "hotpink" },
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], (item) => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <ParallaxLayer
      offset={3}
      speed={1}
      style={{
        // backgroundColor: "#805E73",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">WORK .</Typography>
        <Container
          style={{ ...rest, width: size, height: size }}
          onClick={() => set((open) => !open)}
        >
          {transitions.map(({ item, key, props }) => (
            <Item key={key} style={{ ...props, background: item.css }}>
              {item.description}
            </Item>
          ))}
        </Container>
      </div>
      <DoubleArrowDown nextPage={4} />
    </ParallaxLayer>
  );
}

const items = [
  {
    text: "WORK .",
    element: "h4",
    style: {
      fontFamily: "Arial",
    },
  },
  {
    text:
      "Hello there. I'm Young, a software engineer based in Silicon Valley.",
    element: "h6",
    style: {
      fontFamily: "Arial",
    },
  },
  {
    text:
      "I enjoy creating things that live on the internet, whether that be\
          websites, applications, or anything in between. My goal is to build\
          great things for this world. Whether it be pixel-perfect experiences\
          or the handling of big data, I am always up for the challenge.",
    element: "h6",
    style: {
      fontFamily: "Arial",
      fontStretch: "100%",
    },
  },
  {
    text:
      "Being a 42 Silicon Valley Alumni, I have a cultivated a plethora of tools:",
    element: "h6",
    style: {
      fontFamily: "Arial",
      fontStretch: "100%",
      fontWeight: 600,
    },
  },
];
