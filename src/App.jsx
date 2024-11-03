import { useState } from 'react'
import './App.css'
import HomeNavbar from './Component/HomeNavbar'
import Emergency from './Component/Emergency'
import Contact from './Component/Contact'
import ChatBot1 from './Component/chatBot'


function App() {

  return (
    
       <div>
          <Emergency/>
          <HomeNavbar/>
          <Contact/>
          <ChatBot1/>
       </div>
  )
}

export default App
