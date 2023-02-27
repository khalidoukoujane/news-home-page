import React from 'react'
import logo from '../assets/logo.svg'
import bars from '../assets/icon-menu.svg'
import close from '../assets/icon-menu-close.svg'
import { useState } from "react";

function Header() {
  const [mobile, setMobile] = useState(false)
  function handleClick(){
    setMobile(prevmob =>!prevmob)
  }
  return (
  <div className="header-container">   
    <div className='header' >
      <img src={logo} alt="logo" className='header-logo' />
      <nav className='navbar'>
        <ul className={mobile? "nav-elements": "nav-elements  right"}>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
          <img src={mobile ? close:bars} alt="" onClick={handleClick}  id='mobile'/>
      </nav>

    </div>
  </div>
  )
}

export default Header
