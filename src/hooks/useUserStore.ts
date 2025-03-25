import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import {
  authenticate,
  deposit,
  signOut,
  withdraw,
} from '../services/transactions'
import { UserStore } from '../interfaces/user'

export const userStoreDefaultVaue = {
  data: {
    username: '',
    balance: 0,
    cardProvider: '',
  },
  isLoading: false,
  isError: false,
}

export const StoreContext = createContext<
  [UserStore, Dispatch<SetStateAction<UserStore>>]
>([userStoreDefaultVaue, () => {}])

export const useUserStore = () => {
  const [store, setStore] = useContext(StoreContext)

  const logout = async () => {
    setStore((prev) => ({ ...prev, isLoading: true, isError: false }))
    await signOut()
    setStore((prev) => ({ ...prev, isLoading: false }))
  }
  const login = async (pin: string) => {
    setStore((prev) => ({ ...prev, isLoading: true, isError: false }))

    try {
      const res = await authenticate(pin)
      setStore((prev) => {
        const draft = { ...prev }
        draft.isLoading = false
        if (res.status === 200) draft.data = res.data!
        return draft
      })
    } catch (e) {
      setStore((prev) => ({ ...prev, isLoading: false }))
      throw e
    }
  }

  const withdrawAction = async (value: number) => {
    setStore((prev) => ({ ...prev, isLoading: true }))
    try {
      const res = await withdraw(value)
      setStore((prev) => {
        const draft = { ...prev }
        draft.data.balance = res.data!.balance
        draft.isLoading = false
        return draft
      })
    } catch (e) {
      setStore((prev) => ({ ...prev, isLoading: false }))
      throw e
    }
  }

  const depositAction = async (value: number) => {
    setStore((prev) => ({ ...prev, isLoading: true }))
    const res = await deposit(value)
    setStore((prev) => {
      const draft = { ...prev }
      draft.data.balance = res.data.balance
      draft.isLoading = false
      return draft
    })
  }

  return {
    ...store,
    actions: {
      deposit: depositAction,
      withdraw: withdrawAction,
      login,
      logout,
    },
  }
}
