import { FC, memo, useCallback, useState } from 'react'
import { HistoryContextType, HistoryContext } from './HistoryContext'
import { DrawerScreens, StackScreens } from './types'

export const HistoryProvider: FC = memo(({ children }) => {
  const [stack, setStack] = useState<StackScreens[]>([])
  const [screen, setScreen] = useState<DrawerScreens>('')

  const push = useCallback((screen: DrawerScreens) => {
    setStack((prev) => [screen, ...prev])
  }, [])

  const navigate = useCallback((screen: DrawerScreens) => {
    setStack([])
    setScreen(screen)
  }, [])

  const back = useCallback(() => {
    setStack(([_head, ...tail]) => tail)
  }, [])

  const displayedScreen = stack.length ? stack[0] : screen

  const isStackOnTop = !!stack.length

  const value: HistoryContextType = {
    push,
    navigate,
    back,
    displayedScreen,
    isStackOnTop,
  }

  return <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
})
