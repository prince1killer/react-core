import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/home/About.jsx'
import Content from './components/home/Content.jsx'

const router= createBrowserRouter([{
  path:"/",
  element: <App/>,
  children:[{
    path:'',
    element: <Home/>
  },
  {
    path:'about',
    element: <About/>
  },
  {
    path:'content',
    element:<Content/>
  }
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
