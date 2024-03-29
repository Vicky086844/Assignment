import React from 'react'
import Input from './Input'
import Button from "./Button"


function Contact() {

  const onSubmit=(e)=>{
    e.preventDefault()
  }
  return (

    <div className='w-full bg-slate-100'>
      <h2 className='text-2xl font-medium py-4 text-center'>Get In Touch</h2>
      <div className='flex mx-auto justify-center'>
      <form className=' flex flex-col gap-3 px-8 py-6 w-fit' onSubmit={onSubmit}>
        <Input label="Name: " placeholder='Enter your name'/>
        <Input type="email" placeholder='Enter your email' label="Email: "/>
        <Input type="number" placeholder='Enter your phone no'label="Phone: " className="hover:appearance-none"/>
        <textarea name="" id="" placeholder='Message...' className='px-3 py-2 rounded-lg focus:bg-neutral-50-50  bg-white text-black outline-none  w-full min-h-10'></textarea>
        <Button type='submit' className='font-medium '>Submit </Button>
      </form>
      <div className='sm:flex hidden  justify-center'>
     <img src="Blogging-bro.svg" alt="contact-me" className='w-full' />
    </div>
    </div>
    </div>
    

  )
}

export default Contact