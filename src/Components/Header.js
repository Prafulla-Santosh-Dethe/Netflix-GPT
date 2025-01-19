import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../Utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log("data: ",user)
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
        <img className='w-44 ' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='netflixLogo'/>

       { user && <div className='flex'>
          <img className='w-16 h-14 p-2 m-2 border-2 border-black' src={user?.photoURL} alt='userIcon'/>
          <button onClick={handleSignOut} className='w-24 h-10 my-4 mx-2 cursor-pointer text-white font-bold border-2 rounded-md border-black '>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header 