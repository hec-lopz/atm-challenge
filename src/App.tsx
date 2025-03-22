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
      <div className="body">
        <div className="card-selector"></div>
        <div className="screen">
          <p className="screen__header">Welcome to the ATM</p>
          <div className="screen__options-container">
            <ul className="screen__options">
              <li>Enter PIN</li>
            </ul>
          </div>
          <span>SYSTEMS</span>
        </div>
        <img className="body__graffiti" src="/assets/sticker_graf.png" />
      </div>
    </main>
  )
}

export default App
