import React from 'react'
import Loginlogo from '/src/assets/loginlogo.png';
import Cartlogo from '/src/assets/cartlogo.png';
import Heartlogo from '/src/assets/heartlogo.png';


const Navbar = () => {
  return (
    <>
   <nav>
    <div className ="bg-[#feee00] p-1.5 pl-3 flex items-center justify-evenly gap-4 ">
      {/* noon logo */}
     <span><img src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" className='h-12 w-21 cursor-pointer' alt="" /></span>
     {/* location */}
     <div className='flex items-center text-sm font-[300] text-gray-600 gap-2 hover:opacity-70 cursor-pointer duration-300'>
      <div><img src="https://t4.ftcdn.net/jpg/08/85/03/45/360_F_885034550_FL2YBZA2jjLYjLznnHFwqrSPjIhmzDub.jpg" className='h-4 rounded opacity-100 ' alt="" /></div>
      <div className='flex flex-col  items-start'>
      <div className='font-normal'>Delever to</div>
      <div className='font-bold '>Dubai</div>
      </div>
    </div>
    {/* Search Bar */}

    <div className=''>
      <input type="text" placeholder='What are you looking for?' className='bg-white rounded h-8.5 text-gray-600 text-sm lg:w-190 md:w-120 sm:w-100 s:w-80 focus:outline-none p-3' />
    </div> 

    {/* Language */}

    <div className='flex lg:block md:hidden sm:hidden'>
      <div className='font-normal  text-gray-600 hover:opacity-70 duration-300 opacity-100 cursor-pointer'>
        Language <span className=' m-2 text-gray-500 font-light border-l w-10 opacity-45'>
          
          </span>
      </div> 
    </div>


{/* Login */}


<div className='flex items-center '>
      <div className='font-normal  text-gray-600 flex items-center hover:opacity-70 duration-300 opacity-100 cursor-pointer'>
        Login <span><img src={Loginlogo} className='m-1' alt="" /></span><span className=' m-2 text-gray-500 opacity-45 font-light border-l h-5'>
          
          </span>
      </div> 
    </div>


{/* wish logo */}

<div className='hover:opacity-70 duration-300 opacity-100'>
  <img src={Heartlogo} alt=""  className=' cursor-pointer'/>
</div>

{/* cartlogo */}
<div className='hover:opacity-70 duration-300 opacity-100 cursor-pointer'>
  <img src={Cartlogo} alt="" />
</div>

    </div>

    
   </nav>
    
    
    </>
  )
}

export default Navbar