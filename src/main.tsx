import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import AppLayout from './shared/layout/AppLayout/AppLayout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout/>
    </BrowserRouter>
  </React.StrictMode>,
)
