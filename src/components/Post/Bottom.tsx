import styled from "styled-components";
import like1 from "../../assets/like1.png";
import like2 from "../../assets/like2.png";
import share from "../../assets/share.png";

type BottomProps = { isLiked: boolean; setIsLiked: React.Dispatch<boolean> };

export const Bottom = ({ isLiked, setIsLiked }: BottomProps) => {
  return (
    <Container>
      <Like
        src={isLiked ? like2 : like1}
        onClick={() => setIsLiked(!isLiked)}
      />
      <Share src={share} />
    </Container>
  );
};

const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin: 0 5px;
`;

const Like = styled.img`
  height: 30px;
  margin: 0 10px;
`;

const Share = styled.img`
  height: 30px;
  margin: 0 10px;
`;
