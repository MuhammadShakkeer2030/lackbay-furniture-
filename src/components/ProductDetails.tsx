import {  useEffect,FC} from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


interface DetilsProps {
  index : string
}


const ProductDetails:FC<DetilsProps>=()=> {
  const index = useParams<string>()
  // const history = useHistory()
  // console.log(history)

  useEffect(()=>{
window.scroll(0,0)
  },[index])

  return (
    <div className="bg-white text-black  py-8 px-4 sm:px-8 lg:px-16 xl:px-32">
      <div className="max-w-screen-lg mx-auto">
        {/* Product Image */}
        <img
          src={`https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png`}
          alt={``}
          className="w-full md:w-1/2 lg:w-1/3 mx-auto mb-8"
        />

        {/* Product Title */}
        <h1 className="text-3xl font-semibold mb-4">Product Title</h1>

        {/* Product Description */}
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          lorem nec ipsum congue faucibus.
        </p>

        {/* Enquiry Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md">
          Enquire Now
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
