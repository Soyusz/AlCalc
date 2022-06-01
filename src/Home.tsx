import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Bottomnav } from './components/Bottomnav'
import { Header } from './components/Header'
import { useNavigation } from './hooks/useNavigation'
import { Calc } from './views/Calc/Calc'
import { Feed } from './views/Feed/Feed'
import { Friends } from './views/Friends/Friends'
import { Ranking } from './views/Ranking/Ranking'
export const Home = () => {
  const location = useLocation()
  const { navigate } = useNavigation()

  useEffect(() => {
    console.log({ location })
    if (location.pathname === '/home') navigate('/home/friends')
  }, [navigate, location.pathname])

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="calc" element={<Calc />} />
        <Route path="friends" element={<Friends />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="feed" element={<Feed />} />
      </Routes>
      <Bottomnav />
    </Container>
  )
}

const Container = styled.div`
  max-height: 100vh;
  overflow: scroll;
`
