import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Progress } from '../../components/Progress'
import { usePostEntry } from '../../queries/usePostEntry'
import { Image } from './Image'
import { Name } from './Name'
import { Price } from './Price'
import { Voltage } from './Voltage'
import { Volume } from './Volume'

export const AddEntry = () => {
  const [params] = useSearchParams()
  const { mutate: createEntry, isSuccess } = usePostEntry()

  const [step, setStep] = useState(0)
  const [image, setImage] = useState<null | string>(null)
  const [value, setValue] = useState({
    voltage: params.get('voltage') ?? '0',
    volume: params.get('volume') ?? '0',
    price: params.get('price') ?? '0',
    name: '',
  })

  const handleChange = (v: string, key: keyof typeof value) => {
    const newValue = { ...value }
    newValue[key] = v
    setValue(newValue)
  }

  const handleNext = () => {
    if (step === 4 && !!image)
      return createEntry({
        voltage: parseFloat(value.voltage),
        volume: parseFloat(value.volume),
        price: parseFloat(value.price),
        name: value.name,
        photo: image.slice(image.search(',') + 1, image.length - 1),
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
        <Progress total={5} current={step} />
        {step === 0 && (
          <Voltage value={value.voltage} update={(v: string) => handleChange(v, 'voltage')} next={handleNext} />
        )}
        {step === 1 && (
          <Volume value={value.volume} update={(v: string) => handleChange(v, 'volume')} next={handleNext} />
        )}
        {step === 2 && <Price value={value.price} update={(v: string) => handleChange(v, 'price')} next={handleNext} />}
        {step === 3 && <Name value={value.name} update={(v: string) => handleChange(v, 'name')} next={handleNext} />}
        {step === 4 && <Image next={handleNext} image={image} setImage={setImage} />}
        {isSuccess && <h1>Success</h1>}
      </Container>
    </>
  )
}

const Container = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.s};
  padding-top: 30px;
`
