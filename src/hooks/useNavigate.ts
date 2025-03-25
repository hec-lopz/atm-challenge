import { useContext } from 'react'
import { SCREENS } from '../interfaces/screens'
import { NavigationContext } from '../components/context/Navigation'

export const useNavigate = () => {
  const [history, setHistory] = useContext(NavigationContext)

  const location = history.at(-1) ?? SCREENS.ROOT
  const navigateTo = (target: SCREENS) =>
    setHistory((prev) => {
      const draft = [...prev]
      const indexInHistory = draft.indexOf(target)
      if (indexInHistory === -1) {
        draft.push(target)
      } else {
        draft.splice(indexInHistory + 1)
      }

      return draft
    })

  const navigateBack = () =>
    setHistory((prev) => {
      const currPath = prev.at(-1)
      const draft = [...prev]
      if (currPath !== SCREENS.ROOT && currPath !== SCREENS.HOME) draft.pop()
      return draft
    })

  return {
    to: navigateTo,
    back: navigateBack,
    location,
  }
}
