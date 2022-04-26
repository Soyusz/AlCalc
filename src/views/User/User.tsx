import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Gallery } from '../../components/Gallery'
import { SkelText } from '../../components/SkelText'
import { useUser } from '../../queries/useUser'
import { useUserPosts } from '../../queries/useUserPosts'

const placeholderImage =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.WHfN_fEpKjn2hGiq_OgIUAHaHa%26pid%3DApi&f=1'

export const User = () => {
  const { userId } = useParams()
  const { data: user, isLoading: isUserLoading } = useUser(userId ?? '')
  const { data: posts } = useUserPosts(userId)
  const [, setImageLoaded] = useState(false)

  if (!userId) return null

  const imageSrc = !isUserLoading && !user?.photo ? placeholderImage : user?.photo ?? undefined

  return (
    <>
      <Container>
        <UserImage src={imageSrc} onLoad={() => setImageLoaded(true)} />
        <UserName>
          <SkelText v={user?.name} w={10} />
        </UserName>
        <Gallery userId={userId} posts={posts ?? []} />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`

const UserImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  object-fit: cover;
`

const UserName = styled.div`
  margin: 15px 0 50px 0;
  font-size: 22px;
  font-weight: 600;
`
