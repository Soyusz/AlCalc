import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import { Button, CustomButtonVariants } from './Button'

type Props = {
  title?: string
  text?: string
  show?: boolean
  primaryLabel?: string
  secondaryLabel?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  onClose?: () => void
  buttons?: { label: string; onClick?: () => void; variant: CustomButtonVariants; disabled?: boolean }[]
}

export const BottomModal = (p: Props) => {
  return (
    <AnimatePresence>
      {p.show && (
        <>
          <Blur initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} onClick={p.onClose} />
          <Container
            transition={{
              type: 'spring',
              damping: 32,
              stiffness: 400,
            }}
            initial={{ y: 'calc(100% + 100px)' }}
            animate={{ y: 100 }}
            exit={{ y: 'calc(100% + 100px)' }}>
            {p.title && <Title>{p.title}</Title>}
            {p.text && <Text>{p.text}</Text>}
            {p.primaryLabel && <Button label={p.primaryLabel} onClick={p.onPrimaryClick} />}
            {p.secondaryLabel && <Button label={p.secondaryLabel} variant="secondary" onClick={p.onSecondaryClick} />}
            {p.buttons?.map((button) => (
              <Button {...button} />
            ))}
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
  z-index: 201;
  opacity: 0;
`

const Container = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 100px;
  background: white;
  z-index: 5000;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  transform: translateY(0);
  padding: 16px;
  padding-bottom: 116px;
  display: flex;
  flex-direction: column;

  > button {
    margin: 2.5px 16px;
    width: initial !important;
    align-self: stretch;
  }
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  padding: 8px 0;
`

const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 35px;
  text-align: center;
`
