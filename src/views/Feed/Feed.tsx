import styled from "styled-components";
import { Entry } from "../../components/Entry";
import { useFeed } from "../../hooks/useFeed";

export const Feed = () => {
  const { data } = useFeed();
  return (
    <>
      <Scroll>
        {data?.map((entry) => (
          <Entry {...entry} key={entry.id} />
        ))}
      </Scroll>
    </>
  );
};

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-y: scroll;
`;
