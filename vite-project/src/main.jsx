import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Pegando o elemento do doom que ele renderiza a pagina
// o react faz o primeiro "getElementById" para que a gente não
// precise fazer o resto

// VIRTUAL DOM
// Talvez quinta
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
