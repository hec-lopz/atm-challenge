import { ReactNode } from 'react'
import { useState } from 'react'
import { StoreContext, userStoreDefaultVaue } from '../../hooks/useUserStore'

export const Store = ({ children }: { children: ReactNode }) => {
  const storeState = useState(userStoreDefaultVaue)

  return <StoreContext value={storeState}> {children} </StoreContext>
}
