import { useDrag } from '@use-gesture/react'
import { motion } from 'framer-motion'
import { SetStateAction, useState } from 'react'
import styled from 'styled-components'

const labels = ['Beer', 'Vodka', 'Whiskey', 'Wine', 'Champagne', 'Gin', 'Cider', 'Rum', 'Tequila', 'Absinthe']

type LabelsProps = {
  selectedLabels: string[]
  setSelectedLabels: React.Dispatch<string[] | SetStateAction<string[]>>
}

export const Labels = ({ selectedLabels, setSelectedLabels }: LabelsProps) => {
  const [wrap, setWrap] = useState(false)

  const handleLabelClick = (label: string) => {
    if (selectedLabels.includes(label)) setSelectedLabels(selectedLabels.filter((el) => el !== label))
    else setSelectedLabels([...selectedLabels, label])
  }

  const gestureBind = useDrag(({ offset }) => {
    const value = offset[1]
    console.log(value)
    if (Math.abs(value) < 10) return
    if (value < 0) return setWrap(false)
    return setWrap(true)
  }) as any

  const renderLabels = () =>
    labels
      .sort((label) => (selectedLabels.includes(label) ? -1 : 1))
      .map((label) => (
        <Label
          {...gestureBind()}
          layout
          selected={selectedLabels.includes(label)}
          onClick={() => handleLabelClick(label)}
          key={label}>
          {label}
        </Label>
      ))

  return <Container wrap={wrap}>{renderLabels()}</Container>
}

const Container = styled.div<{ wrap: boolean }>`
  padding: 10px;
  padding-top: 30px;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: row;
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
