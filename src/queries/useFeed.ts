import { useQuery } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { useUserContext } from '../contexts/User/useUserContext'
import { Post } from '../types/post'
import { getPlacehodlerPost } from '../utils/placeholders'
import { wait } from '../utils/wait'

export const useFeed = () => {
  const { token } = useUserContext()
  return useQuery<Post[]>(
    'feed',
    () =>
      fetch(`${BACKEND_URL}/post/feed`, {
        method: 'GET',
        headers: {
          Authorization: token as string,
        },
      })
        .then((res) => res.json())
        .then(async (res) => {
          await wait(1000)
          return res
        }),
    {
      enabled: !!token,
      placeholderData: [getPlacehodlerPost(), getPlacehodlerPost(), getPlacehodlerPost()],
    }
  )
}
