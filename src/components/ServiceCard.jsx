import React from 'react'

const ServiceCard = ({image, title, details}) => {
  return (
    <div className='m-5 w-36 mx-auto text-center flex flex-col items-center justify-center'>
        <img src={image}></img>
        <h1 className='text-black'>{title}</h1>
        <p className='text-gray-600'>{details}</p>
    </div>
  )
}

export default ServiceCard