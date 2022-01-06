import React from "react";
import styled from "styled-components";
import { ReactComponent as Ellipse } from "../../../assets/ellipse.svg";

type RingProps = {
  fill: number;
  total: number;
};

export const Ring: React.FC<RingProps> = ({ children }) => {
  return (
    <Container>
      <Inside>{children}</Inside>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Inside = styled.div`
  align-self: center;
  font-size: 90px;
  margin: 30px 0px;
`;
