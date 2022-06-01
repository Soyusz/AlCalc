import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useUserContext } from '../contexts/User/useUserContext'
import { useNavigation } from '../hooks/useNavigation'
import homeIcon from '../assets/home.png'
import aboutIcon from '../assets/about.png'
import adminIcon from '../assets/admin.png'
import logoutIcon from '../assets/logout.png'
import settingsIcon from '../assets/settings.png'

type SidebarProps = {
  show: boolean
  onClick?: () => void
  afterClick?: () => void
}

type ElementProps = {
  name: string
  onClick?: () => void
  icon: string
}

const Element = ({ name, onClick, icon }: ElementProps) => (
  <ElementContainer onClick={onClick}>
    <img src={icon} />
    <span>{name}</span>
  </ElementContainer>
)

export const Sidebar = ({ show, onClick = () => {}, afterClick = () => {} }: SidebarProps) => {
  const { isAdmin } = useUserContext()
  const { navigate, push } = useNavigation()

  const handleNavigate = (path: string, stack = false) => {
    afterClick()
    if (stack) push(path)
    else navigate(path)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    location.reload()
  }

  return (
    <Container onClick={onClick} animate={show ? ContainerStyles.shown : ContainerStyles.hidden}>
      <Element onClick={() => handleNavigate('/home')} name="Home" icon={homeIcon} />
      <Element onClick={() => handleNavigate('/about')} name="About" icon={aboutIcon} />
      <Element onClick={() => {}} name="Settings" icon={settingsIcon} />
      <BottomBox>
        {isAdmin && <Element onClick={() => handleNavigate('/admin')} name="Admin" icon={adminIcon} />}
        <Element onClick={() => handleLogout()} name="Sign out" icon={logoutIcon} />
      </BottomBox>
    </Container>
  )
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: strech;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding-top: 10px;
  padding-bottom: 75px;
`

const BottomBox = styled.div`
  margin-top: auto;
`

const ContainerStyles = {
  shown: {
    width: 150,
    paddingRight: 10,
    paddingLeft: 10,
  },
  hidden: {
    width: 0,
    paddingRight: 0,
    paddingLeft: 0,
  },
}

const ElementContainer = styled.div`
  color: #1d1d1d;
  margin: 10px 0;
  padding: 8px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  transition: background-color 0.5s;
  text-decoration: none;

  display: flex;
  align-items: center;

  > img {
    height: 1em;
    margin-right: 15px;
  }

  > span {
    white-space: nowrap;
  }

  &:hover {
    background-color: #00000010;
  }
`
