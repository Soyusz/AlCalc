import styled from "styled-components";
import { Entry as EntryType } from "../../types/entry";
import { useState } from "react";
import { Top } from "./Top";
import { Bottom } from "./Bottom";
import { Photo } from "./Photo";

export const Entry = (props: EntryType) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Container>
      <Top {...props} />
      <Photo src={props.photo} {...{ isLiked, setIsLiked }} />
      <Bottom {...{ isLiked, setIsLiked }} />
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
