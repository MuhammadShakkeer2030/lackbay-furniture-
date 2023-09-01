import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";

const images = [
  "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
  "https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg",
  // '/image3.jpg',
  // '/image4.jpg',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] flex items-center justify-center">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute transition-opacity duration-500 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <span className="absolute bottom-0 z-30 flex gap-2 ">
        {images?.map((item, index) => (
          <FaCircle
            className={
              currentIndex === index ? "text-gray-500" : "text-gray-500/50"
            }
          />
        ))}
      </span>
    </div>
  );
};

export default ImageSlider;
