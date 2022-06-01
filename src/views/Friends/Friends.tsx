import styled from 'styled-components'
import { Header } from '../../components/Header'
import { Bottomnav } from '../../components/Bottomnav'
import { Post } from '../../components/Post'
import { useFeed } from '../../queries/useFeed'

export const Friends = () => {
  const { data, isLoading } = useFeed()

  return (
    <>
      <Header />
      <Scroll disabled={isLoading}>
        {data?.map((post) => (
          <Post {...post} key={post.id} skeleton={post.skeleton ?? false} />
        ))}
      </Scroll>
      <Bottomnav />
    </>
  )
}

const Scroll = styled.div<{ disabled?: boolean }>`
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-y: ${({ disabled }) => (disabled ? 'hidden' : 'scroll')} !important;
  margin-bottom: -60px;
`
