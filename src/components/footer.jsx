import React from 'react'
import Zuri from '../assets/logo.36d2d48a.png'
import Hng from '../assets/Footer text.png'
import I4G from '../assets/I4G.png'

const footer = () => {
  return (
    <div className=' border-top py-8 sm:space-y-0 space-y-10 sm:flex block md:space-x-80 space-x-10 sm:mx-20 mx-0 sm:my-6 my-0'>
      <img src={Zuri} alt='Zuri Internship'className='h-8 ml-10'/>
      <img src= {Hng} alt='Hng' className='h-4 sm:mt-3 mt-0 sm:ml-auto ml-0'/>
      <img src ={I4G} alt='Ingressive for good'className='h-8'/>
    </div>
  ) 
}

export default footer