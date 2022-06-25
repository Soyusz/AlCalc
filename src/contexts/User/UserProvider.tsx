import { FC, memo, useEffect, useState } from 'react'
import { UserContext, UserContextType } from './UserContext'
import { useMe } from '../../queries/useMe'
import { useNavigation } from '../../hooks/useNavigation'
import { useLocation } from 'react-router-dom'

export const UserContextProvider: FC = memo(({ children }) => {
  const [token, setToken] = useState<string | null | undefined>()
  const { data: user, error: authError } = useMe()
  const navigation = useNavigation()
  const location = useLocation()

  useEffect(() => {
    if (token !== null) return
    if (['/login', '/register'].includes(location.pathname)) return
    // navigation.navigate('/login')
  }, [token, navigation])

  useEffect(() => {
    if (token === undefined) return
    if (token === null) return localStorage.removeItem('token')
    localStorage.setItem('token', token)
  }, [token])

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  useEffect(() => {
    console.log(authError)
    if (authError === 401) setToken(null)
  }, [authError])

  const value: UserContextType = {
    user: user ?? null,
    token,
    isAdmin: user?.role === 'Admin',
    setToken,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
})
