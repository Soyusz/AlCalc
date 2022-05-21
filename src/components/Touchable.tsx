import { useState, useRef } from 'react'

type TouchableProps = {
  onDoubleTap?: () => void
  onPress?: () => void
  className?: string
} & React.HTMLProps<HTMLDivElement>

const DOUBLE_PRESS_DELAY = 200

export const Touchable: React.FC<TouchableProps> = ({ children, onDoubleTap, onPress, className }) => {
  const [lastTap, setLastTap] = useState<number>()
  const timeout = useRef<undefined | ReturnType<typeof setTimeout>>()

  const handleDoubleTap = () => {
    const now = Date.now()
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      // second tap in less than DOUBLE_PRESS_DELAY
      if (timeout.current) clearTimeout(timeout.current)
      onDoubleTap?.()
    } else {
      // first tap
      timeout.current = setTimeout(() => onPress?.(), DOUBLE_PRESS_DELAY)
    }
    setLastTap(now)
  }
  return (
    <div className={className} onTouchStart={handleDoubleTap}>
      {children}
    </div>
  )
}
