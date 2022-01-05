import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <Title>CalcOfAlc</Title>
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
