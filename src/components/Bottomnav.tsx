import styled from 'styled-components'
import { useNavigation } from '../hooks/useNavigation'
import feedIcon from '../assets/feed.png'
import friendsIcon from '../assets/friends.png'
import addIcon from '../assets/add.png'
import calcIcon from '../assets/calc.png'
import rankingIcon from '../assets/ranking.png'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

type ElementProps = {
  icon: string
  path: string
}
const Element = ({ icon, path }: ElementProps) => {
  const { pathname } = useLocation()
  const { navigate } = useNavigation()
  return (
    <ElementContainer onClick={() => navigate(`/home${path}`)}>
      <img src={icon} />
      {pathname === `/home${path}` && <Dot transition={{ duration: 0.2 }} layoutId="dot" />}
    </ElementContainer>
  )
}

export const Bottomnav = () => {
  const { push } = useNavigation()
  return (
    <Container>
      <Element path="/friends" icon={friendsIcon} />
      <Element path="/feed" icon={feedIcon} />
      <Add onClick={() => push('/post/add')}>
        <img src={addIcon} />
      </Add>
      <Element path="/calc" icon={calcIcon} />
      <Element path="/ranking" icon={rankingIcon} />
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
  border-radius: 15px;
  background-color: white !important;
  box-shadow: 0px 0px 10px 0px #00000020;
  z-index: 100;
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
`

const ElementContainer = styled.div`
  position: relative;
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

const Dot = styled(motion.div)`
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background: black;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
`
