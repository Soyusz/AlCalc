import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { User } from './views/User/User'
import { UserPosts } from './views/UserPosts/UserPosts'
import { AddEntry } from './views/AddEntry/AddEntry'
import { AddPost } from './views/AddPost/AddPost'
import { Entry } from './views/Entry/Entry'
import { useNavigation } from './hooks/useNavigation'
import { StackHeader } from './components/StackHeader'

export const Stack = () => {
  return (
    <Container>
      <StackHeader />
      <Routes>
        <Route path="user/:userId" element={<User />} />
        <Route path="user/:userId/posts/:postId" element={<UserPosts />} />
        <Route path="entry/add" element={<AddEntry />} />
        <Route path="post/add" element={<AddPost />} />
        <Route path="entry/view/:entryId" element={<Entry />} />
      </Routes>
    </Container>
  )
}

const Container = styled.div`
  max-height: 100vh;
  overflow: scroll;
  padding-top: 55px;
  display: flex;
  flex-direction: column;
  & > div {
    flex: 1;
  }
`
