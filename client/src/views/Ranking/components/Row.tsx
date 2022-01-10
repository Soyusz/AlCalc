import styled from "styled-components";

export type RowProps = {
  name: string;
  photo?: string;
  score: number;
  place: number;
};

export const Row = (p: RowProps) => {
  return (
    <Container>
      <Image src={p.photo} />
      <Name>{p.name}</Name>
      <Score>{Math.floor(p.score)}</Score>
      <Place>{p.place}</Place>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template: 1fr 1fr / auto 1fr auto;
  padding: 20px 0;
  border-bottom: 1px solid #00000013;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;

const Name = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin-left: 10px;
  font-weight: 600;
`;

const Score = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  margin-left: 10px;
  color: #00000093;
`;

const Place = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  color: #00000093;
`;
