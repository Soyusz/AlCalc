import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'
import { useEntry } from '../../queries/useEntry'
import { Row } from './components/Row'

const labels = ['Beer', 'Vodka', 'Whiskey', 'Wine', 'Champagne', 'Gin', 'Cider', 'Rum', 'Tequila', 'Absinthe']
type labelsType = typeof labels[number]

export const Ranking = () => {
  const [selectedLabels, setSelectedLabels] = useState<labelsType[]>([])
  const { data } = useEntry(selectedLabels)

  const calcScore = (voltage: number, price: number, volume: number) => (voltage * volume) / (price * 100)

  const handleLabelClick = (label: labelsType) => {
    if (selectedLabels.includes(label)) setSelectedLabels(selectedLabels.filter((el) => el !== label))
    else setSelectedLabels([...selectedLabels, label])
  }

  const renderLabels = () =>
    labels
      .sort((label) => (selectedLabels.includes(label) ? -1 : 1))
      .map((label) => (
        <motion.div key={label} layout>
          <Label selected={selectedLabels.includes(label)} onClick={() => handleLabelClick(label)} key={label}>
            {label}
          </Label>
        </motion.div>
      ))

  const renderEntries = () =>
    data
      ?.map((el) => ({
        id: el.id,
        name: el.name,
        photo: el.photo,
        score: calcScore(el.voltage, el.price, el.volume),
      }))
      .sort((a, b) => b.score - a.score)
      .map((el, index) => <Row {...el} place={index + 1} />)

  return (
    <Container>
      <Labels wrap={false}>
        <AnimatePresence>{renderLabels()}</AnimatePresence>
      </Labels>
      <Content>{renderEntries()}</Content>
    </Container>
  )
}

const Container = styled.div`
  background: ${(props) => props.theme.colors.appBackground};
`

const Labels = styled.div<{ wrap: boolean }>`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  height: 100px;
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'no-wrap')};
`

const Label = styled(motion.div)<{ selected: boolean }>`
  border-radius: ${(props) => props.theme.borderRadii.l};
  border: 1px solid black;
  padding: 7px 10px;
  margin: 3px 3px;
  background: ${({ selected, theme }) => (selected ? theme.colors.black : theme.colors.white)};
  color: ${({ selected, theme }) => (selected ? theme.colors.white : theme.colors.black)};
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
