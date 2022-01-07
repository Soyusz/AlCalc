import { motion } from "framer-motion";
import { builtinModules } from "module";
import { Link } from "react-router-dom";
import styled from "styled-components";

type SidebarProps = {
  show: boolean;
  onClick: () => void;
};

export const Sidebar = ({ show, onClick }: SidebarProps) => {
  return (
    <Container
      onClick={onClick}
      animate={show ? ContainerStyles.shown : ContainerStyles.hidden}
    >
      <Element to="/">Home</Element>
      <Element to="/ranking">Ranking</Element>
      <Element to="/about">About</Element>
    </Container>
  );
};

const Container = styled(motion.div)`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px 10px;
  align-items: strech;
`;

const ContainerStyles = {
  shown: {
    width: 150,
  },
  hidden: {
    width: 0,
    padding: 0,
  },
};

const Element = styled(Link)`
  color: #1d1d1d;
  margin: 10px 0;
  padding: 8px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  transition: background-color 0.5s;
  text-decoration: none;

  &:hover {
    background-color: #00000010;
  }
`;
