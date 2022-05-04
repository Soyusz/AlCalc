import { useQuery } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { Entry } from '../types/entry'

export const useEntry = (entry_id?: string) => {
  const query = useQuery<unknown, unknown, Entry>(
    'entries',
    () =>
      fetch(`${BACKEND_URL}/entry/${entry_id}`, {
        method: 'GET',
      }).then((res) => res.json()),
    {
      enabled: !!entry_id,
    }
  )

  return query
}
