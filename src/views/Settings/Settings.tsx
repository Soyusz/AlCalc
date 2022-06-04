import styled from 'styled-components'
import { Header } from '../../components/Header'
import { Route, Routes } from 'react-router-dom'
import { Main } from './Main'

export const Settings = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hehe" element={<h1>hehe</h1>} />
      </Routes>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 55px;
`
