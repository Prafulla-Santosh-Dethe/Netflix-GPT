import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
           <img src='https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_small.jpg' alt='netflixBg'/>
        </div>
        <div>
        <form className='w-3/12 absolute flex flex-col justify-center my-36 mx-auto p-12 right-0 left-0 bg-black text-white bg-opacity-75'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm &&  <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-slate-600'/> }
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-slate-600'/>
            <input type='text' placeholder='Password' className='p-4 my-4 w-full bg-slate-600'/>
            <button className='p-4 my-6 bg-red-600 w-full rounded-lg'>{isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className='font-semibold text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now ": "Already registered, Sign In Now"}</p>
         </form>
        </div>
       </div>
  )
}

export default Login