import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import { Button } from './Button'

type ModalProps = {
  isOpen: boolean
  title: string
  text: string
  icon?: string
  handleClose?: () => void
  primaryLabel?: string
  handlePrimaryClick?: () => void
  secondaryLabel?: string
  handleSecondaryClick?: () => void
}

const transitionConfig = {
  duration: 0.3,
  ease: 'easeOut',
}

export const Modal = (p: ModalProps) => {
  return (
    <AnimatePresence>
      {p.isOpen && (
        <>
          <Blur
            onClick={p.handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={transitionConfig}
          />
          <Container
            initial={{ y: '100vh' }}
            animate={{ y: '-50%' }}
            exit={{ y: '100vh' }}
            transition={transitionConfig}>
            {p.icon && <Icon src={p.icon} />}
            <Title>{p.title}</Title>
            <Text>{p.text}</Text>
            {p.secondaryLabel && (
              <SButton variant="secondary" label={p.secondaryLabel} onClick={p.handleSecondaryClick} />
            )}
            {p.primaryLabel && <SButton variant="primary" label={p.primaryLabel} onClick={p.handlePrimaryClick} />}
          </Container>
        </>
      )}
    </AnimatePresence>
  )
}

const Blur = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: black;
  z-index: 100;
`

const Icon = styled.img`
  height: 50px;
  object-fit: scale-down;
  margin-bottom: 20px;
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
  top: 50%;
  transformorigin: center;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 10px 0;
`

const Text = styled.div`
  text-align: justify;
  font-size: 16px;
  font-weight: 400;
  color: #333a55;
  padding: 20px 0;
`

const SButton = styled(Button)`
  margin-top: 10px;
`
