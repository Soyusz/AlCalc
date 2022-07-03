import { motion, useElementScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useEntry } from '../../queries/useEntry'
import { Card } from './components/Card'

export const Entry = () => {
  const { entryId } = useParams()
  const { data } = useEntry(entryId)

  const scrollableRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useElementScroll(scrollableRef)
  const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const offsetValue = useTransform(scrollYProgress, [0, 1], [0, -10])

  return (
    <Container ref={scrollableRef}>
      <Image style={{ scale: scaleValue, y: offsetValue }}>
        <img src={data?.photo ?? undefined} />
      </Image>
      <Card entry={data} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch !important;
  overflow: scroll;
`

const Image = styled(motion.div)`
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  height: calc(40vh + ${({ theme }) => theme.borderRadii.lplus + 15});
  z-index: 1;

  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`
