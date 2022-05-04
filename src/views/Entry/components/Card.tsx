import styled from 'styled-components'
import { Entry } from '../../../types/entry'
import { calcScore } from '../../../utils/calcScore'

type CardProps = {
  entry?: Entry
}

export const Card = ({ entry }: CardProps) => {
  return (
    <Container>
      <Name>{entry?.name}</Name>
      <Stats>
        <div>
          <div>Price</div>
          <div>{entry?.price}pln</div>
        </div>
        <div>
          <div>Volume</div>
          <div>{entry?.volume}ml</div>
        </div>
        <div>
          <div>Voltage</div>
          <div>{entry?.voltage}%</div>
        </div>
        <div>
          <div>Score</div>
          <div>{entry && calcScore(entry.voltage, entry.price, entry.volume).toFixed(2)}</div>
        </div>
      </Stats>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 40vh;
  background: ${(props) => props.theme.colors.white};
  border-top-left-radius: ${(props) => props.theme.borderRadii.l};
  border-top-right-radius: ${(props) => props.theme.borderRadii.l};
  z-index: 3;
  flex: 1;
  background: #f5f5f5;
  box-shadow: 0 0 10px 0px #ccc;
  border: 1px solid lightgrey;
  padding: ${(props) => props.theme.spacing.l};
  min-height: 100vh;
`

const Name = styled.div`
  font-size: ${(props) => props.theme.fontSize.xxl};
  margin-bottom: ${(props) => props.theme.spacing.m};
`

const Stats = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 8px 0;
    font-size: ${(props) => props.theme.fontSize.m};
  }
`
