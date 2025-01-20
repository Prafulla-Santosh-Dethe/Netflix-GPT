import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/validate';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { NETFLIX_BG } from '../Utils/constants';
import { USER_AVATAR } from '../Utils/constants';


const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);

  // create reference to DOm or mutable value which can chnage over time initilaly its null not pointing to any dom element
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  const dispatch = useDispatch();

  const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
  }

  const handleBtnClick =()=>{
      // validate form data
      //console.log(email) //gets current obj with complete element details along with value bcoz of that .current.value gives value of filed

    //  condition coz signIn only required email & pass
      const errorMessage = isSignInForm ? checkValidData(email.current.value, password.current.value):checkValidData(email.current.value, password.current.value,name.current.value)
      setErrorMessage(errorMessage);

      // with if it incraese code horizontally instead return 
      // if(errorMessage===null){
              //signIn/SignUp ne register user to firebase
      // }

      if(errorMessage) return; //if error occur code terminate here with return

      // SignIn/SignUp ne register user to firebase
      if(!isSignInForm){
        // SignUp logic
        createUserWithEmailAndPassword(
        auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            // update profile
             updateProfile(user, {
                displayName: name.current.value, 
                photoURL:USER_AVATAR
              }).then(() => {
                // Profile updated!
                console.log("obj: ",user)
                
                // dispatch here so store get updated with name nd url - from auth we get current user with complete detail
                // if we did dispatch from body it execute before updatingProfile so nam end url goes as null thats why dispatch here
                const {uid, email, password, displayName, photoURL} = auth.currentUser
                dispatch(addUser({
                  uid:uid,
                  email:email,
                  password:password,
                  displayName:displayName,
                  photoURL:photoURL
                }))
                //navigate("/browse")
                // ...
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message)
                // ...
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+" : "+errorMessage);
            // ..
          });
      }
      else{
        // SignIn logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("SignIn: ",user);
          //navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+": "+errorMessage)
        });
      }
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
           <img src={NETFLIX_BG} alt='netflixBg'/>
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