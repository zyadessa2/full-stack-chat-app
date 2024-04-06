import React, { useContext } from 'react'
import { auth } from '../fireBase'
import { signOut } from 'firebase/auth'
import { AuthContext } from './context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
        <span className="logo">ziad's chat</span>
        <div className="user">
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar
