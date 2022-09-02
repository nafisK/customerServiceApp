import { React, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import AdminChatHistory from './AdminChatHistory'

export default function AdminConversations() {
  const CHAT = 'chat'
  const EMAIL = 'email'
  const SMS = 'sms'
  const ACTIVE_TAB = 'bg-secondary active:bg-primary text-white'
  const INACTIVE_TAB = 'hover:text-gray-900 hover:bg-gray-100 text-gray-700'

  // for showing chats
  const [chatOption, setchatOption] = useState(CHAT)

  // button colors - email on by default
  const [emailButtonColor, setemailButtonColor] = useState(ACTIVE_TAB)
  const [chatButtonColor, setchatButtonColor] = useState(INACTIVE_TAB)
  const [smsButtonColor, setsmsButtonColor] = useState(INACTIVE_TAB)

  // change color of button on click
  const onClickTabs = event => {
    if (event.target.id === EMAIL) {
      setchatOption(EMAIL)
      setemailButtonColor(ACTIVE_TAB)
      setchatButtonColor(INACTIVE_TAB)
      setsmsButtonColor(INACTIVE_TAB)
    } else if (event.target.id === CHAT) {
      setchatOption(CHAT)
      setemailButtonColor(INACTIVE_TAB)
      setchatButtonColor(ACTIVE_TAB)
      setsmsButtonColor(INACTIVE_TAB)
    } else if (event.target.id === SMS) {
      setchatOption(SMS)
      setemailButtonColor(INACTIVE_TAB)
      setchatButtonColor(INACTIVE_TAB)
      setsmsButtonColor(ACTIVE_TAB)
    } else {
      console.log('error')
    }
  }

  return (
    <div className='h-screen border-r-4 border-gray-300'>
      <div>
        {/* Title */}
        <h1 className='text-5xl font-bold px-20 pt-20 pb-14'>CONVERSATIONS</h1>

        {/* Search */}
        <div className='flex ml-20 mb-20 p-2 rounded-md border-2 border-primary text-center bg-white w-4/6 shadow-xl'>
          <MagnifyingGlassIcon className='w-8 flex justify-between items-center text-primary' />
          <input
            required
            type='text'
            className='w-full p-3 ml-3 rounded-3xl pl-5'
            placeholder='Start Typing to search'
            id='email'
          />
        </div>

        {/* Tabs */}
        <div className='flex justify-center my-14 '>
          <ul className='flex flex-wrap text-3xl font-small text-center '>
            <li className='mr-2'>
              <button
                className={`inline-block py-3 px-4 rounded-lg ${emailButtonColor} `}
                id={EMAIL}
                onClick={e => onClickTabs(e)}
              >
                Email
              </button>
            </li>
            <li className='mr-2'>
              <button
                className={`inline-block py-3 px-4 rounded-lg ${chatButtonColor} `}
                id={CHAT}
                onClick={e => onClickTabs(e)}
              >
                Chats
              </button>
            </li>
            <li className='mr-2'>
              <button
                className={`inline-block py-3 px-4 rounded-lg ${smsButtonColor} `}
                id={SMS}
                onClick={e => onClickTabs(e)}
              >
                SMS
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className='border-b-4 border-gray-300 my-10'></div>

      <div>{chatOption === EMAIL && <AdminChatHistory chatType={EMAIL} />}</div>
      <div>{chatOption === CHAT && <AdminChatHistory chatType={CHAT} />}</div>
      <div>{chatOption === SMS && <AdminChatHistory chatType={SMS} />}</div>
    </div>
  )
}
