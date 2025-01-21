import { useDispatch } from "react-redux";
import { APT_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../Utils/movieSlice";


const useNowPlayingMovies = () =>{

     //console.log("in:useNowPlayingMovies hook")
    // fetch daya from TMDB api nd update store
      const dispatch = useDispatch();
    
      const getNowPlayingMovies = async()=>{
        try{
          // 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
          const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', 
            APT_OPTIONS)
     
            const json = await data.json();
           //  2 times get data in console due to react-strictmode read index.js
       //     console.log("hook:jsondata: ",json.results);
            dispatch(addNowPlayingMovies(json.results))
         //   console.log("hook:after Disptach")
        }
        catch(error){
          //console.log("failed to fetch: ", error.message)
        }
      };
    
      useEffect(()=>{
        //console.log("hook:before calling api")
        getNowPlayingMovies();
      },[])
    
};
export default useNowPlayingMovies;