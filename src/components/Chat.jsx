import React from 'react'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>ziad</span>
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
