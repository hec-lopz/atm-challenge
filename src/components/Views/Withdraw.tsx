import { useNavigate } from '../../hooks/useNavigate'
import { useUserStore } from '../../hooks/useUserStore'
import { SCREENS } from '../../interfaces/screens'
import { Screen } from '../Screen'

export const Withdraw = () => {
  const navigate = useNavigate()
  const { actions } = useUserStore()
  const handleWithdraw = (value: number) =>
    actions
      .withdraw(value)
      .then(() => navigate.to(SCREENS.SUCCESS))
      .catch(() => navigate.to(SCREENS.ERROR))

  return (
    <Screen
      title="Withdraw"
      content="Select an option:"
      rightOptions={[{ label: '$100', action: () => handleWithdraw(100) }]}
      leftOptions={[
        { label: '$10', action: () => handleWithdraw(10) },
        { label: '$20', action: () => handleWithdraw(20) },
        { label: '$50', action: () => handleWithdraw(50) },
        { label: 'Back', action: () => navigate.back() },
      ]}
    />
  )
}
