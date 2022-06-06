import { useQuery } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { useUserContext } from '../contexts/User/useUserContext'
import { Entry } from '../types/entry'

export const useMyEntries = () => {
  const { token } = useUserContext()
  const query = useQuery<unknown, unknown, Entry[]>(
    'my entries',
    () =>
      fetch(`${BACKEND_URL}/entry/my`, {
        method: 'GET',
        headers: {
          Authorization: token as string,
        },
      }).then((res) => res.json()),
    {
      enabled: !!token,
    }
  )
  return query
}
