import { useState } from 'react'
import './App.css'
import HomeNavbar from './Component/HomeNavbar'
import Emergency from './Component/Emergency'
import Contact from './Component/Contact'
import ChatBot1 from './Component/chatBot'
import Education from './Component/Education'
import Body from './Component/Body'


function App() {

  return (
    
       <div>
          <Emergency/>
          <HomeNavbar/>
          <Body/>
          <Education/>
          <Contact/>
          <ChatBot1/>
       </div>
  )
}

export default App
