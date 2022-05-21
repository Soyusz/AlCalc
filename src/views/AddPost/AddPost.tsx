import { useEffect, useRef, useState } from 'react'
import { Area } from 'react-easy-crop/types'
import styled from 'styled-components'
import { Crop } from '../../components/Crop'
import { blobToUri } from '../../utils/blobToUri'
import { getCroppedImg } from '../../utils/getCroppedImage'

type ProcessedImage = {
  crop?: Area
  source: string
  outcome: string
}

export const AddPost = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [images, setImages] = useState<ProcessedImage[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState<number>()
  const currentImage = (currentImageIndex !== undefined && images[currentImageIndex]) || undefined

  const handleImageSelected = async () => {
    const newFile = inputRef.current?.files?.[0]
    if (!newFile) return
    const based = await blobToUri(newFile)
    const newImage: ProcessedImage = {
      source: based,
      outcome: based,
    }
    setImages([...images, newImage])
    setCurrentImageIndex(currentImageIndex === undefined ? 0 : currentImageIndex + 1)
  }

  const handleCropChange = async (newCrop: Area) => {
    if (!currentImage) return
    const newImage: ProcessedImage = {
      ...currentImage,
      crop: newCrop,
      outcome: await getCroppedImg(currentImage.source, newCrop),
    }
    setImages((prev) => [
      ...prev.map((image, index) => {
        if (index === currentImageIndex) return newImage
        return image
      }),
    ])
  }

  return (
    <Container>
      <input type="file" ref={inputRef} onChange={handleImageSelected} hidden />
      <Crop
        onChange={handleCropChange}
        image={currentImage?.source}
        /* initialArea={{ width: 667, height: 667, x: 557, y: 1085 }} */
        initialArea={currentImage?.crop}
        key={currentImageIndex}
      />
      <Preview>
        {images.map((image, index) => (
          <img src={image.outcome} key={index} onClick={() => setCurrentImageIndex(index)} />
        ))}
        <div onClick={() => inputRef.current?.click()}>+</div>
      </Preview>
    </Container>
  )
}

const Container = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.s};
  padding-top: 30px;
`

const Preview = styled.div`
  display: flex;
  > img,
  > div {
    margin: 10px;
    height: 50px;
    width: 50px;
  }
`
