import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoutes from './Routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './providers/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={myCreatedRoutes} />
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
