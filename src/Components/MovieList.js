import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    //console.log(Array.isArray(movies))
    //const path = movies.length? movies[0]:null

    if(!Array.isArray(movies) || movies.length===0){
        return null;
    }
    
  return (
    <div className=' px-10 w-screen'>
        <h1 className='text-3xl font-semibold py-2 px-2 text-white'>{title}</h1>
        {/* scrollbar-hidden config done in index.css to hide scrollBar but keep */}
        <div className='flex overflow-x-scroll scrollbar-hidden'>
            <div className='flex py-2'>
                {movies.map(movie=>(
                    <MovieCard key={movie.key} imgPath={movie.poster_path} />
                ))}   
            </div> 
        </div>      

                
     </div>
        

  )
}

export default MovieList