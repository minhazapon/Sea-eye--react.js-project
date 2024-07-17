import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Sea from './sea/Sea';
import Ship from './ship/Ship';
import Login from './firebase/Login';
import SignUp from './firebase/SignUp';
import AuthContext from './firebase/AuthContext';
import PrivateRoute from './firebase/PrivateRoute';






const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root> ,
    children: [
      {
        path: "/",
        element:  <Home></Home> ,
      },
      {
        path: "/sea",
        element:  <PrivateRoute><Sea></Sea></PrivateRoute>  ,
      },
      {
        path: "/ship",
        element:     <PrivateRoute><Ship></Ship></PrivateRoute> ,
      },
      {
        path: "/login",
        element:   <Login></Login> ,
      },
      {
        path: "/up",
        element:  <SignUp></SignUp>   ,
      },
      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthContext>

    <RouterProvider router={router} /> 
      
    </AuthContext>
         
  </React.StrictMode>,
)
