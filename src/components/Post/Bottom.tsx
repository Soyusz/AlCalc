import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import like1 from '../../assets/like1.png'
import like2 from '../../assets/like2.png'

type BottomProps = {
  isLiked: boolean | null
  setIsLiked: React.Dispatch<boolean>
  skeleton?: boolean
}

export const Bottom = ({ isLiked, setIsLiked, skeleton }: BottomProps) => {
  return (
    <Container>
      <IconContainer onClick={() => setIsLiked(!isLiked)}>
        {!skeleton ? <img alt="icon" src={isLiked ? like2 : like1} /> : <IconSkeleton />}
      </IconContainer>
    </Container>
  )
}

const IconSkeleton = () => <Skeleton height="100%" width="30px" />

const Container = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  margin: 0 5px;
`

const IconContainer = styled.div`
  height: 30px;
  width: 30px;
  margin: 0 10px;
  > * {
    height: 100%;
  }
`
