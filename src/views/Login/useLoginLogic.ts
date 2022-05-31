import { useEffect, useState } from 'react'
import { useUserContext } from '../../contexts/User/useUserContext'
import { useNavigation } from '../../hooks/useNavigation'
import { useLogin } from '../../queries/useLogin'
import { useMe } from '../../queries/useMe'

export const useLoginLogic = () => {
  const [showAuthSessionModal, setShowAuthSessionModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const { mutate, data, isLoading, isSuccess, isError, error: loginError } = useLogin()
  const { setToken, token } = useUserContext()
  const { refetch, isSuccess: isMeSuccess } = useMe(token)
  const navigation = useNavigation()

  const login = (email: string) => mutate({ email })

  // login success
  useEffect(() => {
    if (!isSuccess || !data?.token) return
    setToken(data.token)
    setShowAuthSessionModal(true)
  }, [isSuccess, data?.token, navigation, setToken])

  // check /me
  useEffect(() => {
    if (!showAuthSessionModal) return
    const interval = setInterval(() => refetch(), 5 * 1000)
    return () => clearInterval(interval)
  }, [showAuthSessionModal])

  // /me success
  useEffect(() => {
    if (!isMeSuccess) return
    navigation.navigate('/')
  }, [isMeSuccess])

  // yyyyy
  useEffect(() => {
    if (!loginError) return
    setShowSignupModal(true)
  }, [loginError])

  return {
    login,
    showAuthSessionModal,
    error: isError ? ['Invalid email'] : undefined,
    isLoading,
    showSignupModal,
    closeSignupModal: () => setShowSignupModal(false),
  }
}
