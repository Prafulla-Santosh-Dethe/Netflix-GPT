import React, { useEffect } from 'react'
import { APT_OPTIONS } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovie } from '../Utils/movieSlice';

const useTopRatedMovies = () => {
 
    const dispatch = useDispatch();

    const getTopRatedMovies = async()=>{
        try{

            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', APT_OPTIONS);

            const json = await data.json();

            //console.log("useUp: ",json)
            // dispatch to push data to store
            dispatch(addTopRatedMovie(json.results))

        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
         getTopRatedMovies();
    },[])
}

export default useTopRatedMovies