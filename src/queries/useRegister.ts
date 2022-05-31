import { useMutation } from 'react-query'
import { BACKEND_URL } from '../backend_url'

export const useRegister = () => {
  return useMutation<Data, Error, Params>('me', (params) =>
    fetch(`${BACKEND_URL}/user/login`, {
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
type Data = {
  token: string
}
type Error = unknown
