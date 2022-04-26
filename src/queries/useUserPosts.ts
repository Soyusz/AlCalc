import { wait } from '@testing-library/user-event/dist/utils'
import { useQuery } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { Post } from '../types/post'
import { getPlacehodlerPost } from '../utils/placeholders'

export const useUserPosts = (userId?: string) => {
  return useQuery<Post[]>(
    ['user post', userId],
    () =>
      fetch(`${BACKEND_URL}/post/user/${userId}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then(async (res) => {
          await wait(1000)
          return res
        }),
    {
      enabled: !!userId,
      placeholderData: Array(3).map(() => getPlacehodlerPost()),
    }
  )
}
