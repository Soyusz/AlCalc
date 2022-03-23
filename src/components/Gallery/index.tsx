import { Link } from "react-router-dom";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { Post } from "../../types/post";

type GalleryProps = {
  posts: (Post | null)[];
  userId: string;
};

export const Gallery = ({ posts, userId }: GalleryProps) => {
  return (
    <Container>
      {posts?.map((post) => {
        if (post === null)
          return (
            <Image to="">
              <Skeleton />
            </Image>
          );
        return (
          <Image to={`/user/${userId}/posts/${post.id}/#${post.id}`}>
            <img src={post.photos[0]} alt="post" />
          </Image>
        );
      })}
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
  aspect-ratio: 1;
  overflow: hidden;
  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
