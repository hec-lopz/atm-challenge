import { useNavigate } from '../../hooks/useNavigate'
import { SCREENS } from '../../interfaces/screens'
import { Screen } from '../Screen'

export const Root = () => {
  const navigate = useNavigate()
  return (
    <Screen
      title="Welcome to the ATM"
      rightOptions={[
        {
          label: 'Enter PIN',
          action: () => navigate.to(SCREENS.ENTER_PIN),
        },
      ]}
    />
  )
}
