/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useRef, useState } from "react";
import { BsGift } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow, GiStorkDelivery } from "react-icons/gi";
import FilterImages from "./FilterImages";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import RunningCounter from "./RunningCounter";
import { CoutnerData } from "../assets/utitily";
import ScrollingText from "./TextScrolling";


const Home: React.FC = () => {

  const [addInterSection,setaddInterSection] = useState(false)

  const RefObjects = {
    deliveryRef: useRef<HTMLDivElement>(null),
    aboutRef: useRef<HTMLDivElement>(null),
    counterRef: useRef<HTMLDivElement>(null),
    filterRef: useRef<HTMLDivElement>(null)
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  const handleIntersection = (entry: IntersectionObserverEntry, ref: React.RefObject<HTMLDivElement>) => {
    if (entry.isIntersecting) {
      console.log("isIntersecting", entry, ref)
      // ref.current?.classList.add("");
      // ref.current?.classList.add("opacity-100","translate-y-0");
      setaddInterSection(true)

    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: .5
    }

    const observer = new IntersectionObserver((entries) => {
      entries?.forEach((entry) => {
        if (entry.target === RefObjects.deliveryRef.current) {
          handleIntersection(entry, RefObjects.deliveryRef)
        }
      })
    }, options)

    if (RefObjects.deliveryRef.current) {
      observer.observe(RefObjects.deliveryRef.current)
    }

  }, [RefObjects.deliveryRef, RefObjects.aboutRef, RefObjects.counterRef, RefObjects.filterRef])

  return (
    <div className=" mt-5 md:mt-0">
      <ImageSlider />

      {/* Delivery : First Intersection point*/}

      <div ref={RefObjects?.deliveryRef} className={` text-center mt-20  md:mt-0 flex flex-wrap justify-between w-[100%] px-5 lg:w-[80%] md:mx-auto  gap-2 opacity-50 transition-all duration-500 transform translate-y-20 ${addInterSection && "opacity-100 translate-y-0"}`}>

        <div className="w-[200px] md:w-[350px] bg-[#f9f9f9] py-[5px] flex flex-col items-center justify-center  rounded-md border border-gray-200  bg-gradient-to-br from-white/90 to-slate-300">
          <GiStorkDelivery className="text-2xl text-[#006d63]" />
          <h1 className=" text-[20px] md:text-xl  font-semibold mb-4">
            Free Delivery & Shipping
          </h1>
          <p className="text-[15px] md:text-lg mb-8 ">
            For all orders over $200.
          </p>
        </div>

        <div className="w-[200px] md:w-[350px] bg-[#f9f9f9] py-[5px] flex flex-col items-center justify-center  rounded-md border border-gray-200  bg-gradient-to-br from-white/90 to-slate-300">
          <GiReturnArrow className="text-2xl text-[#006d63]" />
          <h1 className=" text-[20px] md:text-xl  font-semibold mb-4">
            Return Warranty
          </h1>
          <p className="text-[15px] md:text-lg mb-8 ">
            If you're not satisfied.
          </p>
        </div>
        <div className="w-[200px] md:w-[350px] bg-[#f9f9f9] py-[5px] flex flex-col items-center justify-center rounded-md border border-gray-200  bg-gradient-to-br from-white/90 to-slate-300">
          <BiSupport className="text-2xl text-[#006d63]" />
          <h1 className=" text-[20px] md:text-xl  font-semibold mb-4">
            24/7 Technical Support
          </h1>
          <p className="text-[15px] md:text-lg mb-8 ">
            Anytime & anywhere you're.
          </p>
        </div>

        <div className="w-[200px] md:w-[350px] bg-[#f9f9f9] py-[5px] flex flex-col items-center justify-center  rounded-md border border-gray-200  bg-gradient-to-br from-white/90 to-slate-300">
          <BsGift className="text-2xl text-[#006d63]" />
          <h1 className=" text-[20px] md:text-xl  font-semibold mb-4">
            Easy EMI
          </h1>
          <p className="text-[15px] md:text-lg mb-8 ">Easy EMI Available.</p>
        </div>
      </div>

      {/* // ABOUT */}
      <div ref={RefObjects?.aboutRef} className="text-justify w-[100%] px-5 lg:w-[80%] md:mx-auto  mt-16 flex  flex-col md:flex-row  gap-5 md:gap-4 opacity-50 transition-all duration-500 transform translateY-effect">
        <img
          className="w-full md:w-[500px] object-contain rounded-md"
          src="/img/about/lackbuy-about.png"
          alt="Lackbay_about_page"
        />
        <div className="w-full md:w-[70%]  border border-gray-200  bg-gradient-to-br from-white/90 to-slate-300 xl:p-4 rounded-md ">
          <h2 className="text-2xl font-bold mb-4 text-[#006e63] ">ABOUT</h2>
          <p className=" text-[14px] mb-8">
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
            <strong className="text-[#006e63] text-[14px] md:text-xl">
              VISION
            </strong>
            <br />
            Our vision is to manufacture and supply a range of unique, quality,
            and futuristic furniture that satisfies the needs and meets the
            expectations of customers.
          </p>

          <p className="text-[14px] mb-8">
            <strong className="text-[#006e63] text-[14px] md:text-xl">
              MISSION
            </strong>
            <br />
            Customer satisfaction is our major concern, and we always care about
            the value of their spending by making sure that the product meets
            international quality at every phase of its manufacturing procedures
            and delivery stages.
          </p>
        </div>
      </div>
<<<<<<< Updated upstream
      {/* OUR CATEGORIES */}
      <div className="w-[100%] px-5 lg:w-[80%] md:mx-auto md:mt-5">
        <h2 className="text-2xl font-semibold mb-4 ">Our Categories</h2>
        <div className="flex flex-wrap  lg:justify-between md:flex-row gap-4">
          <div className="w-[200px] lg:w-[400px] border rounded-lg p-4">
            <a href="#Product-sec">
              {" "}
              <img src="/images/single-1.png" alt="catogory-img-1" />
            </a>
            <h3 className="text-xl font-bold mb-2">Single Seat</h3>
            <p className="text-lg">item</p>
          </div>
          <div className="w-[200px] lg:w-[400px] border rounded-lg p-4">
            <a href="#Product-sec">
              <img src="/images/corner.png" alt="catogory-img-1" />
            </a>
            <h3 className="text-xl font-bold mb-2">Corner Sofa</h3>
            <p className="text-lg">item</p>
          </div>
          <div className="w-[200px] lg:w-[400px] border rounded-lg p-4">
            <a href="#Product-sec">
              <img src="/images/double-seat.png" alt="Double Seat" />
            </a>
            <h3 className="text-xl font-bold mb-2">Double Seat</h3>

            <p className="text-lg">item</p>
          </div>
        </div>
      </div>
=======

>>>>>>> Stashed changes
      {/* COUNTER ANIMATIONS */}
      <div ref={RefObjects?.counterRef} className="flex flex-col xl:flex-row justify-evenly my-5 xl:my-10 opacity-50 transition-all duration-500 transform translateY-effect">
        {CoutnerData?.map((item, index) =>
          <RunningCounter item={item} key={index} />
        )}
      </div>

      {/* FILTER IMAGES */}
<<<<<<< Updated upstream
      <FilterImages />
      <div className="w-[100%] px-5 lg:w-[80%] md:mx-auto  flex gap-5 flex-col md:flex-row mt-4">
        <Link to="/images/banner1.jpg">
          <img src="/images/banner1.jpg" alt="banner" />
        </Link>
        <a href="#">
          <img src="/images/banner2.jpg" alt="banner" />
        </a>
=======
      <div ref={RefObjects?.filterRef}>
        <FilterImages />
>>>>>>> Stashed changes
      </div>

      <div>
        <ScrollingText />
      </div>
    </div>
  );
};

export default Home;
