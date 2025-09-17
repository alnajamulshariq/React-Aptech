import { Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./Contact";

function App() {
  return (
    <>
    <Link to={"/"}>Home</Link> | <Link to={"/about"}>About</Link> | <Link to={"/contact"}>Contact
    </Link>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;