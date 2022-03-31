import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Touchable } from "../Touchable";
import like from "../../assets/like2.png";
import Skeleton from "react-loading-skeleton";

type PhotoProps = {
  src?: string | null;
  isLiked: boolean | null;
  setIsLiked: React.Dispatch<boolean>;
  skeleton: boolean;
};

export const Photo = (p: PhotoProps) => {
  const [showLikedIcon, setShowLikedIcon] = useState(false);
  const isInitial = useRef(true);

  const animateLike = useCallback(() => {
    setShowLikedIcon(true);
    setTimeout(() => setShowLikedIcon(false), 700);
  }, []);

  useEffect(() => {
    if (p.isLiked === null) return;
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    if (p.isLiked) animateLike();
  }, [p.isLiked, animateLike]);

  const handlePhotoDoubleClick = () => {
    if (!p.isLiked) p.setIsLiked(true);
    else animateLike();
  };

  return (
    <Container onDoubleTap={handlePhotoDoubleClick}>
      {p.skeleton ? (
        <Skeleton height={200} width="100vw" />
      ) : (
        <PostPhoto src={p.src ?? undefined} alt="entry" />
      )}
      <LikedIconContainer>
        <motion.img
          variants={LikedIconAnimation}
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

const PostPhoto = styled.img`
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
