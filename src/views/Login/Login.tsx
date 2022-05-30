import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Modal } from '../../components/Modal'
import { useUserContext } from '../../contexts/User/useUserContext'
import { useNavigation } from '../../hooks/useNavigation'
import { useLogin } from '../../queries/useLogin'
import { useMe } from '../../queries/useMe'
import MailIcon from '../../assets/mail.png'

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
        <Modal isOpen={showAuthSessionModal} title="Authorize your session" text={descText} icon={MailIcon} />
      </Container>
    </>
  )
}

const descText =
  'A link activating this session has been sent to your email address. Click on it to complete the registration process. You may need to check your "spam" folder.'

const Container = styled.div`
  justify-content: center;
  display: grid;
  grid-template: 1fr auto / 1fr;
  align-items: center;
  justify-items: center;
  padding: 20px;
`

const SInput = styled(Input)``

const SButton = styled(Button)``
