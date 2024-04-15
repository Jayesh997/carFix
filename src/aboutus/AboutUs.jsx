import React from 'react'
import banner from '../assets/images/about-banner.png'
import aboutusBg from '../assets/images/aboutus-bg.jpeg'

const AboutUs = () => {
  return (
    <div className='w-screen  flex items-center flex-col bg-bg-blue'>
            <div className='w-full flex justify-between items-center flex-col'>
                <div className='flex justify-center items-center flex-col m-10 md:flex-row'>
                    <div className='w-full flex flex-col justify-center items-center mr-5'>
                    <p className='text-white font-chakra text-lg py-3 '>ABOUT US</p>
                    <p className='text-4xl text-center font-chakra py-3'>WE’RE COMMITED TO MEET THE QUALITY</p>
                    <p className='text-center'>Quis autem vel eum iure reprehenderit qui in ea volu velit esse quam nihil molestiae consequatur, vel illum eui dolorem eum fugiat ruo.</p>
                    <p className='text-center'> Reprehenderit qui in ea volu velit esse quam nihil moe stiae consequatur, vel illum eui.</p>
                    </div>
                    <div className='w-full mx-5'>
                    <div className='w-full h-28 bg-[#141d33] m-auto flex justify-center items-center flex-col mt-5'>
                        <p className='text-center text-3xl font-chakra'>8K+</p>
                        <p className='text-center'  >Happy Clients</p>
                    </div>
                    <div className='w-full h-28  bg-[#141d33] m-auto flex justify-center items-center flex-col mt-5'>
                        <p className='text-center text-3xl font-chakra'>22+</p>
                        <p className='text-center'  >Happy Clients</p>
                    </div>
                    <div className='w-full h-28 bg-[#141d33] m-auto flex justify-center items-center flex-col mt-5'>
                        <p className='text-center text-3xl font-chakra'>50+</p>
                        <p className='text-center'  >Happy Clients</p>
                    </div>
                    <div className='w-full h-28 bg-[#141d33] m-auto flex justify-center items-center flex-col mt-5'>
                        <p className='text-center text-3xl font-chakra'>99%</p>
                        <p className='text-center'  >Happy Clients</p>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AboutUs