import React, { useState } from "react";
import Data from "./Data";

function Buttons({ menuItems, filterItems, setItems }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAllClick = () => {
    setItems(Data);
    setActiveIndex(null);
  };

  const handleFilterClick = (val, index) => {
    filterItems(val);
    setActiveIndex(index);
  };

  return (
    <div className="flex mx-10 text-xl font-semibold gap-5 lg:mx-2 mt-10 mb-10">
      <button
        className={`w-[89px] sm:w-28 h-[40px] rounded-[32px] ${
          activeIndex === null ? "bg-black text-white" : " text-black"
        }`}
        onClick={handleAllClick}
      >
        All
      </button>
      {menuItems.map((val, index) => (
        <button
          key={index}
          className={`w-[89px] sm:w-28 h-[40px] rounded-[32px] ${
            activeIndex === index
              ? "bg-black text-white w-[125px]"
              : " text-black"
          }`}
          onClick={() => handleFilterClick(val, index)}
        >
          {val}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
