import styled from 'styled-components'

export type RowProps = {
  name: string
  photo?: string
  score: number
  place: number
}

export const Row = (p: RowProps) => {
  return (
    <Container>
      <Place>{p.place}</Place>
      <Name>{p.name}</Name>
      <Stats>{Math.floor(p.score)}</Stats>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template: 1fr / auto 1fr auto;
  padding: 20px 20px;
  margin: 15px 5px;
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
  border-radius: ${(props) => props.theme.spacing.s};
  border: 1px solid ${(props) => props.theme.colors.gray};
  &:first-of-type {
    margin-top: 0px;
  }
`

const Name = styled.div`
  margin-left: 10px;
  font-weight: 600;
  z-index: 2;
`

const Stats = styled.div`
  margin-left: 10px;
  color: #00000093;
  z-index: 2;
`

const Place = styled.div`
  color: #00000093;
  z-index: 2;
`
