import React, { useContext } from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
import { ChatContext } from './context/ChatContext'

const Sidebar = () => {
  const {sideDisplay} = useContext(ChatContext)

  return (
    <div className={`sidebar ${sideDisplay}`}>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar
