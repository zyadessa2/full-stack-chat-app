import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='search for users'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/16293663/pexels-photo-16293663/free-photo-of-easter-decor-with-eggs.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>ziad</span>
        </div>
      </div>
    </div>
  )
}

export default Search
