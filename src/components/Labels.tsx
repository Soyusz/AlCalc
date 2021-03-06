import { useDrag } from '@use-gesture/react'
import { motion } from 'framer-motion'
import { SetStateAction, useState } from 'react'
import styled from 'styled-components'

const labels = [
  'Beer',
  'Vodka',
  'Whiskey',
  'Wine',
  'Champagne',
  'Gin',
  'Cider',
  'Rum',
  'Tequila',
  'Absinthe',
  'Brandy',
  'Liqueur',
  'Sake',
  'Bourbon',
  'ScotchWhisky',
  'IrishWhiskey',
  'Other',
]

type LabelsProps = {
  selectedLabels: string[]
  setSelectedLabels: React.Dispatch<string[]>
  wrap?: boolean
}

export const Labels = (p: LabelsProps) => {
  const [wrap, setWrap] = useState(p.wrap ?? false)

  const handleLabelClick = (label: string) => {
    if (!p.selectedLabels.includes(label)) p.setSelectedLabels([...p.selectedLabels, label])
    else p.setSelectedLabels(p.selectedLabels.filter((el) => el !== label))
  }

  const gestureBind = useDrag(({ movement }) => {
    if (p.wrap !== undefined) return
    const value = movement[1]
    if (Math.abs(value) < 10) return
    if (value < 0) return setWrap(false)
    return setWrap(true)
  }) as any

  const parseLabel = (label: string) => label.replace(/([A-Z])/g, ' $1').trim()

  const renderLabels = () =>
    labels
      .sort((label) => (p.selectedLabels.includes(label) ? -1 : 1))
      .map((label) => (
        <Label
          {...gestureBind()}
          layout
          wrapped={wrap}
          selected={p.selectedLabels.includes(label)}
          onClick={() => handleLabelClick(label)}
          key={label}>
          {parseLabel(label)}
        </Label>
      ))

  return (
    <Container wrap={wrap}>
      <div>{renderLabels()}</div>
    </Container>
  )
}

const Container = styled.div<{ wrap: boolean }>`
  width: 100%;

  & > div {
    padding: 10px;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'no-wrap')};
    overflow-x: ${(props) => (props.wrap ? 'initial' : 'scroll')};
  }
`

const Label = styled(motion.div)<{ selected: boolean; wrapped: boolean }>`
  border-radius: ${(props) => props.theme.borderRadii.l};
  border: 1px solid black;
  padding: 7px 10px;
  margin: 3px 3px;
  background: ${({ selected, theme }) => (selected ? theme.colors.black : theme.colors.white)};
  color: ${({ selected, theme }) => (selected ? theme.colors.white : theme.colors.black)};
  touch-action: ${(props) => (props.wrapped ? 'none' : 'initial')};
  white-space: nowrap;
`
