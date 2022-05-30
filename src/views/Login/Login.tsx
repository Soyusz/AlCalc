import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Modal } from '../../components/Modal'
import { useUserContext } from '../../contexts/User/useUserContext'
import { useNavigation } from '../../hooks/useNavigation'
import { useLogin } from '../../queries/useLogin'
import { useMe } from '../../queries/useMe'

export const Login = () => {
  const { setToken, token } = useUserContext()
  const { mutate, isSuccess, data, error } = useLogin()
  const { refetch, isSuccess: isMeSuccess } = useMe(token)
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [showAuthSessionModal, setShowAuthSessionModal] = useState(false)

  const handleClick = () => {
    if (!email) return
    mutate({ email })
  }

  useEffect(() => {
    if (!isSuccess || !data?.token) return
    setToken(data.token)
    setShowAuthSessionModal(true)
  }, [isSuccess, data?.token, navigation, setToken])

  useEffect(() => {
    if (!showAuthSessionModal) return
    const interval = setInterval(() => refetch(), 5 * 1000)
    return () => clearInterval(interval)
  }, [showAuthSessionModal])

  useEffect(() => {
    if (showAuthSessionModal && isMeSuccess) navigation.navigate('/')
  }, [isMeSuccess])

  return (
    <>
      <Container>
        <SInput
          value={email}
          onValueChange={setEmail}
          label="Email"
          type="email"
          error={error ? ['Invalid email'] : undefined}
        />
        <SButton label="Log in" onClick={handleClick} />
        <Modal
          isOpen={showAuthSessionModal}
          title="Authorize your session"
          text="Lorem ipsum aksjdadja kasj dsaf jsad; fnsda ;fan sf"
        />
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: grid !important;
  justify-items: center;
  grid-template: 2fr auto auto 3fr / 1fr;
`

const SInput = styled(Input)`
  grid-row: 2 / 3;
  width: 250px;
  max-width: 90vw;
  align-self: stretch;
`

const SButton = styled(Button)`
  grid-row: 3 / 4;
  width: 250px;
  max-width: 90vw;
`
