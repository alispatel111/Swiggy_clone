import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from './Card';

export default function TopRest() {
  const prevSlide = () => {
    // Logic for previous slide
    console.log("Previous slide");
  };

  const nextSlide = () => {
    // Logic for next slide
    console.log("Next slide");
  };

  const [data, setData] = useState([]);

  const fetchtoprestaurant = async () => {
    const response = await fetch('http://localhost:5000/top-restaurant-chains');
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchtoprestaurant();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[25px] font-bold">Top restaurants in Vadodara</div>
        <div className="flex">
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className='flex gap-5 overflow-hidden'>
        {data.map((d, i) => (
          <Card {...d} key={i} />
        ))}
      </div>
    </div>
  );
}
