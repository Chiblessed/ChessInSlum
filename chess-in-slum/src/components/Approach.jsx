import React from "react";
import Approach1 from "../assets/home image/approach1.png";
import Approach2 from "../assets/home image/approach2.png";
import Approach3 from "../assets/home image/approach3.png";
import Approach4 from "../assets/home image/approach4.png";
import Approach5 from "../assets/home image/approach5.png";
import Approach6 from "../assets/home image/approach6.png";

const Approach = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32 ">
      <h2 className="text-center px-[20rem] xl:px-[20rem] md:px-2 sm:px-0 sm:text-4xl text-6xl   leading-[58px] font-bold mb-8">
        Our approach to sustainable impact
      </h2>
      <p className="text-center font-normal  text-2xl mb-7">
        Reimagining education using chess as a tool to aid cognition <br />
        and empower the minds of children in impoverished communities
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 sm:mx-2">
        <img src={Approach1} alt="" />
        <img src={Approach2} alt="" />
        <img src={Approach3} alt="" />
        <img src={Approach4} alt="" />
        <img src={Approach5} alt="" />
        <img src={Approach6} alt="" />
      </div>
      <button className="mt-10 bg-black text-white w-36 font-normal text-lg rounded-full mb-7 py-2 hover:border-2 hover:border-black hover:bg-transparent  hover:text-black">
        Learn More
      </button>
    </div>
  );
};

export default Approach;
