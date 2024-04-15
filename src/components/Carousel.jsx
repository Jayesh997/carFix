import React, { useState } from 'react';
import Card from './Card';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="slides">
            <div  className={`slide`}>
              <Card src={cards[currentIndex].src} heading ={cards[currentIndex].heading} text={cards[currentIndex].text} btnText={cards[currentIndex].btnText} />
            </div>
        </div>
        <div className='relative top-1/2 w-full flex justify-between'>

        <button className="prev ml-2 mt-2" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next mr-2 mt-2" onClick={nextSlide}>
          &#10095;
        </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
