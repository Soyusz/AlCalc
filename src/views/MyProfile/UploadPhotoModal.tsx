import { useEffect, useRef, useState } from 'react'
import { Area } from 'react-easy-crop/types'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Crop } from '../../components/Crop'
import { blobToUri } from '../../utils/blobToUri'
import { getCroppedImg } from '../../utils/getCroppedImage'

type Props = {
  onImageSelected: (image: string) => void
  onClose: () => void
  isOpen?: boolean
}

export const UploadPhotoModal = (p: Props) => {
  const [croppedArea, setCroppedArea] = useState<Area>()
  const [selectedImage, setSelectedImage] = useState<string>()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (p.isOpen) return
    setSelectedImage(undefined)
  }, [p.isOpen])

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
      if (res) p.onImageSelected(res)
    })
  }

  if (!p.isOpen) return null

  return (
    <Container>
      <input type="file" ref={inputRef} onChange={handleChange} hidden />
      <Crop image={selectedImage} onChange={setCroppedArea} onClick={handleClick} />
      <NextButton label="Submit" onClick={handleSubmit} disabled={!selectedImage} />
      <Button label="Cancel" onClick={p.onClose} variant="secondary" />
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  inset: 0;
  z-index: 400;
  background: white;
  padding: 15px;
`

const NextButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 5px;
`
