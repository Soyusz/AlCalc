import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Gallery } from "../../components/Gallery";
import { SkelText } from "../../components/SkelText";
import { useUser } from "../../queries/useUser";
import { useUserPosts } from "../../queries/useUserPosts";

const sampleImage = "https://avatars.githubusercontent.com/u/45801065";

export const User = () => {
  const { userId } = useParams();
  const { data: user } = useUser(userId ?? "");
  const { data: posts } = useUserPosts(userId);

  if (!userId) return null;

  return (
    <>
      <Container>
        <UserImage src={sampleImage} />
        <UserName>
          <SkelText v={user?.name} w={10} />
        </UserName>
        <Gallery userId={userId} posts={posts ?? Array(9).fill(null)} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const UserImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

const UserName = styled.div`
  margin: 15px 0 50px 0;
  font-size: 22px;
  font-weight: 600;
`;
