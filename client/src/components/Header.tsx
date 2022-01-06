import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { titleMap } from "./Navigation/TitleMap";

export const Header = () => {
  const params = useLocation();
  console.log(params);
  return (
    <Container>
      <Title>{titleMap.get(params.pathname)}</Title>
    </Container>
  );
};

const Container = styled.div`
  background-color: #0066ff;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: white;
  padding: 20px 10px;
`;
