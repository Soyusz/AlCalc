import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Sidebar } from '../../components/Sidebar'
import { useHistory } from '../../contexts/History/useHistory'

type DefaultTemplateProps = {
  className?: string
  contentPadding?: string
}

export const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children, className, contentPadding }) => {
  const { sidebarOpen, toggleSidebar } = useHistory()
  const handleClickContent = () => {
    if (!sidebarOpen) return
    toggleSidebar(false)
  }

  return (
    <Container className={className}>
      <Sidebar show={sidebarOpen} afterClick={() => toggleSidebar(false)} />
      <Content
        onClick={handleClickContent}
        padding={contentPadding}
        variants={variants}
        animate={sidebarOpen ? 'sidebar' : 'normal'}
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
  grid-row: 1 / 3;
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
    border: '0px solid white',
  },
  sidebar: {
    transform: 'scale(0.9) rotateY(-5deg)',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px #00000035',
    border: '1px solid #333a55',
  },
}
