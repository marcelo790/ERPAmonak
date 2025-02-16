import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import Router from './router'
import './i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Router/>
  </StrictMode>,
)
