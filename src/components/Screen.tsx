import { OptionList } from './OptionList'
import '../styles/Screen.css'
import { ReactNode } from 'react'
import { Menu, MenuOptionList } from '../interfaces/screens'
import { useUserStore } from '../hooks/useUserStore'

interface ScreenProps extends Menu {
  children?: ReactNode
  leftOptions?: MenuOptionList
  rightOptions?: MenuOptionList
}

export const Screen = ({
  title,
  content: Content,
  leftOptions,
  rightOptions,
}: ScreenProps) => {
  const { isLoading } = useUserStore()
  return (
    <div className="screen">
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <>
          <p className="screen__header">{title}</p>
          <div className="screen__content-container">
            {Content &&
              (typeof Content === 'string' ? <span>{Content}</span> : Content)}
          </div>
        </>
      )}
      <OptionList side="left" options={leftOptions} />
      <OptionList side="right" options={rightOptions} />
      <span className="screen__brand">SYSTEMS</span>
    </div>
  )
}
