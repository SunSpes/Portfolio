import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Home from './home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Header />
    </BrowserRouter>
  </StrictMode>,
)