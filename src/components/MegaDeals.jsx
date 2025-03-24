import React from "react";

const MegaDeals = () => {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
        {/* More Reasons to Shop */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-4 bg-amber-200 p-2 rounded-lg">
          <img
            src="https://f.nooncdn.com/mpcms/EN0002/assets/184ca7f5-53e5-4b7c-86a9-c5e861b7fbab.png"
            alt="More Reasons Banner"
            className="w-full h-auto"
          />
          <div className="grid grid-cols-2 items-center sm:grid-cols-2 gap-2 mt-2">
            <img
              src="https://f.nooncdn.com/p/pzsku/ZB5B4E87138503D23F313Z/45/_/1725131789/c879a173-43ca-4dd6-ad92-b004a6cd8232.jpg?width=240"
              alt="Featured Reason Product"
              className="w-full h-40 sm:h-36 md:h-40 lg:h-48 object-cover rounded-lg"
            />
            {[
              "https://f.nooncdn.com/mpcms/EN0001/assets/58148da9-50f1-49b4-939a-c9e9ffe4b756.png",
              "https://f.nooncdn.com/mpcms/EN0001/assets/8510520a-6a55-4871-8e30-00e624dc1218.png",
              "https://f.nooncdn.com/mpcms/EN0001/assets/abb6921f-7493-4427-889f-08f3a0e48f06.png",
            ].map((src, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                <img
                  src={src}
                  alt={`Reason ${index + 1}`}
                  className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mega Deals */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-4 bg-amber-200 p-2 rounded-lg">
          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/c28b8a63-e38b-4d80-916f-1a0bb79d57a3.png"
            alt="Mega Deals Banner"
            className="w-full h-auto"
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 mt-2">
            <img
              src="https://f.nooncdn.com/p/pzsku/ZB5B4E87138503D23F313Z/45/_/1725131789/c879a173-43ca-4dd6-ad92-b004a6cd8232.jpg?width=240"
              alt="Featured Deal Product"
              className="w-full h-40 sm:h-36 md:h-40 lg:h-48 object-cover rounded-lg"
            />
            {[
              "https://f.nooncdn.com/p/v1669040907/N38849954A_2.jpg?width=240",
              "https://f.nooncdn.com/p/pnsku/N70063303V/45/_/1739967032/46a55577-5243-4b22-b6a8-b70f512f64d6.jpg?width=240",
              "https://f.nooncdn.com/p/pzsku/Z1721D54042AD6DC47338Z/45/_/1698990673/ab1bc35d-afcf-42d3-a753-0e6e9abe04c5.jpg?width=240",
            ].map((src, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                <img
                  src={src}
                  alt={`Deal ${index + 1}`}
                  className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* In Focus */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-4 bg-amber-200 p-2 rounded-lg">
          <img
            src="https://f.nooncdn.com/mpcms/EN0002/assets/733bdc4a-5b38-459a-8b8d-79093afa0423.png"
            alt="In Focus Banner"
            className="w-full h-auto"
          />
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-2 mt-2">
            {[
              "https://f.nooncdn.com/ads/banner-410x410/en_dk_uae-top-01.1741152577.1838934.png",
              "https://f.nooncdn.com/ads/banner-410x410/en_dk_uae-top-01.1741855395.8406649.jpg",
            ].map((src, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                <img
                  src={src}
                  alt={`Focus ${index + 1}`}
                  className="w-full h-20 sm:h-24 md:h-28 lg:h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDeals;