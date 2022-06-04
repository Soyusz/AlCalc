import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Labels as LabelList } from '../../components/Labels'

type Props = {
  value: string[]
  update: (v: string[]) => void
  next: () => void
}

export const Labels = ({ value, update, next }: Props) => {
  return (
    <Container>
      <LabelList wrap selectedLabels={value} setSelectedLabels={update} />
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

const NextButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 20px;
`
