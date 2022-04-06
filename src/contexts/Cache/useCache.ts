import { useContext } from 'react'
import { CacheContext } from './CacheContext'

export const useCacheContext = () => {
  const context = useContext(CacheContext)

  if (!context) throw Error('Use this hook in provider scope')
  return context
}
