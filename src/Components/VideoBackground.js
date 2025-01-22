import React, { useEffect, useState } from 'react'
import { APT_OPTIONS } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../Utils/movieSlice'
import useMovieTrailer from '../customHooks/useMovieTrailer'

const VideoBackground = ({movieId}) => {

  // option-1
 // const [trailerId, setTrailerId] = useState(null)

//  option-2
 // const dispatch = useDispatch(); 

  // fetch trailer from store
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
  
  // craeted hook to get data :- useMovieTrailer
  // fetch trailor - to get nedd movieId
  // const getMovieTrailer = async()=>{
  //   const data = await fetch('https://api.themoviedb.org/3/movie/539972/videos?language=en-US', APT_OPTIONS);

  //   const json = await data.json();
  //   console.log(json);

  //   const filterData = json.results.filter(video => video.type==="Trailer")
  //   console.log("trailer: ",filterData)

  //   const trailer = (filterData.length ? filterData[1]: json.results[0].type)
  //   console.log(trailer)

  //   dispatch(addTrailerVideo(trailer))

  //   //setTrailerId(trailer.key)

    
  // }
  // useEffect(()=>{
  //     getMovieTrailer();
  // },[])
  console.log(trailerVideo?.key)
  useMovieTrailer(movieId);
  return (
    <div className='w-screen' >
      <iframe className='w-screen h-[780px]'
      // src={"https://www.youtube.com/embed/"+trailerId}

      src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?autoplay=1"}
       title="YouTube video player"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
       </iframe>
    </div>
  )
}

export default VideoBackground