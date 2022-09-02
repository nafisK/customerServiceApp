import React from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import AdminConversations from '../Components/AdminConversations'
import AdminChatbar from '../Components/AdminChatbar'

function Admin() {
  return (
    <div className='flex'>
      <AdminSidebar />
      <div className='ml-16 '>
        <div className='flex flex-row w-screen'>
          <div className='basis-2/6 '>
            <AdminConversations />
          </div>
          <div className='basis-2/3 '>
            <AdminChatbar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
