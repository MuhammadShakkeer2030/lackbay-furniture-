import React, { useState } from 'react';
import { sofa } from '../assets/utitily';

const ProductFilterSidebar = () => {
  const categories = Array.from(new Set(sofa.map((item) => item.category)));

  console.log(categories)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [priceRange, setPriceRange] = useState([0, 1500]); // Adjust the initial price range as needed
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceRangeChange = (event: { target: { min: string; max: string; }; }) => {
    setPriceRange([parseInt(event.target.min), parseInt(event.target.max)]);
  };

  const handleFilterChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedFilter(event.target.value);
    // You can apply filtering logic based on the selected filter here
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md xl:w-1/5">
      <h3 className="text-lg font-semibold mb-4">Product Filters</h3>

      {/* Category Filter */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Categories</h4>
        {categories.map((category, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={category}
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2"
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>

      {/* Price Range Slider */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Price Range</h4>
        <input
          type="range"
          min={0}
          max={1500}
          value={priceRange[0]}
          onChange={handlePriceRangeChange}
          className="w-full"
        />
        <div className="flex justify-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Filter Dropdown */}
      <div>
        <h4 className="text-sm font-semibold mb-2">Filter</h4>
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Filter</option>
          {/* Add options for different filters */}
          <option value="rating">Rating</option>
          <option value="availability">Availability</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
