import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import like1 from '../../assets/like1.png'
import like2 from '../../assets/like2.png'

type BottomProps = {
  isLiked: boolean | null
  setIsLiked: React.Dispatch<boolean>
  title?: string
  likeNumber?: number
  author?: string
  skeleton?: boolean
}

export const Bottom = ({ isLiked, setIsLiked, skeleton, ...p }: BottomProps) => {
  return (
    <Container>
      <IconContainer onClick={() => setIsLiked(!isLiked)}>
        {!skeleton ? <img alt="icon" src={isLiked ? like2 : like1} /> : <IconSkeleton />}
      </IconContainer>
      {!!p.likeNumber && <LikeNumber>{`${p.likeNumber > 1 ? p.likeNumber : ''} cheers`}</LikeNumber>}
      {
        <Title>
          <span>{p.author && `${p.author} `}</span>
          {p.title}
        </Title>
      }
    </Container>
  )
}

const IconSkeleton = () => <Skeleton height="100%" width="30px" />

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 15px 10px 15px;
  flex-direction: column;
`

const LikeNumber = styled.div`
  font-weight: 600;
`
const Title = styled.div`
  > span {
    font-weight: 600;
  }
`

const IconContainer = styled.div`
  height: 30px;
  width: 30px;
  margin: 10px 0px;
  > * {
    height: 100%;
  }
`
