import { About, Gallery } from "./components/About";
import Contact from "./components/contact";
import { Destructure, Students } from "./components/Destructure";
import { Services } from "./components/Services";
import React from "react";

const App = () => {
  return(
    <div>
      <h1>React App Page</h1>
      <About/>
      <Gallery/>
      <Contact name = "Shariq" email = "mschariquen@gmail.com" salary = "200"/>
      <Services servName = "I.T Based"/>
      <Destructure/>
      <Students/>
    </div>
  )
}

export default App;