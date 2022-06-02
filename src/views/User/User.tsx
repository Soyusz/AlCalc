import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Gallery } from '../../components/Gallery'
import { useUser } from '../../queries/useUser'
import { useUserPosts } from '../../queries/useUserPosts'
import blankProfileImage from '../../assets/blank_profile.png'
import { TopSection } from './TopSection'

const placeholderImage = blankProfileImage

export const User = () => {
  const { userId } = useParams()
  const { data: user, isLoading: isUserLoading } = useUser(userId ?? '')
  const { data: posts } = useUserPosts(userId)
  const imageSrc = !isUserLoading && !user?.photo ? placeholderImage : user?.photo ?? undefined

  if (!userId) return null

  return (
    <Container>
      <TopSection user={user} imageSrc={imageSrc} />
      <GallerySection>
        <Gallery userId={userId} posts={posts ?? []} />
      </GallerySection>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3000;
`

const GallerySection = styled.div`
  margin: 10px 0 0 0;
  box-shadow: 0px 3px 10px 0px #00000030;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px;
  flex: 1;
`
