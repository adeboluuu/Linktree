import React from 'react'
import image from '../assets/Device=Web, State=Default.png'

const main = () => {
  return (
    <div className='my-20 mx-auto text-center w-11/12'>
       <img src = {image} alt='profile-image' id='profile__img'className='mx-auto'/>
       <h1 className='font-bold mb-6 'id='twitter'>adeboluuu</h1>
       <p className='hidden'id='slack'>Adeboluwarin Thomas</p>
       <div>
        <a href='https://twitter.com/adeboluuu'>
            <button id='twitter__link' className='bg-[#EAECF0] w-11/12 h-14 rounded-lg border-[#EAECFO] my-2 text-lg font-medium'>Twitter Link</button>
        </a>
       </div>

       <div>
        <a href='https://training.zuri.team/'>
            <button id='btn__zuri'className='bg-[#EAECF0] w-11/12 h-14 rounded-lg border-[#EAECFO] my-2 text-lg font-medium'>Zuri Team</button>
        </a>
       </div>

       <div>
        <a href='http://books.zuri.team/'>
            <button id='books'className='bg-[#EAECF0] w-11/12 h-14 rounded-lg border-[#EAECFO] my-2 text-lg font-medium'>Zuri Books</button>
        </a>
       </div>

       <div>
        <a href='https://books.zuri.team/'>
            <button id='book__python'className='bg-[#EAECF0] w-11/12 h-14 rounded-lg border-[#EAECFO] my-2 text-lg font-medium'>Python Books</button>
        </a>
       </div>

       <div>
        <a href='https://background.zuri.team/'>
            <button id='pitch'className='bg-[#EAECF0] w-11/12 h-14 rounded-lg border-[#EAECFO] my-2 text-lg font-medium'>Background Check for Coders</button>
        </a>
       </div>

       <div>
        <a href='https://books.zuri.team/design-rules'>
            <button id='book_design'className='bg-[#EAECF0] w-11/12 h-14 rounded-lg border-[#EAECFO] my-2 text-lg font-medium'>Design Books</button>
        </a>
       </div>
    </div>
  )
}

export default main