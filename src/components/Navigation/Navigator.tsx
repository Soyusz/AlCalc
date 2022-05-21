import { Route, Routes } from 'react-router-dom'
import { Fallback404 } from '../../views/Fallback404/Fallback404'
import { About } from '../../views/About/About'
import { Ranking } from '../../views/Ranking/Ranking'
import { DefaultTemplate } from '../../views/Templates/DefaultTemplate'
import { Admin } from '../../views/Admin/Admin'
import { Feed } from '../../views/Feed/Feed'
import { Login } from '../../views/Login/Login'
import { User } from '../../views/User/User'
import { UserPosts } from '../../views/UserPosts/UserPosts'
import { Calc } from '../../views/Calc/Calc'
import { AddEntry } from '../../views/AddEntry/AddEntry'
import { Entry } from '../../views/Entry/Entry'
import { AddPost } from '../../views/AddPost/AddPost'

export const Navigator = () => (
  <DefaultTemplate>
    <Routes>
      <Route path="/" element={<Ranking />} />
      <Route path="/calc" element={<Calc />} />
      <Route path="/about" element={<About />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/404" element={<Fallback404 />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />

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
