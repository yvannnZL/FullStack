import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Signup } from './pages/Signup.jsx'
import { Login } from './pages/Login.jsx'
import { Notfound } from './pages/Notfound.jsx'

const router = createBrowserRouter([
  {
    path:'/signup',
    element: <Signup/>,
    errorElement: <Notfound/>
  },
  {
    path:'/login',
    element: <Login/>,
    errorElement: <Notfound/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
