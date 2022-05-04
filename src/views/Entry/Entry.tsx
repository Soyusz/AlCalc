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
  const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const offsetValue = useTransform(scrollYProgress, [0, 1], [0, -400])

  return (
    <>
      <Container ref={scrollableRef}>
        <Image style={{ scale: scaleValue, y: offsetValue }}>
          <img src={data?.photo ?? undefined} />
        </Image>
        <Card entry={data} />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch !important;
`

const Image = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: calc(40vh + ${(props) => props.theme.borderRadii.lplus});
  z-index: 1;

  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`
