import React from "react";
import Productimage from "./Productimage";
import Fila from "../assets/fila.png";
import Hoverimage1 from "../assets/hover1.png";
import Hoverimage2 from "../assets/hover2.png";
import Hoverimage3 from "../assets/hover3.png";
import Hoverimage4 from "../assets/hover4.png";
import Halfstar from "../assets/halfstar.png";
import Star from "../assets/Star.png";

const Display = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h2 className="text-center text-5xl sm:text-4xl mb-7 sm:px-0 mt-24 font-extrabold">
        Buy our merchandise
      </h2>
      <div className="px-4 flex items-center justify-center sm:flex-col gap-4">
        <div className="hover:cursor-pointer">
          <Productimage
            primaryImage={Fila}
            hoverImage={Hoverimage1}
            altText="Chess Fila"
          />
          <p className="text-[#C18E00] mt-2 mb-4"> Chess fila/cap</p>
          <span>N5000</span>
          <div className=" flex items-center justify-start mb-5 ">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Halfstar} alt="" />
          </div>
        </div>

        <div className="hover:cursor-pointer">
          <Productimage
            primaryImage={Fila}
            hoverImage={Hoverimage2}
            altText="Chess Fila"
          />
          <p className="text-[#C18E00] mt-2 mb-4"> Chess fila/cap</p>
          <span>N5000</span>
          <div className=" flex items-center justify-start mb-5 ">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Halfstar} alt="" />
          </div>
        </div>

        <div className="hover:cursor-pointer">
          <Productimage
            primaryImage={Fila}
            hoverImage={Hoverimage3}
            altText="Chess Fila"
          />
          <p className="text-[#C18E00] mt-2 mb-4"> Chess fila/cap</p>
          <span>N5000</span>
          <div className=" flex items-center justify-start mb-5 ">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Halfstar} alt="" />
          </div>
        </div>

        <div className=" hover:cursor-pointer">
          <Productimage
            primaryImage={Fila}
            hoverImage={Hoverimage4}
            altText="Chess Fila"
          />
          <p className="text-[#C18E00] mt-2 mb-4"> Chess fila/cap</p>
          <span>N5000</span>
          <div className=" flex items-center justify-start mb-5 ">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Halfstar} alt="" />
          </div>
        </div>
      </div>
      <button className="mt-10  bg-black text-white w-32 rounded-full mb-7 py-2 hover:border-2 hover:border-black hover:bg-transparent  hover:text-black">
        Visit Store
      </button>
    </div>
  );
};

export default Display;
