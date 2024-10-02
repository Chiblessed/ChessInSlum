import React, { useState } from "react";

const Productimage = ({ primaryImage, hoverImage, altText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative  w-70 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
      loading="lazy"
        src={isHovered ? hoverImage : primaryImage}
        alt={altText}
        className="w-full md:w-full  flex items-center justify-center h-full  transition-opacity duration-300 ease-in-out"
      />
    </div>
  );
};

export default Productimage;
