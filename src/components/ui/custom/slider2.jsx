import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import { useState, useEffect } from "react";

const ImageSlider = ({ images, time }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, time); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length, time]);

  return (
    <div className="relative lg:w-[1000px] lg:h-[400px] md:w-[700px] md:h-[200px] w-[400px] h-[200px] object-cover rounded mx:40">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 transition-opacity duration-1000 lg:w-[1000px] lg:h-[400px] md:w-[700px] md:h-[200px] w-[400px] h-[200px]  mx:40 object-cover rounded-xl ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
