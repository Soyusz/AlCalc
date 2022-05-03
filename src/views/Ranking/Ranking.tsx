import { useState } from 'react'
import styled from 'styled-components'
import { useEntry } from '../../queries/useEntry'
import { Row } from './components/Row'
import { Labels } from './components/Labels'
import { calcScore } from '../../utils/calcScore'

export const Ranking = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const { data } = useEntry(selectedLabels)

  const rows = data
    ?.map((el, index) => ({
      id: el.id,
      name: el.name,
      photo: el.photo,
      place: index + 1,
      score: calcScore(el.voltage, el.price, el.volume),
    }))
    .sort((a, b) => b.score - a.score)

  return (
    <Container>
      <Labels selectedLabels={selectedLabels} setSelectedLabels={setSelectedLabels} />
      <Content>
        {rows?.map((row) => (
          <Row {...row} key={row.id} />
        ))}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background: ${(props) => props.theme.colors.appBackground};
`

const Content = styled.div`
  align-self: stretch;
  margin: 10px 10px 0px 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex: 1;
  margin-bottom: -20px;
  padding-bottom: 20px;
`
