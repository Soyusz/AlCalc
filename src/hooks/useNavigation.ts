import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigation = () => {
  const navigate = useNavigate()

  return useMemo(
    () => ({
      navigate: (path: string) => navigate(path, { replace: true }),
      push: (path: string) => navigate(`/stack${path}`, { replace: false }),
      back: () => navigate(-1),
    }),
    [navigate]
  )
}
