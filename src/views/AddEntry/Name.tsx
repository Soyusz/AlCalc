import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

type Props = {
  value: string
  update: (v: string) => void
  next: () => void
}

export const Name = ({ value, update, next }: Props) => {
  return (
    <Container>
      <StyledInput label="Name" value={value} onValueChange={update} type="text" />
      <NextButton label="Next" onClick={next} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

const StyledInput = styled(Input)`
  align-self: stretch;
`

const NextButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 50px;
`
