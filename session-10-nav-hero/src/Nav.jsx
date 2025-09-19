import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import './Nav.css'

function Nav() {
  return (
    <>
    <header>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>   
        </ul>
    </header>
    </>
  )
}

export default Nav