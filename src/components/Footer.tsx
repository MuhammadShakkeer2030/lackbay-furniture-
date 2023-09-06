import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../assets/utitily';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col text-justify md:py-[20px] md:flex-row justify-between">
          <div className="mb-4 w-auto md:w-[400px] md:mb-0">
            <h4 className="text-[20px] font-semibold text-[#006e63]">CONTACT INFO</h4>
            <p className="text-sm text-[#888]">LACBAY VENTUERS LLP</p>
            <p className="text-sm text-[#888]">
              X1 / 279/U, Near Al Huda School, Vattapparamb - Chappanangadi,
              Malappuram-Dist, Kerala - 676503
            </p>
            <p className="text-sm text-[#006e63]">
              (+91) 974 519 9922 / (+91) 9745 2 99922
            </p>
            <p className="text-sm text-[#006e63]">info@lacbayfurniture.com</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-[20px] font-semibold">USEFUL LINKS</h4>
            <ul className="text-[15px]">
              {menuItems?.map(({ link, title }, index) => <li key={index}>
                <Link
                  to={link}
                  className="text-[#888] hover:underline hover:text-[#006e63]"
                >
                  {title}
                </Link>
              </li>)}



            </ul>
          </div>
          <div className='mb-5'>
            <h4 className="text-[20px] font-semibold text-[#006e63]">CATEGORIES</h4>
            <ul className="text-[15px] text-[#888]">
              <li>Corner Sofa</li>
              <li>Double Seat</li>
              <li>Single Seat</li>
            </ul>
          </div>
        </div>
        {/* map */}
        <div className="w-full h-[400px]" >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15665.778556571468!2d76.075373!3d11.005228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b52162a685c5%3A0x3622faa073250d71!2sLacbay%20Furniture!5e0!3m2!1sen!2sin!4v1685351727283!5m2!1sen!2sin"
            title="Google Maps"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* end map */}
        <div className="mt-8 text-center">
        <p className='text-sm'>Copyright © 2023 Lacbay Furniture. <span className="text-[#006e63]"> Designed by Empire Technologies</span> Allrights are reserved. </p>
        </div>

        

      </div>
    </footer>
  );
};

export default Footer;
