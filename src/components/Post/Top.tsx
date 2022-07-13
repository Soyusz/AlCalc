import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import { useNavigation } from '../../hooks/useNavigation'
import { Post as PostType } from '../../types/post'
import { User } from '../../types/user'
import { SkelText } from '../SkelText'
import blankProfileImage from '../../assets/blank_profile.png'
import optionImage from '../../assets/option.png'

type Props = { skeleton: boolean; author?: User } & Partial<PostType>

export const Top = (p: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const { push } = useNavigation()
  const handleClick = () => {
    if (p.skeleton) return
    push(`/user/${p.user_id}`)
  }

  const displayImageSkeleton = p.skeleton || !isImageLoaded
  const imageSrc = !!p.author && !p.author?.photo ? blankProfileImage : p.author?.photo ?? undefined

  return (
    <Container>
      <UserPhoto onClick={handleClick}>
        {displayImageSkeleton && <UserPhotoSkeleton />}
        <img alt="user" hidden={!isImageLoaded} src={imageSrc} onLoad={() => setIsImageLoaded(true)} />
      </UserPhoto>
      <Username onClick={handleClick}>
        <SkelText v={p.author?.name} w={9} />
      </Username>
      <Location>
        <SkelText v={p.location} w={13} />
      </Location>
      <Options src={optionImage} onClick={() => setShowOptions(true)} />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template: auto auto 1fr auto/ auto 1fr;
  margin: 10px 5px;
`

const UserPhoto = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  grid-row: 1 / 3;
  margin-right: 10px;
  overflow: hidden;
  & > img {
    height: 100%;
    width: 100%;
  }
`
const UserPhotoSkeleton = () => <Skeleton width="35px" height="35px" circle />

const Username = styled.div`
  font-weight: 600;
`

const Location = styled.div`
  font-weight: 300;
  font-size: 14px;
  grid-column: 2 / 3;
`

const Options = styled.img`
  height: 20px;
  grid-column: 4 / 5;
  grid-row: 1 / 3;
  align-self: center;
  margin-right: 10px;
`
