import styled from 'styled-components'
import { Post as PostType } from '../../types/post'
import { useEffect, useState } from 'react'
import { Top } from './Top'
import { Bottom } from './Bottom'
import { Photo } from './Photo'
import { useFetchLike } from '../../queries/useFetchLike'
import { useSendLike } from '../../queries/useSendLike'

export type PostProps = ({ skeleton: false } & PostType) | ({ skeleton: true } & Partial<PostType>)

export const Post = (p: PostProps) => {
  const { amILiking, isLoading: areLikesLoading } = useFetchLike(!p.skeleton && p.id)
  const { mutate: sendLike } = useSendLike()
  const [isLiked, setIsLiked] = useState<boolean | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const currentPhoto = p.photos?.[currentPhotoIndex]

  useEffect(() => setIsLiked(amILiking), [amILiking])

  const isLoading = areLikesLoading
  const isSkeleton = isLoading || p.skeleton

  const handleLikePost = (value: boolean) => {
    sendLike({ value, postId: p.id as string })
    setIsLiked(value)
  }

  const handlePhotoClick = () => {
    if (!p.photos) return
    setCurrentPhotoIndex((currentPhotoIndex + 1) % p.photos?.length)
  }

  return (
    <Container id={p.id}>
      <Top {...p} />
      <Photo
        src={currentPhoto}
        isLiked={isLiked}
        setIsLiked={handleLikePost}
        skeleton={isSkeleton}
        onClick={handlePhotoClick}
      />
      <Bottom isLiked={isLiked} setIsLiked={handleLikePost} skeleton={p.skeleton || isLoading} />
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
