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