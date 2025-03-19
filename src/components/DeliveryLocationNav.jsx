import React from 'react'
import LocationLogo from '/src/assets/Locationlogo.png';

const DeliveryLocationNav = () => {
  return (
    <>
    <nav><div className='flex gap-2 items-center text-sm'>
        <div><img src={LocationLogo} className='h-6 w-6' alt="" /></div>
        <div className='font-light'>Deliver to <span className='font-bold text-gray-600'>Dubai</span></div>
        </div></nav></>
  )
}

export default DeliveryLocationNav