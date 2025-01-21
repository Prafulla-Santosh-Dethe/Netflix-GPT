import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../Utils/movieSlice';
import {APT_OPTIONS} from "../Utils/constants"

const useMovieTrailer = (movieId) => {
  
    //update store
    const dispatch = useDispatch(); 

  
  // fetch trailor - to get nedd movieId
    const getMovieTrailer = async()=>{
    
            const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', APT_OPTIONS);

            const json = await data.json();
            //console.log(json);

            const filterData = json.results.filter(video => video.type==="Trailer")
            //console.log("trailer: ",filterData)

            const trailer = (filterData.length ? filterData[1]: json.results[0])
            //console.log(trailer)

            dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        getMovieTrailer();
    },[])
}

export default useMovieTrailer