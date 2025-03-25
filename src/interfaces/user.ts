export type User = {
  username: string
  balance: number
  cardProvider: string
}

export type UserStore = {
  data: User
  isLoading: boolean
  isError: boolean
}
