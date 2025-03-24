import React from 'react';

const RecommendedForYou = () => {
  const products = [
    {
      title: "Samsung Galaxy S24 Ultra 5G Dual SIM Titanium Gray 12GB RAM 256GB - Middle East...",
      img: "https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=jpg&width=240",
      price: "2939"
    },
    {
      title: "Apple iPhone 16 Pro Max 256GB Desert Titanium 5G With FaceTime - Middle East...",
      img: "https://f.nooncdn.com/p/pnsku/N70105592V/45/_/1726043633/aa2f8393-ed30-467b-b456-c8b10fad6e8f.jpg?format=jpg&width=240",
      price: "4449"
    },
    {
      title: "Apple iPhone 16 Pro Max 256GB Desert Titanium 5G With FaceTime - International...",
      img: "https://f.nooncdn.com/p/pnsku/N70106183V/45/_/1726043631/3064c465-3457-42ef-a234-0b6382365281.jpg?format=jpg&width=240",
      price: "4449"
    },
    {
      title: "Apple iPad 2022 (10th Generation) 10.9-inch 64GB WiFi Blue - Middle East Version",
      img: "https://f.nooncdn.com/p/v1686137286/N53359914A_1.jpg?format=jpg&width=240",
      price: "1085"
    },
    {
      title: "Apple iPhone 15 Pro Max 256GB Natural Titanium 5G With FaceTime - Middle East...",
      img: "https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=jpg&width=240",
      price: "3997"
    },
    {
      title: "Samsung Galaxy S23 Ultra 5G Dual SIM Phantom Black 12GB RAM 256GB - Middle East...",
      img: "https://f.nooncdn.com/p/v1675009317/N53374783A_5.jpg?format=jpg&width=240",
      price: "2640"
    },
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-4">
        <img 
          src="https://f.nooncdn.com/mpcms/EN0001/assets/1e06a839-ba31-4d5d-8638-29fed7d86d47.png" 
          alt="Recommended for you banner" 
          className="w-full  "
        />
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((item) => (
            <div 
              key={item.title} 
              className="w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  className="w-full h-48 object-contain transform hover:scale-105 transition-transform duration-300" 
                  src={item.img} 
                  alt={item.title}
                />
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-sm font-medium line-clamp-2 mb-2">
                  {item.title}
                </p>
                <div className="flex items-baseline">
                  <span className="text-xs text-gray-600 mr-1">AED</span>
                  <span className="text-lg font-bold text-gray-900">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedForYou;