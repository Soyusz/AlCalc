import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useEntry } from '../../queries/useEntry'
import { calcScore } from '../../utils/calcScore'

export const Entry = () => {
  const { entryId } = useParams()
  const { data } = useEntry(entryId)

  if (!entryId) return null

  return (
    <>
      <Container>
        <Image>
          <img src={data?.photo ?? undefined} />
        </Image>
        <Card>
          <h1>{data?.name}</h1>
          <h1>{data && Math.floor(calcScore(data.voltage, data.price, data.volume))}</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
          <h1>.</h1>
        </Card>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: blue;
  align-items: stretch !important;
`

const Image = styled.div`
  background: lightgreen;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: calc(40vh + ${(props) => props.theme.borderRadii.lplus});
  z-index: 1;

  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`

const Card = styled.div`
  margin-top: 40vh;
  background: ${(props) => props.theme.colors.white};
  border-top-left-radius: ${(props) => props.theme.borderRadii.lplus};
  border-top-right-radius: ${(props) => props.theme.borderRadii.lplus};
  z-index: 3;
  flex: 1;
`
