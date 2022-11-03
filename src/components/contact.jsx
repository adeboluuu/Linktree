import React from 'react'
import footer from './footer'

function contact() {
  return (
    <div className='my-20 mx-auto text-center sm:w-6/12 w-10/12'>
      <div className='header text-left'>
      <h1 className='text-[#181828] text-4xl font-semibold mb-3'>Contact Me</h1>
      <p className='font-normal'>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form>
      <div className='sm:grid grid-cols-2 gap-8 block text-left'>
        <div className="my-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="username"> First name</label>
          <input className="shadow appearance-none h-11 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow " id="fullName" placeholder="Full Name" />
        </div>


                  <div className="my-4 ">
                    <label class="block  text-sm font-bold mb-2" for="username">Last name</label>
                    <input className="shadow appearance-none border h-11 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"type="text" id="username" placeholder="Your username" /></div>
                </div>
      </form>
      {footer}
    </div>
  )
}

export default contact