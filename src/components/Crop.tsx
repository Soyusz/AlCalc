import { useCallback, useEffect, useRef, useState } from 'react'
import Cropper from 'react-easy-crop'
import { Point, Area } from 'react-easy-crop/types'
import styled from 'styled-components'
import { getCroppedImg } from '../utils/getCroppedImage'
import { getImageSize } from '../utils/getImageSize'

type Props = {
  image?: string
  setImage: (image: string | null) => void
}

const Container = styled.div`
  background-color: #0000002c;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 10px;
`

export const Crop = (p: Props) => {
  const containerRef = useRef<null | HTMLDivElement>(null)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [minZoom, setMinZoom] = useState<number>()
  const [zoom, setZoom] = useState(1.157)

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    if (!p.image) return
    getCroppedImg(p.image, croppedArea).then((res) => {
      // TODO
    })
  }, [])

  const getCropSize = () => {
    if (!containerRef.current) return
    return {
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
    }
  }

  useEffect(() => {
    if (!p.image || !containerRef.current) return
    const containerSize = containerRef.current.clientHeight
    getImageSize(p.image).then((imageSize) => {
      const minImageSize = Math.min(imageSize.height, imageSize.width)
      const naturalRatio = containerSize / Math.max(imageSize.height, imageSize.width)
      const ratio = containerSize / (minImageSize * naturalRatio)
      setMinZoom(ratio)
      setZoom(ratio)
    })
  }, [p.image])

  useEffect(() => {
    console.log(zoom)
  }, [zoom])

  return (
    <Container ref={containerRef}>
      <Cropper
        image={p.image}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        cropSize={getCropSize()}
        minZoom={minZoom}
        objectFit="contain"
        style={{
          containerStyle: { position: 'relative', height: '100%', width: '100%' },
          cropAreaStyle: {
            width: '100%',
            height: '100%',
          },
        }}
      />
    </Container>
  )
}
