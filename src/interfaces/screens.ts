import { ElementType, ReactNode } from 'react'

export enum SCREENS {
  HOME = 'home',
  ROOT = 'root',
  ENTER_PIN = 'enter_pin',
  BALANCE = 'balance',
  WITHDRAW = 'withdraw',
  DEPOSIT = 'deposit',
}

type MenuOption = {
  label: string
  action: () => void
}

export type MenuOptionList = [
  MenuOption?,
  MenuOption?,
  MenuOption?,
  MenuOption?,
]

export type Menu = {
  title: string
  content?: string
  options?: {
    left?: MenuOptionList
    right?: MenuOptionList
  }
}
