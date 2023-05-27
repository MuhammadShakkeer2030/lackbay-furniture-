import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">CONTACT INFO</h4>
            <p className="text-sm">LACBAY VENTUERS LLP</p>
            <p className="text-sm">
              X1 / 279/U, Near Al Huda School, Vattapparamb - Chappanangadi,
              Malappuram-Dist, Kerala - 676503
            </p>
            <p className="text-sm">
              (+91) 974 519 9922 / (+91) 9745 2 99922
            </p>
            <p className="text-sm">info@lacbayfurniture.com</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">USEFUL LINKS</h4>
            <ul className="text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">CATEGORIES</h4>
            <ul className="text-sm">
              <li>Corner Sofa</li>
              <li>Double Seat</li>
              <li>Single Seat</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">
            Copyright © 2023 Lacbay Furniture.
            <br />
            Designed by Empire Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
