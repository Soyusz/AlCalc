import styled from 'styled-components'

type LabelProps = {
  v: string | number
  desc: string | number
}

export const Label = ({ v, desc }: LabelProps) => {
  return (
    <Container>
      <Value>{v}</Value>
      <Desc>{desc}</Desc>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Value = styled.div`
  font-size: 32px;
  font-weight: 700;
`
const Desc = styled.div``
