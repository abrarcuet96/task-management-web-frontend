import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoutes from './Routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={myCreatedRoutes} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
