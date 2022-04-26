import { Area } from 'react-easy-crop/types'

export const getCroppedImg = (uri: string, pixelCrop: Area) =>
  new Promise<string>((resolve) => {
    const originalImage = new Image()
    originalImage.src = uri

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    originalImage.addEventListener('load', () => {
      canvas.width = pixelCrop.width
      canvas.height = pixelCrop.height

      ctx.drawImage(
        originalImage,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      )
      const result = canvas.toDataURL('image/jpeg')
      resolve(result)
    })
  })
