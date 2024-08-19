import React from 'react'
import { Play } from 'lucide-react';
const Button = () => {
  return (
    <>
    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
      <Play fill='bg-black'/>
    </button>
    </>
  )
}

export default Button
