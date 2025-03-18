import React from 'react'

const Navbar = () => {
  return (
    <>
   <nav>
    <div className ="bg-[#feee00] p-1.5 pl-3 flex items-center gap-4 ">
      {/* noon logo */}
     <span><img src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" className='h-12 w-21' alt="" /></span>
     {/* location */}
     <div className='flex  items-center text-sm font-[300] text-gray-600 gap-2 hover:opacity-70 cursor-pointer duration-300'>
      <div><img src="https://t4.ftcdn.net/jpg/08/85/03/45/360_F_885034550_FL2YBZA2jjLYjLznnHFwqrSPjIhmzDub.jpg" className='h-4 rounded opacity-100 ' alt="" /></div>
      <div className='flex flex-col  items-start'>
      <div className='font-normal'>Delever to</div>
      <div className='font-bold '>Dubai</div>
      </div>
    </div>
    {/* Search Bar */}

    <div>
      <input type="text" className='bg-white rounded h-8.5 text-gray-600 text-sm lg:w-190 md:w-120 sm:w-100 s:w-80 focus:outline-none p-3' />
    </div> 
    </div>

    
   </nav>
    
    
    </>
  )
}

export default Navbar