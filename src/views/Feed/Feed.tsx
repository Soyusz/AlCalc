import { useEffect } from 'react'
import styled from 'styled-components'
import { Post } from '../../components/Post'
import { useFeed } from '../../queries/useFeed'

export const Feed = () => {
  const { data, isLoading } = useFeed('FEED')

  useEffect(() => {
    console.log({ data })
  })

  return (
    <Scroll disabled={isLoading}>
      {data?.map((post) => (
        <Post {...post} key={post.id} skeleton={post.skeleton ?? false} />
      ))}
    </Scroll>
  )
}

const Scroll = styled.div<{ disabled?: boolean }>`
  margin: 55px 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-y: ${({ disabled }) => (disabled ? 'hidden' : 'scroll')} !important;
`
