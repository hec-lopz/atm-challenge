import { useNavigate } from '../../hooks/useNavigate'
import { useUserStore } from '../../hooks/useUserStore'
import { SCREENS } from '../../interfaces/screens'
import { Screen } from '../Screen'

export const Success = () => {
  const navigate = useNavigate()
  const { data: user } = useUserStore()

  return (
    <Screen
      title="Transaction successful!"
      content={
        <>
          <span>Your balance is:</span>
          <span className="screen__balance">${user.balance}</span>
        </>
      }
      rightOptions={[
        { label: 'Back', action: () => navigate.to(SCREENS.HOME) },
      ]}
    />
  )
}
