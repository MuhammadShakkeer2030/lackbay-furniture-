import React, { useState, useEffect } from "react";
import { filterHomeImages, filter } from "../assets/utitily";

const FilterImages: React.FC = () => {
  const [filterdArray, setFilteredArray] = useState<filter[]>([]);

  useEffect(() => {
    setFilteredArray(filterHomeImages);
  }, []);

  return (
    <div className="w-[100%] px-5 lg:w-[80%] md:mx-auto  mt-5  md:p-5">
      <div className="flex items-center justify-between py-2" >
        {" "}
        <h3 className="text-[25px] md:text-3xl font-semibold text-[#006e63]" >Our Products</h3>
        <span className="flex justify-end  gap-3 ">
          {/* Here is not dublicated catogory printed . and filter images to filtred Array */}
          {Array.from(
            new Set(filterHomeImages?.map(({ category }) => category))
          )
            .slice()
            .reverse()
            .map((category, index) => (
              <p
                key={index}
                className="md:px-3 text-[10px] md:text-xl md:py-2 hover:text-[#006e63] capitalize cursor-pointer"
                onClick={() =>
                  setFilteredArray(
                    filterHomeImages?.filter(
                      (item) => category === item.category
                    )
                  )
                }
              >
                {category}
              </p>
            ))}
        </span>
      </div>
      <div className="flex flex-wrap justify-around gap-2">
        {filterdArray?.map(({ image }, index) => (
          <div key={index}>
            <img
              src={image}
              alt="filter-img"
              className="w-[180px] md:w-[300px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterImages;
