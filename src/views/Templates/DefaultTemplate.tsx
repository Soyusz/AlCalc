import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

type DefaultTemplateProps = {
  className?: string
  contentPadding?: string
}

export const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children, className, contentPadding }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const handleClickContent = () => {
    if (!showSidebar) return
    setShowSidebar(false)
  }

  return (
    <Container className={className}>
      <Header onIconClick={() => setShowSidebar(!showSidebar)} />
      <Sidebar show={showSidebar} afterClick={() => setShowSidebar(false)} />
      <Content
        onClick={handleClickContent}
        padding={contentPadding}
        variants={variants}
        animate={showSidebar ? 'sidebar' : 'normal'}
        initial={false}
        transition={{ type: 'tween' }}>
        {children}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.appBackground};
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template: 60px 1fr / auto 100vw;
  perspective: 200px;
`

const Content = styled(motion.div)<{ padding?: string }>`
  display: grid;
  grid-template: 1fr / 1fr;
  overflow: hidden;
  z-index: 32;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  & > div {
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }
`

const variants = {
  normal: {
    transform: 'scale(1.00) rotateY(0deg)',
    borderRadius: 0,
    boxShadow: '0px 0px 10px 0px #00000000',
  },
  sidebar: {
    transform: 'scale(0.9) rotateY(-5deg)',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px #00000035',
  },
}
