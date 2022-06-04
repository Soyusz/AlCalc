import { Route, Routes, useLocation } from 'react-router-dom'
import { About } from '../../views/About/About'
import { DefaultTemplate } from '../../views/Templates/DefaultTemplate'
import { Admin } from '../../views/Admin/Admin'
import { Login } from '../../views/Login/Login'
import { Register } from '../../views/Register/Register'
import { useEffect } from 'react'
import { useNavigation } from '../../hooks/useNavigation'
import { Stack } from '../../Stack'
import { Home } from '../../Home'
import { Settings } from '../../views/Settings/Settings'

export const Navigator = () => {
  const location = useLocation()
  const { navigate } = useNavigation()

  useEffect(() => {
    if (location.pathname === '/') navigate('/home')
  }, [navigate, location.pathname])

  return (
    <DefaultTemplate>
      <Routes>
        <Route path="/home/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings/*" element={<Settings />} />

        <Route path="/stack/*" element={<Stack />} />
      </Routes>
    </DefaultTemplate>
  )
}

export const stackScreens = [
  {
    path: 'entry/add',
    name: 'Add Entry',
  },
  {
    path: 'user/',
    name: ' ',
  },
]
