import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../Utils/firebase'
// import { useDispatch } from 'react-redux'
// import { addUser, removeUser } from '../Utils/userSlice'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    //console.log("step-1: body")
  return (
    <div>
       <RouterProvider router={appRouter} /> 
    </div>
  )
}

export default Body