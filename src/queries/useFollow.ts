import { useMutation, useQuery } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { useUserContext } from '../contexts/User/useUserContext'
import { User } from '../types/user'

type MutationProps = {
  userId: string
  value: boolean
}

export const useFollow = () => {
  const { token } = useUserContext()

  const mutation = useMutation<unknown, unknown, MutationProps>(
    ({ userId, value }: MutationProps) =>
      fetch(`${BACKEND_URL}/user/${value ? 'follow' : 'unfollow'}/${userId}`, {
        method: value ? 'POST' : 'DELETE',
        headers: {
          Authorization: token as string,
        },
      }).then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      }),
    {
      onSuccess: () => query.refetch(),
    }
  )

  const query = useQuery<User[]>(
    'my follows',
    () =>
      fetch(`${BACKEND_URL}/user/my_followed`, {
        method: 'GET',
        headers: {
          Authorization: token as string,
        },
      }).then((res) => {
        if (!res.ok) throw res.status
        return res.json()
      }),
    {
      enabled: !!token,
    }
  )

  const amIFollowing = (userId?: string) => {
    if (!userId) return false
    return query.data?.some((u) => u.id === userId) ?? false
  }

  return {
    isLoading: query.isLoading || mutation.isLoading,
    isSuccess: query.isSuccess && mutation.isSuccess,
    isError: query.isError || mutation.isError,
    myFollows: query.data,
    followUser: mutation.mutate,
    amIFollowing,
  }
}
