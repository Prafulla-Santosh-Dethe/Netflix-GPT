import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';
import usePopularMovies from '../customHooks/usePopularMovies.js';
import useTopRatedMovies from '../customHooks/useTopRatedMovies.js';
import useUpcomingMovies from '../customHooks/useUpcomingMovies.js';
//import { APT_OPTIONS } from '../Utils/constants';
// import { useDispatch } from 'react-redux';
// import { addNowPlayingMovies } from '../Utils/movieSlice';

const Browse = () => {

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

   useNowPlayingMovies();
   //console.log("data: ")
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();

  return (
    <div className='w-full overflow-x-hidden'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

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