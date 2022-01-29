import styled from "styled-components";

export const About = () => {
  return (
    <Container>
      <Element></Element>
      <Element></Element>
      <Element></Element>
      <Soyusz>
        <div className="title">
          <h5>created by</h5>
          <h4>Soyusz</h4>
        </div>
        <div className="links">
          <a href="https://soyusz.netlify.app/">website</a>
          <a href="https://github.com/Soyusz">github</a>
        </div>
      </Soyusz>
      <Element></Element>
      <Element></Element>
    </Container>
  );
};

const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  grid-gap: 20px;
  padding: 20px;
  display: grid !important;
  grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr;
  align-items: stretch !important;
`;

const Element = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  background-position: center;
  background-size: cover;

  &:nth-of-type(1) {
    background-image: url("http://localhost:3000/alcwojak.png");
  }
  &:nth-of-type(2) {
    grid-row: 1 / 3;
    background-image: url("http://localhost:3000/bigbrain.jpeg");
    transform: scaleX(-1);
    grid-column: 2 / 3;
  }
  &:nth-of-type(3) {
    background: #000000;
  }
  &:nth-of-type(4) {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  &:nth-of-type(5) {
    background-image: url("http://localhost:3000/soyjack.png");
  }
  &:nth-of-type(6) {
    background: black;
  }
`;

const Soyusz = styled(Element)`
  .title {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    align-items: center;
    h5 {
      margin: 0;
      font-weight: 300;
    }
    h4 {
      margin: 0;
      font-size: 30px;
    }
  }

  .links {
    align-self: stretch;
    display: flex;
    justify-content: space-around;

    a {
      color: black;
      font-size: 15px;
    }
  }
`;
