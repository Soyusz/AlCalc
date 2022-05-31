import { useEffect, useRef, useState } from 'react'
import { Area } from 'react-easy-crop/types'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Crop } from '../../components/Crop'
import { Input } from '../../components/Input'
import { useNavigation } from '../../hooks/useNavigation'
import { useAddPost } from '../../queries/useAddPost'
import { blobToUri } from '../../utils/blobToUri'
import { getCroppedImg } from '../../utils/getCroppedImage'

type ProcessedImage = {
  crop?: Area
  source: string
  outcome: string
}

export const AddPost = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const cropRef = useRef<HTMLDivElement>(null)
  const [images, setImages] = useState<ProcessedImage[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState<number>()
  const currentImage = (currentImageIndex !== undefined && images[currentImageIndex]) || undefined
  const { mutate, isLoading, isError, isSuccess } = useAddPost()
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const navigation = useNavigation()

  console.log(cropRef.current?.clientWidth)

  useEffect(() => {
    if (!isSuccess) return
    navigation.back()
  }, [isSuccess, navigation.back])

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

  const handleSubmit = () =>
    mutate({
      photos: images.map((el) => el.outcome),
      title,
      location,
    })

  return (
    <Container>
      <input type="file" ref={inputRef} onChange={handleImageSelected} hidden />
      <SCrop
        ref={cropRef}
        onChange={handleCropChange}
        image={currentImage?.source}
        initialArea={currentImage?.crop}
        key={currentImageIndex}
        height={cropRef.current?.clientWidth}
      />
      <Preview>
        {images.map((image, index) => (
          <img src={image.outcome} key={index} onClick={() => setCurrentImageIndex(index)} />
        ))}
        <div onClick={() => inputRef.current?.click()}>+</div>
      </Preview>
      <FormBox>
        <Input value={title} label="Title" onValueChange={setTitle} />
        <Input value={location} label="Location" onValueChange={setLocation} />
      </FormBox>
      <BottomBox>
        <Status>
          {isLoading && 'Loading...'}
          {isError && 'Upload failed'}
        </Status>
        <Button label="Submit" onClick={handleSubmit} disabled={isLoading} />
      </BottomBox>
    </Container>
  )
}

const Container = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.s};
  padding-top: 30px;
  display: flex;
`

const SCrop = styled(Crop)<{ height?: number }>`
  min-height: ${(props) => props.height}px;
`

const FormBox = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const BottomBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding-bottom: 30px;
`

const Status = styled.div`
  font-size: 15px;
  padding: 10px;
`

const Preview = styled.div`
  display: flex;
  width: 100%;
  > img,
  > div {
    margin: 10px 10px 10px 0px;
    height: 50px;
    width: 50px;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
`
