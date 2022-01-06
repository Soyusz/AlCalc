import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { titleMap } from "./Navigation/TitleMap";

type HeaderProps = {
  onIconClick: () => void;
};

export const Header = ({ onIconClick }: HeaderProps) => {
  return (
    <Container className="Header">
      <SidebarIcon onClick={onIconClick}>E</SidebarIcon>
      <Title>AlCalc</Title>
    </Container>
  );
};

const Container = styled.div`
  background-color: #0066ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: white;
  padding: 20px 10px;
`;

const SidebarIcon = styled.div`
  font-weight: 900;
`;
