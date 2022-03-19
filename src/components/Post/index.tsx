import styled from "styled-components";
import { Post as PostType } from "../../types/post";
import { useState } from "react";
import { Top } from "./Top";
import { Bottom } from "./Bottom";
import { Photo } from "./Photo";

export const Post = (props: PostType) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Container id={props.id}>
      <Top {...props} />
      <Photo src={props.photos[0]} {...{ isLiked, setIsLiked }} />
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
