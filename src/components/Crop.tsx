import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import Cropper from 'react-easy-crop'
import { Point, Area, Size } from 'react-easy-crop/types'
import styled from 'styled-components'
import { getImageSize } from '../utils/getImageSize'

type Props = {
  image?: string
  onChange: (area: Area) => void
  onClick?: () => void
  initialArea?: Area
  className?: string
}

export const Crop = forwardRef<HTMLDivElement, Props>((p, ref) => {
  const [crop, setCrop] = useState<Point>(p.initialArea || { x: 0, y: 0 })
  const [zoom, setZoom] = useState<number | undefined>()
  const [minZoom, setMinZoom] = useState<number | undefined>()
  const containerRef = useRef<null | HTMLDivElement>(null)
  const [cropSize, setCropSize] = useState<undefined | Size>()

  useEffect(() => {
    if (!p.image || !containerRef.current) return
    const containerSize = containerRef.current.clientHeight
    getImageSize(p.image).then((imageSize) => {
      const naturalRatio = containerSize / Math.max(imageSize.height, imageSize.width)
      const minImageSize = Math.min(imageSize.height, imageSize.width)
      const minRatio = containerSize / (minImageSize * naturalRatio)
      if (!p.initialArea) setZoom(minRatio)
      setMinZoom(minRatio)
    })
  }, [p.image, p.initialArea])

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
    <Container ref={mergeRefs(ref, containerRef)} onClick={p.onClick} className={p.className}>
      {cropSize && (p.initialArea || zoom) && (
        <Cropper
          /* values */
          zoom={zoom}
          minZoom={minZoom}
          crop={crop}
          image={p.image}
          cropSize={cropSize}
          initialCroppedAreaPixels={p.initialArea}
          /* handlers */
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          /* styles */
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
})

const Container = styled.div`
  background-color: #0000002c;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 10px;
`

const mergeRefs = (...refs: any) => {
  const filteredRefs = refs.filter(Boolean)
  if (!filteredRefs.length) return null
  if (filteredRefs.length === 0) return filteredRefs[0]
  // @ts-ignore
  return (inst) => {
    for (const ref of filteredRefs) {
      if (typeof ref === 'function') {
        ref(inst)
      } else if (ref) {
        ref.current = inst
      }
    }
  }
}
