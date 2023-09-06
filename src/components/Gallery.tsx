import { filter, sofa } from "../assets/utitily";
import { useState, useEffect } from "react";

function Gallery() {
  const [filterdArray, setFilteredArray] = useState<filter[]>([]);

  // const loadHandling = () => {
  //   setImgLoading(true);
  // };
  // useEffect(() => {
  //   return () => setImgLoading(false);
  // }, []);

  useEffect(() => {
    setFilteredArray(sofa);
  }, []);
  return (
    <div className="px-5 lg:w-[80%] md:mx-auto bg-slate-500/10 pt-5">
      <span className="flex justify-end gap-3 text-[14px] md:text-xl">
        {/* Here is not dublicated catogory printed . and filter images to filtred Array */}
        {Array.from(new Set(sofa?.map(({ category }) => category)))
          .slice()

          .map((category, index) => (
            <button
              key={index}
              className=" md:px-3 md:py-2 hover:text-[#006e63] capitalize cursor-pointer"
              onClick={() =>
                setFilteredArray(
                  sofa?.filter((item) => category === item.category)
                )
              }
            >
              {category}
            </button>
          ))}
      </span>
      <div className="flex flex-wrap gap-2 justify-center mt-5">
        {/* {sofa?.map=(()=> <div>Gallery</div> )}
         */}

        {filterdArray?.map(({ image }, index) => (
          <div key={index}>
            <img
              key={index}
              src={image}
              alt={image}
              className="w-[200px] rounded-md"
              loading="lazy"
              // onLoad={loadHandling}
            />
            {/* {imgLoading && "Loading..."} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
