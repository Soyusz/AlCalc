import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

type SidebarProps = {
  show: boolean;
  onClick?: () => void;
  afterClick?: () => void;
};

export const Sidebar = ({
  show,
  onClick = () => {},
  afterClick = () => {},
}: SidebarProps) => {
  return (
    <Container
      onClick={onClick}
      animate={show ? ContainerStyles.shown : ContainerStyles.hidden}
    >
      <Element to="/" onClick={afterClick}>
        Home
      </Element>
      <Element to="/ranking" onClick={afterClick}>
        Ranking
      </Element>
      <Element to="/about" onClick={afterClick}>
        About
      </Element>
    </Container>
  );
};

const Container = styled(motion.div)`
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
