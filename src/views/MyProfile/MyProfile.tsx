import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useUserContext } from '../../contexts/User/useUserContext'
import { ProfilePhoto } from './ProfilePhoto'

export const MyProfile = () => {
  const { user: me, refetchMe } = useUserContext()
  const [displayName, setDisplayName] = useState(me?.displayName)
  const [description, setDescription] = useState(me?.description)

  useEffect(() => {
    refetchMe()
  }, [refetchMe])

  const displaySave = haveChanged(displayName, me?.displayName) || haveChanged(description, me?.description)

  return (
    <Container>
      <ProfilePhoto src={me?.photo} />
      <FormContainer>
        <Input value={displayName ?? ''} onValueChange={setDisplayName} label="Display name" />
        <Input value={description ?? ''} onValueChange={setDescription} label="Description" />
      </FormContainer>
      {displaySave && <SButton label="Save" onClick={() => {}} />}
    </Container>
  )
}

const haveChanged = (v1?: string | null, v2?: string | null) => {
  const empty = [null, undefined, '']
  if (empty.includes(v1) && empty.includes(v2)) return false
  return v1 !== v2
}

const Container = styled.div`
  padding: 15px;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: stretch;
  margin-top: 75px;
`

const SButton = styled(Button)`
  margin-top: auto;
`
