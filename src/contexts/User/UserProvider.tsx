import { FC, memo, useEffect, useState } from 'react'
import { UserContext, UserContextType } from './UserContext'
import { useMe } from '../../queries/useMe'
import { useNavigation } from '../../hooks/useNavigation'
import { useLocation } from 'react-router-dom'

/* token
   undefined -> loading
   null -> none
   string -> correct
*/

const notLoggedAvailablePaths = ['/login', '/register']

export const UserContextProvider: FC = memo(({ children }) => {
  const [token, setToken] = useState<string | null | undefined>()
  const { data: user, error: authError, refetch: refetchMe } = useMe(token)
  const navigation = useNavigation()
  const location = useLocation()

  useEffect(() => {
    if (token === undefined) return

    // not logged
    if (token === null) {
      localStorage.removeItem('token')
      if (!notLoggedAvailablePaths.includes(location.pathname)) navigation.navigate('/login')
      return
    }

    // token exists
    localStorage.setItem('token', token)
  }, [token, navigation])

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  useEffect(() => {
    console.log({ token })
  }, [token])

  useEffect(() => {
    if (authError === 401) setToken(null)
  }, [authError])

  const value: UserContextType = {
    user: user ?? null,
    token,
    isAdmin: user?.role === 'Admin',
    setToken,
    refetchMe,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
})
