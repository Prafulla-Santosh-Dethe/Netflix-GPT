import React from 'react'
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from '@mui/icons-material/Info';

const VideoTitle = ({title, overview}) => {
    //console.log("videoTitle t: ",title," ",overview)
  return (
    // it's not getting visbile due to bg-video add gradient
    <div className='w-screen h-[680px] pt-[20%] px-16 absolute mt-5 bg-gradient-to-r from-black '>
        <h1 className='text-6xl font-bold text-white'>{title}</h1>
        <p className='py-6 text-lg w-2/6 text-white'>{overview}</p>
        <div>
            <button className=' bg-white text-black rounded-md bg-opacity-90 hover:bg-opacity-65 px-12 p-4 m-2'> 
              <PlayArrowIcon className='font-extrabold text-2xl'/> Play Now</button>
            <button className=' bg-gray-400 text-white text-md  bg-opacity-40 hover:bg-opacity-30 rounded-md px-12 p-4 m-2'><InfoIcon/> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle