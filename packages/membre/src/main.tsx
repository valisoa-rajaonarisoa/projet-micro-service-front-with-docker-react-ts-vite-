import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Membre from './Membre.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Membre />
  </StrictMode>,
)
