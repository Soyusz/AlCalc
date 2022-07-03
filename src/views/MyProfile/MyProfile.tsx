import { useEffect } from 'react'
import styled from 'styled-components'
import { useUserContext } from '../../contexts/User/useUserContext'
import { ProfilePhoto } from './ProfilePhoto'

export const MyProfile = () => {
  const { user: me, refetchMe } = useUserContext()

  useEffect(() => {
    refetchMe()
  }, [refetchMe])

  return (
    <Container>
      <ProfilePhoto src={me?.photo} />
    </Container>
  )
}

const Container = styled.div`
  padding: 15px;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`
