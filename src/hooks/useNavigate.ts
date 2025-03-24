import { useState } from 'react'
import { SCREENS } from '../interfaces/screens'

export const useNavigate = () => {
  const [history, setHistory] = useState<SCREENS[]>([SCREENS.ROOT])

  const location = history.at(-1) ?? SCREENS.ROOT
  const navigateTo = (target: SCREENS) =>
    setHistory((prev) => [...prev, target])

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
