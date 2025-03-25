import { useNavigate } from '../../hooks/useNavigate'
import { Screen } from '../Screen'

export const Error = () => {
  const navigate = useNavigate()

  return (
    <Screen
      title="Something went wrong"
      content="Please try again"
      rightOptions={[{ label: 'Back', action: navigate.back }]}
    />
  )
}
