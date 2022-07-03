import { useMutation } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { User } from '../types/user'

export const useUpdateUser = () => {
  return useMutation<User, unknown, Partial<User>>('update user', (params) =>
    fetch(`${BACKEND_URL}/user`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json())
  )
}
