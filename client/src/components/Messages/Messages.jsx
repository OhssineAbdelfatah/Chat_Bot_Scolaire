import React, { useEffect, useRef, useState } from 'react'
import Message from './../Message/Message'
import { CSSTransition, TransitionGroup } from 'react-transition-group'  ; 
import './style.css';

const Messages = ({ messages }) => {

  return (
      <div  className="messages-end" >
        <TransitionGroup className="messages">
              {messages.map((message, i) => (
                <CSSTransition timeout={500} classNames="item" key={i}>
                  <Message  message={message} />
                </CSSTransition>
              ))}
            </TransitionGroup>
      </div>
  )
}

export default Messages;