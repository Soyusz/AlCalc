import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUserPosts } from "../../queries/useUserPosts";

type GalleryProps = {
  userId: string;
};

export const Gallery = ({ userId }: GalleryProps) => {
  const { data: posts } = useUserPosts(userId);

  return (
    <Container>
      {posts?.map((post) => (
        <Image to={`/user/${userId}/posts/${post.id}/#${post.id}`}>
          <img src={post.photos[0]} />
        </Image>
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

const Image = styled(Link)`
  background-color: red;
  aspect-ratio: 1;
  overflow: hidden;
  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
