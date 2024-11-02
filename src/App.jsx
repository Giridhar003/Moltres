import { useState } from 'react'
import './App.css'
import HomeNavbar from './Component/HomeNavbar'
import Emergency from './Component/Emergency'
import Contact from './Component/Contact'

function App() {

  return (
    
       <div>
          <Emergency/>
          <HomeNavbar/>
          <Contact/>
       </div>
  )
}

export default App
