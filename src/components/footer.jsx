import React from 'react'
import Zuri from '../assets/logo.36d2d48a.png'
import Hng from '../assets/Footer text.png'
import I4G from '../assets/I4G.png'

const footer = () => {
  return (
    <div className='md:visible invisible flex md:space-x-80 space-x-10 sm:mx-20 mx-0 sm:my-16 my-0'>
      <img src={Zuri} alt='Zuri Internship'className='h-8'/>
      <img src= {Hng} alt='Hng' className='h-4 mt-3'/>
      <img src ={I4G} alt='Ingressive for good'className='h-8'/>
    </div>
  ) 
}

export default footer