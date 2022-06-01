import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as HamburgerIcon } from '../assets/hamburger.svg'
import { ReactComponent as BackArrow } from '../assets/back.svg'
import { useNavigation } from '../hooks/useNavigation'
import { stackScreens } from './Navigation/Navigator'
import { useHistory } from '../contexts/History/useHistory'
const NoMenuLocations = ['/login']

export const Header = () => {
  const { pathname } = useLocation()
  const isStack = pathname.includes('/stack')
  const { back } = useNavigation()
  const { toggleSidebar } = useHistory()

  if (isStack)
    return (
      <Container className="Header">
        <BackIcon onClick={back} />
        <Title>{stackScreens.find((e) => pathname.includes(e.path))?.name}</Title>
      </Container>
    )

  return (
    <Container className="Header">
      {!NoMenuLocations.includes(pathname) && <SidebarIcon onClick={() => toggleSidebar()} />}
      <Title>Alkierz v2</Title>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.appBackground};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  box-shadow: 0px 3px 10px 0px #00000030;
  z-index: 200;
  position: fixed;
  top: 0;
  min-height: 65px;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 20px 10px;
  content: '1';
`

const SidebarIcon = styled(HamburgerIcon)`
  font-weight: 900;
  height: 25px;
  width: 25px;
  position: absolute;
  left: 20px;
`
const BackIcon = styled(BackArrow)`
  font-weight: 900;
  height: 25px;
  width: 25px;
  position: absolute;
  left: 18px;
`
