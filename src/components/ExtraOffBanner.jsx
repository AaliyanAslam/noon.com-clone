import React from "react";
import NewCarousel from "./NewCarousel";

const ExtraOffBanner = () => {
  return (
    <>
      <div className="bg-amber-100 grid gap-1.5 mt-1">
        <div className="">
          <img
            className="rounded cursor-pointer"
            src="https://f.nooncdn.com/mpcms/EN0001/assets/a6706a76-d65d-4781-aa66-fbcaa92affcc.png"
            alt=""
          />
        </div>
        <div className="carousel">
          <NewCarousel />
        </div>
      </div>
    </>
  );
};

export default ExtraOffBanner;
