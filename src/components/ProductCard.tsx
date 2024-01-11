import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { filter, sofa } from '../assets/utitily';

function ProductCard() {
  const [filteredArray, setFilteredArray] = useState<filter[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    window.scroll(0, 0);
    setFilteredArray(sofa);
    const uniqueCategories = Array.from(new Set(sofa.map(({ category }) => category)));
    setCategories(uniqueCategories);
  }, []);

  const handleCategoryFilter = (category: string) => {
    setFilteredArray(sofa.filter((item) => category === item.category));
  };

  return (
    <div className="px-5 lg:w-[80%] md:mx-auto bg-gray-100 pt-5">
      <div className="flex justify-center flex-wrap gap-3 text-xl font-semibold">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-3 py-2 hover:text-green-600 capitalize cursor-pointer"
            onClick={() => handleCategoryFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center mt-5">
        {filteredArray.map(({ image }, index) => (
          <Link to={`/productDetails/${index}`} key={index}>
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-40 h-40 md:w-48 md:h-48 rounded-md object-cover border-2 border-gray-200 m-2 hover:opacity-80 transition duration-300"
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
