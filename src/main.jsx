import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/movieSearch.css'
import { BuscadorPelis } from './BuscadorPelis'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuscadorPelis />
  </React.StrictMode>,
)
