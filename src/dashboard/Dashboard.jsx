import React from 'react'
import heroBg from '../assets/images/hero-bg.jpg';
import heroBanner from '../assets/images/hero-banner.png';
import Button from '../components/Button';

const Dashboard = () => {
  return (
    <div className='w-screen h-screen overflow-hidden flex items-center flex-col sm:flex-row sm:bg-no-repeat sm:bg-cover sm:bg-center' style={{backgroundImage: `url(${heroBg})`}}>
        <section className='animate-slide-in-left w-11/12  sm:w-2/3 h-1/2 mt-10 sm:ml-20'>
            <h2 className='text-lg text-center sm:text-left sm:text-xl font-semibold p-3'>We have talented engineers & mechanics</h2>
            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-extrabold p-3 font-chakra'>AUTO MAINTENANCE & REPAIR SERVICE</h1>
            <p className='text-lg text-center sm:text-left sm:text-xl font-semibold p-3'>Duis aute irure dolor in reprehenderit in voluptate velit esse Excepteur sint occaecat cupidatat non proident.</p>
            <div className='w-full flex justify-center items-center sm:justify-start sm:p-3'>
            <Button >OUR SERVICES</Button>
            </div>
        </section>
        <aside className='sm:w-1/2'>
            <img src={heroBanner} className='animate-slide-in-right absolute right-0 bottom-[-63px] sm:w-2/3'/>
        </aside>
    </div>
  )
}

export default Dashboard