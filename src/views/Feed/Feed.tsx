import { useEffect, useState } from "react";
import styled from "styled-components";
import { Post } from "../../components/Post";
import { useFeed } from "../../queries/useFeed";

export const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { data } = useFeed();

  useEffect(() => {
    if (!data) return;
    setTimeout(() => setIsLoading(false), 1000);
  }, [data]);

  return (
    <>
      <Scroll disabled={isLoading}>
        {isLoading && (
          <>
            <Post key={1} skeleton />
            <Post key={2} skeleton />
            <Post key={3} skeleton />
          </>
        )}
        {data &&
          data?.map((post) => (
            <Post {...post} key={Math.random()} skeleton={false} />
          ))}
      </Scroll>
    </>
  );
};

const Scroll = styled.div<{ disabled?: boolean }>`
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-y: ${({ disabled }) => (disabled ? "hidden" : "scroll")} !important;
`;
