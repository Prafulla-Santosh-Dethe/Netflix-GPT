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

   # TMDB API
   - profile-> settings-->api & created app to TMDB nd get access key nd token
   - same eplace get docs click on that -> API references -> Now playing -> select js as lan
   - copy fetch request obj nd paste in constant.js 
   - now make fun to call api in Brose use async -await fetch(from same docs)
   convert to json nd log
   - log comes twice due to react-strict mode in index.js which happens only in local not in production coz react do extra render to check in-consistency in calls nd if nay through error

   # Browse Layout:- 
       - Main-Container
           - bg-video
           - videoTitle
       - Secondary-container
           -movies lists horizontal scroll

   # Browse page :-  custom hooks created, bg-video nd its title-description
   - useNowPlayingMovies taken fetch from TMDP js nd once recived data.json() disptach action of "addNowPlayingMovies(json.results())" which conatin movies list that stored in "nowPlayingMovie" sttae in movieSlice
   - Browse page called customHook useNowPlaying nd in browse we have Header, mainContainer & secondaryContainer
   
   - Main-Container:- now from useNowPlaying hook we dispatch nd store movies in store now want to get so we can send its detail to main container.  got nowPlayingMovies from store as [store.results?.nowPlayingMovies].
      - if movies===null retrun to avoid error
      - else retrive title, overview, id to send to bg-video nd videotitle 

      - VideoTitle:- received title nd overview in props nd used it in h1 & para nd in div created two btn PlayNow & moreInfo.

      - bg-video:- now the list of movies we store don't have movie video.
         - getVideo 1st :- TMDB --> Api--> Movies--> video paste id nd get fetch same as previously we got.
        
         - create one more hook "useMovieTrailer" to fetch trailer/video of movie
             - fetch gives data.json() filetr it based on type==trailer [const filterData = json.results.filter(video => video.type==="Trailer")]
             - it can get multiple results but we want to play single video in bg so:-  const trailer = (filterData.length ? filterData[1]: json.results[0].type)
             - now we can either craete state to store trailer or can use store so we used store.
             - created one more action addTrailerVideo & initila state as trailerVideo:null.
             - nd siptach from hook. 

         - now in bg-video we want trailer saved in store :- const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
         - call customHook:- usemovieTrailer();

         - in return we need to play video:- 
             - when we get movies listed based on trailer there we get key in movie detail copy it nd open youtube any video after watch paste key --> go to share--> embed copy iframe
             - paste iframe in bg-video return.
             - in iframe src after embed we have to add our trailer.key so it play that particular video.
             - src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?autoplay=1"} autoplay for playing it automatically.
                 
    - Secondary-container :- have MovieList.js with props as title nd movies 
         - MovieList :- h1- title
         - div [overflow-x-scroll(horizontal scroll) scrollbar-hidden(written in index.css to hide scrollBar)]-> 
           div ->{movies(props).map <MovieCard imgPath={movie.poster_path}>} --> path to get img for cards
         - MovieCard:- contant.js :-paste path [google TMDP img path in Guides-image we get it]
              - <img src={IMG_CDN_URL + imgPath} alt='movieCard'/> concatID with path to get that id img

         - in 2nd-container there are multiple movieList like noPlaying, Upcomg, topRated, popular
         - from api refrences we get fetch url for diff movies above mention
         - craeted cutom hooks for upcomg, topRated, popular , nowPlaying already created nd fetch corresponding urls from TMDB
         - Created actions nd initial states for evry movie category in movieSlice nd export action
         - from created hook dispatch there corresponding action with json.results
         - in browse call all custom hook so all will dispatch action nd push movies fetch to store
         - In 2nd-container get movies from useSelector - const movies = useSelector(store=>store.movies) nd pass to MovieList like below
         -  <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Top Rtaed"} movies={movies.topRatedMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
                            








            


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