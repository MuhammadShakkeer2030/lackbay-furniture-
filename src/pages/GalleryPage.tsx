import { useEffect } from 'react';
import {FilterImages} from '../components/paths'

const GalleryPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className='mt-10'>
      <FilterImages/>
    </div>
  )
}

export default GalleryPage