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
      <nav className="md">
        <div className="fixed bottom-0 w-full  ">
          <ul className="flex items-center justify-between ">
            <div className="flex flex-col justify-center items-center">
            <img src={HomeLogo} className="h-6 w-6" alt="" />

              <li className="text-xs sm:text-sm md:text-base lg:hidden xl:hidden">Home</li>
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src={CategoriesLogo}  className="h-6 w-6"alt="" />

              <li className="text-xs sm:text-sm md:text-base lg:hidden xl:hidden">Categories</li>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={MoonLogo} className="h-6 w-6" alt="" />
              <li className="text-xs sm:text-sm md:text-base lg:hidden xl:hidden">Deals</li>
            </div>
           <div className="flex flex-col justify-center items-center">
           <FontAwesomeIcon icon ={faUser}/>
           <li className="text-xs sm:text-sm md:text-base lg:hidden xl:hidden">My Account</li>
            </div> 
            <div className="flex flex-col justify-center items-center">

            <img src={Cartlogo} className="h-5" alt="" />
            <li className="text-xs sm:text-sm md:text-base lg:hidden xl:hidden">Cart</li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default BottomNav;
