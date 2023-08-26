import React from "react";
import { BsGift } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { TbTruckDelivery} from 'react-icons/tb'
import FilterImages from "./FilterImages";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <div className="container ">
      <div className="text-center flex flex-wrap justify-evenly gap-2">
        <div className="border w-[250px] py-[10px] flex flex-col items-center justify-center ">
          <TbTruckDelivery className="text-3xl text-green-500" />
          <h1 className="text-xl  font-bold mb-4">Free Delivery & Shipping</h1>
          <p className="text-lg mb-8">For all orders over $200.</p>
        </div>
        <div className="border w-[250px] py-[10px] flex flex-col items-center justify-center ">
          <GiReturnArrow className="text-3xl text-[#f08649]" />
          <h1 className="text-xl  font-bold mb-4">Return Warranty</h1>
          <p className="text-lg mb-8">If you're not satisfied.</p>
        </div>
        <div className="border w-[250px] py-[10px] flex flex-col items-center justify-center">
          <BiSupport className="text-3xl text-[#006d63]" />
          <h1 className="text-xl  font-bold mb-4">24/7 Technical Support</h1>
          <p className="text-lg mb-8">Anytime & anywhere you're.</p>
        </div>

        <div className="border w-[250px] py-[10px] flex flex-col items-center justify-center ">
          <BsGift className="text-3xl text-[#006d63]" />
          <h1 className="text-xl  font-bold mb-4">Easy EMI</h1>
          <p className="text-lg mb-8">Easy EMI Available.</p>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap gap-5 md:gap-10">
        <img className="w-[500px] object-contain" src="/images/about5-768x803.jpg" alt="Lackbay_about_page" />
        <div className="md:w-[800px]">
          <h2 className="text-2xl font-bold mb-4 text-[#006e63] ">ABOUT</h2>
          <p className="text-[14px] mb-8">
            Lacbay is the brand name of Lacbay Ventures LLP. The Lacbay ventures
            are well-established International furniture segment providers in
            Kottakkal. Its world-quality brought it into a position of
            leadership within a very short period worldwide. It created
            high-profile machines by which the company made maximum perfection
            for the output. Innovation, commitment, and customer-focused service
            are the key aspects that helped Lacbay to achieve one of the best
            positions in the furniture sector. Lacbay furniture is the best
            manufacturing unit to create visionary unique furniture in
            -furniture segments with state-of-the-art updated technology in the
            industry by evolving the human endeavor in skills, procedures, and
            efforts to contribute to the promising value for the customer.
          </p>

          <p className="text-[14px] mb-8">
            <strong className="text-[#006e63]">VISION</strong>
            <br />
            Our vision is to manufacture and supply a range of unique, quality,
            and futuristic furniture that satisfies the needs and meets the
            expectations of customers.
          </p>

          <p className="text-[14px] mb-8">
            <strong className="text-[#006e63]">MISSION</strong>
            <br />
            Customer satisfaction is our major concern, and we always care about
            the value of their spending by making sure that the product meets
            international quality at every phase of its manufacturing procedures
            and delivery stages.
          </p>
        </div>
</div>
        <h2 className="text-2xl font-bold mb-4 text-[#006e63]">
          Our Categories
        </h2>
        <div className="flex flex-wrap justify-center flex-col md:flex-row gap-4">
          <div className="md:w-[200px] bg-gray-200 rounded-lg p-4">
            <img src="/images/single-1.png" alt="catogory-img-1" />

            <h3 className="text-xl font-bold mb-2">Single Seat</h3>
            <p className="text-lg">
             item
            </p>
          </div>
          <div className="md:w-[200px] bg-gray-200 rounded-lg p-4">
            <img src="/images/corner.png" alt="catogory-img-1" />
            <h3 className="text-xl font-bold mb-2">Corner Sofa</h3>
            <p className="text-lg">
             item
            </p>
          </div>
          <div className="md:w-[200px] bg-gray-200 rounded-lg p-4">
            <img src="/images/double-seat.png" alt="Double Seat"  />
            <h3 className="text-xl font-bold mb-2">Double Seat</h3>

            <p className="text-lg">
             item
            </p>
          </div>
        </div>
      {/* FILTER IMAGES */}
      <FilterImages />
      <div className="flex gap-5 flex-col md:flex-row mt-4">
        <Link to="/images/banner1.jpg">
          <img src="/images/banner1.jpg" alt="banner" />
        </Link>
        <a href="#">
          <img src="/images/banner2.jpg" alt="banner" />
        </a>
      </div>
    </div>
  );
};

export default Home;
