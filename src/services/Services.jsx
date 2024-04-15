import React from 'react'
import Button from '../components/Button'
import serviceCard6 from '../assets/images/services-6.png'
import serviceCard5 from '../assets/images/services-5.png'
import serviceCard4 from '../assets/images/services-4.png'
import serviceCard3 from '../assets/images/services-3.png'
import serviceCard2 from '../assets/images/services-2.png'
import serviceCard1 from '../assets/images/services-1.png'
import ServiceCard from '../components/ServiceCard'
const Services = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center my-5'>
        <p className='text-primary-red font-chakra'>OUR SERVICES</p>
        <h1 className='text-gray-900 font-chakra'>WE PROVIDE GREAT SERVICES FOR YOUR VEHICLE</h1>
        <div>
       <div className=' flex flex-wrap sm:grid sm:grid-cols-3 sm:grid-rows-2'>
        <ServiceCard image={serviceCard1} title='ENGINE REPAIR' details='Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles'/>
        <ServiceCard image={serviceCard2} title='ENGINE REPAIR' details='Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles'/>
        <ServiceCard image={serviceCard3} title='ENGINE REPAIR' details='Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles'/>
        <ServiceCard image={serviceCard4} title='ENGINE REPAIR' details='Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles'/>
            <img className='hidden sm:block animate-bouncing infinite' src = {serviceCard5}></img>
        <ServiceCard image={serviceCard6} title='ENGINE REPAIR' details='Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles'/>
       </div>
        </div>
        <Button className='mt-10 shadow-xl'>VIEW ALL SERVICES</Button>
    </div>
  )
}

export default Services