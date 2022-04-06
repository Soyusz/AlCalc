import { useContext } from 'react'
import { UserContext } from './UserContext'

export const useUserContext = () => {
  const context = useContext(UserContext)

  if (!context) throw Error('Use this hook in provider scope')
  return context
}
