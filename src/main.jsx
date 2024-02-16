import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/AboutUs/Aboutus'
import User from './components/User/User'
import Github, { githubinfoloader } from './components/GitHub/Github'
 const router=createBrowserRouter(
  [{path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        loader:(githubinfoloader),
        path:"Github",
        element:<Github/>
      },
      {
        path:"user/:userid",
        element:<User/>
      },
    ]
}]
)   


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
