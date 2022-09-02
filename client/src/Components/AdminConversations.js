import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function AdminConversations() {
  return (
    <div className='bg-purple-400 h-screen'>
      <div>
        {/* Title */}
        <h1 className='text-5xl font-bold px-20 pt-20 pb-14'>CONVERSATIONS</h1>

        {/* Search */}
        <div className='flex ml-20 p-2 rounded-md border-2 border-primary text-center bg-white w-4/6 shadow-xl'>
          <MagnifyingGlassIcon className='w-8 flex justify-between items-center text-primary' />
          <input
            required
            type='text'
            className='w-full p-3 ml-3 rounded-3xl pl-5'
            placeholder='Start Typring to search'
            id='email'
            onChange={e => console.log(e.target.value)}
          />
        </div>

        {/* Tabs */}
      </div>

      <div>Chats</div>
    </div>
  )
}
