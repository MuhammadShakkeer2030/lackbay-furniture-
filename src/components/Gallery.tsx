import { sofa } from "../assets/utitily";
import { useState } from "react";

function Gallery() {
  const [imgLoading, setImgLoading] = useState(false);
  const loadHandling = () => {
    setImgLoading(true);
  };
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {/* {sofa?.map=(()=> <div>Gallery</div> )}
       */}
      {sofa?.map(({ image }, index) => (
        <div>
          <img
            key={index}
            src={image}
            alt={image}
            className="w-[200px]"
            onLoad={loadHandling}
            loading="lazy"
          />
        </div>
      ))}
      {imgLoading && <p>Loading</p>}
    </div>
  );
}

export default Gallery;
