import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Touchable } from '../Touchable'
import like from '../../assets/like2.png'
import Skeleton from 'react-loading-skeleton'
import { Dots } from './Dots'

type PhotoProps = {
  photos?: (string | null)[]
  isLiked: boolean | null
  setIsLiked: React.Dispatch<boolean>
  skeleton: boolean
}

export const Photo = (p: PhotoProps) => {
  const [showLikedIcon, setShowLikedIcon] = useState(false)
  const [imageLoaded] = useState(true)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const listRef = useRef<HTMLDivElement | null>(null)
  const isInitial = useRef(true)

  const animateLike = useCallback(() => {
    setShowLikedIcon(true)
    setTimeout(() => setShowLikedIcon(false), 700)
  }, [])

  const handleScroll = () => {
    if (!listRef.current) return
    const offset = listRef.current.scrollLeft
    const v = window.innerWidth / 2
    const p = offset / v
    const n = Math.round(p / 2)
    setCurrentPhotoIndex(n)
  }

  useEffect(() => {
    if (p.isLiked === null) return
    if (isInitial.current) {
      isInitial.current = false
      return
    }
    if (p.isLiked) animateLike()
  }, [p.isLiked, animateLike])

  const handlePhotoDoubleClick = () => {
    if (!p.isLiked) p.setIsLiked(true)
    else animateLike()
  }

  return (
    <Container onDoubleTap={handlePhotoDoubleClick}>
      {(p.skeleton || !imageLoaded) && <Skeleton height="100vw" width="100vw" />}
      <PhotoList onScroll={handleScroll} ref={listRef}>
        {p.photos?.map((src) => (
          <PostPhoto src={src ?? undefined} show />
        ))}
      </PhotoList>
      {p.photos?.length && p.photos.length > 1 && <Dots current={currentPhotoIndex} number={p.photos?.length ?? 0} />}
      <LikedIconContainer>
        <motion.img variants={LikedIconAnimation} animate={showLikedIcon ? 'shown' : 'hidden'} src={like} alt="like" />
      </LikedIconContainer>
    </Container>
  )
}

const LikedIconAnimation = {
  shown: {
    transformOrigin: '25px 25px',
    transform: 'scale(1)',
  },
  hidden: {
    transformOrigin: '25px 25px',
    transform: 'scale(0)',
  },
}

const Container = styled(Touchable)`
  display: flex;
  overflow: hidden;
  position: relative;
`

const PhotoList = styled(motion.div)`
  display: flex;
  width: 100vw;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`

const PostPhoto = styled(motion.img)<{ show?: boolean }>`
  height: 100vw;
  width: 100vw;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: ${(props) => (props.show ? 'initial' : 'none')};
`

const LikedIconContainer = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  & > img {
    height: 50px;
    width: 50px;
  }
`
