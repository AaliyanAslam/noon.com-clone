import React from 'react';

const RanzanEssentials = () => {
  const essentialsImages = [
    "https://f.nooncdn.com/mpcms/EN0001/assets/a30c905a-4c97-488e-aeae-7f1b14b26732.png",
    "https://f.nooncdn.com/mpcms/EN0002/assets/e51a27f7-6528-4f45-b80c-51cd49a1e94a.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/55b1226c-0eb2-4caf-866d-c54b5e50a052.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/8d26aab4-cfff-4769-9091-ebc8fd7c39d7.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/7ca559bb-edae-4a13-b92c-f3c9bfc3756c.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/a1cf9227-c4f5-4e6e-9273-10779069e659.png",
    "https://f.nooncdn.com/mpcms/EN0001/assets/a4fb0365-e21f-4028-abd1-9e124995b02c.png",

  ];

  return (
    <div className="container mx-auto px-4 py-6 bg-amber-200 rounded">
      <div className="mb-5">
        <img 
          src="https://f.nooncdn.com/mpcms/EN0001/assets/17d29404-5361-45da-a39e-6bcdefbd8a1e.png" 
          alt="Ramzan Essentials Banner" 
          className="w-full  mx-auto"
        />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {essentialsImages.map((imgSrc, index) => (
          <div 
            key={index} 
            className="w-full cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={imgSrc} 
              alt={`Ramzan Essential ${index + 1}`} 
              className="h-auto w-auto "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RanzanEssentials;