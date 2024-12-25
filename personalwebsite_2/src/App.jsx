import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import neuv from "./assets/neuv.png";
import About from "./About";
import Projects from "./Projects";
import Tools from "./Tools";
import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <BrowserRouter>
      <div class="bg-custom-blue h-screen">
        <div className="container text-center mx-auto text-stone-100 p-10">
         
          <Nav />
          <Routes>
            <Route path ="/" element={"If you're seeing this it means my app worked :) A test to see if it works even though it's already deployed"}/>
            <Route path = "/about" element={<About/>}/>
            <Route path = "/projects" element={<Projects/>}/>
            <Route path = "/tools" element={<Tools/>}/>
          </Routes>
          <Footer/>
        </div>
       
      </div>
      </BrowserRouter>
     
    </>
  );
}

export default App;
