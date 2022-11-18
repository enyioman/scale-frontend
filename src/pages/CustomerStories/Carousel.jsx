import React, { useState } from 'react';
import { carouselData } from '../../data/CustomerStoriesData';
import PrevIcon from '../../assets/PrevIcon';
import NextIcon from '../../assets/NextIcon';
import '../../styles/Carousel.scss';
const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const length = carouselData.length;

  let index = current;
  let data = carouselData[index];
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carouselSlideonscroll m-3">
      <div
        className="flex flex-row
      justify-between items-end



      "
      >
        <PrevIcon onClick={prevSlide} />
        <div className="text-lg font-bold flex justify-center align-middle text-center w-9/12 mx-auto">
          {data.text}
        </div>
        <NextIcon onClick={nextSlide} />
      </div>
      <div className="flex flex-row justify-around mt-4 items-center">
        <div>{data.name}</div>
        <div className="straightLine"></div>
        <div>{data.position}</div>
      </div>
    </div>
  );
};

export default Carousel;
