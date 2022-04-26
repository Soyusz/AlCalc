import { useMutation } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { useUserContext } from '../contexts/User/useUserContext'

type MutationProps = {
  entryId: string
  judgement: boolean
}

export const useJudgeEntry = () => {
  const { token } = useUserContext()
  return useMutation<unknown, unknown, MutationProps>(({ judgement, entryId }: MutationProps) =>
    fetch(`${BACKEND_URL}/entry/${entryId}/${judgement ? 'accept' : 'reject'}`, {
      method: 'PUT',
      headers: {
        Authorization: token as string,
      },
    }).then((res) => {
      if (!res.ok) throw new Error()
      return res.json()
    })
  )
}
