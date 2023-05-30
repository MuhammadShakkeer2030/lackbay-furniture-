import { sofa } from '../assets/utitily'
function Gallery() {
  return (
    <div className='flex flex-wrap gap-2' >
      {/* {sofa?.map=(()=> <div>Gallery</div> )}
       */}
      {sofa?.map(({ image }, index) => <div>
        <img key={index} src={image} alt={image} className="w-[200px]" />
      </div>)}
    </div>
  )
}

export default Gallery