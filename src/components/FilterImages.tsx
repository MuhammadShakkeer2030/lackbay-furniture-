import React, { useState, useEffect } from "react";
import {  filter, sofa } from "../assets/utitily";
import { Link } from "react-router-dom";

const FilterImages: React.FC = () => {
  const [filterdArray, setFilteredArray] = useState<filter[]>([]);

  useEffect(() => {
    setFilteredArray(sofa);
  }, []);

  return (
    <div className="w-[100%] px-5 lg:w-[80%] md:mx-auto  mt-5  md:p-5 border border-gray-200  bg-gradient-to-br from-white/90 to-slate-300">
      <div className="flex items-center justify-between py-2">
        {" "}
        <h3
          id="Product-sec"
          className="text-[25px] md:text-3xl font-semibold text-[#006e63]"
        >
          Our Products
        </h3>
        <span className="flex justify-end  gap-3 ">
          {/* Here is not dublicated catogory printed . and filter images to filtred Array */}
          {Array.from(new Set(sofa?.map(({ category }) => category)))
            .slice()
            .reverse()
            .map((category, index) => (
              <p
                key={index}
                className="md:px-3 text-[16px] md:text-xl md:py-2 hover:text-[#006e63] capitalize cursor-pointer"
                onClick={() =>
                  setFilteredArray(
                    sofa?.filter((item) => category === item.category)
                  )
                }
              >
                {category}
              </p>
            ))}
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {filterdArray?.map(
          ({ image }, index) =>
            index < 5 && (
              <Link to={`/ProductDetails/${index}`} key={index}>
                <img
                  src={image}
                  alt="filter-img"
                  className="w-[180px] lg:w-[300px] rounded-md"
                />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default FilterImages;
