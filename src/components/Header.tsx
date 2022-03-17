import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger.svg";

type HeaderProps = {
  onIconClick: () => void;
};

const NoMenuLocations = ["/login"];

export const Header = ({ onIconClick }: HeaderProps) => {
  const { pathname } = useLocation();
  return (
    <Container className="Header">
      {!NoMenuLocations.includes(pathname) && (
        <SidebarIcon onClick={onIconClick} />
      )}
      <Title>Alkierz v2</Title>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.appBackground};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  z-index: 30;
  box-shadow: 0px 3px 10px 0px #00000030;
  z-index: 200;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 20px 10px;
`;

const SidebarIcon = styled(HamburgerIcon)`
  font-weight: 900;
  height: 25px;
  width: 25px;
  position: absolute;
  left: 20px;
`;
