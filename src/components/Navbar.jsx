import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">ziad's chat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/16293663/pexels-photo-16293663/free-photo-of-easter-decor-with-eggs.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            <span>ziad</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar
