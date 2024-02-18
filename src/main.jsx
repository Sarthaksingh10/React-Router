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
 const router=createBrowserRouter(       /* Creating a browser based router*/
  [{path:'/',
    element:<App/>,           /*  Defining the main component which will contain all other component*/
    children:[                  /* Children is used to define nested routes in react-router-dom*/
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
    <RouterProvider router={router}/>   { /*  Providing the created router to our app */}
  </React.StrictMode>,
)
