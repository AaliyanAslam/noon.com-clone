import React from 'react'
import Loginlogo from '/src/assets/loginlogo.png';
import Cartlogo from '/src/assets/cartlogo.png';
import Heartlogo from '/src/assets/heartlogo.png';


const Navbar = () => {
  return (
    <>
   <nav>
    <div className ="bg-[#feee00] p-1.5 pl-3 flex items-center  gap-4 sm:gap-3 md:gap-4 lg:gap-6">
      {/* noon logo */}
     <span><img src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" className='h-12 w-21 cursor-pointer' alt="" /></span>
     {/* location */}
     <div className='  hidden sm:hidden text-sm font-[300] text-gray-600 gap-2 hover:opacity-70 cursor-pointer duration-300'>
      <div><img src="https://t4.ftcdn.net/jpg/08/85/03/45/360_F_885034550_FL2YBZA2jjLYjLznnHFwqrSPjIhmzDub.jpg" className='h-4 rounded opacity-100 ' alt="" /></div>
      <div className='flex flex-col  items-start'>
      <div className='font-normal text-sm'>Delever to</div>
      <div className='font-bold '>Dubai</div>
      </div>
    </div>
    {/* Search Bar */}

    <div className=''>
      <input type="text" placeholder='What are you looking for?' className='bg-white rounded h-8.5 text-gray-600 text-sm w-50 sm:w-120 md:w-160 lg:w-185 xl:w-200 focus:outline-none p-3' />
    </div> 

    {/* Language */}

    <div className='  items-center hidden lg:block md:hidden sm:hidden '>
      <div className=' flex items-center text-sm  text-gray-600 hover:opacity-70 duration-300 opacity-100 cursor-pointer'>
        Language <span className=' m-2 text-gray-500 font-light border-l w-0 h-4 opacity-45 hidden sm:hidden md:hidden lg:block'>
          
          </span>
      </div> 
    </div>


{/* Login */}


<div className='hidden sm:hidden md:hidden lg:block '>
      <div className='font-normal text-sm text-gray-600 flex items-center hover:opacity-70 duration-300 opacity-100 cursor-pointer'>
        Login <span><img src={Loginlogo}  className='m-1 h-3.5' alt="" /></span><span className=' m-2 text-gray-500 opacity-45 font-light border-l h-5'>
          
          </span>
      </div> 
    </div>


{/* wish logo */}

<div className='hover:opacity-70 duration-300 opacity-100'>
  <img src={Heartlogo} alt=""  className=' cursor-pointer'/>
</div>

{/* cartlogo */}
<div className='hover:opacity-70 duration-300 opacity-100 cursor-pointer hidden sm:hidden md:block  '>
  <img src={Cartlogo} alt="" />
</div>

    </div>

    
   </nav>
    
    
    </>
  )
}

export default Navbar