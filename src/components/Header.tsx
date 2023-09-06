import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { menuItems } from "../assets/utitily";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <header className="">
      <div className="text-[14px] md:text-xl w-[100%] pt-5 pl-2 lg:pl-0 lg:w-[80%] md:mx-auto">
        Need help?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Contact Us.
        </a>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div className="header-logo">
          <Link to={"/"} >
            <img
              className="header-logo-img"
              src="https://lacbayfurniture.com/wp-content/uploads/2023/01/lacbay-logo.png"
              width="100"
              height="100"
              alt="LACBAY FURNITURE"
            />
          </Link>
        </div>

        {/* Search Box */}
        <div className="flex items-center border w-[200px] h-[50px] md:w-[500px] relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 mr-2 w-[inherit] bg-transparent focus:outline-none focus:ring focus:border-blue-400"
          />
          <button className="bg-[#006d63] text-white px-3 py-2  focus:outline-none focus:ring focus:bg-blue-700 absolute right-0">
            <AiOutlineSearch />
          </button>
        </div>
      </div>

      <nav className={`flex mt-5 md:mt-20 md:pl-[120px] bg-[#006d63]  ${isMenuOpen ? "h-auto" : "h-[60px]"}  items-center justify-between p-5`}>
        <div>{/* <img src="/images/2023/01/logo.jpg" alt="" /> */}</div>
        <div className="flex  w-full flex-row-reverse jus-start relative items-center z-20 ">
          <button
            className="p-2 mr-2 text-gray-400 rounded hover:text-white hover:bg-gray-700/20 absolute  right-0 -top-[20px] md:relative z-20  focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-4`}
          >
            {menuItems?.map(({ link, title }) => (
              <li key={link} onClick={() => setIsMenuOpen(false)}>
                <Link
                  to={link}
                  className="block px-2 py-1 text-sm font-semibold text-gray-300 hover:text-white"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
