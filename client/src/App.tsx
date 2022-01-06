import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Navigator } from "./components/Navigation/Navigator";
import { Sidebar } from "./components/Sidebar";
import { Fallback404 } from "./views/Fallback404/Fallback404";
import { Home } from "./views/Home/Home";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <Container>
      <Header onIconClick={() => setShowSidebar(!showSidebar)} />
      <Sidebar show={showSidebar} />
      <Navigator />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template: auto 1fr / auto 100vw;
  overflow: hidden;

  .Header {
    grid-column: 1 / 3;
  }
`;

export default App;
