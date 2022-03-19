import styled from "styled-components";
import { useUserPosts } from "../../queries/useUserPosts";

type GalleryProps = {
  userId: string;
};

export const Gallery = ({ userId }: GalleryProps) => {
  const { data: temp } = useUserPosts(userId);
  const data = temp ?? [];
  const posts = [...data, ...data, ...data, ...data];

  return (
    <Container>
      {posts?.map((post) => (
        <Image src={""} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  grid-gap: 5px;
  padding: 5px;
`;

const Image = styled.img`
  background-color: red;
  aspect-ratio: 1;
  overflow: hidden;
  object-fit: cover;
`;
