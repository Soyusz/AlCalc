import { useQuery } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { User } from '../types/user'

export const useMe = (token?: string | null) => {
  return useQuery<User, 400 | 401>(
    'me',
    () =>
      fetch(`${BACKEND_URL}/user/me`, {
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
      retry: 0,
    }
  )
}
