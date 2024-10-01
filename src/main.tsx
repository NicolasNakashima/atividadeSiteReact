import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { MainPage } from './pages/MainPage'	


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />

  </StrictMode>,
)
