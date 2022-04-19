import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Service from "./component/Service";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Error from "./component/Error";
import "./App.css";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/" element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
