import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Progress } from '../../components/Progress'
import { usePostEntry } from '../../queries/usePostEntry'
import { Image } from './Image'
import { Labels } from './Labels'
import { Name } from './Name'
import { Price } from './Price'
import { Voltage } from './Voltage'
import { Volume } from './Volume'

export const AddEntry = () => {
  const [params] = useSearchParams()
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const { mutate: createEntry, isSuccess } = usePostEntry()

  const [step, setStep] = useState(0)
  const [, setImage] = useState<null | string>(null)
  const [value, setValue] = useState({
    voltage: params.get('voltage') ?? '0',
    volume: params.get('volume') ?? '0',
    price: params.get('price') ?? '0',
    labels: [] as string[],
    name: '',
  })

  const handleChange = (v: string | string[], key: keyof typeof value) => {
    const newValue = { ...value }
    // @ts-ignore
    newValue[key] = v
    setValue(newValue)
  }

  const handleNext = (image?: string) => {
    if (step === 5 && !!image)
      return createEntry({
        voltage: parseFloat(value.voltage),
        volume: parseFloat(value.volume),
        price: parseFloat(value.price),
        name: value.name,
        photo: image,
        label: value.labels,
      })
    setStep(step + 1)
  }

  useEffect(() => {
    if (!isSuccess) return
    setStep((prev) => prev + 1)
  }, [isSuccess])

  return (
    <>
      <Container>
        <Progress total={6} current={step} />
        {step === 0 && (
          <Voltage value={value.voltage} update={(v: string) => handleChange(v, 'voltage')} next={handleNext} />
        )}
        {step === 1 && (
          <Volume value={value.volume} update={(v: string) => handleChange(v, 'volume')} next={handleNext} />
        )}
        {step === 2 && <Price value={value.price} update={(v: string) => handleChange(v, 'price')} next={handleNext} />}
        {step === 3 && <Name value={value.name} update={(v: string) => handleChange(v, 'name')} next={handleNext} />}
        {step === 4 && (
          <Labels value={value.labels} update={(v: string[]) => handleChange(v, 'labels')} next={handleNext} />
        )}
        {step === 5 && <Image next={handleNext} />}
        {isSuccess && <h1>Success</h1>}
      </Container>
    </>
  )
}

const Container = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.s};
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`
