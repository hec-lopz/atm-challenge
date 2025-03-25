import { useUserStore } from '../hooks/useUserStore'
import '../styles/CardSelector.css'
const CARD_OPTIONS = ['star', 'pulse', 'maestro', 'master-card', 'plus', 'visa']

export const CardSelector = () => {
  const { data: user } = useUserStore()
  return (
    <div className="card-selector">
      {CARD_OPTIONS.map((card) => (
        <div
          key={card}
          className={`card-selector__item ${card === user.cardProvider && 'card-selector__item--active'}`}
          id={card}
        />
      ))}
      <div></div>
    </div>
  )
}
