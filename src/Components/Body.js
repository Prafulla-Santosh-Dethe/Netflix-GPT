import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utils/userSlice'
const Body = () => {

    const dispatch = useDispatch();
    //  const navigate = useNavigate();

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

    // set up thid to once
    useEffect(()=>{
      console.log("useEffect")
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              //const uid = user.uid;
              const {uid,email, displayName, photoURL } = user
              console.log("URL:",photoURL)
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
              }))
            //  can't use on parent level where routing start either move routing to App.js or remove navigate to child like login.js 
              //navigate("/browse") //signin redirect to browse page
            } else {
              // User is signed out no use of action so not passed anything
              dispatch(removeUser());
              //navigate("/") //singout so main page
            }
          });
    },[])
  return (
    <div>
       <RouterProvider router={appRouter} /> 
    </div>
  )
}

export default Body