export const getImageSize = (uri: string) =>
  new Promise<{ height: number; width: number }>((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve({ height: image.naturalHeight, width: image.naturalWidth }))
    image.addEventListener('error', (error) => reject(error))
    image.src = uri
  })
