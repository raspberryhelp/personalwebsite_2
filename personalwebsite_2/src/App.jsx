import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import neuv from "./assets/neuv.png";
import About from "./About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div class="bg-custom-blue h-screen">
    <div className="container text-center mx-auto text-stone-100 p-10">
        If you're seeing this it means my app worked :)
      </div>
      <br />
      <About/>
    </div>
     
     
    </>
  );
}

export default App;
