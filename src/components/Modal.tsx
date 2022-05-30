import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'

type ModalProps = {
  isOpen: boolean
  title: string
  text: string
  handleClose?: () => void
}

const transitionConfig = {
  duration: 0.3,
  ease: 'easeOut',
}

export const Modal = (p: ModalProps) => {
  if (!p.isOpen) return null
  return (
    <>
      <Blur onClick={p.handleClose} initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={transitionConfig} />
      <Container animate={{ y: '-50%' }} initial={{ y: '100vh' }} exit={{ y: '100vh' }} transition={transitionConfig}>
        <Title>{p.title}</Title>
        <Text>{p.text}</Text>
      </Container>
    </>
  )
}

const Blur = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: black;
  z-index: 100;
`

const Container = styled(motion.div)`
  left: 20px;
  right: 20px;
  background: white;
  position: fixed;
  z-index: 101;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 10px 0;
`

const Text = styled.div``
