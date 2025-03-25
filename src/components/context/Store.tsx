import { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useState } from 'react'
import { UserStore } from '../../interfaces/user'

export const defaultVaue = {
  data: {
    username: '',
    balance: 0,
  },
  isLoading: false,
  isError: false,
}

export const StoreContext = createContext<
  [UserStore, Dispatch<SetStateAction<UserStore>>]
>([defaultVaue, () => {}])

export const Store = ({ children }: { children: ReactNode }) => {
  const storeState = useState(defaultVaue)

  return <StoreContext value={storeState}> {children} </StoreContext>
}
