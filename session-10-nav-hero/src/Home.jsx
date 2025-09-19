import React from "react";
import Hero from "./Hero";
import Card from "./Card";
import './home.css'

function Home() {
  return (
    <>
      <Hero />
      <br />
      <div className="cardDiv">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Home;
