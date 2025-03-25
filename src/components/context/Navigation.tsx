import { ReactNode, useState } from 'react'
import {
  NavigationContext,
  navigationDefaultValue,
} from '../../hooks/useNavigate'

export const Navigation = ({ children }: { children: ReactNode }) => {
  const navigationState = useState(navigationDefaultValue)
  return (
    <NavigationContext value={navigationState}>{children}</NavigationContext>
  )
}
