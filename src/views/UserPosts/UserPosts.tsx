import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Post } from "../../components/Post";
import { useUserPosts } from "../../queries/useUserPosts";

export const UserPosts = () => {
  const { userId, postId } = useParams();
  const { data } = useUserPosts(userId);

  useEffect(() => {
    if (!postId) return;
    document.getElementById(postId)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [postId]);

  return (
    <>
      <Scroll>
        {data?.map((post) => (
          <Post {...post} key={Math.random()} skeleton={false} />
        ))}
      </Scroll>
    </>
  );
};

const Scroll = styled.div`
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-y: scroll;
`;
