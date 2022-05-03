import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { BACKEND_URL } from '../backend_url'

export const useEntry = (labels?: string[]) => {
  const { data, refetch } = useQuery<unknown, unknown, any[]>('entries', () =>
    fetch(`${BACKEND_URL}/entry/verified`, {
      method: 'GET',
    }).then((res) => res.json())
  )

  const { data: labeledData, refetch: labeledRefetch } = useQuery<unknown, unknown, any[]>('entries', () =>
    fetch(`${BACKEND_URL}/entry/verified`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(labels),
    }).then((res) => res.json())
  )

  useEffect(() => {
    if (labels?.length) labeledRefetch()
    else refetch()
  }, [labeledRefetch, labels])

  return {
    data: labels?.length ? labeledData : data,
  }
}
