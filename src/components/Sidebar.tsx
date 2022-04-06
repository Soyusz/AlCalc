import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useUserContext } from '../contexts/User/useUserContext'
import { useNavigation } from '../hooks/useNavigation'

type SidebarProps = {
  show: boolean
  onClick?: () => void
  afterClick?: () => void
}

export const Sidebar = ({ show, onClick = () => {}, afterClick = () => {} }: SidebarProps) => {
  const { isAdmin } = useUserContext()
  const { navigate } = useNavigation()
  const handleNavigate = (path: string) => {
    afterClick()
    navigate(path)
  }
  return (
    <Container onClick={onClick} animate={show ? ContainerStyles.shown : ContainerStyles.hidden}>
      <Element onClick={() => handleNavigate('/')}>Home</Element>
      <Element onClick={() => handleNavigate('/calc')}>Calc</Element>
      <Element onClick={() => handleNavigate('/ranking')}>Ranking</Element>
      <Element onClick={() => handleNavigate('/about')}>About</Element>
      {isAdmin && (
        <>
          <Element onClick={() => handleNavigate('/admin')}>Admin</Element>
        </>
      )}
    </Container>
  )
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px 10px;
  align-items: strech;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`

const ContainerStyles = {
  shown: {
    width: 150,
  },
  hidden: {
    width: 0,
    padding: 0,
  },
}

const Element = styled.div`
  color: #1d1d1d;
  margin: 10px 0;
  padding: 8px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  transition: background-color 0.5s;
  text-decoration: none;

  &:hover {
    background-color: #00000010;
  }
`
