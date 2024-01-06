import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { TextAnimation } from "./paths";
const images = [
  "https://wowslider.com/sliders/demo-77/data1/images/field175959_1920.jpg",
  "https://wowslider.com/sliders/demo-77/data1/images/idaho239691_1920.jpg",
   "./img/banner/lackbuy-banner1.png",
  '/img/banner/lackbuy-banner2.png',
  '/img/banner/lackbuy-banner3.png',
  '/img/banner/lackbuy-banner4.jpg',
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
    <div>
      {" "}
      <div className="relative w-[100%] h-[100px] md:h-[500px] flex items-center justify-center mx-auto mb-[50px] ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            loading="lazy"
            className={`  absolute xl:h-[500px] w-full inset-0 transition-all transform  delay duration-500 object-contain xl:object-cover  ${
              currentIndex === index ? "opacity-100 translate-x-0" : "opacity-0  -translate-x-full"
            }`}
          />
        ))}
        <span className=" flex gap-2 ">
          {images?.map((_item, index) => (
            <FaCircle
              key={index}
              className={
                currentIndex === index ? "text-gray-500" : "text-gray-500/50"
              }
            />
          ))}
        </span>
        <div className="hidden xl:absolute ">
          <TextAnimation currentIndex={currentIndex}/>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
