import { useNavigate } from '../hooks/useNavigate'
import { SCREENS } from '../interfaces/screens'
import { Home } from './Views/Home'
import { Root } from './Views/Root'
import { EnterPIN } from './Views/EnterPIN'
import { Balance } from './Views/Balance'
import { Withdraw } from './Views/Withdraw'
import { Deposit } from './Views/Deposit'
import { Success } from './Views/Success'
import { Error } from './Views/Error'

export const Router = () => {
  const navigate = useNavigate()

  switch (navigate.location) {
    case SCREENS.HOME:
      return <Home />
    case SCREENS.ENTER_PIN:
      return <EnterPIN />
    case SCREENS.BALANCE:
      return <Balance />
    case SCREENS.WITHDRAW:
      return <Withdraw />
    case SCREENS.DEPOSIT:
      return <Deposit />
    case SCREENS.SUCCESS:
      return <Success />
    case SCREENS.ERROR:
      return <Error />
    case SCREENS.ROOT:
    default:
      return <Root />
  }
}
