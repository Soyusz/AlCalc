import { useEffect, useState } from 'react'
import styled from 'styled-components'
import blankProfileImage from '../../assets/blank_profile.png'
import { useUserContext } from '../../contexts/User/useUserContext'
import { useUpdatePhoto } from '../../queries/useUpdatePhoto'
import { UploadPhotoModal } from './UploadPhotoModal'

type Props = {
  src?: string | null
}

export const ProfilePhoto = (p: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { mutate, isSuccess } = useUpdatePhoto()
  const { refetchMe } = useUserContext()
  const handlePhotoSelected = (photo: string) => {
    setIsModalOpen(false)
    mutate(photo)
  }

  useEffect(() => {
    if (isSuccess) refetchMe()
  }, [isSuccess, refetchMe])

  return (
    <Container>
      <Photo src={p.src ?? blankProfileImage} onClick={() => setIsModalOpen(true)} />
      <UploadPhotoModal
        onClose={() => setIsModalOpen(false)}
        onImageSelected={handlePhotoSelected}
        isOpen={isModalOpen}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Photo = styled.img`
  border-radius: 10px;
  height: 150px;
  width: 150px;
`
