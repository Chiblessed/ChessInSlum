import React from "react";
import Child from "../assets/home image/image 6.png";
import Motherlove from "../assets/home image/img3.png";
import Childwon from "../assets/home image/img4.png";
import Winner from "../assets/home image/img7.png";

const Unveil = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-36 sm:mx-5 ">
      <h1 className="text-center  text-6xl px-1 sm:text-5xl sm:px-0  leading-[54px] font-bold text-black mb-8">
        Unveiling the King <br />
        and Queen in every Pawn
      </h1>
      <p className="text-center font-normal text-2xl xl:px-[22rem] px-[22rem] md:px-2 sm:px-2  mb-7">
        Using chess to train the inner genius and change the status quo of
        African children raised in slum communities
      </p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-2">
        <img loading="lazy" className="col-span-3 sm:col-span-2" src={Child} alt="" />
        <img loading="lazy" src={Motherlove} alt="" />
        <img loading="lazy" src={Childwon} alt="" />
        <img loading="lazy" src={Winner} alt="" />
      </div>
      <button className="mt-10 bg-black font-normal tetx-lg text-white w-32 rounded-full mb-7 py-2 hover:border-2 hover:border-black hover:bg-transparent  hover:text-black">
        Learn More
      </button>
    </div>
  );
};

export default Unveil;
