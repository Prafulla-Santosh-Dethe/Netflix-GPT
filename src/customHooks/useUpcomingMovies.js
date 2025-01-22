import React, { useEffect } from 'react'
import { APT_OPTIONS } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../Utils/movieSlice';

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
  
    const getUpcomingMovies = async()=>{

        // fetch data
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', APT_OPTIONS);

        const json = await data.json();
        console.log(json)
        console.log(json.results)
 
        dispatch(addUpcomingMovies(json.results))

    }
    useEffect(()=>{
        getUpcomingMovies()
    })
}

export default useUpcomingMovies