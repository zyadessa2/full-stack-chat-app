import React, { useContext, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import {db} from '../fireBase'
import { AuthContext } from './context/AuthContext';
import { ChatContext } from './context/ChatContext';

const Search = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)
  const {currentUser} = useContext(AuthContext)

  const {display} = useContext(ChatContext)
  const {setDisplay} = useContext(ChatContext)
  const {sideDisplay} = useContext(ChatContext)
  const {setSideDisplay} = useContext(ChatContext)

  const handleSearch =async()=>{
    const q =query(
      collection(db , "users"),
      where("displayName" , "==" , username)
    );

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      setUser(doc.data())
    });
    }catch(err){setErr(true)}
    
  }

  const handleKey =(e)=>{
    handleSearch()
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async ()=>{
    // check weather the group(chats in fire store) exist ,if not create
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try{
      const res = await getDoc(doc(db , "chats" , combinedId))
      if(!res.exists()){
        //create a chat in chats collectons
        await setDoc(doc(db,"chats" , combinedId), {messages:[]})
      
      //create user chats
      await updateDoc(doc(db ,"userChats" , currentUser.uid),{
        [combinedId+".userInfo"]:{
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        },
        [combinedId+".date"]: serverTimestamp()
      })

      await updateDoc(doc(db ,"userChats" , user.uid),{
        [combinedId+".userInfo"]:{
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL
        },
        [combinedId+".date"]: serverTimestamp()
      })

      }
    }catch(err){}
    setUser(null)
    setUsername('')
    setDisplay("d-block")
    setSideDisplay("d-none")
  }

  return (
    <div className='search'>
      <div className="searchForm d-flex align-items-center justify-content-center">
        <input type="text" value={username} onKeyDown={handleSearch}  onChange={e => {setUsername(e.target.value);}} placeholder='search for users'/>
        <i class="fa-solid fa-magnifying-glass text-white searchIcon" onClick={handleKey}></i>
      </div>
      {err && <span>user not found</span>}

      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search
