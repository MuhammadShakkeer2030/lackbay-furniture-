import React from "react";
import { BsGift } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow, GiStorkDelivery } from "react-icons/gi";
import FilterImages from "./FilterImages";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const Home: React.FC = () => (
  <div className="mt-[200px] md:mt-0">
    <ImageSlider />
    <div className="text-center mt-[240px] md:mt-0 flex flex-wrap justify-evenly w-[100%] px-5 lg:w-[80%] md:mx-auto  gap-2">
      <div className="border w-[200px] md:w-[350px] bg-[#f9f9f9] py-[5px] flex flex-col items-center justify-center ">
        <GiStorkDelivery className="text-2xl text-[#006d63]" />
        <h1 className=" text-[20px] md:text-xl  font-semibold mb-4">
          Free Delivery & Shipping
        </h1>
        <p className="text-[15px] md:text-lg mb-8 ">
          For all orders over $200.
        </p>
      </div>
      <div className="border w-[200px] md:w-[350px] bg-[#f9f9f9] py-[5px] flex flex-col items-center justify-center ">
        <GiReturnArrow className="text-2xl text-[#006d63]" />
        <h1 className=" text-[20px] md:text-xl  font-semibold mb-4">
          Return Warranty
        </h1>
        <p className="text-[15px] md:text-lg mb-8 ">If you're not satisfied.</p>
      </div>
      <div className="border w-[200px] md:w-[350px] bg-[#f9f9f9] py-[5px] flex flex-col items-center justify-center">
        <BiSupport className="text-2xl text-[#006d63]" />
        <h1 className=" text-[20px] md:text-xl  font-semibold mb-4">
          24/7 Technical Support
        </h1>
        <p className="text-[15px] md:text-lg mb-8 ">
          Anytime & anywhere you're.
        </p>
      </div>

      <div className="border w-[200px] md:w-[350px] bg-[#f9f9f9] py-[5px] flex flex-col items-center justify-center ">
        <BsGift className="text-2xl text-[#006d63]" />
        <h1 className=" text-[20px] md:text-xl  font-semibold mb-4">
          Easy EMI
        </h1>
        <p className="text-[15px] md:text-lg mb-8 ">Easy EMI Available.</p>
      </div>
    </div>

{/* // ABOUT */}
    <div className="text-justify w-[100%] px-5 lg:w-[80%] md:mx-auto  mt-16 flex  flex-col md:flex-row  gap-5 md:gap-4">
      <img
        className="w-full md:w-[500px] object-contain"
        src="/images/about5-768x803.jpg"
        alt="Lackbay_about_page"
      />
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-[#006e63] ">ABOUT</h2>
        <p className="text-[14px] mb-8">
          Lacbay is the brand name of Lacbay Ventures LLP. The Lacbay ventures
          are well-established International furniture segment providers in
          Kottakkal. Its world-quality brought it into a position of leadership
          within a very short period worldwide. It created high-profile machines
          by which the company made maximum perfection for the output.
          Innovation, commitment, and customer-focused service are the key
          aspects that helped Lacbay to achieve one of the best positions in the
          furniture sector. Lacbay furniture is the best manufacturing unit to
          create visionary unique furniture in -furniture segments with
          state-of-the-art updated technology in the industry by evolving the
          human endeavor in skills, procedures, and efforts to contribute to the
          promising value for the customer.
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
    {/* OUR CATEGORIES */}
    <div className="w-[100%] px-5 lg:w-[80%] md:mx-auto md:mt-5">
      <h2 className="text-2xl font-semibold mb-4 ">Our Categories</h2>
      <div className="flex flex-wrap  lg:justify-between md:flex-row gap-4">
        <div className="w-[200px] lg:w-[400px] border rounded-lg p-4">
          <img src="/images/single-1.png" alt="catogory-img-1" />

          <h3 className="text-xl font-bold mb-2">Single Seat</h3>
          <p className="text-lg">item</p>
        </div>
        <div className="w-[200px] lg:w-[400px] border rounded-lg p-4">
          <img src="/images/corner.png" alt="catogory-img-1" />
          <h3 className="text-xl font-bold mb-2">Corner Sofa</h3>
          <p className="text-lg">item</p>
        </div>
        <div className="w-[200px] lg:w-[400px] border rounded-lg p-4">
          <img src="/images/double-seat.png" alt="Double Seat" />
          <h3 className="text-xl font-bold mb-2">Double Seat</h3>

          <p className="text-lg">item</p>
        </div>
      </div>
    </div>
    {/* FILTER IMAGES */}
    <FilterImages />
    <div className="w-[100%] px-5 lg:w-[80%] md:mx-auto  flex gap-5 flex-col md:flex-row mt-4">
      <Link to="/images/banner1.jpg">
        <img src="/images/banner1.jpg" alt="banner" />
      </Link>
      <a href="#">
        <img src="/images/banner2.jpg" alt="banner" />
      </a>
    </div>
  </div>
);

export default Home;
