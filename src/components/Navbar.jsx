import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cartlogo from "/src/assets/cartlogo.svg";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {




  return (
    <>
      <nav>
        <div
          className="bg-[#FFff] p-1.5 pl-3 flex items-center  justify-between
     gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-6 sm:bg-[#ffff] md:bg-[#feee00] lg:bg-[#feee00] xl:bg-[#feee00]"
        >
          {/* noon logo */}
          <Link to="/">
          <span>
            <img
              src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
              className="h-10 w-18 cursor-pointer sm:h-9 sm:w-18  md:h-10 md:w-19  lg:h-12 lg:w-20 "
              alt=""
            />
          </span>
          </Link>
          {/* location */}
          <div className="  hidden sm:hidden md:hidden lg:flex lg:items-center  text-sm font-[300] text-gray-600 gap-2 hover:opacity-70 cursor-pointer duration-300">
            <div>
              <img
                src="https://t4.ftcdn.net/jpg/08/85/03/45/360_F_885034550_FL2YBZA2jjLYjLznnHFwqrSPjIhmzDub.jpg"
                className="h-4 rounded opacity-100 "
                alt=""
              />
            </div>
            <div className="flex flex-col  items-start">
              <div className="font-normal text-sm">Delever</div>
              <div className="font-bold ">Dubai</div>
            </div>
          </div>
          {/* Search Bar */}

          <div className="">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-white rounded h-8.5 text-xs sm:text-sm ms:text:sm lg:text-sm xl:text-sm text-gray-600  w-50 sm:w-120 md:w-130 lg:w-185 xl:w-200 focus:outline-none p-3"
            />
          </div>

          {/* Language */}

          <div className="  items-center hidden lg:hidden md:hidden sm:hidden xl:block ">
            <div className=" flex items-center text-sm  text-gray-600 hover:opacity-70 duration-300 opacity-100 cursor-pointer">
              Language{" "}
              <span className=" m-2 text-gray-500 font-light border-l w-0 h-4 opacity-45 hidden sm:hidden md:hidden lg:block"></span>
            </div>
          </div>

          {/* Login */}

          <div className=" sm:block md:block lg:block">
            <div className="font-normal text-xs sm:text-sm ms:text:sm lg:text-sm xl:text-sm text-gray-600 flex items-center hover:opacity-70 duration-300 opacity-100 cursor-pointer">
            <Link to="/login">Login{" "}</Link>
                
              
              <span className="ml-1 hidden sm:hidden lg:hidden">
                <FontAwesomeIcon icon={faUser} />{" "}
              </span>
              <span className=" m-2 text-gray-500 opacity-45 font-light border-l h-5 hidden sm:hidden md:hidden lg:block xl:block"></span>
            </div>
          </div>

          {/* wish logo */}

          <div className="hover:opacity-70 duration-300 opacity-100">
            <FontAwesomeIcon className="opacity-60" icon={faHeart} />
          </div>

          {/* cartlogo */}
          <div className="hover:opacity-70 duration-300 opacity-100 cursor-pointer hidden sm:hidden md:block lg:block ">
            <img className="opacity-60 " src={Cartlogo} alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
