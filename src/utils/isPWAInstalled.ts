export const isPwaInstall = () => {
  // @ts-ignore
  if (window.navigator.standalone) return true
  if (window.matchMedia('(display-mode: standalone)').matches) return true
  return false
}
