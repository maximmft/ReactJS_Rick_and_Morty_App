import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Router'
import './styles/globals.css'
import { ThemeProvider } from './contexts/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router ={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
