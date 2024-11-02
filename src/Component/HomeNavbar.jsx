import React from 'react'
import Logo from '../assets/Logo.png'
import "./HomeNavbar.css"

export default function HomeNavbar() {
  return (
    <div>
            <nav className="nav-bar">
        <div className="nav-bar-container">
            <a className="nav-bar-home" href="#">
            <img src={Logo} alt="Logo" width="30" height="24" className="nav-bar-logo"/>
            <p className="nav-bar-title">Moltres</p>
            </a>
        </div>
        <div className="nav-bar-content">
            <a href="">Home</a>
            <a href="">Education</a>
            <a href="">Contact</a>
            <a href="">Others</a>
        </div>
</nav>
    </div>
  )
}
