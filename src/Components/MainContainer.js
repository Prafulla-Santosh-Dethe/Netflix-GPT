import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'


const MainContainer = () => {

    const movies = useSelector((store) =>store.movies?.nowPlayingMovies)
   // console.log("mainContain :",movies)

    if(movies===null) return;
    //console.log("mainContain-m2: ",movies)
    
    const mainMovie = movies[0];
    //console.log("mainContain-main: ",mainMovie);

    const {original_title, overview,id} = mainMovie;
   // console.log("mainContain-datahere: ",original_title," ",overview)
    
    return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;