import React from 'react';
import Button from './Button';

const Card = ({ src, heading, text, btnText }) => {
  return (
    <div className="w-full sm:w-80 rounded-lg bg-bg-blue shadow-secondary-1">
      <a href="#!">
        <img
          className="rounded-t-lg object-fill m-auto"
          src={src}
          alt=""
        />
      </a>
      <div className="p-6 text-surface text-center font-chakra">
        <h5 className="mb-2 text-xl font-medium leading-tight">{heading}</h5>
        <p className="mb-4 text-base">
          {text}
        </p>
        <Button>{btnText}</Button>
      </div>
    </div>
  );
};

export default Card;
