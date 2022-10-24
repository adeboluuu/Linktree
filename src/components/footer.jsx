import React from 'react'
import Zuri from '../assets/logo.36d2d48a.png'
import Hng from '../assets/Footer text.png'
import I4G from '../assets/I4G.png'

const footer = () => {
  return (
    <div className='flex space-x-80 mx-20 my-16 '>
      <img src={Zuri} alt='Zuri Internship'className='h-8'/>
      <img src= {Hng} alt='Hng' className='h-4 mt-3'/>
      <img src ={I4G} alt='Ingressive for good'className='h-8'/>
    </div>
  ) 
}

export default footer