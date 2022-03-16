import styled from "styled-components";
import { Entry as EntryType } from "../types/entry";
import like1 from "../assets/like1.png";
import like2 from "../assets/like2.png";
import share from "../assets/share.png";
import { useState } from "react";

const sampleImage = "https://avatars.githubusercontent.com/u/45801065";

export const Entry = (props: EntryType) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Container>
      <Top>
        <TopUserPhoto src={sampleImage} />
        <TopUsername>Magulloff</TopUsername>
        {true && <TopLocation>Warsaw</TopLocation>}
      </Top>
      <Photo>
        <img src={props.photo ?? undefined} />
      </Photo>
      <Bottom>
        <Like
          src={isLiked ? like2 : like1}
          onClick={() => setIsLiked(!isLiked)}
        />
        <Share src={share} />
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.colors.background};
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
`;

const Top = styled.div`
  display: grid;
  grid-template: auto / auto 1fr;
  margin: 10px 5px;
`;

const TopUserPhoto = styled.img`
  height: 35px;
  widht: 35px;
  border-radius: 50%;
  grid-row: 1 / 3;
  margin-right: 10px;
`;
const TopUsername = styled.div`
  font-weight: 600;
`;
const TopLocation = styled.div`
  font-weight: 300;
  font-size: 14px;
`;

const Photo = styled.div`
  display: flex;
  overflow: hidden;
  & > img {
    min-height: 200px;
    width: 100%;
  }
`;

const Bottom = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin: 0 5px;
`;

const Like = styled.img`
  height: 30px;
  margin: 0 10px;
`;

const Share = styled.img`
  height: 30px;
  margin: 0 10px;
`;
