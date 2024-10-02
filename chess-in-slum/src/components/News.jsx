import React from "react";
import Newsimage1 from "../assets/home image/Rectangle 122.png";
import Newsimage2 from "../assets/home image/Rectangle 123.png";
import Newsimage3 from "../assets/home image/Rectangle 125.png";
import Newsimage4 from "../assets/image 12.png";
import ReactPlayer from "react-player";

const News = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10 ">
      <h2 className="font-extrabold text-5xl sm:text-4xl mb-16 mt-48">
        News & Highlights
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-1 sm:gap-9 gap-2 md:px-2 px-24 sm:px-4 xl:px-[6rem] ">
        <div className="bg-[#F3FFF5] ">
          <img loading="lazy" src={Newsimage1} alt="" />
          <h2 className=" mt-5 mb-4 pr-44 pl-8 sm:pr-2 md:pr-2">
            How we started: The Majidun Chess Dream
          </h2>
          <p className="pl-8 pr-5 mb-4">
            The Chess In Slums Africa initiative commonly known as CISA was
            established on September 1st 2018 at Majidun Ikorodu, Lagos Nigeria
            to lift children out...
          </p>
          <a href="" className="pl-8 text-[#339129]">
            Read More
          </a>
        </div>

        <div className="bg-[#FFFDF5] ">
          <img loading="lazy" src={Newsimage2} alt="" />
          <h2 className=" mt-5 mb-4 pr-40 sm:pr-4 pl-8 md:pr-4">
            Meet the Oshodi Champ: Adeoye Fawas
          </h2>
          <p className="pl-8 pr-5 mb-4">
            {" "}
            A man once said “the brightest lights are found in the thickest
            darkness’. At Chess In Slums Africa we believed in that statement
            when we met Adeoye Fawas...
          </p>
          <a href="" className="pl-8 text-[#BA8C00]">
            Read More
          </a>
        </div>

        <div className="bg-[#F7F4FF] ">
          <img loading="lazy" src={Newsimage3} alt="" />
          <h2 className=" mt-5 mb-4 pr-40 sm:pr-4 pl-8 md:pr-2">
            Meet the Makoko Champ: Ferdinard Maumo
          </h2>
          <p className="pl-8 pr-5 mb-4">
            The 40-week programme offers fun and enriching chess trainings for
            out-of-school and disadvantaged children in the slum at all levels
            of experience...
          </p>
          <a href="" className="pl-8 sm:pb-5 text-[#796CE9]">
            Read More
          </a>
        </div>

        <div className="col-span-3 sm:col-span-1">
          <div className="relative w-full h-[35rem]">
            <ReactPlayer
              controls={true}
              url="https://www.youtube.com/watch?v=9GXWCs3hsMA"
              className="absolute top-0 left-0"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#BA8C00] w-[86%] h-60 text-center xl:w-[86%] sm:w-full sm:h-full md:w-full">
        <h2 className="mt-20 sm:mt-10 md:text-4xl text-4xl mb-10 sm:text-3xl font-[700]">
          Subscribe to our newsletter
        </h2>
        <div className="relative w-[30%] left-[35%] group xl:w-[30%] xl:left-[33%] sm:w-[70%] sm:left-10 sm:mb-5 md:w-[50%] md:left-[12rem] ">
          <input
            className="w-full h-9 px-5 py-5 bg-[#A37800]  border rounded-full border-transparent text-black pr-20 focus:outline-none outline-none"
            type="text"
            placeholder="Your Email"
          />
          <button className="absolute right-2  top-1/2 transform -translate-y-1/2   bg-black text-white px-4 py-1 rounded-full transition-transform duration-300 group-hover:scale-110">
            Subscribe
          </button>
          <svg
            className="absolute right-[-10%] top-1/2 transform -translate-y-1/2 text-yellow-400 text-2xl transition-transform duration-300 group-hover:scale-150"
            width="20"
            height="51"
            viewBox="0 0 30 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.79688 12.1328L16.4691 1.85921"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1.79688 38.8594L16.4691 49.133"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1.79688 25.8594H28.1976"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default News;
