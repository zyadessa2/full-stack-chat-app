import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from './context/ChatContext'


const Chat = () => {
  const {data} = useContext(ChatContext);
  const {display} = useContext(ChatContext)
  const {setDisplay} = useContext(ChatContext)
  const {sideDisplay} = useContext(ChatContext)
  const {setSideDisplay} = useContext(ChatContext)


  return (
    <div className={`chat ${display}`} >
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className={`chatIcons d-flex align-items-center`} onClick={()=>{
          setSideDisplay("d-block")
          setDisplay("d-none ")
        }}>
          {/* <i class="fa-solid fa-camera"></i>
          <i class="fa-solid fa-plus"></i> */}
          <span >Back</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
