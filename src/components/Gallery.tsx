import { sofa } from '../assets/utitily'
function Gallery() {
  return (
    <div>
      {/* {sofa?.map=(()=> <div>Gallery</div> )}
       */}
      {sofa?.map(({ image }, index) => <div>
        <img key={index} src={image} alt={image} />
      </div>)}
    </div>
  )
}

export default Gallery