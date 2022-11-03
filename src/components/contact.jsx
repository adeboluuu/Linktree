import React from 'react'
import Footer from '../components/footer'

function contact() {
  return (
    <div>
    <div className='my-20 mx-auto text-center sm:w-6/12 w-10/12'>
      <div className='header text-left'>
      <h1 className='text-[#181828] text-4xl font-semibold mb-3'>Contact Me</h1>
      <p className='font-normal text-[#475467]'>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>


      <form mailto>

      <div className='sm:grid grid-cols-2 gap-8 block text-left my-3'>
        <div className="my-3">
          <label className="block text-sm font-medium mb-2" for="First name"> First name</label>
          <input autoComplete='on' className="shadow appearance-none h-11 border font-normal rounded-lg w-full py-2 px-3 text-[#667085] leading-tight focus:outline-none focus:shadow " id="first_name" placeholder="Enter your first name" />
        </div>
        
        <div className="my-3 ">
          <label class="block text-sm font-medium  mb-2" for="Last name">Last name</label>
          <input autoComplete='on'className="shadow appearance-none border h-11 font-normal rounded-lg w-full py-2 px-3 text-[#667085] leading-tight focus:outline-none focus:shadow" id="last_name" placeholder="Enter your last name" />
        </div>
        
        </div>

        <div className="my-3 ">
          <label class="block  text-left text-sm font-medium  mb-2" for="email">Email</label>
          <input className="shadow appearance-none border h-11 font-normal rounded-lg w-full py-2 px-3 text-[#667085] leading-tight focus:outline-none focus:shadow-outline"type="email" id="email" placeholder="yourname@email.com" />
        </div>

        <div className="my-3 ">
          <label class="block  text-left text-sm font-medium  mb-2" for="message">Message</label>
          <input className="shadow appearance-none border h-[132px] font-normal rounded-lg w-full py-0  text-start px-3 text-[#667085] leading-tight focus:outline-none focus:shadow-outline"type="text" id="message" placeholder="Send me a message and I'll reply you as soon as possible..." />
        </div>


        <div className='text-left mb-4'>
          <input type='checkbox'className='mr-2 rounded-md border-[#D0D5DD]'></input>
          <span className='font-normal text-base text-[#475467]'>You agree to providing your data to {name} who may contact you.</span>
        </div>

        <button id='btn__submit'type='submit 'className=' mb-5 bg-[#1570EF] text-white w-full rounded-lg h-12 mt-2'>Send Message</button>
      </form>

    </div>
    <Footer/>
    </div>
    

  )
}

export default contact