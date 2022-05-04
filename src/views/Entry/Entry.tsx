import { motion, useViewportScroll, useElementScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useEntry } from '../../queries/useEntry'
import { calcScore } from '../../utils/calcScore'

export const Entry = () => {
  const { entryId } = useParams()
  const { data } = useEntry(entryId)

  const scrollableRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useElementScroll(scrollableRef)
  const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const offsetValue = useTransform(scrollYProgress, [0, 1], [0, -400])

  if (!entryId) return null
  return (
    <>
      <Container ref={scrollableRef}>
        <Image style={{ scale: scaleValue, y: offsetValue }}>
          <img src={data?.photo ?? undefined} />
        </Image>
        <Card>
          <h1>{data?.name}</h1>
          <h1>{data && Math.floor(calcScore(data.voltage, data.price, data.volume))}</h1>
        </Card>
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

const Card = styled.div`
  margin-top: 40vh;
  background: ${(props) => props.theme.colors.white};
  border-top-left-radius: ${(props) => props.theme.borderRadii.l};
  border-top-right-radius: ${(props) => props.theme.borderRadii.l};
  z-index: 3;
  flex: 1;
  background: #f5f5f5;
  box-shadow: 0 0 10px 0px #ccc;
  border: 1px solid lightgrey;
`
