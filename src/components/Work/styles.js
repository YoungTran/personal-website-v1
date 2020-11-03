import { animated } from "react-spring";
import styled from "styled-components";

const Container = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  margin: 25px;
  border-radius: 5px;

  cursor: pointer;

  will-change: width, height;
  max-width: 60rem;
`;

const Item = styled(animated.div)`
  border-radius: 5px;
  box-shadow: 10px 20px 10px -5px rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
`;

export { Container, Item };
