import { useCallback, useEffect, useRef, useState } from 'react'
import Cropper from 'react-easy-crop'
import { Point, Area, Size } from 'react-easy-crop/types'
import styled from 'styled-components'

type Props = {
  image?: string
  onChange: (area: Area) => void
  onClick?: () => void
  initialArea?: Area
}

export const Crop = (p: Props) => {
  const [crop, setCrop] = useState<Point | undefined>(p.initialArea || { x: 0, y: 0 })
  const [zoom, setZoom] = useState<number | undefined>()
  const containerRef = useRef<null | HTMLDivElement>(null)
  const [cropSize, setCropSize] = useState<undefined | Size>()

  /* useEffect(() => {
    if (!p.image || !containerRef.current) return
    console.log('calc zoom')
    const containerSize = containerRef.current.clientHeight
    getImageSize(p.image).then((imageSize) => {
      const naturalRatio = containerSize / Math.max(imageSize.height, imageSize.width)
      const minImageSize = Math.min(imageSize.height, imageSize.width)
      const minRatio = containerSize / (minImageSize * naturalRatio)
      const ratio = p.initialArea && containerSize / (p.initialArea.width * naturalRatio)
    })
    }, [p.image, p.initialArea]) */

  const onCropComplete = useCallback((_: Area, croppedArea: Area) => p.onChange(croppedArea), [p.onChange])

  useEffect(() => {
    if (!containerRef.current) return
    const currentSize = {
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
    }
    if (currentSize.height === cropSize?.height && currentSize.width === cropSize?.width) return
    setCropSize(currentSize)
  })

  return (
    <Container ref={containerRef} onClick={p.onClick}>
      {crop && cropSize && (
        <Cropper
          /* values */
          zoom={zoom}
          crop={crop}
          cropSize={cropSize}
          initialCroppedAreaPixels={p.initialArea}
          /* handlers */
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          /* tested */
          image={p.image}
          aspect={1}
          objectFit="contain"
          style={{
            containerStyle: { position: 'relative', height: '100%', width: '100%' },
            cropAreaStyle: {
              width: '100%',
              height: '100%',
            },
          }}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  background-color: #0000002c;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 10px;
`
