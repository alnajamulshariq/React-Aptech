import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';

function App() {
  return (
  <>
  <Nav/>
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </>
  );
}

export default App