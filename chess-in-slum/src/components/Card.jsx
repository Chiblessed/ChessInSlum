import React from "react";

const Card = ({ items }) => {
  return (
    <div className="grid grid-cols-3 mx-10 md:mx-2 gap-4  sm:grid-cols-1">
      {items.map((val) => (
        <div
          key={val.id}
          className="flex flex-col border-[1px] border-solid border-black rounded w-full"
        >
          <div>
            <img className="w-full h-44 md:h-32" src={val.image} alt="" />
          </div>
          <div className="mt-2 mb-4">
            <h2 className="mx-5 mb-10 text-[#0D101C] text-xl font-semibold">
              {val.title}
            </h2>
            <p className="text-[#5B5B5B] text-[16px] font-normal mx-5">
              {val.date} . {val.readCount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
