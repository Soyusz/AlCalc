import { useRef } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Crop } from '../../components/Crop'
import { blobToUri } from '../../utils/blobToUri'

type Props = {
  next: () => void
  image: string | null
  setImage: React.Dispatch<string | null>
}

export const Image = ({ next, image, setImage }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    inputRef.current?.click()
  }
  const handleChange = () => {
    const newFile = inputRef.current?.files?.[0] ?? null
    if (!newFile) return setImage(null)
    blobToUri(newFile).then((base) => setImage(base))
  }

  return (
    <Container onClick={handleClick}>
      <input type="file" ref={inputRef} onChange={handleChange} hidden />
      <Crop image={image ?? undefined} setImage={setImage} />
    </Container>
  )

  return (
    <Container>
      <input type="file" ref={inputRef} onChange={handleChange} hidden />
      <PhotoContainer onClick={handleClick}>
        <SImage src={image ?? undefined} />
      </PhotoContainer>
      <NextButton label="Save" onClick={next} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

const PhotoContainer = styled.div`
  background: lightblue;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 10px;
`

const SImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

const NextButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 50px;
`
