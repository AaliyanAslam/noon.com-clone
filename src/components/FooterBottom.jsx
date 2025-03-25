import React from 'react'

const FooterBottom = () => {
  return (
    <>
     <div className="bg-gray-100 py-7 mb-17 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
        
        <div className="text-center md:text-left w-full md:w-2/3">
          <p className="mb-2 md:mb-0">&copy; 2025 noon. All Rights Reserved</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs">
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Warranty Policy</a>
            <a href="#" className="hover:underline">Sell with us</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Terms of Sale</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Consumer Rights</a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-2 w-full md:w-1/3 mt-4 md:mt-0">
          <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mastercard.svg" alt="MasterCard" className="h-6 w-auto" />
          <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-visa.svg" alt="Visa" className="h-6 w-auto" />
          <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tabby_v2.svg" alt="Tabby" className="h-6 w-auto" />
          <img src="http://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tamara-en.svg" alt="Tamara" className="h-6 w-auto" />
          <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-amex.svg" alt="American Express" className="h-6 w-auto" />
          <img src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/cod-en.svg" alt="Cash" className="h-6 w-auto" />
        </div>

      </div>
    </div>
    

    
    
    </>
  )
}

export default FooterBottom