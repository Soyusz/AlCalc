import { animate, motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as Ellipse } from "../../../assets/ellipse.svg";

type RingProps = {
  fill: number;
  total: number;
};

export const Ring: React.FC<RingProps> = ({ fill }) => {
  const ref = useRef<HTMLDivElement>(null);
  const v = useSpring(fill);

  useEffect(() => {
    v.onChange(() => {
      if (!ref.current) return;
      ref.current.innerText = v.get().toFixed(2);
    });
  }, [ref.current]);

  useEffect(() => {
    v.set(isNaN(fill) ? 0 : fill);
  }, [fill]);

  return (
    <Container>
      <Inside ref={ref}>0.00</Inside>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Inside = styled(motion.div)`
  align-self: center;
  font-size: 90px;
  margin: 30px 0px;
  color: white;
`;
