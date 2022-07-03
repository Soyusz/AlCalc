import styled from 'styled-components'
import { useNavigation } from '../hooks/useNavigation'
import { ReactComponent as BackArrow } from '../assets/back.svg'

export const StackHeader = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <BackArrow onClick={navigation.back} />
    </Container>
  )
}

const Container = styled.div`
  height: 55px;
  background-color: ${(props) => props.theme.colors.appBackground};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-shadow: 0px 3px 10px 0px #00000030;
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  > svg {
    margin-right: auto;
    margin-left: 10px;
  }
`
