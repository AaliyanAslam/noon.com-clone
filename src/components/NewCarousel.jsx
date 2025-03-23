import React, { useState, useEffect } from "react";

const NewCarousel = () => {
  const images = [
    {
      src: "https://f.nooncdn.com/mpcms/EN0001/assets/bb4beb98-9e1a-432a-8725-f74ed858338a.gif",
      alt: "Slide 1",
      text: "50% OFF OR MORE",
      subText: "SHIRTS, POLOS & MORE",
    },
    {
      src: "https://f.nooncdn.com/mpcms/EN0002/assets/791df72e-ab1b-4b85-9bc7-5d03e623e757.png",
      alt: "Slide 2",
      text: "TOP FASHION DEALS",
      subText: "FROM 11 AED",
    },
    {
      src: "https://f.nooncdn.com/ads/banner-1008x1008/Hero_Banner_Homepage_1008x210_EN.1742382680.1384296.jpg",
      alt: "Slide 3",
      text: "50% OFF OR MORE",
      subText: "SHIRTS, POLOS & MORE",
    },
    {
      src: "https://f.nooncdn.com/ads/banner-1008x1008/1008x210.1742365492.1373084.png",
      alt: "Slide 4",
      text: "TOP FASHION DEALS",
      subText: "FROM 11 AED",
    },
    {
      src: "https://f.nooncdn.com/ads/banner-1008x1008/en_dk_uae-hero-01%20%E2%80%93%203%20(3).1742210946.010513.png",
      alt: "Slide 5",
      text: "50% OFF OR MORE",
      subText: "SHIRTS, POLOS & MORE",
    },
    {
      src: "https://f.nooncdn.com/ads/banner-1008x1008/en_dk_uae-hero-01-HP%20(3).1742550765.781159.png",
      alt: "Slide 5",
      text: "50% OFF OR MORE",
      subText: "SHIRTS, POLOS & MORE",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="grid grid-cols-8 gap-0 max-w-[1280px]  ">
        <div className="relative w-full overflow-hidden col-span-8 sm:col-span-6 cursor-pointer">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full rounded h-[200px] relative bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h2 className="text-4xl font-bold">{image.text}</h2>
                  <p className="text-lg mt-2">{image.subText}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg"
          >
            →
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="col-span-2 hidden sm:block md:flex lg:flex xl:flex cursor-pointer">
          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/12d3e1cf-7458-4783-aae2-604ae8126d54.png"
            className="w-full h-[200px] object-cover"
            alt="Side Banner"
          />
          <img className="w-full h-[200px] object-cover" src="https://f.nooncdn.com/mpcms/EN0001/assets/8d89fcb2-68e0-4fa7-83a7-11fba284094e.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default NewCarousel;
