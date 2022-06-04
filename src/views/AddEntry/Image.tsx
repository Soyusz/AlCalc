import { useRef, useState } from 'react'
import { Area } from 'react-easy-crop/types'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Crop } from '../../components/Crop'
import { blobToUri } from '../../utils/blobToUri'
import { getCroppedImg } from '../../utils/getCroppedImage'

type Props = {
  next: React.Dispatch<string>
}

export const Image = ({ next }: Props) => {
  const [croppedArea, setCroppedArea] = useState<Area>()
  const [selectedImage, setSelectedImage] = useState<string>()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleChange = () => {
    const newFile = inputRef.current?.files?.[0] ?? null
    if (!newFile) return
    blobToUri(newFile).then((base) => setSelectedImage(base))
  }

  const handleSubmit = () => {
    if (!selectedImage || !croppedArea) return
    getCroppedImg(selectedImage, croppedArea).then((res) => {
      next(res)
    })
  }

  return (
    <Container>
      <input type="file" ref={inputRef} onChange={handleChange} hidden />
      <Crop image={selectedImage} onChange={setCroppedArea} onClick={handleClick} />
      <NextButton label="Submit" onClick={handleSubmit} disabled={!selectedImage} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  > img {
    max-height: 300px;
    max-width: 300px;
  }
`

const NextButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 20px;
`
