import React from 'react'
import Trend from './Trend';

const Trends = () => {
  return (
    <div className="flex flex-col bg-secondary rounded-xl">
      <span className="font-bold p-5">Trends for you</span>
      <div className="flex flex-col w-full">
        <Trend />
      </div>
    </div>
  );
}

export default Trends