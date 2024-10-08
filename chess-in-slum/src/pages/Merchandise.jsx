import React, { useState } from "react";
import Image1 from "../assets/product images/image 15.png";
import Image2 from "../assets/product images/image 17.png";
import Image3 from "../assets/product images/image 19.png";
import Image4 from "../assets/product images/image 20.png";
import Fila from "../assets/fila.png";
import Halfstar from "../assets/halfstar.png";
import Star from "../assets/Star.png";

const Merchandise = () => {
  const images = [Fila, Image4, Image2, Image3, Image1];
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(1);


  function handleIncrement(){
    setCount(prevCount => prevCount + 1)
  }

  function handleDecrement(){
    setCount(prevCount => Math.max(prevCount - 1, 0))
  }

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-20 md:gap-3 mx-[6rem] mt-10 md:mt-5 lg:gap-24 lg:mx-[6.5rem]  sm:flex-col sm:mx-0  md:mx-[3rem]">
        <div className="flex-col items-center lg:ml-0 md:ml-10 ">
          <div className="flex gap-2 items-center sm:gap-0 mb-4  lg:gap-2 ">
            <svg
              onClick={handlePrevClick}
              className="sm:w-5 sm:h-20 md:w-8 md:h-20 lg:w-5 lg:h-20"
              width="224"
              height="114"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
<div className="md:w-[300px] md:overflow-hidden sm:overflow-hidden sm:w-[320px] lg:w-[450px] lg:gap-3 flex">

            {images.map((image, index) => (
              <img
                key={index}
                className={`h-[80px] lg:w-full rounded  cursor-pointer ${
                  activeIndex === index ? "border-2 border-black" : ""
                }` }
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
</div>
            <svg
              onClick={handleNextClick}
              className="sm:w-5 sm:h-20 md:w-8 md:h-20 lg:w-5 lg:h-20"
              width="204"
              height="114"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <img
            src={images[activeIndex]}
            className="w-full h-[400px]"
            alt={`Active ${activeIndex + 1}`}
          />
        </div>

        <div className="flex-col mr-20 mt-20 md:mr-3 sm:mr-0 sm:items-center sm:text-center">
          <h2 className="text-[#0D101C] text-4xl font-normal mb-3 sm:text-center">Fila/Cap</h2>
          <p className="text-[#808080] text-4xl font-bold mb-12 md:mb-8">N5000</p>
          <div className=" flex items-center justify-start sm:justify-center gap-3 mb-3 ">
            <div className="flex">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Halfstar} alt="" />
            </div>
            <p>4.5(268 sold)</p>
          </div>
          <div className="flex mb-16 gap-2 sm:items-center sm:justify-center ">
            <button className="bg-[#EBEEFE] w-[15%] md:w-[35%] lg:w-[15%] rounded py-2  sm:w-[20%] text-sm font-normal text-[#0D101C]">
              Free Size
            </button>
            <button className="bg-[#EBEEFE] w-[15%] md:w-[25%] lg:w-[15%] rounded py-2 text-sm font-normal text-[#0D101C]">
              Aso-oke
            </button>
            <button className="bg-[#EBEEFE] w-[20%] md:w-[40%] sm:w-[25%] lg:w-[20%] rounded py-2 text-sm font-normal text-[#0D101C]">
              Easy to clean
            </button>
          </div>
          <h2 className="text-xl font-semibold text-[#0D101C] mb-2">Description</h2>
          <p className="font-normal text-lg mb-20 text-[#6C6C6C] pr-24 sm:pr-0 sm:px-2 md:pr-0 lg:pr-24">
            Fila is a traditionally worn cap. It can be worn as an accessory
            with the yoruba outfit and on most modern wears.
          </p>
          <p className="text-[#59CC92] text-lg font-normal mb-2 sm:text-left sm:pl-10">In stock</p>
          <div className="flex sm:px-3">
            <div className="flex gap-[1px] mr-4 md:mr-2">
              <button 
              onClick={handleDecrement}
              className="bg-[#F0F0F0] px-3 rounded py-0 h-[56px] text-2xl text-black">
                -
              </button>
              <button className="bg-[#F0F0F0] px-3 rounded py-2 h-[56px] text-lg text-black">
                {count}
              </button>
              <button 
              onClick={handleIncrement}
              className="bg-[#F0F0F0] px-3 rounded py-2 h-[56px] text-lg text-black">
                +
              </button>
            </div>
            <button className="bg-[#0D101C] w-[50%] md:w-[200px] lg:w-1/2 rounded-full py-2 text-lg text-white mr-2">
              Check out
            </button>
            <svg
      onClick={handleClick}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill={isActive ? 'red' : 'white'}
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <rect
        x="1"
        y="1"
        width="58"
        height="58"
        rx="29"
        stroke={isActive ? 'red' : 'black'}
        strokeWidth="2"
      />
      <path
        d="M37.0535 21.4189C37.721 21.6955 38.3274 22.1008 38.8382 22.6118C39.3492 23.1226 39.7545 23.729 40.0311 24.3965C40.3076 25.0639 40.45 25.7793 40.45 26.5018C40.45 27.2243 40.3076 27.9397 40.0311 28.6072C39.7545 29.2746 39.3492 29.8811 38.8382 30.3918L37.7782 31.4518L29.9982 39.2318L22.2182 31.4518L21.1582 30.3918C20.1265 29.3601 19.5469 27.9609 19.5469 26.5018C19.5469 25.0428 20.1265 23.6435 21.1582 22.6118C22.1899 21.5801 23.5891 21.0005 25.0482 21.0005C26.5072 21.0005 27.9065 21.5801 28.9382 22.6118L29.9982 23.6718L31.0582 22.6118C31.5689 22.1008 32.1754 21.6955 32.8428 21.4189C33.5103 21.1423 34.2257 21 34.9482 21C35.6707 21 36.3861 21.1423 37.0535 21.4189Z"
        stroke={isActive ? 'white' : 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
