import { useUserStore } from '../hooks/useUserStore'
import { MenuOptionList } from '../interfaces/screens'
import '../styles/OptionList.css'

type OptionListProps = {
  options?: MenuOptionList
  side?: 'right' | 'left'
}

export const OptionList = ({ side = 'right', options }: OptionListProps) => {
  const { isLoading } = useUserStore()
  return (
    <ul
      className={`screen__options-list ${side === 'left' ? 'screen__options-list--reversed' : ''}`}
    >
      {Array(4)
        .fill('')
        .map((_, index) => {
          const option = options?.[index]
          const isOptionDisabled = !option || isLoading
          return (
            <li
              className="option"
              key={option ? option.label : `inactive-${index}`}
            >
              <span
                className={`option__label ${!option && 'option__label--disabled'}`}
              >
                {option?.label}
              </span>
              <span className="dash"></span>
              <div className="option__button-container">
                <span className="dash dash--dark option__button__dash"></span>
                <button
                  className={`option__button ${isOptionDisabled && 'option__button--disabled'}`}
                  onClick={option?.action}
                  disabled={isOptionDisabled}
                ></button>
              </div>
            </li>
          )
        })}
    </ul>
  )
}
