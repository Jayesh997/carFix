import React from 'react'
import heroBg from '../assets/images/hero-bg.jpg';
import heroBanner from '../assets/images/hero-banner.png';
import Button from '../components/Button';

const Dashboard = () => {
  return (
    <div className='w-screen h-screen flex items-center flex-col sm:flex-row sm:bg-no-repeat sm:bg-cover sm:bg-center' style={{backgroundImage: `url(${heroBg})`}}>
        <section className='animate-slide-in-left  w-2/3 h-1/2 mt-10 sm:ml-20'>
            <h2 className='text-xl font-semibold p-3'>We have talented engineers & mechanics</h2>
            <h1 className='text-4xl font-extrabold p-3 font-chakra'>AUTO MAINTENANCE & REPAIR SERVICE</h1>
            <p className='text-xl font-semibold p-3'>Duis aute irure dolor in reprehenderit in voluptate velit esse Excepteur sint occaecat cupidatat non proident.</p>
            <Button >OUR SERVICES</Button>
        </section>
        <aside className='sm:w-1/2'>
            <img src={heroBanner} className='animate-slide-in-right absolute right-0 bottom-0 sm:w-2/3'/>
        </aside>
    </div>
  )
}

export default Dashboard