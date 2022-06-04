import { useState } from 'react'
import styled from 'styled-components'
import { Row } from './components/Row'
import { calcScore } from '../../utils/calcScore'
import { useRanking } from '../../queries/useRanking'
import { Header } from '../../components/Header'
import { Bottomnav } from '../../components/Bottomnav'
import { Labels } from '../../components/Labels'

export const Ranking = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const { data } = useRanking(selectedLabels)

  const rows = data
    ?.map((el) => ({
      id: el.id,
      name: el.name,
      photo: el.photo,
      score: calcScore(el.voltage, el.price, el.volume),
    }))
    .sort((a, b) => b.score - a.score)
    .map((el, index) => ({
      ...el,
      place: index + 1,
    }))

  return (
    <>
      <Header />
      <Container>
        <Labels selectedLabels={selectedLabels} setSelectedLabels={setSelectedLabels} />
        <Content>
          {rows?.map((row) => (
            <Row {...row} key={row.id} />
          ))}
        </Content>
      </Container>
      <Bottomnav />
    </>
  )
}

const Container = styled.div`
  background: ${(props) => props.theme.colors.appBackground};
  display: flex;
  margin-top: 60px;
  flex-direction: column;
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
