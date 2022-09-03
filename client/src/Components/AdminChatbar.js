import React from 'react'
import avatar from '../Assets/avatar.png'
import {
  MapPinIcon,
  PhotoIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline'
import AdminChat from './AdminChat'

export default function AdminChatbar() {
  return (
    <div className=' h-screen'>
      {/* Person */}
      <div className=' p-10 flex '>
        <img src={avatar} className='w-[150px] rounded-full' alt='/' />
        <h1 className='w-full text-5xl ml-5 mt-11 font-bold'>SAMPLE NAME</h1>
      </div>

      {/* Chat */}
      <div className=''>
        {/* Chat area */}
        <div className='h-[1000px] '>
          <AdminChat />
        </div>

        {/* Input Box */}
        <div className='flex w-[750px] '>
          <i>
            <MapPinIcon className='w-10 m-2 text-primary active:text-secondary' />
          </i>
          <i>
            <PhotoIcon className='w-10 m-2 text-primary active:text-secondary' />
          </i>

          <div className=' m-2 w-full flex rounded-full border-2 border-primary text-center bg-white shadow-xl'>
            <input
              required
              type='text'
              className='w-full rounded-3xl pl-5'
              placeholder='Start Typing to search'
              id='email'
            />
            <PaperAirplaneIcon className='w-8 flex justify-between items-center text-primary m-2' />
          </div>
        </div>
      </div>
    </div>
  )
}
