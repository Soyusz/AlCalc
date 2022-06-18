import styled from 'styled-components'

type Props = {
  number: number
  current: number
}

export const Dots = (p: Props) => {
  return (
    <Container>
      {Array(p.number)
        .fill(0)
        .map((_, index) => (
          <Dot active={index === p.current} />
        ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`

const Dot = styled.div<{ active: boolean }>`
  height: 10px;
  width: 10px;
  background: ${({ theme, active }) => (active ? theme.colors.primary : 'white')};
  border-radius: 50%;
  margin: 0 2px;
`
