import { useNavigate } from '../../hooks/useNavigate'
import { useUserStore } from '../../hooks/useUserStore'
import { Screen } from '../Screen'

export const Balance = () => {
  const navigate = useNavigate()
  const { data: user } = useUserStore()

  return (
    <Screen
      title="Your current balance is:"
      content={<span className="screen__balance">${user.balance}</span>}
      rightOptions={[{ label: 'Back', action: () => navigate.back() }]}
    />
  )
}
