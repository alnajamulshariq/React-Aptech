import React from 'react'
import './Card.css'
import cardImage from './assets/cardImage1.jpg'

function Card() {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={cardImage} alt="Card" />
      </div>
      <div className="cardCont">
        <h2 className="cardHeading">Card Heading</h2>
        <h4 className="cardSubtitle">Card Subtitle</h4>
        <p className="cardDesc">
          This is the description area. You can write a few lines about the content 
          of this card. It adjusts based on your text length.
        </p>
        <button className="cardBtn">Learn More</button>
      </div>
    </div>
  )
}

export default Card
