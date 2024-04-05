import React from 'react'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type somthing ...' />
      <div className="send">
        <i class="fa-solid fa-paperclip"></i>
        <input type="file" style={{display:"none"}} id='file'/>
        <label htmlFor="file">
        <i class="fa-solid fa-image"></i>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
