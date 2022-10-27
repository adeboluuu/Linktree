import React from 'react'
import icon2 from '../assets/Type=more, State=Pressed.png'
import icon from '../assets/Type=Share, State=Default.png'
import image from '../assets/Device=Web, State=Default.png'
import Slack_icon from '../assets/slack.png'
import Github_icon from '../assets/Social icon.png'

const main = () => {
  return (
    <div className='my-20 mx-auto text-center w-11/12'>
        <div className='ml-10'>
            {/* Profile section */}
        <div className='profile__section '>
         <img src = {image} alt='profile-image' id='profile__img'className='mx-auto'/>
         <span>
         <img src={icon} alt='Share__icon'className='sm:visible invisible '/>
         <img src={icon2} alt='Share__icon'className= 'sm:invisible visible'/>            
         </span>
        </div>
        <h1 className='font-bold mb-6 mr-10 'id='twitter'>adeboluuu</h1>
       <p className='hidden'id='slack'>Adeboluwarin Thomas</p>
        </div>
       <div>
        <a href='https://twitter.com/adeboluuu'>
            <button id='twitter__link' className='bg-[#EAECF0] hover:bg-[#D0D5DD] w-11/12 h-14 rounded-lg border-[#EAECFO] my-2 text-lg font-medium'>Twitter Link</button>
        </a>
       </div>

       <div>
        <a href='https://training.zuri.team/'>
            <button id='btn__zuri'className='bg-[#EAECF0] hover:bg-[#D0D5DD] w-11/12 h-14 rounded-lg border-[#EAECFO] my-2 text-lg font-medium'>Zuri Team</button>
        </a>
       </div>

       <div>
        <a href='http://books.zuri.team/'title='Books on coding and design'>
            <button id='books'className='bg-[#EAECF0] hover:bg-[#D0D5DD] w-11/12 h-14 rounded-lg border-[#EAECFO] my-2 text-lg font-medium'>Zuri Books</button>
        </a>
       </div>

       <div>
        <a href='https://books.zuri.team//python-for-beginners?ref_id=Adeboluwarin Thomas'>
            <button id='book__python'className='bg-[#EAECF0] hover:bg-[#D0D5DD] w-11/12 h-14 rounded-lg border-[#EAECFO] my-2 text-lg font-medium'>Python Books</button>
        </a>
       </div>

       <div>
        <a href='https://background.zuri.team/'>
            <button id='pitch'className='bg-[#EAECF0] hover:bg-[#D0D5DD] w-11/12 h-14 rounded-lg border-[#EAECFO] my-2 text-lg font-medium'>Background Check for Coders</button>
        </a>
       </div>

       <div>
        <a href='https://books.zuri.team/design-rules'>
            <button id='book_design'className='bg-[#EAECF0] hover:bg-[#D0D5DD] w-11/12 h-14 rounded-lg border-[#EAECFO] my-2 text-lg font-medium'>Design Books</button>
        </a>
       </div>

       <div className=' mx-auto place-items-center justify-center my-8 flex gap-8'>
        <img src ={Slack_icon}alt='Slack-icon'/>
        <img src={Github_icon}alt='Github-icon'/>
       </div>
    </div>
  )
}

export default main