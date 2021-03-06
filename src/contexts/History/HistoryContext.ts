import { createContext } from 'react'
import { DrawerScreens, StackScreens } from './types'

export type HistoryContextType = {
  push: (screen: StackScreens) => void
  navigate: (screen: DrawerScreens) => void
  back: () => void
  displayedScreen: StackScreens | DrawerScreens
  isStackOnTop: boolean
  toggleSidebar: (value?: boolean) => void
  sidebarOpen: boolean
}

export const HistoryContext = createContext<HistoryContextType | null>(null)
