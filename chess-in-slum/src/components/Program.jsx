import React from "react";
import Chess from "../assets/home image/Chess Symbols.png";
import Programimage from "../assets/Rectangle 107.png";

const Program = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32 ">
      <h1 className="text-center  text-5xl px-1 leading-[54px] font-extrabold text-black mb-10">
        Our program workstream
      </h1>
      <div className="flex items-center justify-center gap-2 text-center xl:px-[7rem] md:px-2 sm:px-2 sm:grid sm:grid-cols-2 px-24">
        <div className=" text-center bg-[#FEF5FF]">
          <img
            src={Chess}
            alt=""
            className="pt-10 relative left-28  sm:left-[5rem] md:left-[5rem] mb-7"
          />
          <h2 className="pb-6 font-medium px-6"> Scholarship Opportunities</h2>
          <p className="pb-10 px-3">
            Securing lifelong scholarships for out-of-school and vulnerable
            children in slum communities
          </p>
        </div>
        <div className="bg-[#F3FFF5] ">
          <img
            src={Chess}
            alt=""
            className="pt-10 relative left-28 sm:left-[5rem] md:left-[5rem] mb-7"
          />
          <h2 className="pb-6 px-6 ">Skill Acquisition</h2>
          <p className="pb-10  px-3">
            Equipping children critical thinking, time management,
            communication, mental maths and vocational skills.{" "}
          </p>
        </div>
        <div className="bg-[#FFFDF5 ] ">
          <img
            src={Chess}
            alt=""
            className="pt-10 relative left-28 sm:left-[5rem] md:left-[5rem] mb-7"
          />
          <h2 className="pb-6 px-6">Mentorship</h2>
          <p className="pb-10 px-3">
            We connect children with chess enthusiasts and role models in
            various fields to inspire them in forming a defined career path.
          </p>
        </div>
        <div className="bg-[#F7F4FF] ">
          <img
            src={Chess}
            alt=""
            className="pt-10 relative left-28 sm:left-[5rem] md:left-[5rem] mb-7"
          />
          <h2 className="pb-6 px-6">Chess Training</h2>
          <p className="pb-10 px-3">
            We offer disadvantaged children the opportunity to compete globally
            by training them to become masters at the game.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${Programimage})`,
          backgroundSize: "cover",
          backgroundPosition: "cover",
          opacity: 0.8,
        }}
        className=" mb-10  bg-cover bg-center h-[500px] w-[86%] xl:w-[83%] md:w-full sm:w-full sm:h-full sm:grid-cols-2 sm:gap-20 sm:px-2 relative grid grid-cols-3  gap-40 px-[6rem]"
      >
        <div className="absolute inset-0 bg-[#0D101C] opacity-80"></div>
        <div className="opacity-100 text-center z-50">
          <h2 className="text-5xl pt-10 text-[#C18E00] mb-3">36000+</h2>
          <p className="text-white">Hours of Chess training</p>
        </div>
        <div className="text-center z-50">
          <h2 className="text-5xl pt-10 text-[#C18E00] mb-3">1000+</h2>
          <p className="text-white">Children enrolled in CIS initiative</p>
        </div>
        <div className="text-center z-50">
          <h2 className="text-5xl pt-10 text-[#C18E00] mb-3">200+</h2>
          <p className="text-white">Scholarships</p>
        </div>
        <div className="pb-10 text-center z-50">
          <h2 className="text-5xl pt-10 text-[#C18E00] mb-3">86%</h2>
          <p className="text-white">Enrolled children remain in school</p>
        </div>
        <div className="pb-10 text-center z-50">
          <h2 className="text-5xl pt-10 text-[#C18E00] mb-3">$400,000+</h2>
          <p className="text-white">In academic scholarships</p>
        </div>
        <div className="pb-10 text-center z-50">
          <h2 className="text-5xl pt-10 text-[#C18E00] mb-3">3</h2>
          <p className="text-white">Slum communties</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
