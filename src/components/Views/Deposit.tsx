import { useNavigate } from '../../hooks/useNavigate'
import { useUserStore } from '../../hooks/useUserStore'
import { SCREENS } from '../../interfaces/screens'
import { Screen } from '../Screen'

export const Deposit = () => {
  const navigate = useNavigate()
  const { actions } = useUserStore()
  const handleDeposit = (value: number) =>
    actions.deposit(value).then(() => navigate.to(SCREENS.SUCCESS))

  return (
    <Screen
      title="Deposit"
      content="Select an option:"
      rightOptions={[{ label: '$100', action: () => handleDeposit(100) }]}
      leftOptions={[
        { label: '$10', action: () => handleDeposit(10) },
        { label: '$20', action: () => handleDeposit(20) },
        { label: '$50', action: () => handleDeposit(50) },
        { label: 'Back', action: () => navigate.back() },
      ]}
    />
  )
}
