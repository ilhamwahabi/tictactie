import { createContext } from 'react'

export const { Consumer, Provider } = createContext()

export const settings = {
  theme: 'light',
  mode: 'friend',
  player: 'cross'
}