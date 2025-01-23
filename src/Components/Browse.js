import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';
import usePopularMovies from '../customHooks/usePopularMovies.js';
import useTopRatedMovies from '../customHooks/useTopRatedMovies.js';
import useUpcomingMovies from '../customHooks/useUpcomingMovies.js';
import GptSerach from './GptSerach.js';
import { useSelector } from 'react-redux';
//import { APT_OPTIONS } from '../Utils/constants';
// import { useDispatch } from 'react-redux';
// import { addNowPlayingMovies } from '../Utils/movieSlice';

const Browse = () => {
  console.log("browse")

  // fetch daya from TMDB api nd update store
  // const dispatch = useDispatch();

  // const getNowPlayingMovies = async()=>{
  //      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
  //      APT_OPTIONS)

  //      const json = await data.json();
  //     //  2 times get data in console due to react-strictmode read index.js
  //      console.log("jsondata: ",json.results);
  //      dispatch(addNowPlayingMovies(json.results))
  // };

  // useEffect(()=>{
  //   console.log("before calling api")
  //   getNowPlayingMovies();
  // },[])

  const showGptView = useSelector(store=>store.gpt.showGptSerach);
  console.log(showGptView)
   useNowPlayingMovies();
   //console.log("data: ")
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();

  return (
    
    <div className='w-full overflow-x-hidden'>
      {console.log(showGptView)}
      <Header/>
      {showGptView ? (<GptSerach/>):(
        // multiple compo react-fragment to keep one parent for them else not able to keep
          <>
             <MainContainer/>
             <SecondaryContainer/>
          </>
      )}

      {/* 
         MainContainer
           - VideoBg
           - videoTitle
           - some btns
           --------------------

           Secondary-container
            - movie lists * n (many)
            - cards * n 
      */}
    </div>
  )
}

export default Browse