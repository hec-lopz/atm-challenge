import json from '../assets/data.json'

const STORE_KEYS = {
  USER: 'user',
}

const deleteFromStorage = (key: string) => {
  localStorage.removeItem(key)
}
const saveToStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getFromStorage = (key: string) => {
  const data = localStorage.getItem(key)

  if (!data) {
    console.warn("The key provided didn't return a result: ", key)
    return null
  }
  return JSON.parse(data)
}

type Response<T> = { data: T; status: number; error?: string }
const mockFetch = <T>(data: T, reject: boolean = false): Promise<Response<T>> =>
  new Promise((res, rej) => {
    const delay = 1000
    setTimeout(() => {
      if (reject) {
        rej({ error: 'Not found', status: 404 })
      } else {
        res({ data, status: 200 })
      }
    }, delay)
  })

export const signOut = async () => {
  deleteFromStorage(STORE_KEYS.USER)
  return mockFetch(undefined)
}

export const authenticate = async (pin: string) => {
  const user = json.find((user) => user.pin === pin)
  if (!user) return mockFetch(undefined, true)
  const data = {
    username: user.username,
    cardProvider: user.card_provider,
    balance: user.balance,
  }
  saveToStorage(STORE_KEYS.USER, data)
  return mockFetch(data)
}

export const withdraw = async (amount: number) => {
  const userData = getFromStorage(STORE_KEYS.USER)
  userData.balance -= amount
  if (userData.balance < 0) return mockFetch(undefined, true)
  saveToStorage(STORE_KEYS.USER, userData)
  return mockFetch({ balance: userData.balance })
}

export const deposit = async (amount: number) => {
  const userData = getFromStorage(STORE_KEYS.USER)
  userData.balance += amount
  saveToStorage(STORE_KEYS.USER, userData)
  return mockFetch({ balance: userData.balance })
}
