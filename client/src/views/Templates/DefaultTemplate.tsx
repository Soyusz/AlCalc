import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export const DefaultTemplate: React.FC = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClickContent = () => {
    if (!showSidebar) return;
    setShowSidebar(false);
  };

  return (
    <Container>
      <Header onIconClick={() => setShowSidebar(!showSidebar)} />
      <Sidebar show={showSidebar} onClick={() => setShowSidebar(false)} />
      <Content onClick={handleClickContent}>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template: auto 1fr / auto 100vw;
  overflow: hidden;

  .Header {
    grid-column: 1 / 3;
  }
`;

const Content = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
