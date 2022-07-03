import { useQuery } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { useUserContext } from '../contexts/User/useUserContext'
import { Post } from '../types/post'
import { getPlacehodlerPost } from '../utils/placeholders'
import { wait } from '../utils/wait'

type FeedSources = 'FEED' | 'FOLLOWED'

export const useFeed = (source: FeedSources) => {
  const { token } = useUserContext()
  return useQuery<Post[]>(
    source,
    () =>
      fetch(`${BACKEND_URL}/post/${source === 'FOLLOWED' ? 'followed-feed' : 'feed'}`, {
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
