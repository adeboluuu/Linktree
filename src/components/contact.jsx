import React from 'react'
import footer from './footer'

function contact() {
  return (
    <div className='my-20 mx-auto text-center w-10/12'>
      <div className='header'>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      {footer}
    </div>
  )
}

export default contact