import { useQuery } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { Stats } from '../types/stats'

export const useStats = (user_id?: string | null | false) => {
  return useQuery<Stats>(
    ['stats', user_id],
    () =>
      fetch(`${BACKEND_URL}/user/stats/${user_id}`, {
        method: 'GET',
      }).then((res) => res.json()),
    {
      enabled: !!user_id,
    }
  )
}
