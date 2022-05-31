import { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Modal } from '../../components/Modal'
import MailIcon from '../../assets/mail.png'
import { useNavigation } from '../../hooks/useNavigation'

export const Register = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const navigation = useNavigation()

  return (
    <>
      <Container>
        <Title>Create an account</Title>
        <Subtitle>To start using the app, please enter your email address.</Subtitle>
        <SInput value={email} onValueChange={setEmail} label="Email" type="email" placeholder="Email" />
        <SButton label="Next" onClick={() => mutate({ email, name })} disabled={isLoading} />
      </Container>
    </>
  )
}

const descText =
  'A link activating this session has been sent to your email address. Click on it to complete the registration process. You may need to check your "spam" folder.'

const descText2 =
  'The email address you entered was not found in the database. If you already have an account, please make sure you have entered the email correctly. If you are new here, you can proceed to create a new account.'

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 64px 16px 16px 16px;
`

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #333a55;
`

const Container = styled.div`
  justify-content: center;
  display: grid;
  grid-template: auto auto 1fr 1fr auto / 1fr;
  align-items: center;
  justify-items: center;
  padding: 20px;
`

const SInput = styled(Input)``

const SButton = styled(Button)`
  grid-row: 5 / 6;
`
