import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {CustomTheme} from './context/themeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomTheme>
      <App />
    </CustomTheme>
  </React.StrictMode>,
)
