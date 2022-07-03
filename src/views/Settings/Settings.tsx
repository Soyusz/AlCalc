import styled from 'styled-components'
import { Header } from '../../components/Header'
import { Route, Routes } from 'react-router-dom'
import { Main } from './Main'
import { MyEntriesStatus } from '../MyEntriesStatus/MyEntriesStatus'
import { MyProfile } from '../MyProfile/MyProfile'

export const Settings = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/myEntriesStatus" element={<MyEntriesStatus />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 55px;
`
