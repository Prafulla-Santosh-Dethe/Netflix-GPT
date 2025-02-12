import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../Utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addUser, removeUser } from '../Utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { NETFLIX_LOGO, netflixLogo, SUPPORTED_LANGUAGES, USER_AVATAR } from '../Utils/constants'
import { toggleGptSerachView } from '../Utils/gptSlice'
import lang from '../Utils/languageConstants'
import { changeLanguage } from '../Utils/configSlice'
const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSerach = useSelector(store => store.gpt.showGptSerach)
  //console.log("data: ",user);

   // set up thid to once
  //  kept here instead of Body coz 1-> bug when we redirect to "/brose"
  // its was rediecting without user so need to make sure that onAuthStateChange if user then only browse else "/" login
  // but as body has route can't use navigate so we need to put onAuth to somewhere which will available to all compo i.e, Hedaer

  //console.log("step-2: ",user)
   useEffect(()=>{
    //console.log("HeaderUseEffect: useEffect")
     const unsubcribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            //console.log("Hedaer-user in OnAut: ",user, ": ",user.uid)
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            //const uid = user.uid;
            const {uid,email, displayName, photoURL } = user
            //console.log("URL:",photoURL)
            dispatch(addUser({
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL
            }))
          
            navigate("/browse") //signin redirect to browse page
          } else {
            //console.log("Auth no user: ",user)
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

  const handleGptSearch = () =>{
    // toggle gpt-search
    dispatch(toggleGptSerachView())
  }

  const handleLanguageChange = (e)=>{
     console.log(e.target.value);
     dispatch(changeLanguage(e.target.value))
  }
  //console.log(user.photoURL)
  return ( 
    // absolute-> overlap element, z-10 make this elemnt to appear on top gradient gives effect from top to bottom gets lighter
    <div className='flex justify-between absolute z-10 w-screen px-10 py-2 bg-gradient-to-b from-black' >
        <img className='w-44 ' src={NETFLIX_LOGO}
        alt='netflixLogo'/>

       { user && <div className='flex'>
          {showGptSerach && 
             <select className=' my-3 mx-1 p-1 h-11 rounded-lg w-28 cursor-pointer bg-purple-400 opacity-65 text-white font-bold ' onChange={handleLanguageChange}>
             {SUPPORTED_LANGUAGES.map(lang =>
               <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
                </option>
              )}
            </select>
          }
          <button onClick={handleGptSearch} className='w-28 h-11 my-3 mx-1 p-1 cursor-pointer text-white font-bold border-2 rounded-md border-black bg-purple-400 opacity-65 '>{showGptSerach?"Homepage":"GPT Serach"}</button>
          <img className='w-16 h-14 p-2 m-1' src={USER_AVATAR} alt='userIcon'/>
          <button onClick={handleSignOut} className='w-24 h-11 my-3 mx-1 cursor-pointer text-white font-bold border-2 rounded-md bg-red-500 border-black opacity-65 '>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header 