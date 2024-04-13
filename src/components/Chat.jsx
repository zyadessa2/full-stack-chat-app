import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from './context/ChatContext'
const Chat = () => {
  const {data} = useContext(ChatContext);


  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <i class="fa-solid fa-camera"></i>
          <i class="fa-solid fa-plus"></i>
          <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
