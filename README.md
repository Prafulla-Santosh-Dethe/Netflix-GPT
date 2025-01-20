# NetflixGPT project

- create-react-app
- configure tailwind css in app
- Header
- Routing
- LogIn/SignUp form
- Form Validations 
- useRef Hook
- Firebase
   - craeted project - NetflixGPT
   - below get strated selected web </>
        - nickname
        - hosting tik mark
        - register APP
        - gives SDK
           - contain use npm - npm install firebase run in vs-terminal
           - also gave config - create firebase.js nd copy config into it
   - go to Build --> authentication get strated multiple sign in methods are there , enable email/pass
   - User is empty once we do authentication it get add

   - Install firebase CLI --> npm install -g firebase-tools

   - Command to hois appliction/deploy
         -A firebase LOgin --> throw error as localhost refused to connect to resolve run below command
         - firebase login --no-localhost --without localhost
         - after this gets https:/auth url click nd complete login process will get auth code copy paste in terminal
         - get msg --> success! logged in as ----@gmail.com

         - B firebase init --> many options appear
          - go to hostying-- press spacebar -- enter
          - use existing project enter
          - select project enter
          - some Q&A public directory --> build, re-write --> n, automatic build/deploy github -- n
          - after this firebaserc nd firebase.json gets created

         - C npm run build - to create optimize production nuild after this build folder gets created

         - D --firebase deploy command 
           - used to deploy after running many files
           - gets Hosting URL where application is hosted can copy that url nd chcek into browsers we'll get our application

- create SignUp user account - LOgin.js BtnClick
      - taken all code from firebase docz authentication with email
      - added auth to firebase.js taken from firebase docs authentication.
      - SIGN-UP:- added createUserWithEmailPass code from docs also set error occuring in api to errorMessage to render on UI as well
      - SIGN-IN:- added SignInWithEmailPass code from docs to sign in logic set error as above 

- Redux store
   - command npm i -d @reduxjs/tool & react-redux
   - created appStore.js in utils nd configure store
   - created userSlice.js in utils nd created slice with name , initialState, reducers as addUser & removeUser
   - now need to store data to store so in all places signUp/in we need to dispatch instead of that did on root-level i.e., Body 
   - used onAuthStateChanged from firebase docs to execute whenever any authentication happens - signin/out/up etc
   - added onAuthStateChanged in useEffect with [] dependency want only one time nd will autimatically call for every authentication
   - now once we signUp/In we need to navigate to "/browse but in body we have routing so can't use navigate there need to use in child
   - in Login.js we did navigate once we signUP/In

   - UpdatedProfile:- got again from fire docs and updated displayName nd photoUrl
   - nd updated then block got all details like uid, email, pass, name, url from auth.current coz dipstach in body dispatch before update update name nd url so we get both of that as null to avoid we disptach in ten of updated to get every detail

   # Bug fixing - signUp user displayName & photoURL updtae / if user not logged in redirect to login page vice-versa

   - initially onAuthStateChanged is in body of useEffect and in body we have routes so can't use navigate also name nd url was not getting updtaed coz its taking time until that it execute nd get it as null 
   - To resolve this we kept onAuthStateChanged to Header.js which will be there in all places nd also child of router so can use navigate nd there when we have user we navigated to "/browse" else to "/" i.e., login page 

   # unsubcribe is return by  onAuthStateChanged

   - needed coz its listner it stay active once register.
   - if we didn't unsubcribe it keeps running in bg even if compo unmount which causes unexpected behaviour might responde to chnages which leads bugs nd error so its needed

   - useEffect return is used to return fun to cleanup code.

   # constants.js
   - added all img url's nd export nd used it all over compo 









            


# feature

- Login/sign Up page
   - sign in /sign up form
   - once logeed in - redirect to browse page

- Browse(only comes after authentication)
    - header
    - main movie 
        - trailor in background 
        - title nd decription
        - movie suggestions
           - movie lists * n (horizontal scroll)


- NetflixGPT
   -search bar
   - movie suggestons