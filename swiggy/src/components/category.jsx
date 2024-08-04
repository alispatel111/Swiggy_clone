import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function Category() {
  const [slide, setSlide] = useState(0);
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await fetch('http://localhost:5000/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => {
    // Adjust the number 8 based on how many items you want to display at once
    if (categories.length - 8 <= slide) return;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if (slide === 0) return;
    setSlide(slide - 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-bold">What's On Your Mind?</div>
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
      <div className="flex overflow-hidden">
        {categories.map((cat, index) => (
          <div
            style={{ transform: `translateX(-${slide * 100}%)` }}
            key={index}
            className="cursor-pointer w-[150px] shrink-0 duration-500"
          >
            <img src={`http://localhost:5000/images/${cat.image}`} alt={cat.name} />
          </div>
        ))}
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
}
