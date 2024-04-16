import React, { useContext, useEffect, useState } from 'react'
import  Message  from './Message'
import { ChatContext } from './context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../fireBase';
const Messages = () => {
  const {data} = useContext(ChatContext);
  const [messages , setmessages] = useState([]);
  useEffect(() => {
    const unSub = onSnapshot(doc(db , "chats" , data.chatId), (doc)=>{
      doc.exists() && setmessages(doc.data().messages)
    })
  
    return () => {
      unSub()
    }
  }, [data.chatId])
  

  return (
    <div className='messages'>
      {messages.map((m)=>(
        <Message message={m} key={m.id}/>
      ))}
    </div>
  )
}

export default Messages
