import React, { useState, useEffect } from 'react'
import { filterHomeImages, filter } from '../assets/utitily'

const FilterImages: React.FC = () => {
    const [filterdArray, setFilteredArray] = useState<filter[]>([])

    useEffect(() => {
      setFilteredArray(filterHomeImages)
    }, [])

    return (
        <div>
            <span className='flex gap-3'>
                {/* Here is not dublicated catogory printed . and filter images to filtred Array */}
                {Array.from(new Set(filterHomeImages?.map(({ category }) => category))).slice().reverse().map((category, index) => (
                    <p
                        key={index}
                        className='px-3 py-2 hover:text-[#006e63] capitalize cursor-pointer'
                        onClick={() => setFilteredArray(filterHomeImages?.filter((item) => category === item.category))}
                    >
                        {category}
                    </p>
                ))}
            </span>
            <div className='flex flex-wrap gap-2'>
                {
                    filterdArray?.map(({ image }, index) => <div key={index}>
                        <img src={image} alt="filter-img" className='w-[100px] md:w-[200px]' />
                    </div>)
                }
            </div>

        </div>
    )
}

export default FilterImages