export const blobToUri = (blob: Blob) => {
  return new Promise<string>((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      resolve(reader.result as string)
    }
    reader.readAsDataURL(blob)
  })
}
