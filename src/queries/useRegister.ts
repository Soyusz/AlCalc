import { useMutation } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { User } from '../types/user'

export const useRegister = () => {
  return useMutation<User, Error, Params>('register', (params) =>
    fetch(`${BACKEND_URL}/user`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json())
  )
}

type Params = {
  email: string
  name: string
}
type Error = unknown
