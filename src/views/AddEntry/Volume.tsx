import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

type Props = {
  value: string
  update: (v: string) => void
  next: () => void
}

export const Volume = ({ value, update, next }: Props) => {
  return (
    <Container>
      <StyledInput label="Volume" value={value} onValueChange={update} type="text" />
      <NextButton label="Next" onClick={next} disabled={!parseFloat(value)} />
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
  margin-bottom: 20px;
`
