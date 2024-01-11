import { useEffect } from 'react';
import { FilterImages } from '../components/paths'
import FilterSidebar from '../components/FilterSidebar';

const GalleryPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className='mt-10 flex'>
      <FilterSidebar />
      <FilterImages />
    </div>
  )
}

export default GalleryPage