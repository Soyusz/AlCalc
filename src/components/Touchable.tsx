import { useState } from 'react'

type TouchableProps = {
  onDoubleTap?: () => void
  className?: string
} & React.HTMLProps<HTMLDivElement>

export const Touchable: React.FC<TouchableProps> = ({ children, onDoubleTap, className }) => {
  const [lastTap, setLastTap] = useState<number>()

  const handleDoubleTap = () => {
    const now = Date.now()
    const DOUBLE_PRESS_DELAY = 300
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) onDoubleTap?.()
    setLastTap(now)
  }
  return (
    <div className={className} onTouchStart={handleDoubleTap}>
      {children}
    </div>
  )
}
