import React from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import AdminConversations from '../Components/AdminConversations'
import AdminChatbar from '../Components/AdminChatbar'

function Admin() {
  return (
    <div className='flex'>
      <AdminSidebar />
      <div className='ml-16 '>
        <div class='flex flex-row w-screen'>
          <div class='basis-2/6 '>
            <AdminConversations />
          </div>
          <div class='basis-2/3 '>{/* <AdminChatbar /> */}</div>
        </div>
      </div>
      {/* <div className='bg-red-500 left-16 w-screen h-screen'>HEREREREREERE</div> */}
    </div>
  )
}

export default Admin
