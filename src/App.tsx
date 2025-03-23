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
        <div className="screen">
          <p className="screen__header">Welcome to the ATM</p>
          <ul className="screen__options-list screen__options-list--reversed">
            <li className="option">
              <span className="option__label">Enter Name</span>
              <span className="dash"></span>
              <div className="option__button-container">
                <span className="dash dash--dark option__button__dash"></span>
                <button className="option__button"></button>
              </div>
            </li>
            <li className="option">
              <span className="option__label">Enter Name</span>
              <span className="dash"></span>
              <div className="option__button-container">
                <span className="dash dash--dark option__button__dash"></span>
                <button className="option__button"></button>
              </div>
            </li>
            <li className="option">
              <span className="option__label">Enter short very long name</span>
              <span className="dash"></span>
              <div className="option__button-container">
                <span className="dash dash--dark option__button__dash"></span>
                <button className="option__button"></button>
              </div>
            </li>
            <li className="option">
              <span className="option__label">Enter PIN</span>
              <span className="dash"></span>
              <div className="option__button-container">
                <span className="dash dash--dark option__button__dash"></span>
                <button className="option__button"></button>
              </div>
            </li>
          </ul>
          <ul className="screen__options-list">
            <li className="option">
              <span className="option__label option__label">Enter Name</span>
              <span className="dash"></span>
              <div className="option__button-container">
                <span className="dash dash--dark option__button__dash"></span>
                <button className="option__button"></button>
              </div>
            </li>
            <li className="option">
              <span className="option__label">Enter Name</span>
              <span className="dash"></span>
              <div className="option__button-container">
                <span className="dash dash--dark option__button__dash"></span>
                <button className="option__button"></button>
              </div>
            </li>
            <li className="option">
              <span className="option__label">Enter short</span>
              <span className="dash"></span>
              <div className="option__button-container">
                <span className="dash dash--dark option__button__dash"></span>
                <button className="option__button"></button>
              </div>
            </li>
            <li className="option">
              <span className="option__label option__label--disabled">
                Enter PIN
              </span>
              <span className="dash"></span>
              <div className="option__button-container">
                <span className="dash dash--dark option__button__dash"></span>
                <button className="option__button"></button>
              </div>
            </li>
          </ul>
          <span className="screen__brand">SYSTEMS</span>
        </div>
        <img className="atm__graffiti" src="/assets/sticker_graf.png" />
      </div>
    </main>
  )
}

export default App
