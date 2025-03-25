import { useNavigate } from '../../hooks/useNavigate'
import { useUserStore } from '../../hooks/useUserStore'
import { SCREENS } from '../../interfaces/screens'
import { Screen } from '../Screen'

export const Home = () => {
  const { data: user, actions } = useUserStore()
  const navigate = useNavigate()
  const handleExit = () => {
    actions.logout().then(() => navigate.to(SCREENS.ROOT))
  }
  return (
    <Screen
      title={`Welcome, ${user.username}!`}
      content="Please make a choice..."
      leftOptions={[
        {
          label: 'Deposit',
          action: () => navigate.to(SCREENS.DEPOSIT),
        },
        {
          label: 'Withdraw',
          action: () => navigate.to(SCREENS.WITHDRAW),
        },
      ]}
      rightOptions={[
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
          action: handleExit,
        },
      ]}
    />
  )
}
