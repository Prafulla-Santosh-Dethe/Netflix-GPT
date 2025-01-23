import React from 'react'
import GptSerachBar from './GptSerachBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NETFLIX_BG} from '../Utils/constants' 

const GptSerach = () => {
  return (
    <div>
        <div className='absolute -z-10'>
           <img src={NETFLIX_BG} alt='netflixBg'/>
        </div>
        <GptSerachBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSerach