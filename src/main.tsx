import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import NavBar from './Components/NavBar.tsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: (
      <>
        <NavBar />
        <App />
  
        <div className="background">
          <div className="Ellipse1"></div>
          <div className="Ellipse2"></div>
        </div>
      </>
    )
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
