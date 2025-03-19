import React from "react";
import LocationLogo from "../assets/LocationLogo.png";

const DeliveryLocationNav = () => {
  return (
    <>
      <nav className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden">
        <div className="flex gap-2 items-center text-xs p-2">
          <div>
            <img src={LocationLogo} className="h-5 w-5" alt="" />
          </div>
          <div className="font-light">
            Deliver to <span className="font-bold text-gray-600">Dubai</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DeliveryLocationNav;
