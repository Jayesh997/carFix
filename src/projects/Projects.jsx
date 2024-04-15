import React from 'react';
import work1 from '../assets/images/work-1.jpg';
import work2 from '../assets/images/work-2.jpg';
import work3 from '../assets/images/work-3.jpg';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

const Projects = () => {
  const cards = [
    { src: work1, heading: 'AUTO REPAIR', text: 'ENGINE REPAIR', btnText: 'KNOW MORE' },
    { src: work2, heading: 'AUTO REPAIR', text: 'CAR TYRE CHANGE', btnText: 'KNOW MORE' },
    { src: work3, heading: 'AUTO REPAIR', text: 'BATTERY ADJUST', btnText: 'KNOW MORE' },
    // Add more card data as needed
  ];

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center my-12 sm:m-0'>
      <h1 className='text-primary-red font-chakra mb-2 text-lg'>OUR WORK</h1>
      <h1 className='text-black text-2xl mb-12 text-center sm:text-left'>LATEST PROJECTS WE HAVE DONE</h1>
      <div className='hidden md:flex w-screen justify-center items-center gap-4'>
        <Card src={work1} heading={'AUTO REPAIR'} text={'ENGINE REPAIR'} btnText={'KNOW MORE'} />
        <Card src={work2} heading={'AUTO REPAIR'} text={'CAR TYRE CHANGE'} btnText={'KNOW MORE'} />
        <Card src={work3} heading={'AUTO REPAIR'} text={'BATTERY ADJUST'} btnText={'KNOW MORE'} />
      </div>
      <div className='md:hidden'>
        <Carousel cards={cards} />
      </div>
    </div>
  );
};

export default Projects;
