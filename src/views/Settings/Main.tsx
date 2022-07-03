import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../assets/back.svg'
import { useNavigation } from '../../hooks/useNavigation'

export const Main = () => {
  return (
    <Container>
      <Category text="My Profile" navigate="/myProfile" />
      <Category text="My Entries" navigate="/myEntriesStatus" />
      <Category text="Language" disabled />
      <Category text="Notifications" disabled />
      <Category text="Privacy Policy" disabled />
    </Container>
  )
}

const Container = styled.div``

type CategoryProps = {
  text: string
  navigate?: string
  disabled?: boolean
}

const Category = (p: CategoryProps) => {
  const { navigate } = useNavigation()
  return (
    <CategoryContainer
      disabled={p.disabled}
      onClick={() => !p.disabled && p.navigate && navigate(`/settings${p.navigate}`)}>
      <span>{p.text}</span>
      <Arrow />
    </CategoryContainer>
  )
}

const CategoryContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 10px 0px #ccc;
  margin: 10px 10px;

  > span {
    font-size: 16px;
    display: flex;
    align-items: center;
    font-weight: 700;
    opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  }

  > svg {
    transform: rotate(180deg);
    height: 20px;
    opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  }
`
