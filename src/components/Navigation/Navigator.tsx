import { Route, Routes, useLocation } from 'react-router-dom'
import { Fallback404 } from '../../views/Fallback404/Fallback404'
import { About } from '../../views/About/About'
import { DefaultTemplate } from '../../views/Templates/DefaultTemplate'
import { Admin } from '../../views/Admin/Admin'
import { Login } from '../../views/Login/Login'
import { User } from '../../views/User/User'
import { UserPosts } from '../../views/UserPosts/UserPosts'
import { AddEntry } from '../../views/AddEntry/AddEntry'
import { Entry } from '../../views/Entry/Entry'
import { AddPost } from '../../views/AddPost/AddPost'
import { Register } from '../../views/Register/Register'
import { Home } from '../../Home'
import { useEffect } from 'react'
import { useNavigation } from '../../hooks/useNavigation'
import { Friends } from '../../views/Friends/Friends'

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

        <Route path="/stack">
          <Route path="user/:userId" element={<User />} />
          <Route path="user/:userId/posts/:postId" element={<UserPosts />} />
          <Route path="entry/add" element={<AddEntry />} />
          <Route path="post/add" element={<AddPost />} />
          <Route path="entry/view/:entryId" element={<Entry />} />
        </Route>
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
