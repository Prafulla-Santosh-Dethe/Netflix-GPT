import React from 'react'
import { IMG_CDN_URL } from '../Utils/constants'

const MovieCard = ({imgPath}) => {
  //  console.log(imgPath)
  return (
    <div className='w-60 px-4 py-1'>
        <img src={IMG_CDN_URL + imgPath} alt='movieCard'/>
    </div>
  )
}

export default MovieCard