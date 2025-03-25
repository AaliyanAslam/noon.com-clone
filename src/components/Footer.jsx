import React from "react";

const Footer = () => {
  const FooterDetails = [
    {
      title: "Superior online shopping in the UAE",
      description:
        "As the leading destination for online shopping in the UAE, noon has everything you need under one roof. Whether you’re shopping for the latest electronic products, fashion, homeware, products for kids and babies, books and stationery, sports and health essentials, beauty products, or groceries, we have millions of products in the noon UAE store. As a customer-centric online store, we make it easier to buy online with flexible payment plans that help you save, along with regular sales across our extensive product range, gift cards, wishlists, our exclusive Mashreq VIP card, our easy-to-use shopping app, and so much more.",
    },
    {
      title: "Shop the best products & brands at noon UAE",
      description:
        "You’ll find a massive variety of products from top brands at noon UAE. Our electronics department has the latest mobile phones, along with tablets, mobile accessories, laptops, wearable technology such as smartwatches and other wearable devices, headphones (in-ear, wireless and noise-cancelling), audiovisual gear, a selection of cameras, televisions, video game consoles such as PC and Xbox controllers, and video games. We have products from Samsung, Xiaomi, Sony, HP, Dell, Huawei, Lenovo, Apple, and many other leading tech brands.",
    },
    {
      title: "Hassle-free UAE online shopping",
      description:
        "When you buy online at noon, you will always have peace of mind knowing that you are getting the best level of service. We take the hassle out of online shopping in Abu Dhabi and Dubai, with a number of features and flexible payment plans that make shopping simpler, faster, and better. Our Buy Now, Pay Later plans include Tabby, with orders split over 4 payments, and Tamara, with orders split over 3 payments. Both plans are interest-free. We accept credit cards and debit cards from Emirates NBD, FAB bank, Mashreq bank, ADCB, and ADIB, and cash on delivery. For even more convenience, we have a No-Cost EMI. We have a 15-day",
    },
  ];

  const categories = [
    {
      title: "ELECTRONICS",
      items: [
        "Mobiles", "Tablets", "Laptops", "Home Appliances", 
        "Camera, Photo & Video", "Televisions", "Headphones", "Video Games"
      ]
    },
    {
      title: "FASHION",
      items: [
        "Women's Fashion", "Men's Fashion", "Girls' Fashion", "Boys' Fashion",
        "Watches", "Jewellery", "Women's Handbags", "Men's Eyewear"
      ]
    },
    {
      title: "HOME AND KITCHEN",
      items: [
        "Bath", "Home Decor", "Kitchen & Dining", "Tools & Home Improvement",
        "Audio & Video", "Furniture", "Patio, Lawn & Garden", "Pet Supplies"
      ]
    },
    {
      title: "BEAUTY",
      items: [
        "Fragrance", "Make-Up", "Haircare", "Skincare",
        "Bath & Body", "Electronic Beauty Tools", "Men's Grooming", "Health Care Essentials"
      ]
    },
    {
      title: "BABY & TOYS",
      items: [
        "Diapering", "Baby Transport", "Nursing & Feeding", "Baby & Kids Fashion",
        "Baby & Toddler Toys", "Tricycles & Scooters", "Board Games & Cards", "Outdoor Play"
      ]
    },
    {
      title: "TOP BRANDS",
      items: ["Pampers", "Apple", "Nike", "Samsung", "Tefal", "L'Oréal Paris", "Skechers", "BLACK+DECKER"]
    },
    {
      title: "DISCOVER NOW",
      items: [
        "Noon Digest", "Brand Glossary", "Best Mobile Phones", "Supermall",
        "Trending Searches", "Ramadan Sale", "Macbook Pro", "Macbook Air", "IPL Live Streaming"
      ]
    }
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="footer-img">
          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/c1073d7b-2c8b-49aa-a551-d065094cbeb8.png"
            alt=""
          />
        </div>

        {FooterDetails.map((item) => {
          return (
            <div className="footer-details p-3" key={item.title}>
              <div>
                <h3 className="font-bold opacity-80">{item.title}</h3>
                <p className="text-xs opacity-60">{item.description}</p>
              </div>
            </div>
          );
        })}

        <nav className="bg-gray-200 rounded  opacity-80 p-5  flex justify-between">
          <div>
            <p className="text-xs">We're Always Here To Help</p> <br />{" "}
            <p className="text-xs opacity-65">
              Reach out to us through any of these support channels
            </p>
          </div>
          <div className="help-center flex items-start gap-2 sm:gap-2 ms:gap-3 lg:gap:4 ">
            <div >
            <p className="text-xs opacity-80">Help Center</p> 
            <p className="font-bold text-sm sm:text-sm md:text-base lg:text-lg">

            help.noon.com
            </p>
            </div>
           
          <div className="">
          <p className="text-xs opacity-80">Email Support</p> 
         <p  className="font-bold text-sm sm:text-sm md:text-base lg:text-lg"> care.noon.com</p>
          </div>
          </div>
        </nav>
        {/* links */}

        <div className="container mx-auto px-4 py-6 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {categories.map((category, index) => (
          <div key={index}>
            <span className="font-bold text-[16px] text-gray-900 mb-2 flex">{category.title}</span>
            <ul className="space-y-1 text-gray-700" >
              {category.items.map((item, idx) => (
                <li key={idx} className=" cursor-pointer text-xs">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>


{/* logos and down load nav */}
<div className="container mx-auto px-4 py-8 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="text-center md:text-left w-full md:w-1/2">
          <h3 className="font-bold text-lg text-gray-900 mb-3">SHOP ON THE GO</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 cursor-pointer">
            <img src="https://f.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="App Store" className="w-32 sm:w-36 h-auto" />
            <img src="https://f.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="Google Play" className="w-32 sm:w-36 h-auto" />
            <img src="https://f.nooncdn.com/s/app/com/noon/images/Huawei-icon.png" alt="App Gallery" className="w-32 sm:w-36 h-auto" />
          </div>
        </div>

        <div className="text-center md:text-right w-full md:w-1/2">
          <h3 className="font-bold text-lg text-gray-900 mb-3">CONNECT WITH US</h3>
          <div className="flex justify-center md:justify-end gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12  flex items-center justify-center rounded-full transition transform hover:scale-110">
              <img src="https://f.nooncdn.com/s/app/com/noon/images/social-media-footer-facebook.svg" alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12  flex items-center justify-center rounded-full transition transform hover:scale-110">
              <img src="https://f.nooncdn.com/s/app/com/noon/images/social-media-footer-linkedIn.svg" alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12  flex items-center justify-center rounded-full transition transform hover:scale-110">
              <img src="https://f.nooncdn.com/s/app/com/noon/images/social-media-footer-instagram.svg" alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12  flex items-center justify-center rounded-full transition transform hover:scale-110">
              <img src="https://f.nooncdn.com/s/app/com/noon/images/social-media-footer-twitter.svg" alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </div>
        </div>

      </div>
    </div>



      </div>
    </>
  );
};

export default Footer;
