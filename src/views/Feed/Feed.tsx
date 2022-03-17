import styled from "styled-components";
import { Post } from "../../components/Post";
import { useFeed } from "../../queries/useFeed";

export const Feed = () => {
  const { data } = useFeed();
  return (
    <>
      <Scroll>
        {data?.map((post) => (
          <Post {...post} key={Math.random()} />
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
