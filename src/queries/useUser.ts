import { useQuery } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { User } from '../types/user'

export const useUser = (user_id?: string | null | false) => {
  return useQuery<User>(
    ['user', user_id],
    () =>
      fetch(`${BACKEND_URL}/user/${user_id}`, {
        method: 'GET',
      }).then((res) => res.json()),
    {
      enabled: !!user_id,
    }
  )
}
