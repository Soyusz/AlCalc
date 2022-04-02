import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { useNavigation } from "../../hooks/useNavigation";
import { useUser } from "../../queries/useUser";
import { Post as PostType } from "../../types/post";
import { SkelText } from "../SkelText";

const placeholderImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.WHfN_fEpKjn2hGiq_OgIUAHaHa%26pid%3DApi&f=1";

type Props =
  | ({ skeleton: true } & Partial<PostType>)
  | ({ skeleton: false } & PostType);

export const Top = (p: Props) => {
  const { data: user, isLoading: isUserLoading } = useUser(
    !p.skeleton && p.user_id
  );
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { push } = useNavigation();
  const handleClick = () => {
    if (p.skeleton) return;
    push(`/user/${p.user_id}`);
  };

  const displayImageSkeleton = p.skeleton || !isImageLoaded;
  const imageSrc =
    !isUserLoading && !user?.photo
      ? placeholderImage
      : user?.photo ?? undefined;

  return (
    <Container>
      <UserPhoto onClick={handleClick}>
        {displayImageSkeleton && <UserPhotoSkeleton />}
        <img
          alt="user"
          hidden={!isImageLoaded}
          src={imageSrc}
          onLoad={() => setIsImageLoaded(true)}
        />
      </UserPhoto>
      <Username onClick={handleClick}>
        <SkelText v={user?.name} w={9} />
      </Username>
      <Location>
        <SkelText v={p.location} w={13} />
      </Location>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template: auto / auto 1fr;
  margin: 10px 5px;
`;

const UserPhoto = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  grid-row: 1 / 3;
  margin-right: 10px;
  overflow: hidden;
  & > img {
    height: 100%;
    width: 100%;
  }
`;
const UserPhotoSkeleton = () => <Skeleton width="35px" height="35px" circle />;

const Username = styled.div`
  font-weight: 600;
`;

const Location = styled.div`
  font-weight: 300;
  font-size: 14px;
`;
