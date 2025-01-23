import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies)
  // console.log(movies.popularMovies);
  // console.log("top: ",movies.topRatedMovies)
  // console.log("upcoming: ",movies.upcomingMovies)
  return (
    movies.nowPlayingMovies &&(
      // to make bg-black
    <div className='bg-black w-full'>
      {/* MovieList: Popular
            -MovieCrad * n
          MovieList: now playing
          MOvieList: Trending
          MovieList:Horror
      */}
     {/* only this part will move little above on bg-video due to -mt nd relative/z-index to come on top  */}
      <div className='-mt-44 relative z-20 '>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rtaed"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer