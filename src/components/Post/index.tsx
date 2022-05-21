import styled from 'styled-components'
import { Post as PostType } from '../../types/post'
import { useEffect, useState } from 'react'
import { Top } from './Top'
import { Bottom } from './Bottom'
import { Photo } from './Photo'
import { useFetchLike } from '../../queries/useFetchLike'
import { useSendLike } from '../../queries/useSendLike'
import { useUser } from '../../queries/useUser'

export type PostProps = ({ skeleton: false } & PostType) | ({ skeleton: true } & Partial<PostType>)

export const Post = (p: PostProps) => {
  const { amILiking, data, isLoading: areLikesLoading, refetch } = useFetchLike(!p.skeleton && p.id)
  const { mutate: sendLike } = useSendLike()
  const [isLiked, setIsLiked] = useState<boolean | null>(null)
  const [likeNumber, setLikeNumber] = useState<number>()
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const { data: author, isLoading: isAuthorLoading } = useUser(!p.skeleton && p.user_id)
  const currentPhoto = p.photos?.[currentPhotoIndex]

  useEffect(() => setIsLiked(amILiking), [amILiking])
  useEffect(() => setLikeNumber(data?.length), [data])

  const isLoading = areLikesLoading
  const isSkeleton = isLoading || p.skeleton

  const handleLikePost = (value: boolean) => {
    sendLike({ value, postId: p.id as string })
    setLikeNumber((likeNumber ?? 0) + (value ? 1 : -1))
    setIsLiked(value)
  }

  const handlePhotoClick = () => {
    if (!p.photos) return
    setCurrentPhotoIndex((currentPhotoIndex + 1) % p.photos?.length)
  }

  return (
    <Container id={p.id}>
      <Top {...p} author={author} />
      <Photo
        src={currentPhoto}
        isLiked={isLiked}
        setIsLiked={handleLikePost}
        skeleton={isSkeleton}
        onClick={handlePhotoClick}
      />
      <Bottom
        title={p.title}
        author={author?.name}
        likeNumber={likeNumber}
        isLiked={isLiked}
        setIsLiked={handleLikePost}
        skeleton={p.skeleton || isLoading}
      />
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.colors.background};
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
`
