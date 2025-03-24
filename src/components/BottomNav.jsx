import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Cartlogo from '/src/assets/cartlogo.svg';
import MoonLogo from '/src/assets/MoonLogo.png'
import HomeLogo from '/src/assets/HomeLogo.png'
import CategoriesLogo from '/src/assets/CategoriesLogo.png'


const BottomNav = () => {
  return (
    <>
      <nav className="block   sm:block ms:block lg:hidden xl:hidden">
        <div className=" fixed bottom-0 w-full  z-1000">
          <ul className="flex justify-around bg-white p-2  ">
            <div className="flex flex-col justify-center items-center ">
            <img src={HomeLogo} className="h-5 w-5 opacity-80" alt="" />

              <li className="text-xs sm:text-sm md:text-base lg:hidden xl:hidden">Home</li>
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src={CategoriesLogo}  className="h-5 w-5 opacity-80"alt="" />

              <li className="text-xs sm:text-sm md:text-base lg:hidden xl:hidden">Categories</li>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={MoonLogo} className="h-5 w-5 opacity-80" alt="" />
              <li className="text-xs sm:text-sm md:text-base lg:hidden xl:hidden">Deals</li>
            </div>
           <div className="flex flex-col justify-center items-center">
           <FontAwesomeIcon className="opacity-80 h-5 w-5" icon ={faUser}/>
           <li className="text-xs sm:text-sm md:text-base lg:hidden xl:hidden">My Account</li>
            </div> 
            <div className="flex flex-col justify-center items-center">

            <img src={Cartlogo} className="h-5 opacity-80" alt="" />
            <li className="text-xs sm:text-sm md:text-base lg:hidden xl:hidden">Cart</li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default BottomNav;
