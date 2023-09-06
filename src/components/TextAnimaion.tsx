import { useState, useEffect,FC } from "react";

interface AnimationProps {
    currentIndex :number
}
const TextAnimation:FC<AnimationProps> =({currentIndex})=>{
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Add a delay to the visibility change to create a delay effect
    setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Adjust the delay time as needed
  }, [currentIndex]);

  return (
    <div className="flex items-center justify-center h-[200px] w-[300px] bg-slate-400/50">
      <div
        className={`text-center mt-4 ${
          isVisible ? "animate-slide-in" : "opacity-0"
        }`}
      >
        <p className="text-white">
          <span className="text-yellow-500 text-3xl font-bold">
            Glasswood Story
          </span>{" "}
          <span className="text-[20px] font-semibold">Lackbuy Furniture</span>
        </p>
      </div>
    </div>
  );
}

export default TextAnimation;
