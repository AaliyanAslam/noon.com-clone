import React from 'react';

const MoreOnFashon = () => {
  const products = [
    {
      title: "HANA & SARA PURE VISCOSE WITH PRINTED AND EMBROIDERED LIGHT BROWN ABAYA",
      img: "https://f.nooncdn.com/p/pzsku/Z19D05AC73E0513B679D2Z/45/_/1691413961/b4b043ed-44f0-464a-8fed-771915b15f67.jpg?format=jpg&width=240",
      price: "80"
    },
    {
      title: "AL BENT AL SHARQIEH women kaftan, arabian dress, jalabiya",
      img: "https://f.nooncdn.com/p/pzsku/ZFECB0A926121FF08DE46Z/45/_/1740844382/9f5e4d8c-9eb2-4dc8-837f-c7ca7b5db70b.jpg?format=jpg&width=240",
      price: "199"
    },
    {
      title: "roaiss Women LUXURY GOLD Embroidered Robe Maxi Dresses Stylish Abaya Square",
      img: "https://f.nooncdn.com/p/pzsku/Z841FC5ED8C0E8D8BE6FAZ/45/_/1722567636/37c4c87b-03a4-41b8-8c85-64aa7c077670.jpg?format=jpg&width=240",
      price: "76.20"
    },
    {
      title: "HANA & SARA UNIQUE LONG PRINTED WITH STYLISH MULTICOLOUR THREAD ABAYA",
      img: "https://f.nooncdn.com/p/pzsku/Z500663E7FB1AE2AB593EZ/45/_/1739960835/62c9b4c6-19c5-4722-8f9d-4979e12e72a7.jpg?format=jpg&width=240",
      price: "69"
    },
    {
      title: "HANA & SARA PINK COLOUR WITH EMBROIDERED AND ARABIC JALABIYA",
      img: "https://f.nooncdn.com/p/pzsku/Z0935019B1D0DFE78F1F6Z/45/_/1691824159/0e5d6da7-9596-4dd2-af9a-f0eaf0668e38.jpg?format=jpg&width=240",
      price: "80"
    },
    {
      title: "Khizana Puff Sleeve Abaya With Sheila",
      img: "https://f.nooncdn.com/p/pzsku/ZF843AA01851CFFD9CE13Z/45/_/1742370762/77f72a78-d24a-4e92-8aa9-1cf7b0c0ca38.jpg?format=jpg&width=240",
      price: "145"
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

      <div className="container mx-auto px-4 py-6 ">

        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((item) => (
            <div 
              key={item.title} 
              className="w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  className="w-full h-44 sm:h-44 md:h-48 lg:h-48 xl:h-65   object-cover transform hover:scale-105 transition-transform duration-600" 
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

export default MoreOnFashon;





