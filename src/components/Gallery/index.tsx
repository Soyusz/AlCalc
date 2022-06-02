import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { Post } from '../../types/post'
import { useNavigation } from '../../hooks/useNavigation'

type GalleryProps = {
  posts: Post[]
  userId: string
}

export const Gallery = ({ posts, userId }: GalleryProps) => {
  const { push } = useNavigation()
  const handleClick = (postId: string, skeleton?: boolean) => {
    if (skeleton) return
    push(`/user/${userId}/posts/${postId}/#${postId}`)
  }
  return (
    <Container>
      {posts?.map((post) => (
        <Image key={post.id} onClick={() => handleClick(post.id, post.skeleton)}>
          {post.skeleton ? <Skeleton /> : <img src={post.photos[0]} alt="post" />}
        </Image>
      ))}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  grid-gap: 5px;
  padding: 5px;
`

const Image = styled.div`
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 5px;
  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  & .react-loading-skeleton {
    aspect-ratio: 1;
  }
`
