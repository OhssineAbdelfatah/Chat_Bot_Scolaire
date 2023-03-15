import React, { useEffect } from 'react'
import './style.css';

const Message = ({ message}) => {

 
  return (
    <>
      { message.isBot ? (
        <div className=" row bot">
          <div className='col-1 px-1'>
          <i class="fa-solid fa-robot"></i>
          </div>
          <div className=" col bot_msg">
            <span className="">
              {message.text}
              <p dangerouslySetInnerHTML={{ __html: message.codeHtml }}></p>
            </span>
          </div>
        </div>
      ) : (
        <div className="row user ">
          <div className="col user_msg">
             <span className="">{message.text}</span>
          </div>
          <div className="col-1">
          <i className="fas fa-user" />
          </div>
        </div>
      )}
    </>
  )
}

export default Message