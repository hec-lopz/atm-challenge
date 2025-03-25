import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Store } from './components/context/Store.tsx'
import { Navigation } from './components/context/Navigation.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Store>
      <Navigation>
        <App />
      </Navigation>
    </Store>
  </StrictMode>,
)
