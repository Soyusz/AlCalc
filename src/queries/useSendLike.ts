import { useMutation } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { useUserContext } from '../contexts/User/useUserContext'

type MutationProps = {
  postId: string
  value: boolean
}

export const useSendLike = () => {
  const { token } = useUserContext()
  return useMutation<unknown, unknown, MutationProps>(({ postId, value }: MutationProps) =>
    fetch(`${BACKEND_URL}/like/${postId}`, {
      method: value ? 'POST' : 'DELETE',
      headers: {
        Authorization: token as string,
      },
    }).then((res) => {
      if (!res.ok) throw new Error()
      return res.json()
    })
  )
}
