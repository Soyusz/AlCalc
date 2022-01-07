import styled from "styled-components";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger.svg";

type HeaderProps = {
  onIconClick: () => void;
};

export const Header = ({ onIconClick }: HeaderProps) => {
  return (
    <Container className="Header">
      <SidebarIcon onClick={onIconClick} />
      <Title>AlCalc</Title>
    </Container>
  );
};

const Container = styled.div`
  background-color: #266bff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: calc(100vw);
  z-index: 30;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: white;
  padding: 20px 10px;
`;

const SidebarIcon = styled(HamburgerIcon)`
  font-weight: 900;
  height: 25px;
  width: 25px;
  position: absolute;
  left: 20px;
`;
