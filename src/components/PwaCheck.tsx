import { useState } from 'react'
import { isPwaInstall } from '../utils/isPWAInstalled'
import { Modal } from './Modal'

export const PwaCheck = () => {
  const isPwaInstalled = isPwaInstall()
  const [hidePopup, setHidePopup] = useState(isPwaInstalled)

  return (
    <Modal
      title="You're not in PWA mode"
      text="
      You are not in PWA mode. Some features may not work properly. We recommend that you install the application as a PWA by selecting the option in your browser and then 'add to home screen'."
      primaryLabel="I take the risk"
      handlePrimaryClick={() => setHidePopup(true)}
      isOpen={!hidePopup}
    />
  )
}
