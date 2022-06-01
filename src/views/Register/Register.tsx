import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Modal } from '../../components/Modal'
import { useNavigation } from '../../hooks/useNavigation'
import { useRegister } from '../../queries/useRegister'

export const Register = () => {
  const [params] = useSearchParams()
  const [email, setEmail] = useState(params.get('email') ?? '')
  const [name, setName] = useState('')

  const navigation = useNavigation()

  const { mutate, isLoading, isSuccess } = useRegister()

  return (
    <>
      <Container>
        <Title>Create an account</Title>
        <Subtitle>We are glad you want to join us</Subtitle>
        <InputContainer>
          <Input value={email} onValueChange={setEmail} label="Email" type="email" placeholder="Email" />
          <Input value={name} onValueChange={setName} label="Name" type="text" placeholder="Name" />
        </InputContainer>
        <SButton label="Next" onClick={() => mutate({ email, name })} disabled={isLoading} />
        <Modal
          title="Account has been created"
          text={text1}
          isOpen={isSuccess}
          primaryLabel="Go to login page"
          handlePrimaryClick={() => navigation.navigate('/login')}
        />
      </Container>
    </>
  )
}

const text1 =
  'We sent you an email with an activation link to your address. To complete the registration process, confirm your account. You will then be able to proceed to login.'

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 64px;
  margin-bottom: 16px;
  text-align: center;
`

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #333a55;
  margin: 16px 0;
  text-align: center;
`

const Container = styled.div`
  justify-content: center;
  display: grid;
  grid-template: auto auto 1fr 1fr auto / 1fr;
  align-items: center;
  justify-items: center;
  padding: 20px;
  grid-auto-flow: column;
`

const InputContainer = styled.div`
  width: 100%;
`

const SButton = styled(Button)`
  grid-row: 7 / 8;
`
