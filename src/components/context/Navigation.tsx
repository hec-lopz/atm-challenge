import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'
import { SCREENS } from '../../interfaces/screens'

const defaultValue = [SCREENS.ROOT]

export const NavigationContext = createContext<
  [SCREENS[], Dispatch<SetStateAction<SCREENS[]>>]
>([defaultValue, () => {}])

export const Navigation = ({ children }: { children: ReactNode }) => {
  const navigationState = useState(defaultValue)
  return (
    <NavigationContext value={navigationState}>{children}</NavigationContext>
  )
}
