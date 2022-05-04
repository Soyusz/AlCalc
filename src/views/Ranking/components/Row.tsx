import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useNavigation } from '../../../hooks/useNavigation'

export type RowProps = {
  id: string
  name: string
  score: number
  place: number
  photo?: string
}

export const Row = (p: RowProps) => {
  const navigation = useNavigation()
  return (
    <Container layout onClick={() => navigation.push(`/entry/view/${p.id}`)}>
      <Place>{p.place}</Place>
      <Name>{p.name}</Name>
      <Stats>{Math.floor(p.score)}</Stats>
      <Image src={p.photo} />
    </Container>
  )
}

const Container = styled(motion.div)`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template: 1fr / auto 1fr auto auto;
  padding: 20px 20px;
  margin: 15px 0px;
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
  border-radius: ${(props) => props.theme.spacing.s};
  border: 1px solid ${(props) => props.theme.colors.gray};

  &:first-of-type {
    margin-top: 0px;
  }
`

const Name = styled.div`
  margin-left: 10px;
  font-weight: 600;
  z-index: 2;
`

const Stats = styled.div`
  margin-left: 10px;
  margin-right: 15px;
  color: #00000093;
  z-index: 2;
`

const Place = styled.div`
  color: #00000093;
  z-index: 2;
`

const Image = styled.img`
  aspect-ratio: 1;
  height: 50px;
  border-radius: ${(props) => props.theme.spacing.s};
`
