import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Bottomnav } from '../../components/Bottomnav'
import { BubbleContainer } from '../../components/BubbleContainer'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { useCachedState } from '../../hooks/useCachedState'
import { useNavigation } from '../../hooks/useNavigation'
import { Ring } from './components/Ring'

export const Calc = () => {
  const navigator = useNavigation()
  const [value, setValue] = useCachedState('calc', {
    voltage: '0',
    volume: '500',
    price: '5',
  })
  const [score, setScore] = useState(0)

  const calcScore = (voltage: number, price: number, volume: number) => (voltage * volume) / (price * 100)

  const handleChange = (v: string, key: keyof typeof value) => {
    const newValue = { ...value }
    newValue[key] = v
    setValue(newValue)
  }

  const handleClick = () =>
    navigator.push(`/entry/add?voltage=${value.voltage}&volume=${value.volume}&price=${value.price}`)

  useEffect(() => {
    const { price, voltage, volume } = value

    const nPrice = parseFloat(price)
    const nVoltage = parseFloat(voltage)
    const nVolume = parseFloat(volume)

    setScore(calcScore(nVoltage, nPrice, nVolume))
  }, [value])

  return (
    <>
      <Header />
      <Container>
        <BubbleContainer intensity={Math.min(100, score * 4)} />
        <StyledInput
          label="Voltage"
          value={value.voltage}
          onValueChange={(v) => handleChange(v, 'voltage')}
          type="number"
        />
        <StyledInput
          label="Volume"
          value={`${value.volume}`}
          onValueChange={(v) => handleChange(v, 'volume')}
          type="number"
        />
        <StyledInput
          label="Price"
          value={`${value.price}`}
          onValueChange={(v) => handleChange(v, 'price')}
          type="number"
        />
        <Ring fill={Math.floor(score)} total={100}></Ring>

        <AddButton label="Save" onClick={handleClick} />
      </Container>
      <Bottomnav />
    </>
  )
}

const Container = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.s};
  padding-top: 30px;
  display: flex;
  margin-top: 60px;
`

const StyledInput = styled(Input)`
  align-self: stretch;
`

const AddButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 20px;
  z-index: 1;
`
