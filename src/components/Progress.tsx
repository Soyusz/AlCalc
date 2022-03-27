import { motion } from "framer-motion";
import styled from "styled-components";

type states = "done" | "active" | "todo";

type Props = {
  current: number;
  total: number;
};

type BarProps = {
  state: states;
};

export const Progress = ({ total, current }: Props) => {
  const getState = (i: number): states => {
    if (i < current) return "done";
    if (i === current) return "active";
    return "todo";
  };

  return (
    <Container>
      {Array(total)
        .fill(0)
        .map((_, i) => (
          <Bar state={getState(i)} />
        ))}
    </Container>
  );
};

export const Bar = ({ state }: BarProps) => {
  return (
    <BarContainer>
      <Fill
        initial={{ width: "0%" }}
        animate={{ width: state === "todo" ? "0%" : "100%" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      />
    </BarContainer>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
`;

const BarContainer = styled.div`
  flex: 1;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin: 0 5px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const Fill = styled(motion.div)`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  inset: 0;
`;
