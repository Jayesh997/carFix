import React from 'react'
import logo from '../assets/images/logo.png'

const Footer = () => {
    
  return (
    <div className='bg-bg-blue w-full px-5 pt-5  sm:px-20 sm:pt-20 pb-5'>
 <div className='bg-bg-blue w-full flex gap-10' >
        <div className='w-1/3 hidden sm:block'>
            <p className='font-chakra font-bold'>Rerum necessitatibus saepe eveniet aut et voluptates repudiandae sint et molestiae non recusandae.</p>
            <img class="p-5 m-auto w-auto" src={logo} alt="Your Company"></img>
        </div>
        <div className='flex flex-col justify-start items-center w-1/2 sm:w-1/3'>
            <h1 className='font-chakra text-xl font-bold'>OPENING HOURS</h1>
            <div>
            <p>Monday – Saturday</p>
            <p>12.00 – 14.45</p>
            </div>
            <div>
            <p>Sunday – Thursday</p>
            <p>17.30 – 00.00</p>
            </div>
            <div>
            <p>Friday – Saturday</p>
            <p>12.00 – 14.45</p>
            </div>
        </div>
        <div className='flex flex-col justify-start items-start w-1/2 sm:w-1/3'>
            <h1 className='font-chakra text-xl font-bold'>CONTACT INFO</h1>
            <div>
            <p>+19 9999000999</p>
            </div>
            <div>
            <p>info@carfix.com</p>
            </div>
            <div>
            <p>411, Connaught Place, New Delhi, India</p>
            </div>
        </div>
    </div>
    <div className='w-full flex justify-center items-center pt-10'>
    <p>&copy;</p> <span className='text-center pl-1'>Copyright 2024, jayeshgupta All Rights Reserved.</span>
    </div>
    </div>
   
  )
}

export default Footer