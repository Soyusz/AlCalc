import { useQuery } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { useUserContext } from '../contexts/User/useUserContext'
import { Entry } from '../types/entry'

export const useFetchJudge = () => {
  const { token } = useUserContext()
  return useQuery<Entry[]>(
    'judgement entry fetch',
    () =>
      fetch(`${BACKEND_URL}/entry/unverified`, {
        method: 'GET',
        headers: {
          Authorization: token as string,
        },
      }).then((res) => res.json()),
    {
      enabled: !!token,
    }
  )
}
