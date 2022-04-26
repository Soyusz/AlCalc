import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { random } from '../utils/random'

type BubbleProps = {
  onDeath: () => void
}

export const Bubble = ({ onDeath }: BubbleProps) => {
  const [start] = useState(random(-100, 100))

  useEffect(() => {
    const timeout = setTimeout(() => {
      onDeath()
    }, random(2, 10) * 1000)
    return () => clearTimeout(timeout)
  }, [onDeath])

  return (
    <Container
      start={start}
      initial={{ translateY: '3px', opacity: 1 }}
      animate={{
        translateY: '-100vh',
        opacity: 0,
        transition: { duration: 10 },
      }}
    />
  )
}

const Container = styled(motion.div)<{ start: number }>`
  border: 1px solid pink;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  position: fixed;
  bottom: 0px;
  left: ${(props) => props.start}vw;
`
