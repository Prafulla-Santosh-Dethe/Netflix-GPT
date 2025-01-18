import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/validate';

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);

  // create reference to DOm or mutable value which can chnage over time initilaly its null not pointing to any dom element
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
  }

  const handleBtnClick =()=>{
    // validate form data
    //console.log(email) //gets current obj with complete element details along with value bcoz of that .current.value gives value of filed

  //  condition coz signIn only required email & pass
   const errorMessage = isSignInForm ? checkValidData(email.current.value, password.current.value):checkValidData(email.current.value, password.current.value,name.current.value)
    setErrorMessage(errorMessage);
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
           <img src='https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_small.jpg' alt='netflixBg'/>
        </div>
        <div>
          {/* absolute-overlap element, right/left-0-> center elment bg-opacity-> make bg transperant */}
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute my-36 mx-auto p-12 right-0 left-0 bg-black text-white bg-opacity-75'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
           
           {/* inputs provided with ref now it point to that particular input element in dom & .current is method in useREf
           which gets complete detail of lement along with value eneter in it filed on UI */}
            {!isSignInForm &&  <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-slate-600'/> }
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-slate-600'/>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-slate-600'/>
            <p className='text-green-600 font-normal'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-600 w-full rounded-lg' onClick={handleBtnClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className='font-semibold text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now ": "Already registered, Sign In Now"}</p>
         </form>
        </div>
       </div>
  )
}

export default Login