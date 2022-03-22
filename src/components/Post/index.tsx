import styled from "styled-components";
import { Post as PostType } from "../../types/post";
import { useEffect, useState } from "react";
import { Top } from "./Top";
import { Bottom } from "./Bottom";
import { Photo } from "./Photo";
import { useFetchLike } from "../../queries/useFetchLike";
import { useSendLike } from "../../queries/useSendLike";

export type PostProps =
  | ({ skeleton: false } & PostType)
  | ({ skeleton: true } & Partial<PostType>);

export const Post = (props: PostProps) => {
  const { amILiking, isLoading: areLikesLoading } = useFetchLike(props.id);
  const { mutate: sendLike } = useSendLike();
  const [isLiked, setIsLiked] = useState<boolean | null>(null);

  useEffect(() => setIsLiked(amILiking), [amILiking]);

  const isLoading = areLikesLoading;
  const isSkeleton = isLoading || props.skeleton;

  const handleLikePost = (value: boolean) => {
    sendLike({ value, postId: props.id as string });
    setIsLiked(value);
  };

  return (
    <Container id={props.id}>
      <Top {...props} />
      <Photo
        src={props.photos?.[0]}
        isLiked={isLiked}
        setIsLiked={handleLikePost}
        skeleton={isSkeleton}
      />
      <Bottom
        isLiked={isLiked}
        setIsLiked={handleLikePost}
        skeleton={props.skeleton || isLoading}
      />
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
