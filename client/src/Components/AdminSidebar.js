import React from 'react'
import {
  EllipsisHorizontalIcon,
  HomeIcon,
  ChartBarSquareIcon,
  UserIcon,
  MapPinIcon,
  CogIcon,
} from '@heroicons/react/24/outline'

function AdminSidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary shadow-xl'>
      <div className=''>
        <i>
          <EllipsisHorizontalIcon className='p-2 text-gray-700 hover:text-white active:[#FF715B] focus:outline-none focus:ring focus:ring-[#FF715B] transition duration-150 ease-in-out' />
        </i>
        <i>
          <HomeIcon className='p-3 text-white hover:text-[#FF715B] active:[#FF715B] focus:outline-none focus:ring focus:ring-[#FF715B] transition duration-150 ease-in-out' />
        </i>
        <i>
          <MapPinIcon className='p-3 text-white hover:text-[#FF715B] active:[#FF715B] focus:outline-none focus:ring focus:ring-[#FF715B] transition duration-150 ease-in-out' />
        </i>
        <i>
          <ChartBarSquareIcon className='p-3 text-white hover:text-[#FF715B] active:[#FF715B] focus:outline-none focus:ring focus:ring-[#FF715B] transition duration-150 ease-in-out' />
        </i>
        <i>
          <UserIcon className='p-3 text-white hover:text-[#FF715B] active:[#FF715B] focus:outline-none focus:ring focus:ring-[#FF715B] transition duration-150 ease-in-out' />
        </i>
        <i>
          <CogIcon className='p-3 text-white hover:text-[#FF715B] active:[#FF715B] focus:outline-none focus:ring focus:ring-[#FF715B] transition duration-150 ease-in-out' />
        </i>
      </div>
    </div>
  )
}

export default AdminSidebar
