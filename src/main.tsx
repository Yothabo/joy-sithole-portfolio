import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { wrapNumbers } from './lib/wrapNumbers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Wrap numbers after initial render
setTimeout(() => {
  wrapNumbers()
}, 100)
