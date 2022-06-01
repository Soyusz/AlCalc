import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { User } from './views/User/User'
import { UserPosts } from './views/UserPosts/UserPosts'
import { AddEntry } from './views/AddEntry/AddEntry'
import { AddPost } from './views/AddPost/AddPost'
import { Entry } from './views/Entry/Entry'
import { ReactComponent as BackArrow } from './assets/back.svg'
import { useNavigation } from './hooks/useNavigation'

export const Stack = () => {
  const { back } = useNavigation()
  return (
    <Container>
      <Header>
        <BackArrow onClick={back} />
      </Header>
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

const Header = styled.div`
  height: 55px;
  background-color: ${(props) => props.theme.colors.appBackground};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-shadow: 0px 3px 10px 0px #00000030;
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  > svg {
    margin-right: auto;
    margin-left: 10px;
  }
`
