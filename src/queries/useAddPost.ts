import { useMutation } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { useUserContext } from '../contexts/User/useUserContext'
import { NewPost } from '../types/post'

export const useAddPost = () => {
  const { token } = useUserContext()
  return useMutation<unknown, unknown, NewPost>((post) =>
    fetch(`${BACKEND_URL}/post`, {
      method: 'post',
      headers: {
        Authorization: token as string,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    }).then((res) => {
      if (!res.ok) throw new Error()
      return res.json()
    })
  )
}
