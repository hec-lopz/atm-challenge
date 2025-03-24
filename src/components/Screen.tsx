import { OptionList } from './OptionList'
import '../styles/Screen.css'
import { useMemo } from 'react'
import { useNavigate } from '../hooks/useNavigate'
import { Menu, SCREENS } from '../interfaces/screens'

export const Screen = () => {
  const navigate = useNavigate()

  const VIEWS: Record<SCREENS, Menu> = useMemo(
    () => ({
      [SCREENS.ROOT]: {
        title: 'Welcome to the ATM',
        options: {
          right: [
            {
              label: 'Enter PIN',
              action: () => navigate.to(SCREENS.ENTER_PIN),
            },
          ],
        },
      },
      [SCREENS.ENTER_PIN]: {
        title: 'Introduce your PIN',
        options: {
          left: [
            {
              label: 'Cancel',
              action: () => navigate.back(),
            },
          ],
          right: [
            {
              label: 'Confirm',
              action: () => navigate.to(SCREENS.HOME),
            },
          ],
        },
      },
      [SCREENS.HOME]: {
        title: 'Welcome, Peter Parker!',
        content: 'Please make a choice...',
        options: {
          left: [
            {
              label: 'Deposit',
              action: () => navigate.to(SCREENS.DEPOSIT),
            },
            {
              label: 'Withdraw',
              action: () => navigate.to(SCREENS.WITHDRAW),
            },
          ],
          right: [
            {
              label: 'Re-Enter PIN',
              action: () => navigate.to(SCREENS.ENTER_PIN),
            },
            {
              label: 'Balance',
              action: () => navigate.to(SCREENS.BALANCE),
            },
            {
              label: 'Exit',
              action: () => navigate.to(SCREENS.ROOT),
            },
          ],
        },
      },
      [SCREENS.BALANCE]: {
        title: 'Your current balance is:',
        content: '$500',
        options: {
          right: [{ label: 'Back', action: () => navigate.back() }],
        },
      },
      [SCREENS.WITHDRAW]: {
        title: 'Withdraw',
        content: 'Select an option:',
        options: {
          left: [
            { label: '$10', action: () => console.log(10) },
            { label: '$20', action: () => console.log(20) },
            { label: '$50', action: () => console.log(50) },
            { label: 'Back', action: () => navigate.back() },
          ],
          right: [{ label: '$100', action: () => console.log(100) }],
        },
      },
      [SCREENS.DEPOSIT]: {
        title: 'Deposit',
        content: 'Select an option:',
        options: {
          left: [
            { label: '$10', action: () => console.log(10) },
            { label: '$20', action: () => console.log(20) },
            { label: '$50', action: () => console.log(50) },
            { label: 'Back', action: () => navigate.back() },
          ],
          right: [{ label: '$100', action: () => console.log(100) }],
        },
      },
    }),
    [],
  )

  const currentView = VIEWS[navigate.location]

  return (
    <div className="screen">
      <p className="screen__header">{currentView.title}</p>
      <div className="screen__content-container">
        {currentView.content && <span>{currentView.content}</span>}
      </div>
      <OptionList side="left" options={currentView.options?.left} />
      <OptionList side="right" options={currentView.options?.right} />
      <span className="screen__brand">SYSTEMS</span>
    </div>
  )
}
