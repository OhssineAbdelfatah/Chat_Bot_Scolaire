
import React, { useState } from 'react'
import Button from './components/Button/Button'
import Chat from './components/Chat/Chat'
import Home from '../src/components/home'


function App() {
  const [show, setShow] = useState(false)

  const showBtn = () => {
    setShow(!show)
  }

  return (
    <>
     <Home/>
      <Button show={show} showBtn={showBtn} />
      { show && <Chat />  }
    </>
  )
}

export default App;