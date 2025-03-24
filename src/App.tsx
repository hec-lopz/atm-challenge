import { Screen } from './components/Screen'
import './styles/App.css'

function App() {
  return (
    <main className="container">
      <div className="banner">
        <div className="banner__sign-container">
          <img className="banner__sign" src="/assets/atm_sign.png" />
          <img className="banner__graffiti" src="/assets/graffiti.png" />
        </div>
      </div>
      <div className="atm">
        <div className="card-selector"></div>
        <Screen />
        <img className="atm__graffiti" src="/assets/sticker_graf.png" />
      </div>
    </main>
  )
}

export default App
