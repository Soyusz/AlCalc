import styled from 'styled-components'
import { Post } from '../../components/Post'
import { useFeed } from '../../queries/useFeed'

export const Friends = () => {
  const { data, isLoading } = useFeed('FOLLOWED')

  return (
    <>
      {data?.length === 0 && (
        <EmptyFeed>
          <h1>Nothing here!</h1>
          <h2>Follow your friends to see more posts</h2>
        </EmptyFeed>
      )}
      <Scroll disabled={isLoading}>
        {data?.map((post) => (
          <Post {...post} key={post.id} skeleton={post.skeleton ?? false} />
        ))}
      </Scroll>
    </>
  )
}

const Scroll = styled.div<{ disabled?: boolean }>`
  margin: 55px 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-y: ${({ disabled }) => (disabled ? 'hidden' : 'scroll')} !important;
`

const EmptyFeed = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  flex: 1;

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
  }
`
