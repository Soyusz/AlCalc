import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Touchable } from "../Touchable";
import like from "../../assets/like2.png";
import Skeleton from "react-loading-skeleton";

type PhotoProps = {
  src?: string | null;
  isLiked: boolean;
  setIsLiked: React.Dispatch<boolean>;
  skeleton: boolean;
};

export const Photo = ({ src, isLiked, setIsLiked, skeleton }: PhotoProps) => {
  const [showLikedIcon, setShowLikedIcon] = useState(false);

  const animateLike = useCallback(() => {
    setShowLikedIcon(true);
    setTimeout(() => setShowLikedIcon(false), 700);
  }, []);

  useEffect(() => {
    if (!isLiked) return;
    animateLike();
  }, [isLiked, animateLike]);

  const handlePhotoDoubleClick = () => {
    if (isLiked) return animateLike();
    setIsLiked(true);
  };

  return (
    <Container onDoubleTap={handlePhotoDoubleClick}>
      {skeleton ? (
        <Skeleton height={200} width="100vw" />
      ) : (
        <EntryPhoto src={src ?? undefined} alt="entry" />
      )}
      <LikedIconContainer>
        <motion.img
          variants={LikedIconAnimation}
          initial="hidden"
          animate={showLikedIcon ? "shown" : "hidden"}
          src={like}
          alt="like"
        />
      </LikedIconContainer>
    </Container>
  );
};

const LikedIconAnimation = {
  shown: {
    transformOrigin: "25px 25px",
    transform: "scale(1)",
  },
  hidden: {
    transformOrigin: "25px 25px",
    transform: "scale(0)",
  },
};

const Container = styled(Touchable)`
  display: flex;
  overflow: hidden;
  position: relative;
`;

const EntryPhoto = styled.img`
  min-height: 200px;
  width: 100%;
`;

const LikedIconContainer = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  align-items: center;
  justify-content: center;
  & > img {
    height: 50px;
    width: 50px;
  }
`;
