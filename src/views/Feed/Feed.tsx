import styled from 'styled-components'
import { Header } from '../../components/Header'
import { Post } from '../../components/Post'
import { useFeed } from '../../queries/useFeed'

export const Feed = () => {
  const { data, isLoading } = useFeed()

  return (
    <>
      <Header />
      <Scroll disabled={isLoading}>
        {data?.map((post) => (
          <Post {...post} key={post.id} skeleton={post.skeleton ?? false} />
        ))}
      </Scroll>
    </>
  )
}

const Scroll = styled.div<{ disabled?: boolean }>`
  margin-top: 60px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-y: ${({ disabled }) => (disabled ? 'hidden' : 'scroll')} !important;
`
