import React from 'react'
import image from '../assets/Device=Web, State=Default.png'

const main = () => {
  return (
    <div className='my-20 mx-auto text-center w-50'>
       <img src = {image} alt='profile-image' id='profile__img'className='mx-auto'/>
       <h1 className='font-bold'id='twitter'>adeboluuu</h1>
       <p className='hidden'id='slack'>Adeboluwarin Thomas</p>
       <button>

       </button>
    </div>
  )
}

export default main