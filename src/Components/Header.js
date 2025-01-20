import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../Utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addUser, removeUser } from '../Utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { NETFLIX_LOGO, netflixLogo, USER_AVATAR } from '../Utils/constants'
const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log("data: ",user);

   // set up thid to once
  //  kept here instead of Body coz 1-> bug when we redirect to "/brose"
  // its was rediecting without user so need to make sure that onAuthStateChange if user then only browse else "/" login
  // but as body has route can't use navigate so we need to put onAuth to somewhere which will available to all compo i.e, Hedaer

   useEffect(()=>{
    console.log("useEffect")
     const unsubcribe =  onAuthStateChanged(auth, (user) => {
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
          
            navigate("/browse") //signin redirect to browse page
          } else {
            // User is signed out no use of action so not passed anything
            dispatch(removeUser());
            navigate("/") //singout so main page
          }
        });

        // cleaning code
        // unsubcribe calls when compo unmount
        return () => unsubcribe();
  },[])

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  //console.log(user.photoURL)
  return ( 
    // absolute-> overlap element, z-10 make this elemnt to appear on top gradient gives effect from top to bottom gets lighter
    <div className='flex justify-between absolute z-10 w-screen px-10 py-2 bg-gradient-to-b from-black' >
        <img className='w-44 ' src={NETFLIX_LOGO}
        alt='netflixLogo'/>

       { user && <div className='flex'>
          <img className='w-16 h-14 p-2 m-2' src={USER_AVATAR} alt='userIcon'/>
          <button onClick={handleSignOut} className='w-24 h-10 my-4 mx-2 cursor-pointer text-white font-bold border-2 rounded-md border-black '>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header 