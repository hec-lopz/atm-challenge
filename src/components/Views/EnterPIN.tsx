import { ChangeEvent, useState } from 'react'
import { Screen } from '../Screen'
import { useNavigate } from '../../hooks/useNavigate'
import { SCREENS } from '../../interfaces/screens'
import { useUserStore } from '../../hooks/useUserStore'

export const EnterPIN = () => {
  const { actions } = useUserStore()
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (/\d/.test(newValue)) setValue(newValue)
  }

  const handleuAuth = () => {
    if (!value) window.alert('Please enter your PIN')
    actions
      .login(value)
      .then(() => navigate.to(SCREENS.HOME))
      .catch(() => navigate.to(SCREENS.ERROR))
  }
  return (
    <Screen
      title="Introduce your PIN"
      content={
        <input
          value={value}
          onChange={handleChange}
          className="screen__input"
          type="password"
          maxLength={4}
          autoComplete="off"
          data-1p-ignore
          data-lpignore="true"
          data-protonpass-ignore="true"
        />
      }
      leftOptions={[
        {
          label: 'Cancel',
          action: navigate.back,
        },
      ]}
      rightOptions={[
        {
          label: 'Confirm',
          action: handleuAuth,
        },
      ]}
    />
  )
}
