import styled from 'styled-components'
import { useNavigation } from '../hooks/useNavigation'
import feedIcon from '../assets/feed.png'
import friendsIcon from '../assets/friends.png'
import addIcon from '../assets/add.png'
import calcIcon from '../assets/calc.png'
import rankingIcon from '../assets/ranking.png'

export const Bottomnav = () => {
  const { navigate, push } = useNavigation()
  return (
    <Container>
      <Element onClick={() => navigate('/feed')}>
        <img src={friendsIcon} />
      </Element>
      <Element onClick={() => navigate('/feed')}>
        <img src={feedIcon} />
      </Element>
      <Add onClick={() => push('/post/add')}>
        <img src={addIcon} />
      </Add>
      <Element onClick={() => navigate('/calc')}>
        <img src={calcIcon} />
      </Element>
      <Element onClick={() => navigate('/ranking')}>
        <img src={rankingIcon} />
      </Element>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: white !important;
  box-shadow: 0px 3px 10px 0px #00000070;
  z-index: 100;
`

const Element = styled.div`
  img {
    height: 30px;
    width: 30px;
    opacity: 0.8;
  }
`

const Add = styled.div`
  img {
    height: 30px;
    width: 30px;
    transform: scale(1.3);
    opacity: 0.8;
  }
`
