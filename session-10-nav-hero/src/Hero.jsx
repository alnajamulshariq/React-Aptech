import React from 'react'
import './Hero.css'
import heroImage from './assets/hero-banner2.jpg'

function Hero() {
  return (
    <>
    <div className="hero">
        <img src={heroImage} alt="" />
    </div>
    </>
  )
}

export default Hero