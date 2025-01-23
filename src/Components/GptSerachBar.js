import React from 'react'
import lang from '../Utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSerachBar = () => {

  const langKey = useSelector(store => store.langConfig.language);
  console.log("lang: ",lang)
  console.log(lang[langKey].search +" : "+lang[langKey].gptSearchPlaceholder)
  return (
    <div className='pt-[10%] flex justify-center' >
      <form className='w-1/2 bg-black grid grid-cols-12'>
        {/* lang is Language.js where we defined diff languages */}
        <input className=' p-4 m-3 col-span-9' type='text' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='py-2 px-4 col-span-3 m-3 border bg-red-500 border-black rounded-md'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSerachBar