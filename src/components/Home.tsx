import { useEffect, useRef } from "react";
import { BsGift } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow, GiStorkDelivery } from "react-icons/gi";
import FilterImages from "./FilterImages";
import ImageSlider from "./ImageSlider";
import RunningCounter from "./RunningCounter";
import { CoutnerData } from "../assets/utitily";
import ScrollingText from "./TextScrolling";


const Home: React.FC = () => {

  const RefObjects = {
    deliveryRef: useRef<HTMLDivElement>(null)
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }



    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
        }
      });
    }, options);

    if (RefObjects.deliveryRef.current) {
      observer.observe(RefObjects.deliveryRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [RefObjects.deliveryRef])




  return (
    <div className=" mt-5 md:mt-0">
      <ImageSlider />

      {/* Delivery : First Intersection point*/}

      <div ref={RefObjects?.deliveryRef} className=" text-center mt-20  md:mt-0 flex flex-wrap justify-between w-[100%] px-5 lg:w-[80%] md:mx-auto  gap-2">

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
      <div className="text-justify w-[100%] px-5 lg:w-[80%] md:mx-auto  mt-16 flex  flex-col md:flex-row  gap-5 md:gap-4">
        <img
          className="w-full md:w-[500px] object-contain xl:object-cover rounded-md"
          src="/img/about/lackbuy-about.png"
          alt="Lackbay_about_page"
        />
        <div className="w-full md:w-[70%]  border-2 border-gray-200  bg-gradient-to-br from-white/90 to-slate-300 px-2 xl:px-4 rounded-md ">
          <h2 className="text-2xl font-bold mb-4 text-[#006e63] ">ABOUT</h2>
          <p className=" text-[14px] mb-8 xl:text-sm">
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

          <div className="text-[14px] mb-8 xl:text-sm">
            <strong className="text-[#006e63] text-[14px] md:text-xl">
              VISION
            </strong>
            <p className="" />
            Our vision is to manufacture and supply a range of unique, quality,
            and futuristic furniture that satisfies the needs and meets the
            expectations of customers.
          </div>

          <p className="text-[14px] mb-8 xl:text-sm">
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
      {/* COUNTER ANIMATIONS */}
      <div className="flex flex-col xl:flex-row justify-evenly my-5 xl:my-10">
        {CoutnerData?.map((item) =>
          <RunningCounter item={item} />
        )}
      </div>

      {/* FILTER IMAGES */}
      <FilterImages />
      {/* <div className="w-[100%] px-5 lg:w-[80%] md:mx-auto  flex gap-5 flex-col md:flex-row mt-4">
        <Link to="/images/banner1.jpg">
          <img src="/images/banner1.jpg" alt="banner" />
        </Link>
        <a href="#">
          <img src="/images/banner2.jpg" alt="banner" />
        </a>
      </div> */}

      <ScrollingText />
    </div>
  );
};

export default Home;
